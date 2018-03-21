import * as types from "./types"

export function addToInventory(object){
    return { type: types.ADD_TO_INVENTORY, payload : object }
}