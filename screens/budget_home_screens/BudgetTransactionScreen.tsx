import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import BudgetNameHeading from '../../components/BudgetNameHeading';
import RecentTransactions from '../../components/RecentTransactions';
import React from 'react';

const BudgetTransactionScreen = () => {
	return (
		<SafeAreaView>
			<View>
				<BudgetNameHeading />
			</View>
			<View>
				<RecentTransactions />
			</View>
		</SafeAreaView>
	);
};

export default BudgetTransactionScreen;

const styles = StyleSheet.create({});
