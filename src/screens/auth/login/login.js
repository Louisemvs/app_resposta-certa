import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

import axios from "axios";
import API_URL from "../../../services/api";
import styles from "./loginStyles";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const testarConexao = async () => {
    try {
      const res = await fetch("http://192.168.1.69:3000/teste");
      const data = await res.json();
      console.log("Backend:", data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    testarConexao();
  }, []);

  const fazerLogin = async () => {
    try {
      const resposta = await axios.post(`${API_URL}/login`, {
        email,
        senha,
      });

      console.log(resposta.data);

      navigation.replace("Treinar");

    } catch (erro) {
      console.log("Erro login:", erro.response?.data || erro.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require("../../../../assets/logo.png")}
          style={styles.logo}
        />

        <Text style={styles.titulo}>Entrar</Text>

        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />

        <TextInput
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
          style={styles.input}
        />

        <TouchableOpacity style={styles.botao} onPress={fazerLogin}>
          <Text style={styles.botaoTexto}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
          <Text style={styles.link}>Criar conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}