import React, {useEffect, useState} from 'react'
import { View, Text, ScrollView, StyleSheet, Image, Icon } from 'react-native'
import firebase from  '../database/firebase'
import { ListItem, Button, Avatar, Divider  } from 'react-native-elements'
import { IconButton } from 'react-native-paper'


const UsersList = (props) => {
    
    const [usuarios, setUsuarios] = useState ([])

useEffect( () => {
    firebase.db.collection('usuarios').onSnapshot(querySnapshot => { 
        const usuarios = [];
        querySnapshot.docs.forEach(doc => {
            const {nombre, apellidos, documento, fecha, telefono, temperatura} = doc.data()
            usuarios.push({
                id: doc.id,
                nombre,
                apellidos,
                documento,
                fecha,
                telefono,
                temperatura 
            })
        });
        setUsuarios(usuarios)
    });
},[]);


    return (
        
<ScrollView style = {stylos.contenedor} >
    
<View style={stylos.contentGroupBtn}>
<View style = {stylos.botonUser}>
   <Button title="Nuevo usuario"  type="solid" 
    onPress={() => props.navigation.navigate('Crear_Usuario')}
    /> 
   </View>
   <View style = {stylos.botonUser}>
   <Button title="Nueva entidad"  type="solid" 
    onPress={() => props.navigation.navigate('Crear_Negocio')}
    /> 
   </View>
   </View>
    {
        usuarios.map(usuario =>{
            return (
                <ListItem key={usuario.id} bottomDivider  onPress={() => {
                    props.navigation.navigate('Detalle_Usuario', {
                        usuarioId: usuario.id
                    })
                }}>

                    <Image source={require ('../assets/icons/pand128.png') } 
                      style={stylos.avatar}/>
   
                    <ListItem.Content style={stylos.content}> 
            <ListItem.Title>{usuario.nombre}</ListItem.Title>
            <ListItem.Subtitle>{usuario.apellidos}</ListItem.Subtitle>    
                    </ListItem.Content>
                    
                    <ListItem.Content style={stylos.content2}>
                    <ListItem.Title>{"Temp :"}</ListItem.Title>
                    <ListItem.Subtitle>{usuario.temperatura}</ListItem.Subtitle>
                    </ListItem.Content>
          
                    <ListItem.Content style={stylos.content2}>
                    <ListItem.Title>{"Negocio:"}</ListItem.Title>
                    <ListItem.Subtitle>{"Restaurante Mi Casita"}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
            )
        })
    }
    
</ScrollView>

);
}

const stylos = StyleSheet.create({
    contenedor: {
    flex: 1,
    padding: 0.1,
    marginTop: 10,
    paddingBottom: 30
    },
    content: {
        flex: 3,
        padding: 0.1,
        marginTop: 10,
        flexDirection: 'column',
        
        },
        content2: {
            flex: 3,
            padding: 0.1,
            marginTop: 10,
            flexDirection: 'column',
            justifyContent: 'center',
            },
    inputGroup: {
            flex: 1,        
            borderBottomColor: "#cccccc"
        },
       botonUser:{
            flex:1,    
            borderColor: '#5c5c5c',
            borderWidth: 1,
            borderRadius: 5,
            marginBottom:10,
            marginLeft:10,
            marginRight:10
       },
            avatar:{
                width: 55, height: 55
            
            },
            contentGroupBtn:{
                flex: 1,
                padding: 5,
                marginTop: 10,
                flexDirection: 'row',
            }


    })

export default UsersList 