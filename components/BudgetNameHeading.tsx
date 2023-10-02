import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import React from 'react';
import tw from 'twrnc';

const BudgetNameHeading = () => {
	const budgetName = useSelector((state: any) => state.budget.budgetName);
	return (
		<View style={tw`items-center border-gray-400 border-b`}>
			<Text style={tw`text-7 p-2 my-5 00`}>{budgetName}</Text>
		</View>
	);
};

export default BudgetNameHeading;
