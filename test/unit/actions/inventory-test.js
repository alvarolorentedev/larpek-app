import { addToInventory } from '../../../src/actions/inventory'
import {ADD_TO_INVENTORY} from '../../../src/actions/types'

describe('addToInventory', () => {
    it('should returns an event of type ADD_TO_INVENTORY', () => {
        expect(addToInventory().type).toEqual(ADD_TO_INVENTORY)
    })
    
    it('should returns an event with payload with the object passed', () => {
        let expectedObject = { random : Math.random() }
        expect(addToInventory(expectedObject).payload).toEqual(expectedObject)
    })
    
});

