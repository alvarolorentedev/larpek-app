import { addToInventory } from '../../../src/actions/inventory'
import {ADD_TO_INVENTORY} from '../../../src/actions/types'

it('the action addToInventory returns an event of type ADD_TO_INVENTORY', () => {
    expect(addToInventory()).toEqual({type: ADD_TO_INVENTORY})
})
