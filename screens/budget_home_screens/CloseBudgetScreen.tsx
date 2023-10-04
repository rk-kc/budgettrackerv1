import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { CreateBudgetStackParamList } from '../CreateBudgetScreen';
import { updateBudgetStatus } from '../../data_layer/budgetSlice';
import { updateSuccessScreen } from '../../data_layer/successSlice';
import BudgetNameHeading from '../../components/BudgetNameHeading';
import RemainingBudget from '../../components/RemainingBudget';

import React from 'react';
import tw from 'twrnc';

const CloseBudgetScreen = () => {
	const navigation =
		useNavigation<StackNavigationProp<CreateBudgetStackParamList>>();
	const dispatch = useDispatch();
	const budget = useSelector((state: any) => state.budget);

	const updateStatus = () => {
		dispatch(updateBudgetStatus('completed'));
		dispatch(
			updateSuccessScreen({
				budgetName: budget.budgetName,
				budgetHeading: `${budget.budgetName} is now closed!`,
			})
		);
	};

	return (
		<SafeAreaView>
			<BudgetNameHeading />
			<RemainingBudget />
			<View style={tw`items-center`}>
				<Text style={tw`text-lg p-5`}>
					Are you sure you want to close this budget?
				</Text>
				<Text style={tw`p-5`}>
					You won't be able to add new expenses once this is marked closed.
				</Text>
			</View>

			<View style={tw`flex-row justify-center`}>
				<Button
					icon="check"
					mode="contained"
					onPress={() => {
						updateStatus();
						navigation.navigate('SuccessScreen');
					}}
					style={tw`mr-4 font-bold w-40`}
				>
					Yes
				</Button>
				<Button
					icon="close"
					mode="contained"
					onPress={() => navigation.navigate('HomeScreenBase')}
					style={tw`ml-4 w-40`}
				>
					No
				</Button>
			</View>
		</SafeAreaView>
	);
};

export default CloseBudgetScreen;

const styles = StyleSheet.create({});
