import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
//Create Stack to represent as a View loading a component
import { createStackNavigator } from '@react-navigation/stack'
//Create tabs and show it from bottom
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
//Create common pattern menu appear from left
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../components/Home'
import FavouriteProperties from '../components/FavouritesProperties'
import Login from '../login/Login'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { UIColors } from '../constants/colors'

export const navigationRef = React.createRef()

const Stack = createStackNavigator()
const Tab = createMaterialBottomTabNavigator()
const Drawer = createDrawerNavigator()

const AppNavigator = () =>
    <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName="Main" headerMode="none">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Main" component={DrawerNavigatior} />
        </Stack.Navigator>
    </NavigationContainer>

const DrawerNavigatior = () =>
    <Drawer.Navigator >
        <Drawer.Screen name="Menu" component={MainTabNavigator} />
    </Drawer.Navigator>

const MainTabNavigator = () =>
    <Tab.Navigator
        activeColor={UIColors.white}
        inactiveColor={UIColors.greyStrong2}
        barStyle={{ backgroundColor: UIColors.violetOfficalColor }}
        screenOptions={({ route }) => TabScreenOptions(route)}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Favourite Properties" component={FavouriteProperties} />
    </Tab.Navigator>

//Tab options
const TabScreenOptions = route => ({
    tabBarLabel: route.name,
    tabBarIcon: ({ color }) => (
        <Icon name={tabsIcon(route.name)} color={color} size={26} />
    ),
})

const tabsIcon = route => {
    switch (route) {
        case 'Home':
            return 'home'
        case 'Favourite Properties':
            return 'heart'
        default:
            return 'dog'
    }
}

export default AppNavigator