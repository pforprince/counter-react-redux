import {applyMiddleware, createStore} from 'redux'
import {rootReducer} from './reducers/rootReducer';
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
const initialState= 0;

const middleware = [thunk]

const store= createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
    )


export default store;
