import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Icon } from 'react-native-elements';
import React from 'react';
import tw from 'twrnc';

const SuccessScreen = () => {
	return (
		<SafeAreaView>
			<Icon
				style={tw`p-1 w-10`}
				type="fontawesome6"
				name="circle-check"
				color="black"
			/>
			<Text>SuccessScreen</Text>
		</SafeAreaView>
	);
};

export default SuccessScreen;

const styles = StyleSheet.create({});
