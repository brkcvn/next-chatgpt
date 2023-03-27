import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import waterDataReducer from './features/waterData'

export function makeStore() {
  return configureStore({
    reducer: { action: waterDataReducer },
  })
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

export default store
