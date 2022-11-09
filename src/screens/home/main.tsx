import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Layout, Text, Button, Divider, TopNavigation } from '@ui-kitten/components'
// import cx from 'classnames'
import { GlobalState } from '$xuder/reducer'
import { NavigationProps } from 'src/types'
import { DispatchProps, StateProps } from './types'
import { actions } from './modules'
import styles from './index.module.scss'

export interface CommonProps { dispatch: any }

export type OwnProps = CommonProps & NavigationProps

export type Props = StateProps & DispatchProps & Readonly<OwnProps>

// const FacebookIcon = (props) => <Icon name="facebook" {...props} />

// export const LoginButton = () => (
//   <Button accessoryLeft={FacebookIcon}>Login with Facebook</Button>
// )

/**
 * todo:
 * 1. upgrade expo.
 * 2. theme support
 */

const HomeScreen: React.ForwardRefRenderFunction<{}, Props> = (props, ref) => {
  const { actions, a, navigation } = props

  useEffect(() => {
    actions.test(113)
  }, [])

  const navigateDetails = () => {
    navigation.navigate('Details')
  }

  return (
    <SafeAreaView ref={ref} style={{ flex: 1, ...styles.container }}>
      {/* <TopNavigation title="MyApp" alignment="center" /> */}
      <Divider />
      <Layout className={styles['screen-content']}>
        <Button onPress={navigateDetails}>OPEN DETAILS</Button>
        <Text className={styles.index}>------{a}</Text>
      </Layout>
    </SafeAreaView>
  )
}

export default connect<StateProps, DispatchProps, OwnProps>(
  (state: GlobalState): StateProps => {
    return state.ui.homeScreen
  },
  (dispatch) => {
    return {
      actions: bindActionCreators(actions, dispatch),
    }
  },
)(React.forwardRef(HomeScreen))
