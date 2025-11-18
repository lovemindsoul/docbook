import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { tarotCards, tarotSpreads } from '../../data/tarotCards';

export default function TarotScreen() {
  const [selectedSpread, setSelectedSpread] = useState(null);
  const [drawnCards, setDrawnCards] = useState([]);
  const [isRevealed, setIsRevealed] = useState(false);

  const drawCards = (numCards) => {
    const shuffled = [...tarotCards].sort(() => 0.5 - Math.random());
    const drawn = shuffled.slice(0, numCards);
    setDrawnCards(drawn);
    setIsRevealed(false);
  };

  const handleSpreadSelect = (spread) => {
    setSelectedSpread(spread);
    drawCards(spread.positions.length);
  };

  const resetReading = () => {
    setSelectedSpread(null);
    setDrawnCards([]);
    setIsRevealed(false);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>🔮 Tarot Reading</Text>
        <Text style={styles.subtitle}>Let the cards reveal your path</Text>
      </View>

      {!selectedSpread ? (
        <View style={styles.spreadsContainer}>
          <Text style={styles.sectionTitle}>Choose a Spread</Text>
          {tarotSpreads.map((spread, index) => (
            <TouchableOpacity
              key={index}
              style={styles.spreadCard}
              onPress={() => handleSpreadSelect(spread)}
            >
              <Text style={styles.spreadName}>{spread.name}</Text>
              <Text style={styles.spreadDescription}>{spread.description}</Text>
              <Text style={styles.spreadPositions}>
                {spread.positions.length} card{spread.positions.length > 1 ? 's' : ''}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      ) : (
        <View style={styles.readingContainer}>
          <Text style={styles.sectionTitle}>{selectedSpread.name} Reading</Text>
          
          {!isRevealed && (
            <TouchableOpacity
              style={styles.revealButton}
              onPress={() => setIsRevealed(true)}
            >
              <Text style={styles.revealButtonText}>Reveal Cards</Text>
            </TouchableOpacity>
          )}

          {isRevealed && (
            <View style={styles.cardsContainer}>
              {drawnCards.map((card, index) => (
                <View key={index} style={styles.cardReading}>
                  <Text style={styles.positionLabel}>
                    {selectedSpread.positions[index]}
                  </Text>
                  <View style={styles.card}>
                    <Text style={styles.cardName}>{card.name}</Text>
                    <Text style={styles.cardSuit}>{card.suit}</Text>
                    <Text style={styles.cardMeaning}>{card.meaning}</Text>
                  </View>
                </View>
              ))}
            </View>
          )}

          <TouchableOpacity
            style={styles.resetButton}
            onPress={resetReading}
          >
            <Text style={styles.resetButtonText}>New Reading</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A0033',
  },
  header: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#2D1B69',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#E6E6FA',
    fontStyle: 'italic',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 15,
    textAlign: 'center',
  },
  spreadsContainer: {
    padding: 20,
  },
  spreadCard: {
    backgroundColor: '#2D1B69',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#4B0082',
  },
  spreadName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 8,
  },
  spreadDescription: {
    fontSize: 14,
    color: '#E6E6FA',
    marginBottom: 8,
  },
  spreadPositions: {
    fontSize: 12,
    color: '#9370DB',
    fontStyle: 'italic',
  },
  readingContainer: {
    padding: 20,
  },
  revealButton: {
    backgroundColor: '#FFD700',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  revealButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1A0033',
  },
  cardsContainer: {
    marginBottom: 20,
  },
  cardReading: {
    marginBottom: 20,
  },
  positionLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#2D1B69',
    borderRadius: 15,
    padding: 20,
    borderWidth: 2,
    borderColor: '#FFD700',
  },
  cardName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 5,
  },
  cardSuit: {
    fontSize: 14,
    color: '#9370DB',
    marginBottom: 10,
    fontStyle: 'italic',
  },
  cardMeaning: {
    fontSize: 14,
    color: '#E6E6FA',
    lineHeight: 20,
  },
  resetButton: {
    backgroundColor: '#4B0082',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFD700',
  },
  resetButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFD700',
  },
});
