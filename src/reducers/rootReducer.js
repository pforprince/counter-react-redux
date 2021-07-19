import { combineReducers } from 'redux'
import {changeNumber} from '../reducers/NumberReducer'


export const rootReducer= combineReducers({
    changeNumber
})