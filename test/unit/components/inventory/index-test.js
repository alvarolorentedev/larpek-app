import Enzyme, { shallow } from 'enzyme'
import React from 'react'
import {Inventory, _mapStateToProps} from '../../../../src/components/inventory'

import { View, Text } from 'react-native'
import { Container, Fab, Icon, Button } from 'native-base'
import { List } from 'immutable'

describe('inventory', () => {

    beforeEach(() => {
        wrapper = shallow(<Inventory Inventory={[{}]} addToInventory ={() => { expect(true).toBeFalsy() }} useFromInventory ={ () => { expect(true).toBeFalsy() } }/>);
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
            expect(addButtonChild.name()).toEqual('Styled(Text)')
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

        it('rendered items have correct content text', () => {
            
            inventoryList = [{id: Math.random()}, {id: Math.random()}]
            wrapper.setProps({Inventory: inventoryList })
            let inventoryItem = wrapper.find('#inventoryList').childAt(0)
            let inventoryItemText = inventoryItem.childAt(0).childAt(0)
            expect(inventoryItemText.name()).toEqual("Styled(Text)")
            expect(inventoryItemText.children().text()).toEqual(JSON.stringify(inventoryList[0]))
        })

        it('rendered items have correct content button', () => {
            
            inventoryList = [{id: Math.random()}, {id: Math.random()}]
            wrapper.setProps({Inventory: inventoryList })
            let inventoryItem = wrapper.find('#inventoryList').childAt(0)
            let inventoryItemButton = inventoryItem.childAt(1).childAt(0)
            expect(inventoryItemButton.name()).toEqual('Styled(Button)')
            expect(inventoryItemButton.childAt(0).children().text()).toEqual("Use")
        })

        it('calls useFromInventory from props', () => {
            let idValue = Math.random()
            inventoryList = [{id: idValue}]
            let useFormInventoryMock = jest.fn()
            wrapper.setProps({Inventory: inventoryList , useFromInventory: useFormInventoryMock})
            let useButtonChild = wrapper.find('.InventoryItemButton')
            useButtonChild.simulate('press')
            expect(useFormInventoryMock.mock.calls.length).toEqual(1)
            expect(useFormInventoryMock.mock.calls[0][0]).toEqual(idValue)
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


   
