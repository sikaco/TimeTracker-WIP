import React from 'react'
import { SafeAreaView } from 'react-native'
import { Divider, Icon, Layout, Text, TopNavigationAction } from '@ui-kitten/components'
import { NavigationProps } from '$common/types'

const BackIcon = props => <Icon {...props} name='arrow-back' />

const DetailsScreen = ({ navigation }: NavigationProps) => {
  const navigateBack = () => {
    navigation.goBack()
  }

  const BackAction = () => <TopNavigationAction icon={BackIcon} onPress={navigateBack} />

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <TopNavigation title="MyApp" alignment="center" accessoryLeft={BackAction} /> */}
      <Divider />
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category='h1'>DETAILS</Text>
      </Layout>
    </SafeAreaView>
  )
}

export default DetailsScreen
