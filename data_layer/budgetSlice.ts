import { createSlice } from '@reduxjs/toolkit';

type BudgetDurationTypeProps = {
	startDate: string;
	endDate: string;
	duration: number;
};

export type BudgetTypeProps = {
	budgetName: string;
	budgetAmount: string;
	budgetDuration: BudgetDurationTypeProps;
};

export const budgetSlice = createSlice({
	name: 'budget',
	initialState: {
		budgetName: '',
		budgetAmount: '',
		budgetDuration: {
			startDate: '',
			endDate: '',
			duration: 0,
		},
	},
	reducers: {
		createBudget: (state, action) => {
			state.budgetName = action.payload.budgetName;
			state.budgetAmount = action.payload.budgetAmount;
			state.budgetDuration = action.payload.budgetDuration;
		},
	},
});

// export actions
export const { createBudget } = budgetSlice.actions;
export default budgetSlice.reducer;
