import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { Course } from './CoursesScreen';

type CourseDetailScreenProps = {
  course: Course | null;
  onBack: () => void;
};

export default function CourseDetailScreen({ course, onBack }: CourseDetailScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity onPress={onBack} style={styles.backBtn}>
          <Text style={styles.backText}>← Артқа қайту</Text>
        </TouchableOpacity>
        
        <Text style={styles.title}>{course?.title ?? 'Курс'}</Text>
        <Text style={styles.desc}>
          {course ? `${course.code} пәнін оқытушы ${course.teacher} жүргізеді. Бұл курста практикалық тапсырмалар мен теориялық материалдар қарастырылады.` : 'Курс туралы ақпарат табылмады.'}
        </Text>

        <View style={styles.moduleBox}>
          <Text style={styles.moduleTitle}>Материалдар:</Text>
          <Text style={styles.moduleItem}>• 1-модуль: Кіріспе және JSX құрылымы</Text>
          <Text style={styles.moduleItem}>• 2-модуль: Күйлерді басқару (State management)</Text>
          <Text style={styles.moduleItem}>• 3-модуль: Навигация және компоненттер</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa' },
  content: { padding: 20 },
  backBtn: { marginBottom: 20 },
  backText: { color: '#7b1fa2', fontSize: 16, fontWeight: 'bold' },
  title: { fontSize: 22, fontWeight: 'bold', color: '#333', marginBottom: 10 },
  desc: { fontSize: 14, color: '#666', lineHeight: 20, marginBottom: 20 },
  moduleBox: { backgroundColor: '#fff', padding: 16, borderRadius: 12, elevation: 2 },
  moduleTitle: { fontSize: 16, fontWeight: 'bold', color: '#7b1fa2', marginBottom: 10 },
  moduleItem: { fontSize: 14, color: '#444', marginBottom: 8 },
});