import { StyleSheet, Text, View } from 'react-native';
import { BottomNavigation } from 'react-native-paper';
import React from 'react';
import tw from 'twrnc';
import BudgetHomeScreen from './budget_home_screens/BudgetHomeScreen';
import BudgetTransactionScreen from './budget_home_screens/BudgetTransactionScreen';
import ViewBudgetsScreen from './budget_home_screens/ViewBudgetsScreen';
import SettingsScreen from './budget_home_screens/SettingsScreen';
import NewExpenseScreen from './budget_home_screens/NewExpenseScreen';

const HomeScreenBase = () => {
	const [index, setIndex] = React.useState(0);
	const [routes] = React.useState([
		{
			key: 'home',
			title: 'Home',
			focusedIcon: 'home',
			unfocusedIcon: 'home-outline',
		},
		{
			key: 'transactions',
			title: 'Recents',
			focusedIcon: 'history',
			unfocusedIcon: 'history',
		},
		{
			key: 'newExpense',
			title: 'Expense',
			focusedIcon: 'plus',
			unfocusedIcon: 'plus-circle',
		},
		{
			key: 'budgets',
			title: 'Budgets',
			focusedIcon: 'file',
			unfocusedIcon: 'file-outline',
		},
		{
			key: 'settings',
			title: 'Settings',
			focusedIcon: 'cog',
			unfocusedIcon: 'cog-outline',
		},
	]);

	const renderScene = BottomNavigation.SceneMap({
		home: BudgetHomeScreen,
		transactions: BudgetTransactionScreen,
		newExpense: NewExpenseScreen,
		budgets: ViewBudgetsScreen,
		settings: SettingsScreen,
	});

	return (
		<View style={tw`flex-1`}>
			<BottomNavigation
				navigationState={{ index, routes }}
				onIndexChange={setIndex}
				renderScene={renderScene}
			/>
		</View>
	);
};

export default HomeScreenBase;
