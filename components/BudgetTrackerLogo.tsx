import { Text, View, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import kloudcoreIcon from './../assets/kloudcore-color.png';

const BudgetTrackerLogo = () => {
	return (
		<View style={tw`items-center p-10`}>
			<Image
				style={{ width: 120, height: 120, resizeMode: 'contain' }}
				source={kloudcoreIcon}
			/>
			<Text style={tw`text-8 font-semibold`}>Budget Tracker</Text>
		</View>
	);
};

export default BudgetTrackerLogo;
