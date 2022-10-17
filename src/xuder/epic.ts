import { combineEpics } from 'redux-observable'
import { epic as homeScreenEpic } from '$screens/homeScreen/modules'

export const rootEpic = combineEpics(homeScreenEpic)
