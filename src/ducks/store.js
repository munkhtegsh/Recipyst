import { createStore, applyMiddleware, compose} from 'redux';
import promiseMiddleWare from 'redux-promise-middleware';
import reducer, { getUserInfo } from './reducer';
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(promiseMiddleWare()),
  // other store enhancers if any
);
export default createStore(reducer, enhancer);