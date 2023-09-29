import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import tw from 'twrnc';

import { CreateBudgetStackParamList } from '../CreateBudgetScreen';
import { Button } from 'react-native-paper';
import { DatePickerModal } from 'react-native-paper-dates';

type RangeDateProps = {
	startDate: Date | undefined;
	endDate: Date | undefined;
};

const ThirdQuestionScreen = () => {
	const navigation =
		useNavigation<StackNavigationProp<CreateBudgetStackParamList>>();
	const [range, setRange] = React.useState<RangeDateProps>({
		startDate: new Date(),
		endDate: new Date(),
	});
	const [open, setOpen] = React.useState(false);

	const onDismiss = React.useCallback(() => {
		setOpen(false);
	}, [setOpen]);

	const onConfirm = React.useCallback(
		({ startDate, endDate }) => {
			setOpen(false);
			setRange({ startDate, endDate });
			console.log(range);
		},
		[setOpen, setRange]
	);

	const onSubmit = () => {
		{
			console.log('submitted');
		}
		return true;
	};

	return (
		<View style={tw`items-center m-5`}>
			<Text style={tw`text-10`}>3/3</Text>
			<Text style={tw`text-lg`}>What is the duration for tracking?</Text>
			<Button
				onPress={() => setOpen(true)}
				uppercase={false}
				mode="outlined"
				style={tw`m-5`}
			>
				Pick range
			</Button>
			<View style={tw`m-5`}>
				<Text>
					{range?.startDate && range?.endDate
						? `From: ${range.startDate.toLocaleDateString()} To: ${range.endDate.toLocaleDateString()}`
						: ''}
				</Text>
			</View>
			<DatePickerModal
				locale="en"
				mode="range"
				visible={open}
				onDismiss={onDismiss}
				startDate={range.startDate}
				endDate={range.endDate}
				onConfirm={onConfirm}
				presentationStyle="pageSheet"
				label="Select dates"
			/>
			<View style={tw`flex-row`}>
				<TouchableOpacity
					onPress={() => navigation.navigate('SecondQuestionScreen')}
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
					onPress={() =>
						onSubmit() ? navigation.navigate('SuccessScreen') : null
					}
					style={tw`flex-row ml-10`}
					disabled={
						range.startDate === undefined || range.endDate === undefined
					}
				>
					<Icon
						style={tw`p-1 w-10`}
						type="antdesign"
						name="check"
						color="black"
					/>
					<Text style={tw`text-lg`}>Submit</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default ThirdQuestionScreen;

const styles = StyleSheet.create({});
