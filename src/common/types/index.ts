import { ConnectedProps } from 'react-redux'
import { CompositeScreenProps } from '@react-navigation/native'

export type NavigationProps = CompositeScreenProps<any, any>

export type CompProps<TOwnProps, TConnector> = Readonly<TOwnProps> &
  ConnectedProps<TConnector> &
  NavigationProps
