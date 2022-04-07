import React, { useEffect, useRef } from "react";
import { Text, TextInput, View, TextInputProps } from "react-native";
import styles from './styles'

import { useField } from "@unform/core";

import  Icon  from "react-native-vector-icons/MaterialIcons";

interface InputProps extends TextInputProps {
    name: string;
    icon: string
}

interface InputValueReference{
    value: string
}

const Input: React.FC <InputProps> = ({name,icon, ...rest}) =>  {

    const { registerField, defaultValue ='', fieldName, error  } = useField (name)

    const inputValueRef = useRef <InputValueReference>({value: defaultValue})

    useEffect (()=>{
        registerField({
            name: fieldName,
            ref: inputValueRef.current,
            path: 'value',
        },[fieldName.registerField])
    })
    return    <View style={styles.container}>

    <Icon 
    style={styles.icone}
    name={icon} size={20}/>
<TextInput
keyboardAppearance="dark"
placeholderTextColor= '#666360'
defaultValue={defaultValue}
onChangeText={(value )=> {
    inputValueRef.current.value = value
}}
{...rest}
style={styles.input}/>
</View>
}

export default Input