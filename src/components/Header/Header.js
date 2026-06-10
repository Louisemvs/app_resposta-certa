import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./HeaderStyles";

export default function Header() {
    return (

        <View style={styles.header}>
            <Image
                source={require("../../../assets/logo.png")}
                style={styles.logo}
            />

            <View style={styles.headerInfo}>
                <Text style={styles.headerText}>🔥 0</Text>
                <Text style={styles.headerText}>⭐ 174</Text>
                <Text style={styles.headerText}>👤</Text>
            </View>
        </View>

    );
}