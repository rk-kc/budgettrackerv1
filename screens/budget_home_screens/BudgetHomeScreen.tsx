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

import RecentTransactions from '../../components/RecentTransactions';

const BudgetHomeScreen = () => {
	const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
	return (
		<SafeAreaView>
			<BudgetNameHeading />
			<RemainingBudget />
			<View style={tw`flex-row justify-center`}>
				<Button
					icon="close"
					mode="contained"
					onPress={() => navigation.navigate('CloseBudgetScreen')}
					style={tw`ml-4 w-40`}
				>
					Close Budget
				</Button>
			</View>
			<RecentTransactions />
		</SafeAreaView>
	);
};

export default BudgetHomeScreen;

const styles = StyleSheet.create({});
