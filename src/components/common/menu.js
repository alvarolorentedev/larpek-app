
import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux'

import { Fab, Icon, Button } from 'native-base'
import { connect } from 'react-redux'

class Menu extends Component {
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <Fab
                active={this.props.active}
                direction="up"
                position="bottomRight"
                onPress={() =>{}}>
                <Icon name="md-more" />
                <Button>
                    <Icon name="md-settings" onPress={ () =>{}} />
                </Button>
          </Fab>
        )
    }
}

function mapStateToProps(state){
    return {}
}

export default connect(mapStateToProps)(Menu)