import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import storage from '../data_layer/storage';
import React, { useEffect, useState } from 'react';
import tw from 'twrnc';

const RemainingBudget = () => {
	const budget = useSelector((state: any) => state.budget);
	const expenses = useSelector((state: any) => state.budget.expenses);
	const formatter = new Intl.NumberFormat('ja-JP', {
		style: 'currency',
		currency: 'JPY',
	});

	const [remainingBudget, setRemainingBudget] = useState(0);
	const [customMessage, setCustomMessage] = useState('');

	const getRemainingBudgetAmount = (expenses: any) => {
		// Get the total amount of expenses
		let totalExpense = 0;
		if (expenses.length > 0) {
			expenses.forEach((expense: any) => {
				totalExpense += parseFloat(expense.expenseAmount);
			});
		}
		setRemainingBudget(parseFloat(budget.budgetAmount) - totalExpense);
	};

	const customizeMessageDependingOnTheRemainingBudgetAmount = (
		remainingAmount: any
	) => {
		if (remainingAmount <= budget.budgetAmount * 0.2) {
			setCustomMessage("Oh no! You're almost out of budget!");
		} else {
			setCustomMessage("You're doing great! Keep spending!");
		}
	};

	useEffect(() => {
		getRemainingBudgetAmount(expenses);
		customizeMessageDependingOnTheRemainingBudgetAmount(remainingBudget);
	}, [expenses, remainingBudget]);

	return (
		<View>
			<View style={tw`items-center`}>
				<Text style={tw`mt-2`}>Remaining Budget</Text>
				<Text
					style={tw`text-10 font-bold p-10 m-10 bg-gray-200 border-radius-100`}
				>
					{formatter.format(remainingBudget)}
				</Text>
			</View>
			<View style={tw`items-center`}>
				<Text style={tw`text-lg p-10`}>{customMessage}</Text>
			</View>
		</View>
	);
};

export default RemainingBudget;
