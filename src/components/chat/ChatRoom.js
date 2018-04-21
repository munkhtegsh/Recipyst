import React, { Component } from 'react';
import io from 'socket.io-client';
import Chat from '../chat/ChatRoom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const socket = io();

class ChatRoom extends Component {
  constructor() {
    super();
    this.state = {
      chat: [],
      text: ''
    }

    socket.on('generate response', data => {
      const chat = [...this.state.chat, data]; 
      // console.log(data)
      this.setState({ chat })

    })
  }

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }
  
  componentDidMount() {
    this.scrollToBottom();
  }
  
  componentDidUpdate() {
    this.scrollToBottom();
  }

  sendMessage = (message, type) => {
    // console.log('message', message);
    socket.emit(`${type} message` , message)
    this.setState({ text: '' })
  }

  // handleChange = (text) => {
  //   this.setState({ text })
  // }

  createNew( e ) {
    if( e.which === 13 ) {
      this.setState({text: e.target.value}, () => {
        this.sendMessage(this.state.text, "blast")
      })
      e.target.value = ''
    }
  }

  share = () => {
    // let chat = [...this.state.chat, this.props.shared];
    // this.setState({ chat });
    // console.log(this.props.chat)
    if (Object.keys(this.props.shared).length !== 0) {
      this.sendMessage(this.props.shared, "blast")
    }
    // socket.emit('blast message', this.props.shared);

    // this.sendMessage(this.props.shared)
  }

  render() {
    const chat = this.state.chat.map((el, i) => {
      if (typeof el === 'object') {
        return <li><Link key={el.id} to={el.link}>Link</Link></li>
      } else {
        return <li key={i}>{el}</li>
      }
    }) 

    return (
      <div className="chatRoom" ref={(el) => { this.messagesContainer = el; }}>
        <div className="chatRoom__header" onClick={() => this.props.toggle()}> 
          <p>__</p>
        </div>
        <ul>

          { chat }
          <div style={{ float:"left", clear: "both" }}
            ref={(el) => { this.messagesEnd = el; }}>
           </div>
        </ul>
        
        <div className="chatRoom__footer">
          <input placeholder="Type here..." type="text" onKeyPress={(e) => this.createNew(e)}/>
          <button onClick={() => this.share()}> SHARE </button>
        </div>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    shared: state.shared
  }
}
export default connect(mapStateToProps)(ChatRoom);
