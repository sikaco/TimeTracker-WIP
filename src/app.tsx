// import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import * as eva from '@eva-design/eva'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'

import Homepage from '$pages/homepage'
import configureStore from '$xuder/store'
import './app.scss'

const store = configureStore()

export default () => (
  <Provider store={store}>
    <NavigationContainer>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <Homepage></Homepage>
      </ApplicationProvider>
    </NavigationContainer>
  </Provider>
)
