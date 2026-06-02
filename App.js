import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, SafeAreaView,StatusBar, ScrollView,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Header com horário */}
        <View style={styles.navbar}>
          <View style={styles.logo}>
            
          </View>
        </View>

        {/* Seção Treinar Principal */}
        <View style={styles.mainTrainingCard}>
          <Text style={styles.mainTrainingTitle}>Treinar</Text>
          <Text style={styles.mainTrainingSubtitle}>
            Treine com questões ajustadas ao seu nível e descubra sua nota com o TRI.
          </Text>
        </View>

        {/* Menu de Navegação */}
        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Áreas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Competências</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Habilidades</Text>
          </TouchableOpacity>
        </View>

        {/* Seção Linguagens */}
        <View style={styles.subjectCard}>
          <View style={styles.subjectHeader}>
            <Text style={styles.subjectTitle}>Linguagens</Text>
            <Text style={styles.subjectDescription}>
              Língua Portuguesa e Estrangeira, Artes e Educação Física.
            </Text>
          </View>
          <View style={styles.subjectFooter}>
            <Text style={styles.subjectScore}>612</Text>
            <Text style={styles.subjectScoreLabel}>Sua nota</Text>
            <TouchableOpacity style={styles.trainButton}>
              <Text style={styles.trainButtonText}>Treinar</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Seção Ciências Humanas */}
        <View style={styles.subjectCard}>
          <View style={styles.subjectHeader}>
            <Text style={styles.subjectTitle}>Ciências Humanas</Text>
            <Text style={styles.subjectDescription}>
              Filosofia, Geografia, História e Sociologia.
            </Text>
          </View>
          <View style={styles.subjectFooter}>
            <Text style={styles.subjectScore}>552</Text>
            <Text style={styles.subjectScoreLabel}>Sua nota</Text>
            <TouchableOpacity style={styles.trainButton}>
              <Text style={styles.trainButtonText}>Treinar</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Bottom Navigation */}
        <View style={styles.bottomNav}>
          <TouchableOpacity style={styles.navItem}>
            <Text style={[styles.navText, styles.navTextActive]}>Treinar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navText}>Aprender</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navText}>Ranking</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navText}>Grupos</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  navbar: {
    width:500,
    height:90,
    backgroundColor:'#e21313',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  logo: {
    width: 40,
    height: 40,
    backgroundColor: '#7c16e2',
  },
  mainTrainingCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  mainTrainingTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 8,
  },
  mainTrainingSubtitle: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 20,
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
    marginBottom: 24,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  menuItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  menuText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333333',
  },
  subjectCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 16,
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 2,
    borderColor: '#000000',

  },
  subjectHeader: {
    marginBottom: 16,
    backgroundColor:'#E8FBFF',
  },
  subjectTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 6,
  },
  subjectDescription: {
    fontSize: 13,
    color: '#888888',
    lineHeight: 18,
  },
  subjectFooter: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    paddingTop: 12,
  },
  subjectScore: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
  },
  subjectScoreLabel: {
    fontSize: 12,
    color: '#999999',
    marginLeft: 4,
  },
  trainButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  trainButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
  },
  navText: {
    fontSize: 14,
    color: '#999999',
    fontWeight: '500',
  },
  navTextActive: {
    color: '#007AFF',
  },
});

export default App;