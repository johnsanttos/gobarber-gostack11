import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

const Auth = createStackNavigator()

import SingIn from "../pages/SignIn";
import SingUp from "../pages/SignUp";

const AuthRoutes: React.FC =() => (
<Auth.Navigator
screenOptions={{
    headerShown:false,
    cardStyle: { backgroundColor: '#312e38'}
}}
>
<Auth.Screen name="SignIn" component={SingIn}/> 
<Auth.Screen name="SignUp" component={SingUp}/> 
</Auth.Navigator>
)

export default AuthRoutes