import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, TextInput } from 'react-native';

export default function Home({ onLogout }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        
        {/* Бас жағы (Қарсы алу және шығу батырмасы) */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Сәлем, Студент! 👋</Text>
            <Text style={styles.subGreeting}>University платформасына қош келдіңіз</Text>
          </View>
          <TouchableOpacity style={styles.logoutBtn} onPress={onLogout}>
            <Text style={styles.logoutText}>Шығу</Text>
          </TouchableOpacity>
        </View>

        {/* Іздеу жолағы */}
        <View style={styles.searchContainer}>
          <TextInput 
            style={styles.searchInput} 
            placeholder="Пәндерді немесе курс іздеу..." 
            placeholderTextColor="#888" 
          />
        </View>

        {/* Санаттар */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Санаттар</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
          <TouchableOpacity style={[styles.categoryChip, styles.activeChip]}>
            <Text style={[styles.chipText, styles.activeChipText]}>Барлығы</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryChip}>
            <Text style={styles.chipText}>ИТ және Бағдарламалау</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryChip}>
            <Text style={styles.chipText}>Инженерия</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryChip}>
            <Text style={styles.chipText}>Экономика</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* Танымал курстар (Trending in University) */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Университеттегі танымал</Text>
        </View>
        
        <View style={styles.courseCard}>
          <View style={styles.courseImagePlaceholder}>
            <Text style={styles.courseEmoji}>💻</Text>
          </View>
          <View style={styles.courseInfo}>
            <Text style={styles.courseTitle}>Web Фреймворктар және React</Text>
            <Text style={styles.courseDesc}>Күрделі фронтенд әзірлеу</Text>
          </View>
        </View>

        <View style={styles.courseCard}>
          <View style={styles.courseImagePlaceholder}>
            <Text style={styles.courseEmoji}>📊</Text>
          </View>
          <View style={styles.courseInfo}>
            <Text style={styles.courseTitle}>Деректер қорын басқару</Text>
            <Text style={styles.courseDesc}>PostgreSQL және pgAdmin 4</Text>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f8f9fa' 
  },
  content: { 
    padding: 20 
  },
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginBottom: 20 
  },
  greeting: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    color: '#7b1fa2' 
  },
  subGreeting: { 
    fontSize: 13, 
    color: '#666', 
    marginTop: 2 
  },
  logoutBtn: { 
    backgroundColor: '#ffebee', 
    paddingHorizontal: 12, 
    paddingVertical: 6, 
    borderRadius: 8 
  },
  logoutText: { 
    color: '#c62828', 
    fontSize: 12, 
    fontWeight: 'bold' 
  },
  searchContainer: { 
    marginBottom: 20 
  },
  searchInput: { 
    backgroundColor: '#fff', 
    paddingHorizontal: 15, 
    paddingVertical: 12, 
    borderRadius: 12, 
    borderWidth: 1, 
    borderColor: '#e0e0e0', 
    fontSize: 15 
  },
  sectionHeader: { 
    marginBottom: 10, 
    marginTop: 10 
  },
  sectionTitle: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#333' 
  },
  categoriesContainer: { 
    flexDirection: 'row', 
    marginBottom: 15 
  },
  categoryChip: { 
    backgroundColor: '#fff', 
    paddingHorizontal: 18, 
    paddingVertical: 10, 
    borderRadius: 20, 
    marginRight: 10, 
    borderWidth: 1, 
    borderColor: '#e0e0e0',
    height: 40,
    justifyContent: 'center'
  },
  activeChip: { 
    backgroundColor: '#7b1fa2', 
    borderColor: '#7b1fa2' 
  },
  chipText: { 
    color: '#333', 
    fontSize: 14 
  },
  activeChipText: { 
    color: '#fff', 
    fontWeight: 'bold' 
  },
  courseCard: { 
    backgroundColor: '#fff', 
    borderRadius: 16, 
    padding: 12, 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 12, 
    shadowColor: '#000', 
    shadowOpacity: 0.05, 
    shadowRadius: 5, 
    elevation: 2 
  },
  courseImagePlaceholder: { 
    width: 50, 
    height: 50, 
    backgroundColor: '#f3e5f5', 
    borderRadius: 12, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginRight: 15 
  },
  courseEmoji: { 
    fontSize: 24 
  },
  courseInfo: { 
    flex: 1 
  },
  courseTitle: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: '#333' 
  },
  courseDesc: { 
    fontSize: 13, 
    color: '#666', 
    marginTop: 3 
  },
});