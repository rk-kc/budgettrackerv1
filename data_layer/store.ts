// This is a sample code for the store.ts file
import { configureStore } from '@reduxjs/toolkit';
import budgetReducer from './budgetSlice';
import successReducer from './successSlice';

const store = configureStore({
	reducer: {
		budget: budgetReducer,
		success: successReducer,
	},
});

export default store;
