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

type ExpenseTypeProps = {
	expenseName: string;
	expenseAmount: string;
	expenseDate: string;
	purpose: string;
	paidWithWhat: string;
	description: string;
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
		status: 'active', // 'active' | 'inactive' | 'completed'
		expenses: [],
	},
	reducers: {
		createBudget: (state, action) => {
			state.budgetName = action.payload.budgetName;
			state.budgetAmount = action.payload.budgetAmount;
			state.budgetDuration = action.payload.budgetDuration;
			state.status = action.payload.status;
		},
		createExpense: (state, action) => {
			state.expenses.push(action.payload);
		},
		updateBudgetStatus: (state, action) => {
			state.status = action.payload;
		},
	},
});

// export actions
export const { createBudget, createExpense, updateBudgetStatus } =
	budgetSlice.actions;
export default budgetSlice.reducer;
