import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';

export default function CoursesScreen({ onSelectCourse }: any) {
  const courses = [
    { id: '1', title: 'Web-бағдарламалау фреймворктары', teacher: 'А. Есимова', code: 'WBF-22' },
    { id: '2', title: 'Деректер қорын басқару', teacher: 'М. Қантөреұлы', code: 'DBM-19' },
    { id: '3', title: 'Желілік қауіпсіздік негіздері', teacher: 'С. Нұрасыл', code: 'NSC-04' },
    { id: '4', title: 'Алгоритмдер және деректер құрылымы', teacher: 'Д. Ахметов', code: 'ADS-11' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.headerTitle}>Барлық пәндер</Text>
        {courses.map((course) => (
          <TouchableOpacity key={course.id} style={styles.card} onPress={onSelectCourse}>
            <View>
              <Text style={styles.title}>{course.title}</Text>
              <Text style={styles.teacher}>Оқытушы: {course.teacher}</Text>
            </View>
            <Text style={styles.code}>{course.code}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa' },
  content: { padding: 20 },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: '#7b1fa2', marginBottom: 20 },
  card: { backgroundColor: '#fff', padding: 16, borderRadius: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12, elevation: 2 },
  title: { fontSize: 16, fontWeight: 'bold', color: '#333', width: '70%' },
  teacher: { fontSize: 13, color: '#666', marginTop: 4 },
  code: { fontSize: 12, fontWeight: 'bold', color: '#7b1fa2', backgroundColor: '#f3e5f5', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6 },
});