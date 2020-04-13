import React from 'react'
import { View, Text } from 'react-native'
import { ThemeProvider } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome5'
//import provider to connect component to redux store.
import { Provider } from 'react-redux'
//import your store to connect your component.
import store from './store'
//import all you need to use react-navigation
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
//Create Stack to represent as a View loading a component
//import { createStackNavigator } from '@react-navigation/stack'
//Create tabs and show it from bottom
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Home from './components/Home'
import { UIColors } from './constants/colors'

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator()

const App = () => (
  <Provider store={store}>
    <ThemeProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          activeColor={UIColors.white}
          inactiveColor={UIColors.greyStrong2}
          barStyle={{ backgroundColor: UIColors.violetOfficalColor }}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
                <Icon name="home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Details"
            component={DetailsScreen}
             options={{
              tabBarLabel: 'Details of example',
              tabBarIcon: ({ color }) => (
                <Icon name="bell" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  </Provider>
)

export default App;
