import React from 'react'
import { Actions } from 'react-native-router-flux'
import { Header, Title, Body, Left, Right, Button, Icon } from 'native-base'

export default function header(name){
    return  <Header>
                <Left/>
                <Body>
                    <Title>{name}</Title>
                </Body>
                <Right/>
            </Header>
}