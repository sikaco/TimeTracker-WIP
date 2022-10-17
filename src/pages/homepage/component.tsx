import React, { useEffect } from 'react'
import { View, SafeAreaView } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Layout, Text, Button, Icon, Divider, TopNavigation } from '@ui-kitten/components'
import { GlobalState } from 'src/xuder/reducer'
// import cx from 'classnames'
import { DispatchProps, StateProps } from './types'
import { actions } from './modules'
import styles from './index.module.scss'

export interface CommonProps { dispatch: any }

export interface OwnProps extends CommonProps { }

export type Props = StateProps & DispatchProps & Readonly<OwnProps>

export const HomeScreen = ({ navigation }) => {
  console.log('123123', navigation)

  const navigateDetails = () => {
    navigation.navigate('Details')
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title="MyApp" alignment="center" />
      <Divider />
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button onPress={navigateDetails}>OPEN DETAILS</Button>
      </Layout>
    </SafeAreaView>
  )
}

const FacebookIcon = (props) => <Icon name="facebook" {...props} />

export const LoginButton = () => (
  <Button accessoryLeft={FacebookIcon}>Login with Facebook</Button>
)

const Index: React.ForwardRefRenderFunction<{}, Props> = (props, ref) => {
  const { actions, a } = props

  useEffect(() => {
    actions.test(111)
  }, [])

  // return (
  //   <View ref={ref} style={styles.container}>
  //     <Text className={styles.index}>------{a}</Text>
  //   </View>
  // )

  // return (
  //   <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //     <LoginButton />
  //     <Text category="h1">HOME</Text>
  //   </Layout>
  // )

  // return <HomeScreen {...props} />
}

export default connect<StateProps, DispatchProps, OwnProps>(
  (state: GlobalState): StateProps => {
    return state.ui.homepage
  },
  (dispatch) => {
    return {
      actions: bindActionCreators(actions, dispatch),
    }
  },
)(React.forwardRef(Index))
