// This is a sample code for the store.ts file
import { configureStore } from '@reduxjs/toolkit';
import budgetReducer from './slices/slice';

const store = configureStore({
	reducer: {
		nav: budgetReducer,
	},
});

export default store;
