import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
//Create Stack to represent as a View loading a component
import { createStackNavigator } from '@react-navigation/stack'
//Create tabs and show it from bottom
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
//Create common pattern menu appear from left
import { createDrawerNavigator } from '@react-navigation/drawer'
import { STACK_NAMES, DRAWER_NAMES, TAB_NAMES } from '../constants/navigation'
import Home from '../components/Home'
import FavouriteProperties from '../containers/FavouriteProperties'
import Login from '../login/Login'
import SignIn from '../login/SignIn'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { UIColors } from '../constants/colors'

export const navigationRef = React.createRef()

const Stack = createStackNavigator()
const Tab = createMaterialBottomTabNavigator()
const Drawer = createDrawerNavigator()

const { MENU } = STACK_NAMES
const {MAIN, LOGIN } = DRAWER_NAMES
const { SIGN_IN, SIGN_UP, HOME, FAVOURITE_PROPERTIES } = TAB_NAMES

const AppNavigator = () =>
    <NavigationContainer ref={navigationRef}>
        <Stack.Navigator headerMode="none">
            <Stack.Screen name={MENU} component={DrawerNavigatior} />
        </Stack.Navigator>
    </NavigationContainer>

const DrawerNavigatior = () =>
    <Drawer.Navigator >
        <Drawer.Screen name={MAIN} component={MainTabNavigator} />
        <Drawer.Screen name={LOGIN} component={LoginTabNavigator} />
    </Drawer.Navigator>

const LoginTabNavigator = () =>
    <Tab.Navigator
        initialRouteName={SIGN_IN}
        screenOptions={({ route }) => TabScreenOptions(route)}
    >
        <Tab.Screen name={SIGN_IN} component={SignIn} />
        <Tab.Screen name={SIGN_UP} component={Login} />
    </Tab.Navigator>

const MainTabNavigator = () =>
    <Tab.Navigator
        initialRouteName={HOME}
        activeColor={UIColors.white}
        inactiveColor={UIColors.greyStrong2}
        barStyle={{ backgroundColor: UIColors.violetOfficalColor }}
        screenOptions={({ route }) => TabScreenOptions(route)}
    >
        <Tab.Screen name={HOME} component={Home} />
        <Tab.Screen name={FAVOURITE_PROPERTIES} component={FavouriteProperties} />
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
        case HOME:
            return 'home-group'
        case FAVOURITE_PROPERTIES:
            return 'heart'
        case SIGN_UP:
            return 'account-plus'
        case SIGN_IN:
            return 'login'
        default:
            return 'dog'
    }
}

const getHeaderTitle = route => {
    switch (route) {
        case SIGN_UP:
            return 'Sign Up'
        case SIGN_IN:
            return 'Sign In'
        case FAVOURITE_PROPERTIES:
            return 'Favourite Properties'
        default:
            return route
    }
}

export default AppNavigator