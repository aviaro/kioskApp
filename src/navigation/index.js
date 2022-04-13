import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'

import DashboardScreen from '../screens/dashboard/index';
import CartScreen from '../screens/cart/index';
import MenuScreen from '../screens/menu/index';
import StoresScreen from '../screens/stores/index';

const DashboardStackNavigator = createStackNavigator();
const CartStackNavigator = createStackNavigator();
const MenuStackNavigator = createStackNavigator();
const StoresStackNavigator = createStackNavigator();
const TabsBottomNavigation = createMaterialBottomTabNavigator();

export const DashboardStack = () => {
    return(
        <DashboardStackNavigator.Navigator>
            <DashboardStackNavigator.Screen
                name = 'DashboardScreen'
                component= {DashboardScreen}            
            />
        </DashboardStackNavigator.Navigator>
    )
}

export const CartStack = () => {
    return(
        <CartStackNavigator.Navigator>
            <CartStackNavigator.Screen
                name = 'CartScreen'
                component = {CartScreen}
            />
        </CartStackNavigator.Navigator>
    )
}

export const MenuStack = () => {
    return(
        <MenuStackNavigator.Navigator>
            <MenuStackNavigator.Screen
                name = 'MenuScreen'
                component = {MenuScreen}
            />
        </MenuStackNavigator.Navigator>
    )
}

export const StoresStack = () => {
    return(
        <StoresStackNavigator.Navigator>
            <StoresStackNavigator.Screen
                name = "StoresScreen"
                component = {StoresScreen}
            />
        </StoresStackNavigator.Navigator>
    )
}

export const BottomTabs = () => {
    return(
        <TabsBottomNavigation.Navigator>
            <TabsBottomNavigation.Screen
                name = 'DashBoard'
                component = {DashboardStack}
                options= {
                    {
                        tabBarLabel: 'Home',
                        tabBarIcon: () => (
                            <AntDesign 
                                name='appstore-o'
                                color={'#c7f3ff'}
                                size={27}
                            />
                        )
                    }
                }
            />

            <TabsBottomNavigation.Screen
                name = 'Cart'
                component = {CartStack}
                options= {
                    {
                        tabBarLabel: 'Cart',
                        tabBarIcon: () => (
                            <MaterialCommunityIcons 
                                name='cart'
                                color={'#c7f3ff'}
                                size={27}
                            />
                        )
                    }
                }
            />

            <TabsBottomNavigation.Screen
                name = 'Menu'
                component = {MenuStack}
                options= {
                    {
                        tabBarLabel: 'Menu',
                        tabBarIcon: () => (
                            <MaterialCommunityIcons 
                                name='menu'
                                color={'#c7f3ff'}
                                size={27}
                            />
                        )
                    }
                }
            />

            <TabsBottomNavigation.Screen
                name = 'Stores'
                component = {StoresStack}
                options= {
                    {
                        tabBarLabel: 'Stores',
                        tabBarIcon: () => (
                            <MaterialCommunityIcons 
                                name='store'
                                color={'#c7f3ff'}
                                size={27}
                            />
                        )
                    }
                }
            />  
        </TabsBottomNavigation.Navigator>
    )
    
}