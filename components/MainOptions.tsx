import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';
import React from 'react';
import tw from 'twrnc';

type MainOptionsDataProps = {
	id: string;
	title: string;
	screen: any;
};

const data: MainOptionsDataProps[] = [
	{
		id: 'MainOption1',
		title: 'Create new budget',
		screen: 'CreateBudgetScreen',
	},
	{
		id: 'MainOption2',
		title: 'Choose from existing',
		screen: 'ExistingBudgets',
	},
];

const MainOptions = () => {
	const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

	return (
		<FlatList
			data={data}
			keyExtractor={(item) => item.id}
			renderItem={({ item }) => (
				<TouchableOpacity
					style={tw`p-2 pl-6 pt-4 pb-4 bg-gray-200 m-2 w-80 items-center rounded-full`}
					onPress={() => navigation.navigate(item.screen)}
				>
					<View>
						{/* <View style={tw`${!origin && 'opacity-20'}`}> */}
						<Text style={tw`text-m font-semibold`}>{item.title}</Text>
					</View>
				</TouchableOpacity>
			)}
		/>
	);
};

export default MainOptions;
