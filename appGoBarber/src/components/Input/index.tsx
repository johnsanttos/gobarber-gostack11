import React from "react";
import { Text, TextInput, View, TextInputProps } from "react-native";
import styles from './styles'

interface InputProps extends TextInputProps {
    name: string;
    icon: string
}


const Input: React.FC <InputProps> = ({name,icon, ...rest}) =>  (
    <View style={styles.container}>
<TextInput
keyboardAppearance="dark"
placeholderTextColor= '#666360'
{...rest}
style={styles.input}/>
    </View>
)

export default Input