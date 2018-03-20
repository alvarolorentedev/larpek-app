import * as inventory from '../../../src/reducers/inventory'
import * as types from '../../../src/actions/types'
import * as matchers from 'jest-immutable-matchers'
import { List } from 'immutable'


describe('insert reducer', () => {
    beforeEach(function () {
        jest.addMatchers(matchers)
    })

    it('ads to inventory when empty', () => {
        const expectedObject = {someprop: Math.random()}
        expect(inventory.content(List(),{type: types.ADD_TO_INVENTORY, object: expectedObject})).toEqualImmutable(List([expectedObject]))
    })

    it('ads to inventory when not empty', () => {
        const expectedObject1 = {someprop: Math.random()}
        const expectedObject2 = {someprop: Math.random()}
        expect(inventory.content(List([expectedObject1]),{type: types.ADD_TO_INVENTORY, object: expectedObject2})).toEqual(List([expectedObject1, expectedObject2]))
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