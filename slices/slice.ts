import { createSlice } from '@reduxjs/toolkit';
// Define the initial state of the budget object

type ExpensesType = {
	expenseId: string;
	date: string;
	amount: number;
	purpose: string;
	paymentMethod: string;
	notes: string;
};

type BudgetType = {
	budgetId: string;
	budgetName: string;
	budgetAmount: number;
	expenses: ExpensesType[];
	startDate: string;
	endDate: string;
	status: string;
	duration: number;
	recurring: boolean;
};
// This is the initial state of the budget data layer
const budgetInitialState: BudgetType = {
	budgetId: '',
	budgetName: '',
	budgetAmount: 0,
	expenses: [],
	startDate: '',
	endDate: '',
	status: '',
	duration: 0,
	recurring: false,
};
// Create the slice for the navigation reducer
export const slice = createSlice({
	name: 'budget',
	initialState: budgetInitialState,
	reducers: {
		// Used to create the budget object
		createBudget: (state, action) => {
			state.budgetId = action.payload.budgetId;
			state.budgetName = action.payload.budgetName;
			state.budgetAmount = action.payload.budgetAmount;
			state.expenses = action.payload.expenses;
			state.startDate = action.payload.startDate;
			state.endDate = action.payload.endDate;
			state.status = action.payload.status;
			state.duration = action.payload.duration;
			state.recurring = action.payload.recurring;
		},
		// Used to update the budget object
		updateBudget: (state, action) => {
			state.budgetName = action.payload.budgetName;
			state.budgetAmount = action.payload.budgetAmount;
			state.expenses = action.payload.expenses;
			state.startDate = action.payload.startDate;
			state.endDate = action.payload.endDate;
			state.status = action.payload.status;
			state.duration = action.payload.duration;
			state.recurring = action.payload.recurring;
		},
		// Used to update the expenses array
		updateExpenses: (state, action) => {
			state.expenses = action.payload.expenses;
		},
		// Used to update the status of the budget
		updateStatus: (state, action) => {
			state.status = action.payload.status;
		},
	},
});

// Export the actions
export const { createBudget, updateBudget, updateExpenses, updateStatus } =
	slice.actions;

// Pulling data from the budget object
export const selectBudgetId = (state: any) => state.budget.budgetId;

// Export the reducer
export default slice.reducer;
