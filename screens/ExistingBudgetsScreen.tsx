import {
	FlatList,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { CreateBudgetStackParamList } from './CreateBudgetScreen';
import { useDispatch } from 'react-redux';
import { createBudget } from '../data_layer/budgetSlice';
import { updateSuccessScreen } from '../data_layer/successSlice';
import storage from '../data_layer/storage';
import React, { useEffect, useState } from 'react';
import tw from 'twrnc';

import BudgetTrackerLogo from '../components/BudgetTrackerLogo';

const formatter = new Intl.NumberFormat('ja-JP', {
	style: 'currency',
	currency: 'JPY',
});

const ExistingBudgetsScreen = () => {
	const dispatch = useDispatch();
	const navigation =
		useNavigation<StackNavigationProp<CreateBudgetStackParamList>>();
	const [data, setData] = useState([]);

	const getExistingBudgets = async () => {
		const existingBudgets = await storage.load({
			key: 'budgets',
		});
		setData(existingBudgets);
	};

	const loadSelectedBudget = (name: string) => {
		storage
			.load({
				key: 'budgets',
			})
			.then((res) => {
				res.forEach((obj) => {
					if (obj.budgetName === name) {
						console.log(obj.budgetAmount);
						dispatch(
							createBudget({
								budgetName: obj.budgetName,
								budgetAmount: obj.budgetAmount,
								budgetDuration: {
									startDate: obj.budgetDuration.startDate.toLocaleDateString(),
									endDate: obj.budgetDuration.endDate.toLocaleDateString(),
									duration: obj.budgetDuration.duration,
								},
								status: 'active',
							})
						);
						return true;
					}
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		getExistingBudgets();
	}, []);

	return (
		<SafeAreaView>
			<BudgetTrackerLogo />
			<View style={tw`flex-row justify-center`}>
				<Text style={tw`pt-2`}>Choose from existing</Text>
				<Icon
					style={tw`p-1 w-10`}
					type="antdesign"
					name="setting"
					color="black"
				/>
			</View>
			<View style={tw`items-center h-1/2`}>
				<FlatList
					data={data}
					keyExtractor={(item) => item.budgetName}
					renderItem={({ item }) => (
						<TouchableOpacity
							style={tw`p-2 pl-6 pt-4 pb-4 bg-gray-200 m-2 w-80 items-center rounded-full`}
							onPress={() => {
								loadSelectedBudget(item.budgetName);
								navigation.navigate('SuccessScreen');
							}}
						>
							<View>
								<Text style={tw`text-m font-semibold`}>{item.budgetName}</Text>
								<Text>{formatter.format(item.budgetAmount)}</Text>
								<Text>
									{item.budgetDuration.startDate} -{' '}
									{item.budgetDuration.endDate}
								</Text>
								<Text>Status: {item.status}</Text>
							</View>
						</TouchableOpacity>
					)}
				/>
			</View>
			<View style={tw`items-center`}>
				<TouchableOpacity
					onPress={() => navigation.navigate('MainScreen')}
					style={tw`flex-row mr-10`}
				>
					<Icon
						style={tw`p-1 w-10`}
						type="antdesign"
						name="arrowleft"
						color="black"
					/>
					<Text style={tw`text-lg`}>Back</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default ExistingBudgetsScreen;
