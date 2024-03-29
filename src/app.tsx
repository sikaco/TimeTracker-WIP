// import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Provider } from 'react-redux'
import * as eva from '@eva-design/eva'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'

import configureStore from '$xuder/store'

import { AppNavigator } from './navigation'

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <AppNavigator />
    </ApplicationProvider>
  </Provider>
)

export default App
