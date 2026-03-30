import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome, AntDesign } from '@expo/vector-icons';

export default function Contato() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.titulo}>Para entrar em contato</Text>
      <View style={styles.card}>

        <View style={styles.item}>
          <FontAwesome name="phone" size={20} color="#333" />
          <Text style={styles.texto}> (19) 99812-2984</Text>
        </View>

        <View style={styles.item}>
          <FontAwesome name="whatsapp" size={20} color="green" />
          <Text style={styles.texto}> (19) 99812-2984</Text>
        </View>

        <View style={styles.item}>
          <AntDesign name="idcard" size={20} color="#333" />
          <Text style={styles.texto}> CNPJ: 99.999.999/1111-11</Text>
        </View>

        <View style={styles.item}>
          <AntDesign name="home" size={20} color="#333" />
          <Text style={styles.texto}> Rua Senai, 123 - Sumaré/SP</Text>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d4d4d4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    width: '85%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 3, 
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  texto: {
    fontSize: 16,
    marginLeft: 10,
  },
});
