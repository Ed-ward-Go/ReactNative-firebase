import React, {useEffect, useState, Component} from 'react'
import { ActivityIndicator, Alert } from 'react-native';
import { View, StyleSheet, ScrollView } from 'react-native'
import { TextInput } from 'react-native-paper'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import  firebase from '../database/firebase'

const UserDetailsScreen = (props) => {

    const inicialState = {

        nombre: "",
        apellidos: "",
        documento: "",
        fecha: "",
        telefono: "",
        temperatura: ""
    }
const [usuario, setUsuario] = useState ();
const [loading, setLoading] = useState(true); 

    const obtUserById = async (id) => {
        const dbRefer = firebase.db.collection("usuarios").doc(id);
        const doc = await  dbRefer.get();
        console.log(doc.id, '=>', doc.data());
        const usuario_data = doc.data();
        setUsuario({
            ...usuario_data,
             id: doc.id
            });
           setLoading(false);
        };

useEffect(() => {
    obtUserById(props.route.params.usuarioId);
},[]);

const controlCambioTexto = (nombre, value) => {    
    setUsuario({ ...usuario, [nombre]: value })
};
const eliminar = async () => {
const dbRef = firebase.db.collection('usuarios').doc(props.route.params.usuarioId);
await  dbRef.delete();
alert('Usuario Eliminado !')
props.navigation.navigate('Usuarios')
} 
const actualizar = async () => {
    const dbref = firebase.db.collection('usuarios').doc(usuario.id);
    await dbref.set({
        
        nombre: usuario.nombre,
        apellidos: usuario.apellidos,
        documento: usuario.documento,
        fecha: usuario.fecha,
        telefono: usuario.telefono,
        temperatura: usuario.temperatura  
    })
    setUsuario(inicialState)
    props.navigation.navigate('Usuarios')
}
const confAlertElim = () => {
Alert.alert('Eliminar usuario','¿Estas seguro?',[
    {text: 'Si', onPress: () => eliminar()},
 {text: 'No', onPress: () => console.log(false)}
])  
}
const confAlertActu = () => {
    Alert.alert('Actualizar usuario','¿Estas seguro?',[
        {text: 'Si', onPress: () => actualizar()},
     {text: 'No', onPress: () => console.log(false)},
    ])  
    }
if(loading){
    return (
        <View style={stylos.ActivityIndicador}>
            <ActivityIndicator size="large" color="#841584"/>
        </View>
    );
}
return (

<ScrollView style = {stylos.contenedor}>

<View style = {stylos.inputGroup}>
    <TextInput label="nombre"
        mode="outlined"
      value={usuario.nombre}
    onChangeText={(value) => controlCambioTexto("nombre", value)}
    /> 
</View>
<View style = {stylos.inputGroup}>
    <TextInput label="apellidos"
        mode="outlined"
    value={usuario.apellidos}
    onChangeText={(value) => controlCambioTexto("apellidos", value)}
    /> 
</View>

<View style = {stylos.inputGroup}> 
    <TextInput label="documento"
        mode="outlined"
      value={usuario.documento}
     onChangeText={(value) => controlCambioTexto("documento", value)}
     />  
</View>

<View style = {stylos.inputGroup}>
    <TextInput label="fecha"
        mode="outlined" 
    value={usuario.fecha}
    onChangeText={(value) => controlCambioTexto("fecha", value)}
    /> 
</View>
<View style = {stylos.inputGroup}>
    <TextInput label="telefono"
        mode="outlined" 
      value={usuario.telefono}
    onChangeText={(value) => controlCambioTexto("telefono", value)}
    /> 
</View>
<View style = {stylos.inputGroup}>
    <TextInput label="temperatura"
        mode="outlined"
      value={usuario.temperatura}
    onChangeText={(value) => controlCambioTexto("temperatura", value)}
    /> 
</View>

<View style={stylos.btnCont}>
<View style = {stylos.btns}>
    <Button title="Modificar"  color="#54CE82" onPress={() => confAlertActu()}/> 
</View>
<View style = {stylos.btns}>

    <Button title="Borrar" color="#E37399"  onPress={() =>  confAlertElim()}/> 
</View>
</View>

</ScrollView>   
)
}
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
            marginBottom:10,

            },

        buttonGroup: {
            flex: 1,
            padding: 0,
            marginBottom: 15,
            borderBottomWidth: 1,
            borderBottomColor: "#cccccc"
        },
        ActivityIndicador: {
        flex: 1,
        paddingTop: 100,
  },
  btns: {
    flex:1,    
    borderColor: '#5c5c5c',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom:10,
    marginLeft:10,
    marginRight:10
 },

btnCont:{
    flex: 1,
    padding: 5,
    marginTop: 10,
    flexDirection: 'row',

}

    })

export default UserDetailsScreen 