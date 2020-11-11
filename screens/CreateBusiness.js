import React, {useState} from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import { TextInput  } from 'react-native-paper'
import firebase from '../database/firebase'


const CreateBusiness = (props) => {


    const [state, setState] = useState({
        nombre: "",
        registro: "",  
        direccion:"",
        telefono: "",    

    });

const controlCambioTexto = (nombre,  value) => {    
    setState({ ...state, [nombre]: value })
} 
const crearEntidad = async () => {
   if (state.nombre === ''){
       alert('¡Ingresa datos solicitados!')
       }else{
 try {
    await firebase.db.collection('entidad').add({
        nombre: state.nombre,
        registro: state.registro,
        direccion: state.direccion,
        telefono: state.telefono,
       
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
    <TextInput   label="nombre"
     mode="outlined"
    onChangeText={(value) => controlCambioTexto("nombre", value)}
    /> 
</View>
<View style = {stylos.inputGroup}>
    <TextInput 
     label="registro"
     mode="outlined"
    onChangeText={(value) => controlCambioTexto("registro", value)}
    /> 
</View>

<View style = {stylos.inputGroup}> 
    <TextInput   label="direccion"
     mode="outlined"
     onChangeText={(value) => controlCambioTexto("direccion", value)}
     />  
</View>
<View style = {stylos.inputGroup}>
    <TextInput   label="telefono"
     mode="outlined"
    onChangeText={(value) => controlCambioTexto("telefono", value)}
    /> 
</View>

<View style = {stylos.botonUser}>
    <Button title="Guardar"  type="solid" onPress={() => crearEntidad()}/> 
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

            buttonGroup: {
                flex: 1,
                padding: 0,
                marginBottom: 15,
                borderBottomWidth: 1,
                borderBottomColor: "#cccccc"
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

export default CreateBusiness
