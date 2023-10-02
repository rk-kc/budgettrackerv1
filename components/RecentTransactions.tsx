import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { useSelector } from 'react-redux';
import React from 'react';
import tw from 'twrnc';

const formatter = new Intl.NumberFormat('ja-JP', {
	style: 'currency',
	currency: 'JPY',
});

const RecentTransactions = () => {
	const expenses = useSelector((state: any) => state.budget.expenses);

	return (
		<SafeAreaView>
			<View style={tw`mt-5`}>
				<View style={tw`flex-row border-b p-3 border-gray-400`}>
					<Icon
						style={tw`p-1 w-10`}
						type="antdesign"
						name="clockcircle"
						color="black"
					/>
					<Text style={tw`pt-1 font-bold text-5`}>Recent Transactions</Text>
				</View>
				<View>
					<FlatList
						data={expenses ?? []}
						keyExtractor={(item) => item.expenseName}
						ItemSeparatorComponent={() => (
							<View style={[tw`bg-gray-200`, { height: 0.5 }]} />
						)}
						renderItem={({ item }) => (
							<SafeAreaView>
								<View style={tw`flex-row items-center p-5`}>
									<Icon
										style={tw`p-3 bg-gray-300 rounded-full mr-4`}
										type="antdesign"
										name="creditcard"
										color="white"
									/>
									<View style={tw`text-overflow-ellipsis`}>
										<Text style={tw`flex flex-wrap flex-dir-row font-semibold`}>
											{`At ${item.expenseDate}, you paid ${formatter.format(
												parseFloat(item.expenseAmount)
											)} for ${item.expenseName} with ${item.paidWithWhat}.`}
										</Text>
										<Text style={tw`text-gray-500`}>{item.description}</Text>
									</View>
								</View>
							</SafeAreaView>
						)}
					/>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default RecentTransactions;
