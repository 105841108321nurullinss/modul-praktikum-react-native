// App.js
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Header, ProfileCard } from './src/components';
import ButtonShowcase from './src/screens/ButtonShowcase';

export default function App() {
  return (
    <View style={styles.container}>
      <Header 
        title="Nurul INSANI" 
        subtitle="105841108321"
      />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <ProfileCard
          name="Nurul INSANI"
          nim="105841108321"
          program="Informatika"
        />
        <ButtonShowcase />
      </ScrollView>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    paddingBottom: 20,
  },
});