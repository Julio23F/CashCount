import { StyleSheet } from 'react-native';
import Accueil from "./components/Accueil"

export default function App() {
  return (
    <Accueil/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
