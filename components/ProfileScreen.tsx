import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';

export default function ProfileScreen({ onLogout }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.avatarCircle}>
          <Text style={styles.avatarText}>ҚА</Text>
        </View>
        <Text style={styles.name}>Қантөре Асылжан</Text>
        <Text style={styles.group}>Тобы: Ис-25-7к | ALT University</Text>
        <Text style={styles.gpa}>GPA: 4.8 / 5.0</Text>

        <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
          <Text style={styles.logoutButtonText}>Жүйеден шығу</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa' },
  content: { padding: 20, alignItems: 'center', marginTop: 30 },
  avatarCircle: { width: 90, height: 90, borderRadius: 45, backgroundColor: '#7b1fa2', justifyContent: 'center', alignItems: 'center', marginBottom: 15 },
  avatarText: { color: '#fff', fontSize: 32, fontWeight: 'bold' },
  name: { fontSize: 22, fontWeight: 'bold', color: '#333' },
  group: { fontSize: 14, color: '#666', marginTop: 5 },
  gpa: { fontSize: 15, fontWeight: 'bold', color: '#7b1fa2', marginTop: 10, marginBottom: 40 },
  logoutButton: { backgroundColor: '#ffebee', width: '100%', padding: 15, borderRadius: 12, alignItems: 'center' },
  logoutButtonText: { color: '#c62828', fontSize: 16, fontWeight: 'bold' },
},);