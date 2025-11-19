import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { calculateLifePath, calculateDestinyNumber, numerologyMeanings } from '../../utils/numerology';

export default function NumerologyScreen() {
  const [birthDate, setBirthDate] = useState('');
  const [fullName, setFullName] = useState('');
  const [lifePathNumber, setLifePathNumber] = useState(null);
  const [destinyNumber, setDestinyNumber] = useState(null);

  const calculate = () => {
    if (birthDate) {
      const lifePath = calculateLifePath(birthDate);
      setLifePathNumber(lifePath);
    }
    if (fullName) {
      const destiny = calculateDestinyNumber(fullName);
      setDestinyNumber(destiny);
    }
  };

  const reset = () => {
    setBirthDate('');
    setFullName('');
    setLifePathNumber(null);
    setDestinyNumber(null);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>🔢 Numerology Calculator</Text>
        <Text style={styles.subtitle}>Discover your numbers and their meanings</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Birth Date (YYYY-MM-DD)</Text>
        <TextInput
          style={styles.input}
          value={birthDate}
          onChangeText={setBirthDate}
          placeholder="e.g., 1990-05-15"
          placeholderTextColor="#999"
        />

        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          value={fullName}
          onChangeText={setFullName}
          placeholder="e.g., John Smith"
          placeholderTextColor="#999"
        />

        <TouchableOpacity style={styles.calculateButton} onPress={calculate}>
          <Text style={styles.calculateButtonText}>Calculate</Text>
        </TouchableOpacity>

        {(lifePathNumber || destinyNumber) && (
          <TouchableOpacity style={styles.resetButton} onPress={reset}>
            <Text style={styles.resetButtonText}>Reset</Text>
          </TouchableOpacity>
        )}
      </View>

      {lifePathNumber && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultTitle}>Life Path Number: {lifePathNumber}</Text>
          <View style={styles.meaningCard}>
            <Text style={styles.meaningTitle}>
              {numerologyMeanings[lifePathNumber].title}
            </Text>
            <Text style={styles.meaningTraits}>
              {numerologyMeanings[lifePathNumber].traits}
            </Text>
            <Text style={styles.meaningDescription}>
              {numerologyMeanings[lifePathNumber].description}
            </Text>
          </View>
        </View>
      )}

      {destinyNumber && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultTitle}>Destiny Number: {destinyNumber}</Text>
          <View style={styles.meaningCard}>
            <Text style={styles.meaningTitle}>
              {numerologyMeanings[destinyNumber].title}
            </Text>
            <Text style={styles.meaningTraits}>
              {numerologyMeanings[destinyNumber].traits}
            </Text>
            <Text style={styles.meaningDescription}>
              {numerologyMeanings[destinyNumber].description}
            </Text>
          </View>
        </View>
      )}

      {!lifePathNumber && !destinyNumber && (
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>About Numerology</Text>
          <Text style={styles.infoText}>
            Numerology is the study of numbers and their mystical significance. Your Life Path Number 
            reveals your life's purpose and natural talents, while your Destiny Number shows the path 
            you're meant to walk.
          </Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F1419',
  },
  header: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#1A2332',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#F0E68C',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#B0C4DE',
    fontStyle: 'italic',
  },
  inputContainer: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#F0E68C',
    marginBottom: 8,
    marginTop: 10,
  },
  input: {
    backgroundColor: '#1A2332',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    color: '#FFF',
    borderWidth: 2,
    borderColor: '#4A5568',
  },
  calculateButton: {
    backgroundColor: '#F0E68C',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  calculateButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0F1419',
  },
  resetButton: {
    backgroundColor: '#4A5568',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  resetButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#F0E68C',
  },
  resultContainer: {
    padding: 20,
    paddingTop: 10,
  },
  resultTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F0E68C',
    marginBottom: 15,
    textAlign: 'center',
  },
  meaningCard: {
    backgroundColor: '#1A2332',
    borderRadius: 15,
    padding: 20,
    borderWidth: 2,
    borderColor: '#F0E68C',
  },
  meaningTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#F0E68C',
    marginBottom: 10,
  },
  meaningTraits: {
    fontSize: 14,
    color: '#87CEEB',
    marginBottom: 15,
    fontStyle: 'italic',
  },
  meaningDescription: {
    fontSize: 14,
    color: '#B0C4DE',
    lineHeight: 22,
  },
  infoContainer: {
    margin: 20,
    padding: 20,
    backgroundColor: '#1A2332',
    borderRadius: 15,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F0E68C',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#B0C4DE',
    lineHeight: 22,
  },
});
