import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	TouchableOpacity,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';
import BudgetNameHeading from '../../components/BudgetNameHeading';
import RemainingBudget from '../../components/RemainingBudget';
import React from 'react';
import tw from 'twrnc';

import NewExpenseScreen from './NewExpenseScreen';
import RecentTransactions from '../../components/RecentTransactions';

const BudgetHomeScreen = () => {
	const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
	return (
		<SafeAreaView>
			<BudgetNameHeading />
			<RemainingBudget />
			<View style={tw`flex-row justify-center`}>
				<Button
					icon="plus"
					mode="contained"
					onPress={() => navigation.navigate('NewExpenseScreen')}
					style={tw`mr-4 font-bold w-40`}
				>
					Expense
				</Button>
				<Button
					icon="close"
					mode="contained"
					onPress={() => console.log('Pressed')}
					style={tw`ml-4 w-40`}
				>
					Close
				</Button>
			</View>
			<View style={tw`flex`}>
				<RecentTransactions />
			</View>
		</SafeAreaView>
	);
};

export default BudgetHomeScreen;

const styles = StyleSheet.create({});
