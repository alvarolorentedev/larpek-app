import React , { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { AsyncStorage } from 'react-native'
import { composeWithDevTools } from 'redux-devtools-extension'

import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import AppContainer from './components'
import reducer from './reducers'

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ })

function configureStore(initialState){
    const enhancer = composeWithDevTools(
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )
    )
    return createStore(reducer, initialState, enhancer)
}

const store = configureStore({})

class App extends Component {
    render(){ 
        return (
            <Provider store={store}>
                <AppContainer />
            </Provider>
        )
    }
}

export default App