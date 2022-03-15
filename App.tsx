import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme'
import {
  StartScreen,
  ResetPasswordScreen,
  Dashboard,
  Dashboard1,
} from './src/screens'
import TabOneScreen from './src/screens/TabOneScreen'
import TabTwoScreen from './src/screens/TabTwoScreen'

const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false,
          }}
          >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="TabOneScreen" component={TabOneScreen} />
          <Stack.Screen name="TabTwoScreen" component={TabTwoScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Dashboard1" component={Dashboard1} />
          
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
