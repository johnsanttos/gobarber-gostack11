import React from "react";
import { Image, Text, View,  } from "react-native";

import Input from '../../components/Input'
import Button from '../../components/Button'

import styles from "./styles";
import logoImg from '../../assets/logo.png'

const SingIn:  React.FC =()=>  {
    return(
        <View style ={styles.container}>

<Image source ={logoImg}/>

<Text style ={styles.text} > Faça seu login</Text>

<Input
icon=""
name="email"
placeholder="E-mail"
/>
<Input 
icon=""
name="password"
placeholder="Password"
/>

<Button> Entrar </Button>

        </View>
    )
}

export default SingIn