import Enzyme, { shallow } from 'enzyme'
import React from 'react'
import {Inventory} from '../../../../src/components/inventory'

import { View, Text } from 'react-native'
import { Container, Fab, Icon, Button } from 'native-base'

describe('inventory', () => {

    beforeEach(() => {
        wrapper = shallow(<Inventory Inventory={[{}]}/>);
      })
    describe('add button', () => {

        it('should be a button', () => {
            let addButtonChild = wrapper.find('#addButton')
            expect(addButtonChild.length).toEqual(1)
            expect(addButtonChild.name()).toEqual('Styled(Button)')
        })

        it('has text Add', () => {
            let addButtonChild = wrapper.find('#addButton').children()
            expect(addButtonChild.length).toEqual(1)
            expect(addButtonChild.name()).toEqual('Text')
            expect(addButtonChild.children().text()).toEqual('Add')
        })

        it('calls addInventory from props', () => {
            let addToInventoryMock = jest.fn()
            wrapper.setProps({addToInventory: addToInventoryMock})
            let addButtonChild = wrapper.find('#addButton')
            addButtonChild.simulate('press')
            expect(addToInventoryMock.mock.calls.length).toEqual(1)
        })
    })

    describe('render List', () => {
        it('is a List', () => {
            let inventoryList = wrapper.find('#inventoryList')
            expect(inventoryList.length).toEqual(1)
            expect(inventoryList.name()).toEqual('Styled(List)')
        })

        it('has rendered items', () => {
            inventoryList = [{}, {}]
            wrapper.setProps({Inventory: inventoryList })
            let inventoryListChildren = wrapper.find('#inventoryList').children()
            expect(inventoryListChildren.length).toEqual(2)
            inventoryListChildren.forEach((node) => {
                expect(node.name()).toEqual('Styled(ListItem)');
              });
        })
    })
})


   
