import React, { FunctionComponent, useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Layout, Text, Button, Divider, TopNavigation } from '@ui-kitten/components'
// import cx from 'classnames'
import { GlobalState } from '$xuder/reducer'
import { NavigationProps } from 'src/types'
import { actions } from './modules'
import styles from './index.module.scss'
import { CompProps } from '$common/types'

export interface CommonProps { dispatch: any }

export type OwnProps = NavigationProps

type Props = CompProps<OwnProps, typeof connector>

// const FacebookIcon = (props) => <Icon name="facebook" {...props} />

// export const LoginButton = () => (
//   <Button accessoryLeft={FacebookIcon}>Login with Facebook</Button>
// )

const HomeScreen: FunctionComponent<Props> = props => {
  const { actions, a, navigation } = props

  useEffect(() => {
    actions.test(113)
  }, [])

  const navigateDetails = () => {
    navigation.navigate('Details')
  }

  return (
    <SafeAreaView style={{ flex: 1, ...styles.container }}>
      {/* <TopNavigation title="MyApp" alignment="center" /> */}
      <Divider />
      <Layout className={styles['screen-content']}>
        <Button onPress={navigateDetails}>OPEN DETAILS</Button>
        <Text className={styles.index}>------{a}</Text>
      </Layout>
    </SafeAreaView>
  )
}

// 连接组件和 Redux Store
const connector = connect(
  (state: GlobalState, _ownProps: OwnProps) => {
    return state.ui.homeScreen
  },
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)

// 导出连接后的组件
export default connector(HomeScreen)
