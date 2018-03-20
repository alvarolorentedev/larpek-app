import { createReducer } from 'redux-create-reducer'
import * as types from '../actions/types'
import { List } from 'immutable'
import { combineReducers } from 'redux'

export const content = createReducer(List() , {
    [types.ADD_TO_INVENTORY](state, action) {
        return state.push(action.object)
    }
})

export default combineReducers({content})