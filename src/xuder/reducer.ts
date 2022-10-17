import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'

import { reducer as homeScreenReducer, State as homeScreenState } from '$screens/home'

export interface GlobalState {
  readonly router: { location: any }
  readonly ui: {
    readonly homeScreen: homeScreenState
  }
}

export const rootReducer = combineReducers<GlobalState>({
  router,
  ui: combineReducers({
    homeScreen: homeScreenReducer,
  }),
})
