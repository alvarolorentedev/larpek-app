import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {v1 as uuid } from 'uuid'

import { View, Container, Fab, Icon, Button, List, ListItem, Text, Body, Right } from 'native-base'

import Menu from '../common/menu'
import header from '../common/header'

export class Inventory extends Component {
    static propTypes = {
        Inventory: PropTypes.array.isRequired,
        addToInventory : PropTypes.func.isRequired,
        useFromInventory : PropTypes.func.isRequired
    }

    constructor(props){
        super(props)
    }

    render() {
        return (
            <Container style={{ backgroundColor: 'white' }}> 
                {header("Larpek")}
                <View>
                <List id='inventoryList'>
                {
                    this.props.Inventory.map((element, index) => 
                    <ListItem key={"element_"+index} className="InventoryItem">
                        <Body><Text>{JSON.stringify(element)}</Text></Body>
                        <Right><Button className="InventoryItemButton" onPress={() => {
                     this.props.useFromInventory(element.id)}}><Text>Use</Text></Button></Right>
                  </ListItem>)
                }
                </List>
                <Button id='addButton' onPress={() => {
                     this.props.addToInventory({id : uuid()})
                }}><Text>Add</Text></Button>
                </View>
                <Menu/>
            </Container>
        )
    }
}

export function _mapStateToProps(state){
    return {
        Inventory: state.inventory.content.toJS()
    }
}

export default connect(_mapStateToProps)(Inventory);