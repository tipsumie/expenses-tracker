import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS } from './constants';
import { Ionicons } from '@expo/vector-icons';
import IconButton from './components/UI/IconButton';

import { store } from './store/store';
import { Provider } from 'react-redux';

import ManageExpense from './screens/ManageExpense';
import AllExpense from './screens/AllExpense';
import RecentExpense from './screens/RecentExpense';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const OverviewExpense = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: COLORS.primary500 },
        headerTintColor: '#FFFFFF',
        tabBarStyle: { backgroundColor: COLORS.primary500 },
        tabBarActiveTintColor: COLORS.accent500,
        headerRight: ({ tintColor }) => (
          <IconButton
            icon='add'
            size={24}
            color={tintColor}
            onPress={() => {
              navigation.navigate('ManageExpense');
            }}
          />
        ),
      })}
    >
      <BottomTab.Screen
        name='RecentExpense'
        component={RecentExpense}
        options={{
          title: 'Recent Expense',
          tabBarLabel: 'Recent',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='hourglass' size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name='AllExpense'
        component={AllExpense}
        options={{
          title: 'All Expense',
          tabBarLabel: 'All',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='calendar' size={size} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

function App() {
  return (
    <>
      <StatusBar style='auto' />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: COLORS.primary500 },
            headerTintColor: '#FFFFFF',
          }}
        >
          <Stack.Screen
            name='OverviewExpense'
            component={OverviewExpense}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='ManageExpense'
            component={ManageExpense}
            options={{ title: 'Manage Expense', presentation: 'modal' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
