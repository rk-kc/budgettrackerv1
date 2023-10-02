import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { CreateBudgetStackParamList } from '../CreateBudgetScreen';
import { useDispatch, useSelector } from 'react-redux';
import { createExpense } from '../../data_layer/budgetSlice';
import { updateSuccessScreen } from '../../data_layer/successSlice';
import BudgetNameHeading from '../../components/BudgetNameHeading';
import React, { useState } from 'react';
import tw from 'twrnc';

const formatter = new Intl.NumberFormat('ja-JP', {
	style: 'currency',
	currency: 'JPY',
});

const NewExpenseScreen = () => {
	const navigation =
		useNavigation<StackNavigationProp<CreateBudgetStackParamList>>();
	const dispatch = useDispatch();
	const budgetName = useSelector((state: any) => state.budget.budgetName);
	const expenseDate = new Date();
	const [expenseAmount, setExpenseAmount] = useState<string>('');
	const [expenseName, setExpenseName] = useState<string>('');
	const [paidWithWhat, setPaidWithWhat] = useState<string>('');
	const [description, setDescription] = useState<string>('');

	const updateExpense = () => {
		dispatch(
			createExpense({
				expenseAmount: expenseAmount,
				expenseName: expenseName,
				expenseDate: expenseDate.toLocaleDateString(),
				paidWithWhat: paidWithWhat,
				description: description,
			})
		);
		dispatch(
			updateSuccessScreen({
				budgetName: budgetName,
				budgetHeading: 'New Expense Created!',
				budgetDescription: `At ${expenseDate}, you paid ${formatter.format(
					parseFloat(expenseAmount)
				)} for ${expenseName} with ${paidWithWhat}.`,
			})
		);
	};

	return (
		<SafeAreaView>
			<BudgetNameHeading />
			<Text style={tw`p-5 text-lg font-bold`}>New Expense</Text>
			<View style={tw`items-center justify-center`}>
				<View style={tw`m-2`}>
					<View style={tw`flex-row`}>
						<Text style={tw`text-8 mr-2`}>1/3</Text>
						<Text style={tw`text-lg ml-2 mt-2`}>How much?</Text>
					</View>
					<TextInput
						style={tw`bg-gray-200 w-80 m-5 rounded-lg`}
						onChangeText={(text) => setExpenseAmount(text)}
						value={expenseAmount}
						placeholder="Enter the amount here..."
					/>
				</View>
				<View style={tw`m-2`}>
					<View style={tw`flex-row`}>
						<Text style={tw`text-8 mr-2`}>2/3</Text>
						<Text style={tw`text-lg ml-2 mt-2`}>What for?</Text>
					</View>
					<TextInput
						style={tw`bg-gray-200 w-80 m-5 rounded-lg`}
						onChangeText={(text) => setExpenseName(text)}
						value={expenseName}
						placeholder="Write a short description of the expense..."
					/>
				</View>
				<View style={tw`m-2`}>
					<View style={tw`flex-row`}>
						<Text style={tw`text-8 mr-2`}>3/3</Text>
						<Text style={tw`text-lg ml-2 mt-2`}>Paid with what?</Text>
					</View>
					<TextInput
						style={tw`bg-gray-200 w-80 m-5 rounded-lg`}
						onChangeText={(text) => setPaidWithWhat(text)}
						value={paidWithWhat}
						placeholder="Name it something cool..."
					/>
				</View>
				<Button
					icon="plus"
					mode="contained"
					onPress={() => {
						updateExpense();
						navigation.navigate('SuccessScreen');
					}}
					style={tw`ml-4 w-40`}
				>
					Save
				</Button>
			</View>
		</SafeAreaView>
	);
};

export default NewExpenseScreen;

const styles = StyleSheet.create({});
