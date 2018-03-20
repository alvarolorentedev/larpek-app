import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Container, Fab, Icon, Button, List, ListItem } from 'native-base'

import Menu from '../common/menu'
import header from '../common/header'

export class Inventory extends Component {
    static propTypes = {
        Inventory: PropTypes.array.isRequired,
        addToInventory : PropTypes.func.isRequired
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
                    this.props.Inventory.map((element, index) => <ListItem key={"element_"+index}><Text>element</Text></ListItem>)
                }
                </List>
                <Button id='addButton' onPress={() => {
                     this.props.addToInventory()
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