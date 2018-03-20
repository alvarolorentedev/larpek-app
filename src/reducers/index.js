import { combineReducers } from 'redux'
import { createReducer } from 'redux-create-reducer'
import { reducer as uiReducer } from 'redux-ui'
import inventory from "./inventory"

let emptyReducer = createReducer(false , () => {return false})

export default combineReducers({inventory, ui: uiReducer})