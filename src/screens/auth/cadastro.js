import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function Cadastro({ navigation }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.logo}>💬</Text>

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    padding: 25,
  },

  card: {
    backgroundColor: "#FFF",
    borderRadius: 25,
    padding: 25,
    borderWidth: 2,
    borderColor: "#444",
  },

  logo: {
    fontSize: 60,
    textAlign: "center",
    marginBottom: 15,
  },

  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },

  subtitulo: {
    textAlign: "center",
    color: "#666",
    marginVertical: 15,
    fontSize: 16,
  },

  input: {
    borderWidth: 2,
    borderColor: "#DDD",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
  },

  botao: {
    backgroundColor: "#2DA8FF",
    padding: 16,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 10,
  },

  botaoTexto: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 18,
  },

  link: {
    textAlign: "center",
    marginTop: 20,
    color: "#2DA8FF",
    fontWeight: "600",
  },
});