import * as inventory from '../../../src/reducers/inventory'
import * as types from '../../../src/actions/types'
import * as matchers from 'jest-immutable-matchers'
import { List } from 'immutable'


describe('insert reducer', () => {
    beforeEach(function () {
        jest.addMatchers(matchers)
    })

    it('ads to inventory when empty', () => {
        const expectedObject = {id: Math.random()}
        expect(inventory.content(List(),{type: types.ADD_TO_INVENTORY, payload: expectedObject})).toEqualImmutable(List([expectedObject]))
    })

    it('ads to inventory when not empty', () => {
        const expectedObject1 = {id: Math.random()}
        const expectedObject2 = {id: Math.random()}
        expect(inventory.content(List([expectedObject1]),{type: types.ADD_TO_INVENTORY, payload: expectedObject2})).toEqualImmutable(List([expectedObject1, expectedObject2]))
    })
})

describe('use reducer', () => {
    beforeEach(function () {
        jest.addMatchers(matchers)
    })

    it('removes from inventory when it exists', () => {
        const id = Math.random()
        const expectedObjectUsed = {id: id}
        const expectedObjectLeft = {id: Math.random()}
        expect(inventory.content(List([expectedObjectUsed, expectedObjectLeft]),{type: types.USE_FROM_INVENTORY, payload: id})).toEqualImmutable(List([expectedObjectLeft]))
    })
})

describe('default', () => {
    beforeEach(() => {
        defaultExport = inventory.default(undefined, {type:"FAKE"})
    });
    test('should have inventory', () => {
        expect(defaultExport.content).toBeDefined()
    });
});