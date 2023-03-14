import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, RootTagContext } from 'react-native'
import database from "../config"


export default function Details({ navigation, route }) {

  const [descriptionEdit, setDescriptionEdit] = useState(route.params.description)
  const idTask = route.params.id

  function editTask(description,id){
    database.collection("Task").doc(id).update({description:description})
    navigation.navigate("Task")
  }
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        Editar Tarefa
      </Text>
      <TextInput style={styles.input} onChangeText={setDescriptionEdit} value={descriptionEdit}>

      </TextInput>
      <TouchableOpacity style={styles.buttonNewTask} onPress={() => {
        editTask(descriptionEdit, idTask)
      }}>
        <Text style={styles.iconButton}>
          +
        </Text>
      </TouchableOpacity>
    </View>
  )
}
const styles= StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:"#fff",
  },

  label:{
    width: "80%",
    marginTop: 60,
    fontSize:16,
    marginLeft:20,
    color: "#f92e6a"
  },
  input:{
    width:"90%",
    marginTop:70,
    padding: 10,
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: "#f92e6a",
    marginLeft: "auto" ,
    marginRight:"auto"
  },
  iconButton: { 
    color: "#FFF", 
    fontSize: 16, 
    fontWeight: "bold", },

  buttonNewTask: { 
    width: 60, 
    height: 60, 
    position: "absolute", 
    bottom: 30, 
    left: 20, 
    backgroundColor: "#F92E6A", 
    borderRadius: 50, 
    justifyContent: "center", 
    alignItems: "center" }
})