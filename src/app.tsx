// import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Homepage from '$pages/homepage'
import configureStore from '$xuder/store'
import './app.scss'

const store = configureStore()

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <Homepage></Homepage>
      </Provider>
    )
  }
}
