import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import CoursesScreen, { Course } from './components/CoursesScreen';
import CourseDetailScreen from './components/CourseDetailScreen';
import GradesScreen from './components/GradesScreen';
import ScheduleScreen from './components/ScheduleScreen';
import NotificationsScreen from './components/NotificationsScreen';
import ProfileScreen from './components/ProfileScreen';

const { height } = Dimensions.get('window');

export default function App() {
  const [screen, setScreen] = useState<'splash' | 'onboarding' | 'login' | 'signup' | 'main' | 'courseDetail'>('splash');
  const [step, setStep] = useState(0);
  const [activeTab, setActiveTab] = useState<'home' | 'courses' | 'grades' | 'schedule' | 'notifications' | 'profile'>('home');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const slides = [
    { title: "Better way to learning is calling you!", subtitle: "Unlock Your Potential. Embrace Education." },
    { title: "Find yourself by doing whatever you do!", subtitle: "Discover with focus and flow." },
    { title: "It's not just learning, it's a promise!", subtitle: "Learn Today, Lead Tomorrow." }
  ];

  return (
    <SafeAreaView style={styles.container}>
      {screen === 'splash' && (
        <View style={styles.splashContainer}>
          <View style={styles.logoCircle}><Text style={styles.logoText}>🎓</Text></View>
          <Text style={styles.brandTitle}>Superior University</Text>
          <Text style={styles.brandSubtitle}>e-Learning Platform</Text>
          <TouchableOpacity style={styles.startButton} onPress={() => setScreen('onboarding')}>
            <Text style={styles.startButtonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      )}

      {screen === 'onboarding' && (
        <View style={styles.onboardingContainer}>
          <View style={styles.card}>
            <Text style={styles.slideTitle}>{slides[step].title}</Text>
            <Text style={styles.slideSubtitle}>{slides[step].subtitle}</Text>
            <TouchableOpacity 
              style={styles.nextButton} 
              onPress={() => {
                if (step < slides.length - 1) setStep(step + 1);
                else setScreen('signup');
              }}
            >
              <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setScreen('splash')}>
              <Text style={styles.skipText}>Back to Home</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {screen === 'login' && (
        <Login
          onLogin={() => setScreen('main')}
          onSwitchToSignup={() => setScreen('signup')}
          onBackToHome={() => setScreen('splash')}
        />
      )}

      {screen === 'signup' && (
        <Signup
          onSwitchToLogin={() => setScreen('login')}
          onBackToHome={() => setScreen('splash')}
          onSignup={() => setScreen('login')}
        />
      )}

      {screen === 'main' && (
        <View style={styles.appContainer}>
          <View style={styles.mainContent}>
            {screen === 'main' && activeTab === 'home' && (
              <Home
                onLogout={() => {
                  setActiveTab('home');
                  setScreen('login');
                }}
                onSelectCourse={(course) => {
                  setSelectedCourse(course);
                  setScreen('courseDetail');
                }}
              />
            )}
            {screen === 'main' && activeTab === 'courses' && (
              <CoursesScreen onSelectCourse={(course) => {
                setSelectedCourse(course);
                setScreen('courseDetail');
              }} />
            )}
            {screen === 'main' && activeTab === 'grades' && <GradesScreen />}
            {screen === 'main' && activeTab === 'schedule' && <ScheduleScreen />}
            {screen === 'main' && activeTab === 'notifications' && <NotificationsScreen />}
            {screen === 'main' && activeTab === 'profile' && (
              <ProfileScreen onLogout={() => {
                setActiveTab('home');
                setScreen('login');
              }} />
            )}
          </View>
          <View style={styles.tabBar}>
            {([
              ['home', 'Басты'],
              ['courses', 'Курстар'],
              ['grades', 'Бағалар'],
              ['schedule', 'Кесте'],
              ['notifications', 'Хабарлар'],
              ['profile', 'Профиль'],
            ] as const).map(([tab, label]) => (
              <TouchableOpacity
                key={tab}
                style={[styles.tabItem, activeTab === tab && styles.activeTabItem]}
                onPress={() => setActiveTab(tab)}
              >
                <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}

      {screen === 'courseDetail' && (
        <CourseDetailScreen
          course={selectedCourse}
          onBack={() => setScreen('main')}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#7b1fa2' },
  appContainer: { flex: 1, backgroundColor: '#f8f9fa' },
  mainContent: { flex: 1 },
  tabBar: { flexDirection: 'row', backgroundColor: '#fff', borderTopWidth: 1, borderTopColor: '#eee', paddingBottom: 4 },
  tabItem: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingVertical: 10 },
  activeTabItem: { borderTopWidth: 2, borderTopColor: '#7b1fa2' },
  tabText: { color: '#777', fontSize: 10, textAlign: 'center' },
  activeTabText: { color: '#7b1fa2', fontWeight: 'bold' },
  splashContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  logoCircle: { width: 90, height: 90, borderRadius: 45, backgroundColor: 'rgba(255, 255, 255, 0.2)', justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
  logoText: { fontSize: 40 },
  brandTitle: { fontSize: 24, fontWeight: 'bold', color: '#fff', textAlign: 'center' },
  brandSubtitle: { fontSize: 14, color: '#e1bee7', marginBottom: 40 },
  startButton: { backgroundColor: '#fff', paddingVertical: 14, paddingHorizontal: 40, borderRadius: 25, position: 'absolute', bottom: 50 },
  startButtonText: { color: '#7b1fa2', fontSize: 16, fontWeight: 'bold' },
  onboardingContainer: { flex: 1, justifyContent: 'flex-end', backgroundColor: '#7b1fa2' },
  card: { backgroundColor: '#fff', height: height * 0.45, borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 30, alignItems: 'center', justifyContent: 'center' },
  slideTitle: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: '#333', marginBottom: 10 },
  slideSubtitle: { fontSize: 14, color: '#666', textAlign: 'center', marginBottom: 30 },
  nextButton: { backgroundColor: '#7b1fa2', width: '100%', paddingVertical: 14, borderRadius: 25, alignItems: 'center', marginBottom: 15 },
  nextButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  skipText: { color: '#7b1fa2', fontSize: 14, textAlign: 'center' },
});