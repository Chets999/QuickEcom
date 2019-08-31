import React from 'react'
import ReactDOM from 'react-dom'
import axios from './config/axios'
import App from './App'
import {Provider} from 'react-redux'
import {startSetUser} from './redux/actions/user'
import configureStore from './redux/store/configureStore';

const store = configureStore()

store.subscribe(() =>{
    console.log(store.getState())
})

if (localStorage.getItem('userAuth')) {
    console.log("index.js")
    store.dispatch(startSetUser())
}


const jsx = (
    <Provider store = {store}>
        <App/>
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'))