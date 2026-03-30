import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

export default function Produtos() {

  const [qtd1, setQtd1] = useState(1);

  function adicionar() {
    Alert.alert('Produto adicionado ao carrinho');
  }

  return (
    
    <SafeAreaView style={styles.container}>  
      <StatusBar style="auto" />
 
      <Text style={styles.titulo}>Produtos</Text>
 <ScrollView>
     
      <View style={styles.card}>
        <Image source={require('C:\\Users\\41941734812\\Desktop\\3 Semestre\\PPDM1\\aula-s1-r2-pt3\\aula-s1-r2-pt3\\assets\\imagensProdutos\\download (2).jpg')} style={styles.img} />

        <Text>Camisa Nike</Text>
        <Text>R$ 120</Text>
        <Text style={{ color: 'green' }}>PIX: R$ 100</Text>

        <View style={styles.qtd}>
          <TouchableOpacity onPress={() => setQtd1(qtd1 - 1)}>
            <Text>-</Text>
          </TouchableOpacity>

          <Text>{qtd1}</Text>

          <TouchableOpacity onPress={() => setQtd1(qtd1 + 1)}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.botao} onPress={adicionar}>
          <Text style={{ color: '#fff' }}>Adicionar</Text>
        </TouchableOpacity>
      </View>



       <View style={styles.card}>
        <Image source={require('C:\\Users\\41941734812\\Desktop\\3 Semestre\\PPDM1\\aula-s1-r2-pt3\\aula-s1-r2-pt3\\assets\\imagensProdutos\\download (3).jpg')} style={styles.img} />

        <Text>Camisa Adidas</Text>
        <Text>R$ 120</Text>
        <Text style={{ color: 'green' }}>PIX: R$ 99</Text>

        <View style={styles.qtd}>
          <TouchableOpacity onPress={() => setQtd1(qtd1 - 1)}>
            <Text>-</Text>
          </TouchableOpacity>

          <Text>{qtd1}</Text>

          <TouchableOpacity onPress={() => setQtd1(qtd1 + 1)}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.botao} onPress={adicionar}>
          <Text style={{ color: '#fff' }}>Adicionar</Text>
        </TouchableOpacity>
      </View>



       <View style={styles.card}>
        <Image source={require('C:\\Users\\41941734812\\Desktop\\3 Semestre\\PPDM1\\aula-s1-r2-pt3\\aula-s1-r2-pt3\\assets\\imagensProdutos\\images (2).jpg')} style={styles.img} />

        <Text>Camisa Puma</Text>
        <Text>R$ 120</Text>
        <Text style={{ color: 'green' }}>PIX: R$ 100</Text>

        <View style={styles.qtd}>
          <TouchableOpacity onPress={() => setQtd1(qtd1 - 1)}>
            <Text>-</Text>
          </TouchableOpacity>

          <Text>{qtd1}</Text>

          <TouchableOpacity onPress={() => setQtd1(qtd1 + 1)}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.botao} onPress={adicionar}>
          <Text style={{ color: '#fff' }}>Adicionar</Text>
        </TouchableOpacity>
      </View>



       <View style={styles.card}>
        <Image source={require('C:\\Users\\41941734812\\Desktop\\3 Semestre\\PPDM1\\aula-s1-r2-pt3\\aula-s1-r2-pt3\\assets\\imagensProdutos\\download (4).jpg')} style={styles.img} />

        <Text>Camisa Mizuno</Text>
        <Text>R$ 130</Text>
        <Text style={{ color: 'green' }}>PIX: R$ 110</Text>

        <View style={styles.qtd}>
          <TouchableOpacity onPress={() => setQtd1(qtd1 - 1)}>
            <Text>-</Text>
          </TouchableOpacity>

          <Text>{qtd1}</Text>

          <TouchableOpacity onPress={() => setQtd1(qtd1 + 1)}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.botao} onPress={adicionar}>
          <Text style={{ color: '#fff' }}>Adicionar</Text>
        </TouchableOpacity>
      </View>



       <View style={styles.card}>
        <Image source={require('C:\\Users\\41941734812\\Desktop\\3 Semestre\\PPDM1\\aula-s1-r2-pt3\\aula-s1-r2-pt3\\assets\\imagensProdutos\\download (5).jpg')} style={styles.img} />

        <Text>Camisa do Atlético Amazonense</Text>
        <Text>R$ 100</Text>
        <Text style={{ color: 'green' }}>PIX: R$ 90</Text>

        <View style={styles.qtd}>
          <TouchableOpacity onPress={() => setQtd1(qtd1 - 1)}>
            <Text>-</Text>
          </TouchableOpacity>

          <Text>{qtd1}</Text>

          <TouchableOpacity onPress={() => setQtd1(qtd1 + 1)}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.botao} onPress={adicionar}>
          <Text style={{ color: '#fff' }}>Adicionar</Text>
        </TouchableOpacity>
      </View>

</ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d4d4d4',
  },
  titulo: {
    fontSize: 24,
    marginBottom: 10,
  },
  card: {
    width: 200,
    backgroundColor: '#eee',
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  img: {
    width: 100,
    height: 100,
  },
  qtd: {
    flexDirection: 'row',
    gap: 10,
    margin: 5,
  },
  botao: {
    backgroundColor: 'blue',
    padding: 5,
    marginTop: 5,
  },
});