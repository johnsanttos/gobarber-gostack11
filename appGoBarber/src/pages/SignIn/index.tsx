import React from "react";
import { useCallback, useRef} from "react";
import { Image, Text, View, KeyboardAvoidingView, ScrollView, Platform } from "react-native";

import Input from '../../components/Input'
import Button from '../../components/Button'
import Icon from "react-native-vector-icons/MaterialIcons";

import styles from "./styles";
import logoImg from '../../assets/logo.png'
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Form } from "@unform/mobile";
import { FormHandles } from "@unform/core";

const SingIn: React.FC = () => {

    const formRef = useRef <FormHandles> (null) //para darmos submit direto, so quando clicarmos
    const navigation = useNavigation()

    const handleSignIn = useCallback((data: object) => {
        console.log(data)
    }, [])
    return (
        <>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                enabled
            >
                <ScrollView
                    keyboardShouldPersistTaps='handled'
                    contentContainerStyle={{ flex: 1 }}
                >
                    <View style={styles.container}>

                        <Image source={logoImg} />

                        <Text style={styles.text} > Faça seu login</Text>
                        <Form onSubmit={handleSignIn }>
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

                            <Button
                            onPress={() => {
                                formRef.current?.submitForm()
                                console.log('apertou')
                            }}
                            > Entrar </Button>
                        </Form>


                        <TouchableOpacity
                            style={styles.forgotPassword}>
                            <Text style={styles.forgotText}>
                                Esqueci minha senha </Text>
                        </TouchableOpacity>

                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
            <TouchableOpacity style={styles.creatAccount}
                onPress={() => navigation.navigate('SignUp')}
            >
                <Icon name='add-to-home-screen' size={20} color='#ff9000' />

                <Text style={styles.creatAccountText} > Criar uma conta</Text>
            </TouchableOpacity>

        </>
    )
}

export default SingIn