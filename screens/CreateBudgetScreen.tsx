import { Text, View, SafeAreaView } from 'react-native';
import { Icon } from 'react-native-elements';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import tw from 'twrnc';

import BudgetTrackerLogo from '../components/BudgetTrackerLogo';

import FirstQuestionScreen from './create_budget_screens/FirstQuestionScreen';
import SecondQuestionScreen from './create_budget_screens/SecondQuestionScreen';
import ThirdQuestionScreen from './create_budget_screens/ThirdQuestionScreen';

export type CreateBudgetStackParamList = {
	FirstQuestionScreen: undefined;
	SecondQuestionScreen: undefined;
	ThirdQuestionScreen: undefined;
	MainScreen: undefined;
	SuccessScreen: undefined;
};

const CreateBudgetScreen = () => {
	const Stack = createNativeStackNavigator();
	return (
		<SafeAreaView>
			<BudgetTrackerLogo />
			<View style={tw`flex-row justify-center`}>
				<Text style={tw`pt-2`}>Create New Budget</Text>
				<Icon
					style={tw`p-1 w-10`}
					type="antdesign"
					name="setting"
					color="black"
				/>
			</View>
			<View style={tw`h-1/2`}>
				<Stack.Navigator>
					<Stack.Screen
						name="FirstQuestionScreen"
						component={FirstQuestionScreen}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="SecondQuestionScreen"
						component={SecondQuestionScreen}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="ThirdQuestionScreen"
						component={ThirdQuestionScreen}
						options={{ headerShown: false }}
					/>
				</Stack.Navigator>
			</View>
		</SafeAreaView>
	);
};

export default CreateBudgetScreen;
