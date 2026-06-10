
import React from "react";
import { View, Text } from "react-native";

import styles from "./aprenderStyles";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";

export default function Aprender({ navigation }) {
    return (
        <View style={styles.container}>
            <Header />

            <Text style={styles.title}>📖 Aprender</Text>

            <Text style={styles.description}>
                Aprenda os conteúdos que mais caem no ENEM.
            </Text>

            <Footer
                navigation={navigation}
                active="Treinar"
            />
        </View>
    );
}