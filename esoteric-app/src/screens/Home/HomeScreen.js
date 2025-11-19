import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  const features = [
    { name: 'Tarot Reading', screen: 'Tarot', icon: '🔮', description: 'Discover your destiny through the ancient art of tarot cards' },
    { name: 'Numerology', screen: 'Numerology', icon: '🔢', description: 'Calculate your life path and destiny numbers' },
    { name: 'Astrology', screen: 'Astrology', icon: '♈', description: 'Explore zodiac signs and cosmic influences' },
    { name: 'Angel Numbers', screen: 'AngelNumbers', icon: '👼', description: 'Decode messages from the divine realm' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to the Mystic Portal</Text>
        <Text style={styles.subtitle}>Explore the mysteries of the universe</Text>
      </View>
      
      <View style={styles.featuresContainer}>
        {features.map((feature, index) => (
          <TouchableOpacity
            key={index}
            style={styles.featureCard}
            onPress={() => navigation.navigate(feature.screen)}
          >
            <Text style={styles.featureIcon}>{feature.icon}</Text>
            <Text style={styles.featureName}>{feature.name}</Text>
            <Text style={styles.featureDescription}>{feature.description}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.infoTitle}>About Esoteric Wisdom</Text>
        <Text style={styles.infoText}>
          Dive into the ancient practices of divination, numerology, astrology, and angelic guidance. 
          This app brings together timeless wisdom to help you understand yourself and your path better.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#4B0082',
    padding: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#FFF',
    fontStyle: 'italic',
  },
  featuresContainer: {
    padding: 15,
  },
  featureCard: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  featureIcon: {
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 10,
  },
  featureName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4B0082',
    textAlign: 'center',
    marginBottom: 8,
  },
  featureDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
  },
  infoSection: {
    backgroundColor: '#FFF',
    margin: 15,
    padding: 20,
    borderRadius: 15,
    marginBottom: 30,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4B0082',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 22,
  },
});
