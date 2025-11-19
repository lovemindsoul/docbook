import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { angelNumbers, getAngelNumberMeaning } from '../../data/angelNumbers';

export default function AngelNumbersScreen() {
  const [searchNumber, setSearchNumber] = useState('');
  const [result, setResult] = useState(null);
  const [showList, setShowList] = useState(true);

  const handleSearch = () => {
    if (searchNumber) {
      const meaning = getAngelNumberMeaning(searchNumber);
      setResult(meaning);
      setShowList(false);
    }
  };

  const handleReset = () => {
    setSearchNumber('');
    setResult(null);
    setShowList(true);
  };

  const handleNumberSelect = (number) => {
    setSearchNumber(number);
    const meaning = getAngelNumberMeaning(number);
    setResult(meaning);
    setShowList(false);
  };

  const numbersList = Object.keys(angelNumbers).sort();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>👼 Angel Numbers</Text>
        <Text style={styles.subtitle}>Messages from the divine realm</Text>
      </View>

      <View style={styles.searchContainer}>
        <Text style={styles.label}>Enter a Number You Keep Seeing</Text>
        <TextInput
          style={styles.input}
          value={searchNumber}
          onChangeText={setSearchNumber}
          placeholder="e.g., 111, 444, 1111"
          placeholderTextColor="#999"
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Discover Meaning</Text>
        </TouchableOpacity>
        {!showList && (
          <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
            <Text style={styles.resetButtonText}>View All Numbers</Text>
          </TouchableOpacity>
        )}
      </View>

      {result ? (
        <View style={styles.resultContainer}>
          <View style={styles.resultCard}>
            <Text style={styles.resultNumber}>{result.number}</Text>
            <Text style={styles.resultMeaning}>{result.meaning}</Text>
            <Text style={styles.resultDescription}>{result.description}</Text>
            
            <View style={styles.actionContainer}>
              <Text style={styles.actionTitle}>What To Do:</Text>
              <Text style={styles.actionText}>{result.action}</Text>
            </View>
          </View>
        </View>
      ) : showList ? (
        <View style={styles.listContainer}>
          <Text style={styles.listTitle}>Common Angel Numbers</Text>
          {numbersList.map((number) => (
            <TouchableOpacity
              key={number}
              style={styles.numberCard}
              onPress={() => handleNumberSelect(number)}
            >
              <Text style={styles.numberText}>{number}</Text>
              <Text style={styles.numberMeaning}>{angelNumbers[number].meaning}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ) : null}

      {!result && showList && (
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>What Are Angel Numbers?</Text>
          <Text style={styles.infoText}>
            Angel numbers are sequences of numbers that carry divine guidance. When you repeatedly 
            see the same numbers, it's believed that angels are trying to communicate with you, 
            offering guidance, reassurance, and insight into your life path.
          </Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0E27',
  },
  header: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#1A1F3A',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#87CEEB',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#D8BFD8',
    fontStyle: 'italic',
  },
  searchContainer: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#87CEEB',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#1A1F3A',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    color: '#FFF',
    borderWidth: 2,
    borderColor: '#4A5568',
  },
  searchButton: {
    backgroundColor: '#87CEEB',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 15,
  },
  searchButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0A0E27',
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
    color: '#87CEEB',
  },
  resultContainer: {
    padding: 20,
    paddingTop: 0,
  },
  resultCard: {
    backgroundColor: '#1A1F3A',
    borderRadius: 20,
    padding: 25,
    borderWidth: 3,
    borderColor: '#87CEEB',
  },
  resultNumber: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#87CEEB',
    textAlign: 'center',
    marginBottom: 15,
  },
  resultMeaning: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#D8BFD8',
    textAlign: 'center',
    marginBottom: 15,
  },
  resultDescription: {
    fontSize: 16,
    color: '#E0E0E0',
    lineHeight: 24,
    marginBottom: 20,
  },
  actionContainer: {
    backgroundColor: '#0A0E27',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  actionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#87CEEB',
    marginBottom: 8,
  },
  actionText: {
    fontSize: 14,
    color: '#D8BFD8',
    lineHeight: 20,
  },
  listContainer: {
    padding: 20,
    paddingTop: 0,
  },
  listTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#87CEEB',
    marginBottom: 15,
    textAlign: 'center',
  },
  numberCard: {
    backgroundColor: '#1A1F3A',
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#4A5568',
  },
  numberText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#87CEEB',
    marginBottom: 5,
  },
  numberMeaning: {
    fontSize: 14,
    color: '#D8BFD8',
  },
  infoContainer: {
    margin: 20,
    padding: 20,
    backgroundColor: '#1A1F3A',
    borderRadius: 15,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#87CEEB',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#D8BFD8',
    lineHeight: 22,
  },
});
