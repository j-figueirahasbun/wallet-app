import React, { FunctionComponent } from "react";

// React navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "./../screens/Welcome";

export type RootStackParamList ={
    Welcome: undefined;
}

const Stack = createStackNavigator();

const RootStack: FunctionComponent<RootStackParamList> = () => {
    return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    </NavigationContainer>
    )
}

export default RootStack;