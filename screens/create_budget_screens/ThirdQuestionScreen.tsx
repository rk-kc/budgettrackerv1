import { Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';
import { createBudget } from '../../data_layer/budgetSlice';
import { updateSuccessScreen } from '../../data_layer/successSlice';
import storage from '../../data_layer/storage';
import React, { useState, useEffect } from 'react';
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
	const [range, setRange] = useState<RangeDateProps>({
		startDate: new Date(),
		endDate: new Date(),
	});
	const [duration, setDuration] = useState(0);
	const [open, setOpen] = useState(false);
	const dispatch = useDispatch();
	const budget = useSelector((state: any) => state.budget);

	const onDismiss = React.useCallback(() => {
		setOpen(false);
	}, [setOpen]);

	const onConfirm = ({ startDate, endDate }) => {
		setOpen(false);
		setRange({ startDate, endDate });
		setDuration(getDurationBetweenDates(startDate, endDate));
	};

	const getDurationBetweenDates = (date1: Date, date2: Date) => {
		const diffInTime = date2.getTime() - date1.getTime();
		const diffInDays = diffInTime / (1000 * 3600 * 24);
		return Math.ceil(diffInDays);
	};

	const onSubmit = () => {
		dispatch(
			createBudget({
				budgetName: budget.budgetName,
				budgetAmount: budget.budgetAmount,
				budgetDuration: {
					startDate: range.startDate.toLocaleDateString(),
					endDate: range.endDate.toLocaleDateString(),
					duration: duration,
				},
				status: 'active',
			})
		);
		dispatch(
			updateSuccessScreen({
				budgetName: budget.budgetName,
				budgetHeading: 'New Budget Created!',
				budgetDescription:
					'You can always change the settings in the View Budgets page.',
			})
		);
		storage.save({
			key: 'budgets',
			data: [
				{
					budgetName: budget.budgetName,
					budgetAmount: budget.budgetAmount,
					budgetDuration: {
						startDate: range.startDate.toLocaleDateString(),
						endDate: range.endDate.toLocaleDateString(),
						duration: duration,
					},
					status: 'active',
				},
			],
		});
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
