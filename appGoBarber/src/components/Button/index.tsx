import React from "react";
import { Text, View, TouchableOpacity} from "react-native";
import { RectButton, RectButtonProperties } from "react-native-gesture-handler";
import styles from './styles'

interface ButtonProps extends RectButtonProperties {
    children:  string
}

// conseguimos acessar todas as propriedades que nao sao children para o botao

const Button: React.FC <ButtonProps> = ({children, ...rest }) =>  (
    <RectButton style={styles.container} >
        <Text style={styles.text}> {children} </Text>
    </RectButton>
)

export default Button