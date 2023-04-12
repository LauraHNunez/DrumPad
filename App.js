import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Alert, StyleSheet, Text, View, } from 'react-native';
import { Audio } from 'expo-av';

const sonidos =[
  {id: '1', src: require('./assets/Agua.wav') },
  {id: '2', src: require('./assets/Avion.wav') },
  {id: '3', src: require('./assets/Caida.wav') },
  {id: '4', src: require('./assets/Derrape.wav') },
  {id: '5', src: require('./assets/Disparo.wav') },
  {id: '6', src: require('./assets/Espada.wav') },
  {id: '7', src: require('./assets/Gol.wav') },
  {id: '8', src: require('./assets/Pregunta.wav') },
  {id: '9', src: require('./assets/Transicion.wav') }
];

export default function App() {
  async function playSound(id){
    const tono = new Audio.Sound();
    try{
      await tono.loadAsync(sonidos.find((tono) => tono.id === id ).src);
      await tono.playAsync();
    }catch{
      console.error(error);
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        {sonidos.map((tono) => (
          <TouchableOpacity style={styles.button} onPress = {() => playSound(tono.id)} />
        ))}
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightblue",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection:'row',
    flexWrap: "wrap",
  },
  container2: {
    marginTop: 450,
    backgroundColor: "lightblue",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection:'row',
    flexWrap: "wrap",
  },
  button: {
    backgroundColor: 'white',
    width: 100,
    height: 100,
    margin: 4,
  },
});