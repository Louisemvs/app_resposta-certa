import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function Treinar() {
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.logo}>💬</Text>

        <View style={styles.headerInfo}>
          <Text style={styles.headerText}>🔥 0</Text>
          <Text style={styles.headerText}>⭐ 174</Text>
          <Text style={styles.headerText}>👤</Text>
        </View>
      </View>

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
      <View style={styles.bottomBar}>
        <Text style={styles.activeBottom}>🖍️{"\n"}Treinar</Text>
        <Text>📖{"\n"}Aprender</Text>
        <Text>🏆{"\n"}Ranking</Text>
        <Text>👨‍👩‍👧{"\n"}Grupos</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  header: {
    backgroundColor: "#FFF",
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    fontSize: 35,
  },

  headerInfo: {
    flexDirection: "row",
    gap: 20,
  },

  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },

  section: {
    padding: 20,
  },

  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 18,
    color: "#555",
    lineHeight: 28,
  },

  line: {
    height: 2,
    backgroundColor: "#444",
    marginTop: 25,
  },

  tabs: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginBottom: 20,
    gap: 10,
  },

  activeTab: {
    backgroundColor: "#2DA8FF",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 15,
  },

  activeTabText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 18,
  },

  tab: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#CCC",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 15,
  },

  tabText: {
    fontSize: 18,
    fontWeight: "600",
  },

  card: {
    marginHorizontal: 20,
    marginBottom: 25,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#444",
    overflow: "hidden",
  },

  cardTop: {
    padding: 25,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  cardTitle: {
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 10,
  },

  cardDescription: {
    fontSize: 18,
    width: 230,
    lineHeight: 30,
    color: "#444",
  },

  icon: {
    fontSize: 45,
  },

  cardFooter: {
    backgroundColor: "#FFF",
    borderTopWidth: 2,
    borderColor: "#444",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  score: {
    fontSize: 40,
    fontWeight: "bold",
  },

  small: {
    fontSize: 18,
    color: "#666",
  },

  trainButton: {
    backgroundColor: "#2DA8FF",
    paddingHorizontal: 35,
    paddingVertical: 15,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#444",
  },

  trainButtonText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
  },

  bottomBar: {
    height: 80,
    backgroundColor: "#FFF",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#DDD",
  },

  activeBottom: {
    color: "#2DA8FF",
    fontWeight: "bold",
  },
});