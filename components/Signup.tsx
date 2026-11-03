import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default function Signup({ onSwitchToLogin, onBackToHome }: any) {
  return (
    <View style={styles.authContainer}>
      <Text style={styles.authHeader}>Create Account</Text>
      <Text style={styles.authSubHeader}>Sign up to get started</Text>

      <TextInput style={styles.input} placeholder="Full Name" placeholderTextColor="#aaa" />
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#aaa" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#aaa" secureTextEntry />

      <TouchableOpacity style={styles.authButton} onPress={() => alert("Registered successfully!")}>
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