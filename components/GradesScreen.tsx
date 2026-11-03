import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';

export default function GradesScreen() {
  const grades = [
    { subject: 'Web-бағдарламалау фреймворктары', r1: '92', r2: '95', final: 'Өте жақсы' },
    { subject: 'Деректер қорын басқару', r1: '88', r2: '90', final: 'Жақсы' },
    { subject: 'Желілік қауіпсіздік негіздері', r1: '95', r2: '98', final: 'Өте жақсы' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.headerTitle}>Бағалар журналы (GPA: 4.8)</Text>
        {grades.map((item, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.subject}>{item.subject}</Text>
            <View style={styles.row}>
              <Text style={styles.gradeText}>Рейтинг 1: <Text style={styles.bold}>{item.r1}</Text></Text>
              <Text style={styles.gradeText}>Рейтинг 2: <Text style={styles.bold}>{item.r2}</Text></Text>
              <Text style={styles.gradeText}>Қорытынды: <Text style={styles.purple}>{item.final}</Text></Text>
            </View>
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
  subject: { fontSize: 16, fontWeight: 'bold', color: '#333', marginBottom: 10 },
  row: { flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1, borderTopColor: '#eee', paddingTop: 8 },
  gradeText: { fontSize: 12, color: '#666' },
  bold: { fontWeight: 'bold', color: '#333' },
  purple: { fontWeight: 'bold', color: '#7b1fa2' },
});