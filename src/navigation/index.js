import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

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
                name = 'Dashboard'
                component= {DashboardScreen}            
            />
        </DashboardStackNavigator.Navigator>
    )
}

export const CartStack = () => {
    return(
        <CartStackNavigator.Navigator>
            <CartStackNavigator.Screen
                name = 'Cart'
                component = {CartScreen}
            />
        </CartStackNavigator.Navigator>
    )
}

export const MenuStack = () => {
    return(
        <MenuStackNavigator.Navigator>
            <MenuStackNavigator.Screen
                name = 'Menu'
                component = {MenuScreen}
            />
        </MenuStackNavigator.Navigator>
    )
}

export const StoresStack = () => {
    return(
        <StoresStackNavigator.Navigator>
            <StoresStackNavigator.Screen
                name = "Stores"
                component = {StoresScreen}
            />
        </StoresStackNavigator.Navigator>
    )
}

export const BottomTabs = () => {
    return(
        <TabsBottomNavigation.Navigator>
            <TabsBottomNavigation.Screen
                name = 'DashBoardStack'
                component = {DashboardStack}
            />

            <TabsBottomNavigation.Screen
                name = 'CartStack'
                component = {CartStack}
            />

            <TabsBottomNavigation.Screen
                name = 'MenuStack'
                component = {MenuStack}
            />

            <TabsBottomNavigation.Screen
                name = 'StoresStack'
                component = {StoresStack}
            />  
        </TabsBottomNavigation.Navigator>
    )
    
}