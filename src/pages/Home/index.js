import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import{ useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';

export default function Home() {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
       <StatusBar style="auto" />

      <Text style={{ fontSize: 40 , color: 'black'}}>Página Home</Text> 
      <FontAwesome name="home" size={35} color="black" />

      <Image source={require('C:\\Users\\41941734812\\Desktop\\3 Semestre\\PPDM1\\aula-s1-r2-pt3\\aula-s1-r2-pt3\\assets\\logoempre.png')} style={{ width: 200, height: 200,borderRadius: 19, marginTop: 35}} />
      
      <Text style={{ fontSize: 17 , color: 'black', textAlign: 'center', marginTop: 35}}>Nossa empresa visa revender camisas de marcas esportiva, 
        para mais conforto e elegância!</Text>

       

<TouchableOpacity onPress={() => navigation.navigate('Contato')}>
   <Text style={{ fontSize: 20 , color: 'blue', marginTop: 35}}>-Ir para a página Contato</Text>
</TouchableOpacity>


<TouchableOpacity onPress={() => navigation.navigate('Produtos')}>
   <Text style={{ fontSize: 20 , color: 'blue' }}>-Ir para a página de Produtos</Text>
</TouchableOpacity>


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
});
