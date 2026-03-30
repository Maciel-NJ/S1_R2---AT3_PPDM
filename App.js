import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Home from "./src/pages/Home"
import Produtos from "./src/pages/Produtos"
import Contato from "./src/pages/Contato"

const Stack = createNativeStackNavigator()

export default function App() {
  return (
      <NavigationContainer>
        
       <Stack.Navigator>

        <Stack.Screen name="Home" component={Home} options={{title:"Página inicial"}} />

        <Stack.Screen name="Contato" component={Contato} />

        <Stack.Screen name="Produtos" component={Produtos} />

       </Stack.Navigator>

      </NavigationContainer>

  );
    
}


  

 