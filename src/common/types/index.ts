import { ConnectedProps } from 'react-redux'

export type CompProps<TOwnProps, TConnector> = Readonly<TOwnProps> & ConnectedProps<TConnector>
