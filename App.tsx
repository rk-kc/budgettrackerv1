// For redux
import store from './data_layer/store';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Import screens here
import MainScreen from './screens/MainScreen';
import CreateBudgetScreen from './screens/CreateBudgetScreen';
import SuccessScreen from './screens/success_screen/SuccessScreen';

export type RootStackParamList = {
	MainScreen: undefined;
	CreateBudgetScreen: undefined;
	SuccessScreen: undefined;
};

export default function App() {
	const Stack = createNativeStackNavigator();

	return (
		<Provider store={store}>
			<NavigationContainer>
				<SafeAreaProvider>
					<Stack.Navigator>
						<Stack.Screen
							name="MainScreen"
							component={MainScreen}
							options={{ headerShown: false }}
						/>
						<Stack.Screen
							name="CreateBudgetScreen"
							component={CreateBudgetScreen}
							options={{ headerShown: false }}
						/>
						<Stack.Screen
							name="SuccessScreen"
							component={SuccessScreen}
							options={{ headerShown: false }}
						/>
					</Stack.Navigator>
				</SafeAreaProvider>
			</NavigationContainer>
		</Provider>
	);
}
