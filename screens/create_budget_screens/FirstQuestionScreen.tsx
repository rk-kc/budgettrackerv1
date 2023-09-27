import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import tw from 'twrnc';

import { CreateBudgetStackParamList } from '../CreateBudgetScreen';

const FirstQuestionScreen = () => {
	const navigation =
		useNavigation<StackNavigationProp<CreateBudgetStackParamList>>();
	const [value, onChangeText] = React.useState('Useless Placeholder');

	return (
		<View style={tw`items-center m-5`}>
			<Text style={tw`text-10`}>1/3</Text>
			<Text style={tw`text-lg`}>What would we name this budget?</Text>
			<TextInput
				style={tw`bg-gray-200 w-80 p-2 m-5 rounded-lg`}
				onChangeText={(text) => onChangeText(text)}
				value={value}
			/>
			<View style={tw`flex-row`}>
				<TouchableOpacity
					onPress={() => navigation.navigate('SecondQuestionScreen')}
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

const styles = StyleSheet.create({});
