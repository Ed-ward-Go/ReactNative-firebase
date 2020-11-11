import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()
import CreateUserScreen from './screens/CreateUserScreen'
import UserDetailsScreen from './screens/UserDetailScreen'
import UsersList from './screens/UsersList'
import CreateBusiness from './screens/CreateBusiness'
import BasicScreen from './screens/BasicScreen'

function MyStack() {
  return (

<Stack.Navigator>
  
<Stack.Screen name='Usuarios' 
component={UsersList} 
options={{title:'Clientes'}}/>

<Stack.Screen name='Crear_Negocio' 
component={CreateBusiness} 
options={{title:'Crear Negocio'}} />

<Stack.Screen name='Basic_Screen' 
component={BasicScreen} 
options={{title:'Basic Screen'}} />

<Stack.Screen name='Crear_Usuario' 
component={CreateUserScreen} 
options={{title:'Crear Usuario'}} />

<Stack.Screen name='Detalle_Usuario' 
component={UserDetailsScreen} 
options={{title:'Detalle Usuarios'}}/>

</Stack.Navigator>

  )
}

export default function App() {
  return (
<NavigationContainer>
<MyStack/>
</NavigationContainer>
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
