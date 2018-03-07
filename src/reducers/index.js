import { combineReducers } from 'redux'
import { createReducer } from 'redux-create-reducer'

let emptyReducer = createReducer(false , () => {return false})

export default combineReducers({emptyReducer})