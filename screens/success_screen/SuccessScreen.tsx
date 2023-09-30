import { Image, Text, View, SafeAreaView } from 'react-native';
import { Button } from 'react-native-paper';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import React from 'react';
import tw from 'twrnc';
import kloudcoreIcon from './../../assets/kloudcore-color.png';
import { CreateBudgetStackParamList } from '../CreateBudgetScreen';

const SuccessScreen = () => {
	const navigation =
		useNavigation<StackNavigationProp<CreateBudgetStackParamList>>();
	const message = useSelector((state: any) => state.success);
	// Get the budget details as well to display on the success screen
	const budget = useSelector((state: any) => state.budget);
	const formatter = new Intl.NumberFormat('ja-JP', {
		style: 'currency',
		currency: 'JPY',
	});

	return (
		<SafeAreaView>
			<View style={tw`items-center`}>
				<Image
					style={{ width: 120, height: 120, resizeMode: 'contain' }}
					source={kloudcoreIcon}
				/>
			</View>
			<View style={tw`items-center pt-10 border-t border-gray-400`}>
				<Icon
					style={tw`p-1 text-center mt-4`}
					containerStyle={tw`bg-green-400 rounded-full w-30 h-30`}
					type="feather"
					name="check"
					color="white"
					size={80}
				/>
				<Text style={tw`text-8 p-5 m-5`}>{message.budgetHeading}</Text>
				<View style={tw`flex items-center`}>
					<Text style={tw`text-6 p-1`}>{budget.budgetName}</Text>
					<Text style={tw`text-6 p-1`}>
						{formatter.format(budget.budgetAmount ?? '')}
					</Text>
					<Text style={tw`text-4 p-1`}>
						{budget.budgetDuration.startDate} - {budget.budgetDuration.endDate}{' '}
						({budget.budgetDuration.duration} days)
					</Text>
				</View>

				<Text style={tw`text-4 p-5 m-5`}>{message.budgetDescription}</Text>
			</View>
			<View style={tw`items-center mt-10`}>
				<Button
					// icon="camera"
					mode="contained"
					onPress={() => navigation.navigate('HomeScreenBase')}
					style={tw`w-70 bg-gray-400`}
				>
					Continue to App
				</Button>
			</View>
		</SafeAreaView>
	);
};

export default SuccessScreen;
