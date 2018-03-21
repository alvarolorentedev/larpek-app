import Enzyme, { shallow } from 'enzyme'
import React from 'react'
import {Inventory, _mapStateToProps} from '../../../../src/components/inventory'

import { View, Text } from 'react-native'
import { Container, Fab, Icon, Button } from 'native-base'
import { List } from 'immutable'

describe('inventory', () => {

    beforeEach(() => {
        wrapper = shallow(<Inventory Inventory={[{}]} addToInventory ={() => { expect(true).toBeFalsy() }}/>);
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


        it('calls addInventory generate random id', () => {
            let addToInventoryMock = jest.fn()
            wrapper.setProps({addToInventory: addToInventoryMock})
            let addButtonChild = wrapper.find('#addButton')
            addButtonChild.simulate('press')
            addButtonChild.simulate('press')
            let firstCall = addToInventoryMock.mock.calls[0][0]
            let secondCall = addToInventoryMock.mock.calls[1][0]
            expect(typeof firstCall.id).toBe('string')
            expect("firstCall.id").not.toEqual("secondCall.id")
        })
    })

    describe('render List', () => {
        it('is a List', () => {
            let inventoryList = wrapper.find('#inventoryList')
            expect(inventoryList.length).toEqual(1)
            expect(inventoryList.name()).toEqual('Styled(List)')
        })

        it('has rendered items', () => {
            inventoryList = [{id: Math.random()}, {id: Math.random()}]
            wrapper.setProps({Inventory: inventoryList })
            let inventoryListChildren = wrapper.find('#inventoryList').children()
            expect(inventoryListChildren.length).toEqual(2)
            inventoryListChildren.forEach((node) => {
                expect(node.name()).toEqual('Styled(ListItem)');
              });
        })

        it('rendered items have correct content', () => {
            
            inventoryList = [{id: Math.random()}, {id: Math.random()}]
            wrapper.setProps({Inventory: inventoryList })
            let inventoryItem = wrapper.find('#inventoryList').childAt(0)
            let inventoryItemText = inventoryItem.childAt(0)
            expect(inventoryItemText.name()).toEqual("Text")
            expect(inventoryItemText.children().text()).toEqual(JSON.stringify(inventoryList[0]))
        })
    })

    describe('mapped props', () => {
        test('should have inventory', () => {
            let expectedValue = List()
            let state = { inventory : { content : expectedValue } }
            expect(_mapStateToProps(state).Inventory).toEqual(expectedValue.toJS())
        });
    });
})


   
