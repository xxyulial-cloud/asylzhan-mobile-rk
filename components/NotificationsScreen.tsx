import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';

export default function NotificationsScreen() {
  const notifs = [
    { title: 'Әскери кафедраға өтінім', desc: 'Сіздің өтініміңіз қабылданды.', time: 'Бүгін, 14:00' },
    { title: 'Практикалық тапсырма', desc: 'React Native күйлерді жобалау бойынша лаб жұмысы.', time: 'Кеше' },
    { title: 'Аралық бақылау', desc: 'Апта соңында аралық сынақ өтеді.', time: '3 күн бұрын' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.headerTitle}>Хабарландырулар</Text>
        {notifs.map((item, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.notifTitle}>{item.title}</Text>
            <Text style={styles.notifDesc}>{item.desc}</Text>
            <Text style={styles.time}>{item.time}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa' },
  content: { padding: 20 },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: '#7b1fa2', marginBottom: 20 },
  card: { backgroundColor: '#fff', padding: 16, borderRadius: 12, marginBottom: 12, elevation: 2 },
  notifTitle: { fontSize: 16, fontWeight: 'bold', color: '#333', marginBottom: 4 },
  notifDesc: { fontSize: 14, color: '#666', marginBottom: 8 },
  time: { fontSize: 11, color: '#999', textAlign: 'right' },
});