import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
//Create Stack to represent as a View loading a component
import { createStackNavigator } from '@react-navigation/stack'
//Create tabs and show it from bottom
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
//Create common pattern menu appear from left
import { createDrawerNavigator } from '@react-navigation/drawer'
// DrawerContentScrollView,
// DrawerItemList,
// DrawerItem,
import { STACK_NAMES, DRAWER_NAMES, TAB_NAMES } from '../constants/navigation'
import Home from '../components/Home'
import FavouriteProperties from '../containers/FavouriteProperties'
import Visits from '../components/Visits'
import SignUp from '../login/SignUp'
import SignIn from '../login/SignIn'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { UIColors } from '../constants/colors'
import MainProperty from '../containers/MainProperty'
import BookVisit from '../containers/BookVisit'

export const navigationRef = React.createRef()

const Stack = createStackNavigator()
const Tab = createMaterialBottomTabNavigator()
const Drawer = createDrawerNavigator()

const { MENU, MAIN_PROPERTY, BOOK_VISIT } = STACK_NAMES
const { MAIN, LOGIN } = DRAWER_NAMES
const { SIGN_IN, SIGN_UP, HOME, FAVOURITE_PROPERTIES, VISITS } = TAB_NAMES

const AppNavigator = () =>
    <NavigationContainer ref={navigationRef}>
        <Stack.Navigator headerMode="none">
            <Stack.Screen name={MENU} component={DrawerNavigatior} />
            <Stack.Screen name={MAIN_PROPERTY} component={MainProperty} />
            <Stack.Screen name={BOOK_VISIT} component={BookVisit} />
        </Stack.Navigator>
    </NavigationContainer>

// ---------------> CHECK IF WE REALLY NEED THIS TO SHOW LOGIN OR LOGOUT WHEN THE USER IS INSIDE <-------------------
// function CustomDrawerContent({ progress, ...rest }) {
//     const openMenu = useRef(new Animated.Value(0)).current

//     const translateX = openMenu.interpolate({
//         inputRange: [0, 1],
//         outputRange: [0, 100],
//     });

//     return (
//         <DrawerContentScrollView {...rest}>
//             <Animated.View style={{ transform: [{ translateX }] }}>
//                 {/* <DrawerItem
//                     icon={({ focused, color, size }) => <Icon color={color} size={size} name={focused ? 'user' : 'account-check-outline'} />}
//                     label="Header" onPress={() => console.log('WORK')} /> */}
//                 <DrawerItemList {...rest} />
//                 {/* <DrawerItem
//                     icon={({ color, size }) => <Icon color={color} size={size} name={'logout'} />}
//                     label="LogOut" onPress={() => alert('Link to help')} /> */}
//             </Animated.View>
//         </DrawerContentScrollView>
//     );
// }

const DrawerNavigatior = () =>
    <Drawer.Navigator
        openByDefault
        drawerType='front'
        drawerStyle={{
            width: 220,
            fontFamily: 'Roboto'
        }}
        //drawerContent={(props) => <CustomDrawerContent {...props} />}
        drawerContentOptions={{
            activeTintColor: UIColors.violetOfficalColor,
            itemStyle: { fontSize: 30, fontFamily: 'Roboto' },
        }}
    >
        <Drawer.Screen 
        name={LOGIN} 
        component={LoginTabNavigator} 
        options={{
            drawerLabel: "Login",
            drawerIcon: ({ focused, color, size }) => <Icon color={color} size={size} name={focused ? 'account' : 'account-outline'} />
        }}
        />
        <Drawer.Screen
            name={MAIN}
            component={MainTabNavigator}
            options={{
                drawerLabel: "Home",
                drawerIcon: ({ focused, color, size }) => <Icon color={color} size={size} name={focused ? 'home' : 'home-outline'} />
            }}
        />
    </Drawer.Navigator>

const LoginTabNavigator = () =>
    <Tab.Navigator
        initialRouteName={SIGN_IN}
        screenOptions={({ route }) => TabScreenOptions(route)}
    >
        <Tab.Screen name={SIGN_IN} component={SignIn} />
        <Tab.Screen name={SIGN_UP} component={SignUp} />
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
        <Tab.Screen name={VISITS} component={Visits} />
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
            return 'home-heart'
        case VISITS:
            return 'charity'
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