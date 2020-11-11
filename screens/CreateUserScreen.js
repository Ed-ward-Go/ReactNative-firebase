import React, {useState} from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import { TextInput } from 'react-native-paper'
import firebase from '../database/firebase'

const CreateUserScreen = (props) => {

    const [state, setState] = useState({

        nombre: "",
        apellidos: "",
        documento: "",
        fecha: "",      
        telefono: "",    
        temperatura: ""
    });

const controlCambioTexto = (nombre,  value) => {    
    setState({ ...state, [nombre]: value })
} 
const crearUsuario = async () => {
   if (state.nombre === ''){
       alert('¡Ingresa datos solicitados!')
       }else{
 try {
    await firebase.db.collection('usuarios').add({
        nombre: state.nombre,
        apellidos: state.apellidos,
        documento: state.documento,
        fecha: state.fecha,
        telefono: state.telefono,
        temperatura: state.temperatura     
    })
    
    alert('Creado !')
  props.navigation.navigate('Usuarios')

 } catch (error) {
     console.log(error);
 }
       }
   }

    return (

<ScrollView style = {stylos.contenedor}>

<View style = {stylos.inputGroup}>
    <TextInput label="nombre"
    mode="outlined"
    onChangeText={(value) => controlCambioTexto("nombre", value)}
    /> 
</View>
<View style = {stylos.inputGroup}>
    <TextInput label="apellidos"
        mode="outlined"
    onChangeText={(value) => controlCambioTexto("apellidos", value)}
    /> 
</View>

<View style = {stylos.inputGroup}> 
    <TextInput label="documento"
        mode="outlined"
     onChangeText={(value) => controlCambioTexto("documento", value)}
     />  
</View>

<View style = {stylos.inputGroup}>
    <TextInput label="fecha"
        mode="outlined"
    onChangeText={(value) => controlCambioTexto("fecha", value)}
    /> 
</View>
<View style = {stylos.inputGroup}>
    <TextInput   label="telefono"
        mode="outlined"
    onChangeText={(value) => controlCambioTexto("telefono", value)}
    /> 
</View>
<View style = {stylos.inputGroup}>
    <TextInput label="temperatura"
        mode="outlined"
    onChangeText={(value) => controlCambioTexto("temperatura", value)}
    /> 
</View>

<View style = {stylos.botonUser}>
    <Button title="Guardar"  type="solid"  onPress={() => crearUsuario()}/> 
</View>

</ScrollView>
    );   

};

const stylos = StyleSheet.create({
    contenedor: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 30,
        paddingBottom: 30
        },

        inputGroup: {
            flex:1,    
            marginBottom:10
            
            },
            
            row: {
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 10
              }, 

               botonUser:{
                    flex:1,    
                    borderColor: '#5c5c5c',
                    borderWidth: 1,
                    backgroundColor: '#54CE82',
                    borderRadius: 5,
                    marginBottom:10,
                    marginTop: 20
                
               },

})

export default CreateUserScreen 