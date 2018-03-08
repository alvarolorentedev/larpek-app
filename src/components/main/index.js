import React, { Component } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

import { Container, Fab, Icon, Button } from 'native-base'

import Menu from '../common/menu'
import header from '../common/header'

export default class Main extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <Container style={{ backgroundColor: 'white' }}> 
                {header("Larpek")}
                <View>
                <Image  style={{ width:370, resizeMode: 'center', marginTop: 20, marginBottom: 20, backgroundColor: 'transparent' }} 
                        source={require('../resources/logo.jpg')} />
                </View>
                <Menu/>
            </Container>
        )
    }
}
