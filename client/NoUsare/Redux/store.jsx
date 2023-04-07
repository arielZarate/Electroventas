import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import middleware from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension';

//reveer esto
const store = createStore(
   // reducer,
    composeWithDevTools(
        applyMiddleware(...middleware)
        // other store enhancers if any
    )
);


export default store;