import React from 'react'
import ReactDOM from 'react-dom'
import {combineReducers, createStore} from 'redux'
import {Provider} from 'react-redux'
import Counter from './counter'
import conterReducer from './counterReducer';


const reducers= combineReducers({ 
    counter: conterReducer
})


ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Counter />
    </Provider>,    
    document.getElementById('app')
)