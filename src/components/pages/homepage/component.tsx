import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import { GlobalState } from 'src/xuder/reducer'
import cx from 'classnames'
import { DispatchProps, StateProps } from './types'
import { actions } from './modules'
import styles from './index.module.scss'

export interface CommonProps { dispatch: any }

export interface OwnProps extends CommonProps { }

export type Props = StateProps & DispatchProps & Readonly<OwnProps>

const Index: React.ForwardRefRenderFunction<{}, Props> = (props, ref) => {
  const { actions, a } = props

  useEffect(() => {
    actions.test(111)
  }, [])

  return (
    <View ref={ref} style={styles.container}>
      <Text className={styles.index}>------{a}</Text>
    </View>
  )
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
