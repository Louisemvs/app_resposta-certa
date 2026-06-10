import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image
} from "react-native";

import styles from "./cadastroStyles";

export default function Cadastro({ navigation }) {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image
                    source={require("../../../../assets/logo.png")}
                    style={styles.logo}
                />

                <Text style={styles.titulo}>Cadastro</Text>

                <Text style={styles.subtitulo}>
                    Crie sua conta para começar.
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    value={nome}
                    onChangeText={setNome}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    secureTextEntry
                    value={senha}
                    onChangeText={setSenha}
                />

                <TouchableOpacity
                    style={styles.botao}
                    onPress={() => navigation.replace("Login")}
                >
                    <Text style={styles.botaoTexto}>Cadastrar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate("Login")}
                >
                    <Text style={styles.link}>
                        Já possui conta? Entrar
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
