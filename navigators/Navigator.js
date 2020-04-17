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
import SignIn from '../login/SignIn'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { UIColors } from '../constants/colors'

export const navigationRef = React.createRef()

const Stack = createStackNavigator()
const Tab = createMaterialBottomTabNavigator()
const Drawer = createDrawerNavigator()

const AppNavigator = () =>
    <NavigationContainer ref={navigationRef}>
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Menu" component={DrawerNavigatior} />
        </Stack.Navigator>
    </NavigationContainer>

const DrawerNavigatior = () =>
    <Drawer.Navigator >
        <Drawer.Screen name="Main" component={MainTabNavigator} />
        <Drawer.Screen name="Login" component={LoginTabNavigator} />
    </Drawer.Navigator>

const LoginTabNavigator = () =>
    <Tab.Navigator
        initialRouteName="Signin"
        screenOptions={({ route }) => TabScreenOptions(route)}
    >
        <Tab.Screen name="Signup" component={Login} />
        <Tab.Screen name="Signin" component={SignIn} />
    </Tab.Navigator>

const MainTabNavigator = () =>
    <Tab.Navigator
        initialRouteName="Home"
        activeColor={UIColors.white}
        inactiveColor={UIColors.greyStrong2}
        barStyle={{ backgroundColor: UIColors.violetOfficalColor }}
        screenOptions={({ route }) => TabScreenOptions(route)}
    >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="FavouriteProperties" component={FavouriteProperties} />
    </Tab.Navigator>

//Tab options
const TabScreenOptions = route => ({
    tabBarLabel: getHeaderTitle(route.name),
    tabBarIcon: ({ color }) => (
        <Icon name={tabsIcon(route.name)} color={color} size={26} />
    ),
})

const tabsIcon = route => {
    switch (route) {
        case 'Home':
            return 'home-group'
        case 'FavouriteProperties':
            return 'heart'
        case 'Signup':
            return 'account-plus'
        case 'Signin':
            return 'login'
        default:
            return 'dog'
    }
}

const getHeaderTitle = route => {
    switch (route) {
        case 'Signup':
            return 'Sign Up'
        case 'Signin':
            return 'Sign In'
        case 'FavouriteProperties':
            return 'Favourite Properties'
        default:
            return route
    }
}

export default AppNavigator