import { combineReducers } from 'redux'
import { createReducer } from 'redux-create-reducer'
import { reducer as uiReducer } from 'redux-ui'

let emptyReducer = createReducer(false , () => {return false})

export default combineReducers({emptyReducer, ui: uiReducer})