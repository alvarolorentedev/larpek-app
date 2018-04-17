import * as types from "./types"

export function addToInventory(object){
    return { type: types.ADD_TO_INVENTORY, payload : object }
}

export function useFromInventory(id){
    return { type: types.USE_FROM_INVENTORY, payload : id }
}