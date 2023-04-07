

//import rootReducer from "../Reducer";
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension';

//reveer esto
const store = createStore(
    //rootReducer,
    composeWithDevTools( applyMiddleware(thunk))
);


export default store;