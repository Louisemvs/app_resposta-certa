import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image
} from "react-native";

import styles from "./loginStyles";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require("../../../../assets/logo.png")}
          style={styles.logo}
        />

        <Text style={styles.titulo}>Entrar</Text>

        <Text style={styles.subtitulo}>
          Faça login para continuar seus estudos.
        </Text>

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
          onPress={() => navigation.replace("Treinar")}
        >
          <Text style={styles.botaoTexto}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Cadastro")}
        >
          <Text style={styles.link}>
            Não possui conta? Cadastre-se
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

