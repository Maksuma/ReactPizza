import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './features/counter'
import nameSlice from './features/name'

export const store = configureStore({
	reducer: {
		counter: counterSlice,
		name: nameSlice,
	},
})
