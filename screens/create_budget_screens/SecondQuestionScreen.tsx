import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Icon } from 'react-native-elements';
import React from 'react';
import tw from 'twrnc';

import { CreateBudgetStackParamList } from '../CreateBudgetScreen';

const SecondQuestionScreen = () => {
	const navigation =
		useNavigation<StackNavigationProp<CreateBudgetStackParamList>>();
	const [value, onChangeText] = React.useState<string>('');

	return (
		<View style={tw`items-center m-5`}>
			<Text style={tw`text-10`}>2/3</Text>
			<Text style={tw`text-lg`}>How much is the budget amount?</Text>
			<TextInput
				style={tw`bg-gray-200 w-80 p-2 m-5 rounded-lg`}
				onChangeText={(text) => onChangeText(text)}
				value={value}
				placeholder="Numbers only please.."
				keyboardType="number-pad"
			/>
			<View style={tw`flex-row`}>
				<TouchableOpacity
					onPress={() => navigation.navigate('FirstQuestionScreen')}
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
					onPress={() => navigation.navigate('ThirdQuestionScreen')}
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

export default SecondQuestionScreen;

const styles = StyleSheet.create({});
