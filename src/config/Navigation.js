import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as AppScreens from "../screens";

const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="newsFeed" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="newsFeed" component={AppScreens.NewsFeed} />
                <Stack.Screen name="artcileDetails" component={AppScreens.ArticleDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}