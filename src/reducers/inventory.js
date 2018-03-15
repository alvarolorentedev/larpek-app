import { createReducer } from 'redux-create-reducer'
import * as types from '../actions/types'
import { List } from 'immutable'

export const insert = createReducer(List() , {
    [types.ADD_TO_INVENTORY](state, action) {
        return state.push(action.object)
    }
})
