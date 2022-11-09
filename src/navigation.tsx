import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components'
import HomeScreen from '$screens/home'
import DetailsScreen from '$screens/details/main'

const StackNavigator = createStackNavigator()
const BottomTabNavigator = createBottomTabNavigator()

const HomeNavigator = () => {
  const { Navigator, Screen } = StackNavigator

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Details" component={DetailsScreen} />
    </Navigator>
  )
}

const BottomTabBar = ({ navigation, state }: BottomTabBarProps) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title="Home"/>
    <BottomNavigationTab title="Details"/>
  </BottomNavigation>
)

const TabNavigator = () => {
  const { Navigator, Screen } = BottomTabNavigator

  return (
    <Navigator tabBar={props => <BottomTabBar {...props} />}>
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Details" component={DetailsScreen} />
    </Navigator>
  )
}

export const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
)
