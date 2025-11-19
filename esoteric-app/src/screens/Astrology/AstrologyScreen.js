import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { zodiacSigns } from '../../data/astrology';

export default function AstrologyScreen() {
  const [selectedSign, setSelectedSign] = useState(null);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>♈ Astrology</Text>
        <Text style={styles.subtitle}>Explore the wisdom of the stars</Text>
      </View>

      {!selectedSign ? (
        <View style={styles.signsContainer}>
          <Text style={styles.sectionTitle}>Select Your Zodiac Sign</Text>
          {zodiacSigns.map((sign, index) => (
            <TouchableOpacity
              key={index}
              style={styles.signCard}
              onPress={() => setSelectedSign(sign)}
            >
              <Text style={styles.signSymbol}>{sign.symbol}</Text>
              <View style={styles.signInfo}>
                <Text style={styles.signName}>{sign.name}</Text>
                <Text style={styles.signDates}>{sign.dates}</Text>
                <Text style={styles.signElement}>{sign.element} Sign</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      ) : (
        <View style={styles.detailContainer}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => setSelectedSign(null)}
          >
            <Text style={styles.backButtonText}>← Back to Signs</Text>
          </TouchableOpacity>

          <View style={styles.detailCard}>
            <Text style={styles.detailSymbol}>{selectedSign.symbol}</Text>
            <Text style={styles.detailName}>{selectedSign.name}</Text>
            <Text style={styles.detailDates}>{selectedSign.dates}</Text>

            <View style={styles.detailSection}>
              <Text style={styles.detailLabel}>Element:</Text>
              <Text style={styles.detailValue}>{selectedSign.element}</Text>
            </View>

            <View style={styles.detailSection}>
              <Text style={styles.detailLabel}>Ruling Planet:</Text>
              <Text style={styles.detailValue}>{selectedSign.ruling_planet}</Text>
            </View>

            <View style={styles.detailSection}>
              <Text style={styles.detailLabel}>Key Traits:</Text>
              <Text style={styles.detailTraits}>{selectedSign.traits}</Text>
            </View>

            <View style={styles.detailSection}>
              <Text style={styles.detailLabel}>Description:</Text>
              <Text style={styles.detailDescription}>{selectedSign.description}</Text>
            </View>
          </View>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000428',
  },
  header: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#004e92',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#E0E0E0',
    fontStyle: 'italic',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 20,
    textAlign: 'center',
  },
  signsContainer: {
    padding: 15,
  },
  signCard: {
    flexDirection: 'row',
    backgroundColor: '#001f3f',
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#004e92',
    alignItems: 'center',
  },
  signSymbol: {
    fontSize: 40,
    marginRight: 15,
  },
  signInfo: {
    flex: 1,
  },
  signName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 4,
  },
  signDates: {
    fontSize: 14,
    color: '#87CEEB',
    marginBottom: 4,
  },
  signElement: {
    fontSize: 12,
    color: '#B0C4DE',
    fontStyle: 'italic',
  },
  detailContainer: {
    padding: 20,
  },
  backButton: {
    backgroundColor: '#001f3f',
    padding: 12,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#004e92',
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFD700',
  },
  detailCard: {
    backgroundColor: '#001f3f',
    borderRadius: 20,
    padding: 25,
    borderWidth: 2,
    borderColor: '#FFD700',
  },
  detailSymbol: {
    fontSize: 80,
    textAlign: 'center',
    marginBottom: 10,
  },
  detailName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFD700',
    textAlign: 'center',
    marginBottom: 5,
  },
  detailDates: {
    fontSize: 16,
    color: '#87CEEB',
    textAlign: 'center',
    marginBottom: 20,
  },
  detailSection: {
    marginBottom: 20,
  },
  detailLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 8,
  },
  detailValue: {
    fontSize: 16,
    color: '#87CEEB',
  },
  detailTraits: {
    fontSize: 14,
    color: '#B0C4DE',
    lineHeight: 22,
    fontStyle: 'italic',
  },
  detailDescription: {
    fontSize: 14,
    color: '#E0E0E0',
    lineHeight: 22,
  },
});
