import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import { connect } from 'react-redux';
import { getMyRecipe } from '../../ducks/reducer';

const styles = {
  dialog: {
    width: '80%',
    maxHeight: 435,
  },
};

function sendToback(photo){
  console.log(photo)
  return axios.post('/api/photoUpload', photo)
}

/**
 * The dialog width has been set to occupy the full width of browser through the `contentStyle` property.
 */
class DialogCustom extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      foodname: '',
      ingredients: '',
      totalIngr: '',
      cookingTime: '',
      weight: '',
      foodImg: '',
      file: '',
      filename: '',
      filetype: ''
    };

    this.handlePhoto=this.handlePhoto.bind(this)
    this.sendPhoto=this.sendPhoto.bind(this)
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleInput = (e) => {  
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submit = () => {
    axios.post('/api/ownrecipe', this.state).then(res => {
      this.props.getMyRecipe()
    })

    this.handleClose();
  }

  // Photo__________
  handlePhoto(event){
    const reader = new FileReader()
        , file = event.target.files[0]
        , _this = this
    
    reader.onload = photo => {
        this.setState({
            file: photo.target.result,
            filename: file.name,
            filetype: file.type
        })
    }
    reader.readAsDataURL(file)
}

sendPhoto(event){
    event.preventDefault() // why is it broke? when i call sendPhoto in submit?
    let { file, filename, filetype } = this.state;
    let photoInfo = { file, filename, filetype }
    sendToback(photoInfo).then(response => {
        console.log(response.data)
        this.setState({foodImg: response.data.Location})
    })
}


  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        style={{color: '#1db954'}}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        style={{color: '#1db954'}}
        onClick={() => this.submit()}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Create your own recipe" onClick={this.handleOpen} />
        <Dialog
          actions={actions}
          modal={true}
          open={this.state.open}
          contentStyle={{width: "80%"}}>
          <div style={{height: '40vh'}}>
            <TextField
              hintText="Name of the food"
              name="foodname"
              underlineFocusStyle={{borderColor:'#1db954'}}
              onChange={(e) => this.handleInput(e)}
            /><br />

            <TextField
              hintText="Recipe"
              name="ingredients"
              underlineFocusStyle={{borderColor:'#1db954'}}
              onChange={(e) => this.handleInput(e)}
            /><br />
      
            <TextField
              hintText="Total ingredients"
              name="totalIngr"
              underlineFocusStyle={{borderColor:'#1db954'}}
              onChange={(e) => this.handleInput(e)}
            /><br />

            <TextField
              hintText="Total cooking time"
              name="cookingTime"
              underlineFocusStyle={{borderColor:'#1db954'}}
              onChange={(e) => this.handleInput(e)}
            /><br />

            <TextField
              hintText="weight"
              name="weight"
              underlineFocusStyle={{borderColor:'#1db954'}}
              onChange={(e) => this.handleInput(e)}
            /><br />
            <div>
              <input type="file" onChange={this.handlePhoto}/>
              <button onClick={this.sendPhoto}>upload</button>
            </div>
            </div>
        </Dialog>
      </div>
    );
  }
}

export default connect(null, { getMyRecipe })(DialogCustom)

// autoDetectWindowHeight={false}
// autoScrollBodyContent={true}
// contentStyle={customContentStyle}
