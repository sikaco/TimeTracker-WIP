import { combineEpics } from 'redux-observable'
import { epic as homeScreenEpic } from '$screens/home/modules'

export const rootEpic = combineEpics(homeScreenEpic)
