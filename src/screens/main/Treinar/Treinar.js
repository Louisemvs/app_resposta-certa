import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";


import styles from "./TreinarStyles";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";

export default function Treinar({ navigation }) {
  return (
    <View style={styles.container}>
      {/* HEADER */}

      <Header />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* TÍTULO */}
        <View style={styles.section}>
          <Text style={styles.title}>🖍️ Treinar</Text>

          <Text style={styles.subtitle}>
            Treine com questões ajustadas ao seu nível e descubra sua nota com o
            TRI.
          </Text>

          <View style={styles.line} />
        </View>

        {/* ABAS */}
        <View style={styles.tabs}>
          <TouchableOpacity style={styles.activeTab}>
            <Text style={styles.activeTabText}>📚 Áreas</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>🎯 Competências</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>🛠️ Habilidades</Text>
          </TouchableOpacity>
        </View>

        {/* CARD 1 */}
        <View style={[styles.card, { backgroundColor: "#E7F6FB" }]}>
          <View style={styles.cardTop}>
            <View>
              <Text style={styles.cardTitle}>Linguagens</Text>

              <Text style={styles.cardDescription}>
                Língua Portuguesa e Estrangeira, Artes e Educação Física.
              </Text>
            </View>

            <Text style={styles.icon}>📝</Text>
          </View>

          <View style={styles.cardFooter}>
            <View>
              <Text style={styles.score}>612</Text>
              <Text style={styles.small}>Sua nota</Text>
            </View>

            <TouchableOpacity style={styles.trainButton}>
              <Text style={styles.trainButtonText}>Treinar</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* CARD 2 */}
        <View style={[styles.card, { backgroundColor: "#F7E8EC" }]}>
          <View style={styles.cardTop}>
            <View>
              <Text style={styles.cardTitle}>Ciências Humanas</Text>

              <Text style={styles.cardDescription}>
                Filosofia, Geografia, História e Sociologia.
              </Text>
            </View>

            <Text style={styles.icon}>🏛️</Text>
          </View>

          <View style={styles.cardFooter}>
            <View>
              <Text style={styles.score}>552</Text>
              <Text style={styles.small}>Sua nota</Text>
            </View>

            <TouchableOpacity style={styles.trainButton}>
              <Text style={styles.trainButtonText}>Treinar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* MENU INFERIOR */}
      <Footer
        navigation={navigation}
        active="Treinar"
      />
    </View>
  );
}

