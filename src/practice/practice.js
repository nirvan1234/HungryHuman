// import { render, screen } from '@testing-library/react';
// import App from '../App';
// import "@testing-library/jest-dom"

// test('renders learn react link', () => {
//   render(<App />);
//   // const linkElement = screen.getByText(/learn react/i);
//   // expect(linkElement).toBeInTheDocument();
// });


import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, StatusBar } from 'react-native';
import { RadioButton } from 'react-native-paper'; // Correct RadioButton import

// Get screen width for responsive design
const { width: screenWidth } = Dimensions.get('window');

// API URL for server data
const API_URL = 'https://assessments.reliscore.com/api/cric-scores/';

export default function App() {
  const [selectedSource, setSelectedSource] = useState('Test');
  const [countryScores, setCountryScores] = useState([]);  // For storing data
  const [inputCountry, setInputCountry] = useState('');  // For storing the country entered by the user
  const [averageScore, setAverageScore] = useState(0);  // For storing the calculated average score
  const [loading, setLoading] = useState(false);  // Loading state
  const [error, setError] = useState('');  // For error handling

  // Function to calculate the average score for a given country
  const calculateAverage = (country) => {
    const filteredScores = countryScores.filter(score => score[0] === country);
    if (filteredScores.length === 0) return 0;

    const totalScore = filteredScores.reduce((acc, curr) => acc + curr[1], 0);
    return totalScore / filteredScores.length;
  };

  // Fetch data from the API when source changes to "Server"
  const fetchServerData = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setCountryScores(data);  // Set server data
    } catch (err) {
      setError('Failed to fetch data from the server.');
    } finally {
      setLoading(false);
    }
  };

  // Update the average when the user enters a country
  useEffect(() => {
    if (inputCountry) {
      setAverageScore(calculateAverage(inputCountry));
    }
  }, [inputCountry, countryScores]);

  // Trigger data fetching when source changes
  useEffect(() => {
    if (selectedSource === 'Server') {
      fetchServerData();
    } else {
      // Static data for the "Test" source
      setCountryScores([
        ["Pakistan", 23],
        ["Pakistan", 127],
        ["India", 3],
        ["India", 71],
        ["Australia", 31],
        ["India", 22],
        ["Pakistan", 81]
      ]);
    }
  }, [selectedSource]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Test Data</Text>

      {/* Radio buttons to toggle between Test and Server */}
      <View style={styles.radioContainer}>
        <RadioButton
          value="Test"
          status={selectedSource === 'Test' ? 'checked' : 'unchecked'}
          onPress={() => setSelectedSource('Test')}
        />
        <Text>Test Data</Text>
      </View>

      <View style={styles.radioContainer}>
        <RadioButton
          value="Server"
          status={selectedSource === 'Server' ? 'checked' : 'unchecked'}
          onPress={() => setSelectedSource('Server')}
        />
        <Text>Server Data</Text>
      </View>

      {/* Country Input Section */}
      <Text style={styles.header}>Calculator</Text>
      <View style={styles.inputContainer}>
        <Text>The Country:</Text>
        <TextInput
          style={styles.textInput}
          value={inputCountry}
          onChangeText={setInputCountry}
          placeholder="Enter country"
        />

        {loading ? (
          <Text>Loading...</Text>
        ) : error ? (
          <Text style={styles.errorText}>{error}</Text>
        ) : (
          <Text style={styles.averageText}>The Average: {averageScore.toFixed(2)}</Text>
        )}

        {/* Blue bar proportional to average score */}
        <View
          style={{
            width: screenWidth * (averageScore / 300), // Width based on average score
            height: 10,
            backgroundColor: 'blue',
            marginTop: 8,
          }}
        />
      </View>

      {/* Responsive layout for each row: Country, Average, and Blue bar */}
      <View
        style={[
          styles.rowContainer,
          {
            flexDirection: screenWidth > 600 ? 'row' : 'column', // Adjust layout based on screen width
          },
        ]}
      >
        <View style={styles.rowItem}>
          <Text>The Country:</Text>
          <TextInput style={styles.textInput} defaultValue="Pakistan" />
        </View>

        <View style={styles.rowItem}>
          <Text>The Average: 77</Text>
        </View>

        <View style={styles.rowItem}>
          <View style={{ width: screenWidth * 77 / 300, height: 10, backgroundColor: 'blue' }}></View>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  inputContainer: {
    marginVertical: 16,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 8,
    paddingLeft: 8,
  },
  averageText: {
    fontSize: 16,
    marginBottom: 8,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 8,
  },
  rowContainer: {
    flexDirection: 'row', // Default direction
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 16,
  },
  rowItem: {
    flex: 1,
    marginHorizontal: 8,
  },
});