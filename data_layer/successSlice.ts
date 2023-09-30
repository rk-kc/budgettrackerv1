import { createSlice } from '@reduxjs/toolkit';

export const successSlice = createSlice({
	name: 'success',
	initialState: {
		budgetName: '',
		budgetHeading: '',
		budgetDescription: '',
	},
	reducers: {
		updateSuccessScreen: (state, action) => {
			state.budgetName = action.payload.budgetName;
			state.budgetHeading = action.payload.budgetHeading;
			state.budgetDescription = action.payload.budgetDescription;
		},
	},
});

// export actions
export const { updateSuccessScreen } = successSlice.actions;
export default successSlice.reducer;
