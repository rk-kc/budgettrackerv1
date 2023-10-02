import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import tw from 'twrnc';

const RemainingBudget = () => {
	const budgetAmount = useSelector((state: any) => state.budget.budgetAmount);
	const expenses = useSelector((state: any) => state.budget.expenses);
	const formatter = new Intl.NumberFormat('ja-JP', {
		style: 'currency',
		currency: 'JPY',
	});

	const [remainingBudget, setRemainingBudget] = useState(0);
	const [customMessage, setCustomMessage] = useState('');

	const getRemainingBudgetAmount = (expenses: any) => {
		// expenses is an array of objects
		// each object has a property called amount
		// we want to sum up all the amounts
		// and return the remaining budget amount
		// budgetAmount - sum of all the amounts
		// return budgetAmount - sum of all the amounts
		// expenses.reduce((accumulator, expense) => accumulator + expense.amount, 0)
		if (expenses) {
			setRemainingBudget(
				expenses.reduce(
					(accumulator: any, expense: any) => accumulator + expense.amount,
					0
				)
			);
		}
		setRemainingBudget(0);
	};

	const customizeMessageDependingOnTheRemainingBudgetAmount = (
		remainingAmount: any
	) => {
		if (budgetAmount * 0.2 <= remainingAmount) {
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
				<Text
					style={tw`text-10 font-bold p-10 m-10 bg-gray-200 border-radius-100`}
				>
					{formatter.format(budgetAmount)}
				</Text>
			</View>
			<View style={tw`items-center`}>
				<Text style={tw`text-lg p-10`}>{customMessage}</Text>
			</View>
		</View>
	);
};

export default RemainingBudget;
