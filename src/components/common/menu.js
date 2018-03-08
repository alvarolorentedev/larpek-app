import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux'
import { Fab, Icon, Button } from 'native-base'
import { connect } from 'react-redux'
import ui from 'redux-ui'

const uiScope = { 
    key: 'fav-menu', 
    state: { active : false }
}

class Menu extends Component {
    render(){
        return(
            <Fab
                active={this.props.ui.active}
                direction="up"
                position="bottomRight"
                onPress={() =>this.props.updateUI('active', !this.props.ui.active)}>
                <Icon name="md-more" />
                <Button>
                    <Icon name="md-infinite" onPress={ () =>{
                        console.log("do something else")
                        Actions.refresh()
                        }} />
                </Button>
          </Fab>
        )
    }
}

function mapStateToProps(state){
    return {}
}

export default connect(mapStateToProps)(ui(uiScope)(Menu))