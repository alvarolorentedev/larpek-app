import React, { Component } from 'react'
import { View, Text } from 'react-native'

import { Container, Fab, Icon, Button } from 'native-base'

import Menu from '../common/menu'
import header from '../common/header'

export default class Inventory extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <Container style={{ backgroundColor: 'white' }}> 
                {header("Larpek")}
                <View>
                <Text> This is the inventory </Text>
                <Button onPress={() => {
                     this.props.addToInventory()
                }}><Text>Add</Text></Button>
                </View>
                <Menu/>
            </Container>
        )
    }
}