import { Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useDispatch } from 'react-redux';
import { createBudget } from '../../data_layer/budgetSlice';
import React from 'react';
import tw from 'twrnc';

import { CreateBudgetStackParamList } from '../CreateBudgetScreen';

const FirstQuestionScreen = () => {
	const navigation =
		useNavigation<StackNavigationProp<CreateBudgetStackParamList>>();
	const [value, onChangeText] = React.useState<string>('');

	const dispatch = useDispatch();

	const updateBudgetName = () => {
		dispatch(
			createBudget({
				budgetName: value,
				budgetAmount: '',
				budgetDuration: {
					startDate: '',
					endDate: '',
					duration: 0,
				},
			})
		);
	};

	return (
		<View style={tw`items-center m-5`}>
			<Text style={tw`text-10`}>1/3</Text>
			<Text style={tw`text-lg`}>What would we name this budget?</Text>
			<TextInput
				style={tw`bg-gray-200 w-80 p-2 m-5 rounded-lg`}
				onChangeText={(text) => onChangeText(text)}
				value={value}
				placeholder="Name it something cool..."
			/>
			<View style={tw`flex-row`}>
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
				<TouchableOpacity
					style={tw`flex-row ml-10`}
					onPress={() => {
						updateBudgetName();
						navigation.navigate('SecondQuestionScreen');
					}}
					disabled={value === ''}
				>
					<Icon
						style={tw`p-1 w-10`}
						type="antdesign"
						name="arrowright"
						color="black"
					/>
					<Text style={tw`text-lg`}>Next</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default FirstQuestionScreen;
