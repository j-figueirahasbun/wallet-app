import React, { FunctionComponent } from "react";

// React navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "./../screens/Welcome";
import Home from "../screens/Home";
import { colors } from "../components/colors";
import Greeting from "../components/Header/Greeting";
import Profile from "../components/Header/Profile";
import Avi from "./../assets/avi/avatar.png"

export type RootStackParamList ={
    Welcome: undefined;
    Home: undefined;
}

const Stack = createStackNavigator();

const RootStack: FunctionComponent<RootStackParamList> = () => {
    return (
    <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.graylight,
                    borderBottomWidth:0,
                    shadowColor: "transparent",
                    shadowOpacity:0,
                    elevation:0,
                    height:120,
                },
                headerTintColor:colors.secondary,
                headerRightContainerStyle: {
                    paddingRight: 25,
                },
                headerLeftContainerStyle: {
                    paddingLeft: 10,
                },
                headerRight: () => (
                    <Profile
                        img={Avi}
                        imgContainerStyle={{backgroundColor : colors.tertiary}}/>
                ),
            }}
            initialRouteName="Home">
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerTitle : (props) => (
                        <Greeting
                        mainText="Hey John!"
                        subText="Welcome Back!"
                        {...props}
                        />
                    ),
                    headerLeft: () => (<></>)
                }}
            />
        </Stack.Navigator>
    </NavigationContainer>
    )
}

export default RootStack;