import React from "react";
import { Image, Text, View, KeyboardAvoidingView, ScrollView , Platform } from "react-native";

import Input from '../../components/Input'
import Button from '../../components/Button'
import Icon from "react-native-vector-icons/MaterialIcons";

import styles from "./styles";
import logoImg from '../../assets/logo.png'
import { TouchableOpacity } from "react-native-gesture-handler";

import { useNavigation } from "@react-navigation/native";

const  SingUp: React.FC = () => {

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

                    <Text style={styles.text} > Crie sua conta</Text>

                    <Input
                        icon="person"
                        name="name"
                        placeholder="Nome"
                    />
                    <Input
                        icon="email"
                        name="email"
                        placeholder="E-mail"
                    />

<Input
                        icon="lock"
                        name="password"
                        placeholder="Senha"
                    />

                    <Button> Entrar </Button>

                

                </View>
                </ScrollView>
            </KeyboardAvoidingView>
            <TouchableOpacity style={styles.backToSignin}
            onPress ={() => navigation.goBack()}
            >
                <Icon name='arrow-back' size={20} color='#fff' />

                <Text style={styles.backToSigninText} > Voltar para login</Text>
            </TouchableOpacity>

        </>
    )
}

export default SingUp