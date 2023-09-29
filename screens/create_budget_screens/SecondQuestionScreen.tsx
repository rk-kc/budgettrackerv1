import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Icon } from 'react-native-elements';
import React from 'react';
import tw from 'twrnc';

import { CreateBudgetStackParamList } from '../CreateBudgetScreen';

const SecondQuestionScreen = () => {
	const navigation =
		useNavigation<StackNavigationProp<CreateBudgetStackParamList>>();
	const [value, onChangeText] = React.useState('Useless Placeholder');

	return (
		<View style={tw`items-center m-5`}>
			<Text style={tw`text-10`}>2/3</Text>
			<Text style={tw`text-lg`}>How much is the budget amount?</Text>
			<TextInput
				style={tw`bg-gray-200 w-80 p-2 m-5 rounded-lg`}
				onChangeText={(text) => onChangeText(text)}
				value={value}
			/>
			<View style={tw`flex-row`}>
				<TouchableOpacity
					onPress={() => navigation.navigate('ThirdQuestionScreen')}
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
