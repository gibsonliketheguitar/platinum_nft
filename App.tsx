import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import HomeCard from './src/components/HomeCard';
import HomeContent from './src/components/HomeContent';
import HomeHeader from './src/components/HomeHeader';



const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader />
      <HomeContent />
      <HomeCard />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#161929'
  },
});

export default App;
