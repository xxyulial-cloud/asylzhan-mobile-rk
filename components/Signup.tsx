import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

type SignupProps = {
  onSwitchToLogin: () => void;
  onBackToHome: () => void;
  onSignup: () => void;
};

export default function Signup({ onSwitchToLogin, onBackToHome, onSignup }: SignupProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    if (!fullName.trim() || !email.trim() || password.length < 6) {
      Alert.alert('Қате', 'Аты-жөнін толтырыңыз, email енгізіңіз және құпиясөз кемінде 6 таңбадан тұрсын.');
      return;
    }
    onSignup();
  };

  return (
    <View style={styles.authContainer}>
      <Text style={styles.authHeader}>Create Account</Text>
      <Text style={styles.authSubHeader}>Sign up to get started</Text>

      <TextInput style={styles.input} placeholder="Full Name" placeholderTextColor="#aaa" value={fullName} onChangeText={setFullName} />
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#aaa" keyboardType="email-address" autoCapitalize="none" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#aaa" secureTextEntry value={password} onChangeText={setPassword} />

      <TouchableOpacity style={styles.authButton} onPress={handleSignup}>
        <Text style={styles.authButtonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onSwitchToLogin}>
        <Text style={styles.switchText}>Already have an account? <Text style={styles.linkText}>Log in</Text></Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backLink} onPress={onBackToHome}>
        <Text style={styles.skipText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  authContainer: { flex: 1, justifyContent: 'center', padding: 25 },
  authHeader: { fontSize: 28, fontWeight: 'bold', color: '#fff', marginBottom: 5 },
  authSubHeader: { fontSize: 15, color: '#e1bee7', marginBottom: 30 },
  input: { backgroundColor: 'rgba(255, 255, 255, 0.15)', paddingHorizontal: 15, paddingVertical: 14, borderRadius: 12, fontSize: 16, color: '#fff', marginBottom: 15 },
  authButton: { backgroundColor: '#fff', paddingVertical: 15, borderRadius: 12, alignItems: 'center', marginTop: 10, marginBottom: 20 },
  authButtonText: { color: '#7b1fa2', fontSize: 16, fontWeight: 'bold' },
  switchText: { color: '#e1bee7', textAlign: 'center', fontSize: 14 },
  linkText: { color: '#fff', fontWeight: 'bold' },
  backLink: { marginTop: 20 },
  skipText: { color: '#fff', fontSize: 14, textAlign: 'center' },
});