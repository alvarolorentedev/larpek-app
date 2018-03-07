import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

import { Container, Fab, Icon, Button } from 'native-base'

import Menu from '../common/menu'
import header from '../common/header'

export default class Main extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <Container> 
                {header("Larpek")}
                <View style={styles.container}>
                    <Text style={styles.welcome}>
                    Welcome to Larpek!
                    </Text>
                </View>
                <Menu {...this.props} />
            </Container>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
})