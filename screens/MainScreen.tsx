import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';

import MainOptions from '../components/MainOptions';
import BudgetTrackerLogo from '../components/BudgetTrackerLogo';

const MainScreen = () => {
	return (
		<SafeAreaView>
			<BudgetTrackerLogo />
			<View style={tw`items-center p-10`}>
				<Text>Good day! What would you like to do today?</Text>
			</View>
			<View style={tw`items-center`}>
				<MainOptions />
			</View>
		</SafeAreaView>
	);
};

export default MainScreen;

const styles = StyleSheet.create({});
