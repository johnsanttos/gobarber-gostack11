import React from "react";
import { Image, Text, View, KeyboardAvoidingView, ScrollView , Platform } from "react-native";

import Input from '../../components/Input'
import Button from '../../components/Button'
import Icon from "react-native-vector-icons/MaterialIcons";

import styles from "./styles";
import logoImg from '../../assets/logo.png'
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const SingIn: React.FC = () => {

    const navigation = useNavigation()
    return (
        <>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                enabled
            >
                <ScrollView
                keyboardShouldPersistTaps ='handled'
                contentContainerStyle ={{flex: 1}}
                > 
                <View style={styles.container}>

                    <Image source={logoImg} />

                    <Text style={styles.text} > Faça seu login</Text>

                    <Input
                        icon="email"
                        name="email"
                        placeholder="E-mail"
                    />
                    <Input
                        icon="lock"
                        name="password"
                        placeholder="Password"
                    />

                    <Button> Entrar </Button>

                    <TouchableOpacity
                        style={styles.forgotPassword}>
                        <Text style={styles.forgotText}>
                            Esqueci minha senha </Text>
                    </TouchableOpacity>

                </View>
                </ScrollView>
            </KeyboardAvoidingView>
            <TouchableOpacity style={styles.creatAccount}
            onPress ={() => navigation.navigate('SignUp')}
            >
                <Icon name='add-to-home-screen' size={20} color='#ff9000' />

                <Text style={styles.creatAccountText} > Criar uma conta</Text>
            </TouchableOpacity>

        </>
    )
}

export default SingIn