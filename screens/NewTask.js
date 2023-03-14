import { NavigationContainerRefContext } from '@react-navigation/native'
import React, { Component, useState } from 'react'
import {View, Text, TextInput, TouchableOpacity, StyleSheet}  from 'react-native'
import database from "../config"

export default class NewTask extends Component {

  constructor(props){
    super()
    this.state={
      desc:""
    }
  }

   addTask =()=>{
    database.collection("Tasks").add({description:this.state.desc,status: false})
    this.props.navigation.navigate("Task")
  }
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.label}>
        Digite sua Tarefa: 
        </Text>
        <TextInput style={styles.input}
        placeholder = "Ex: Fazer Projetos."
        onChangeText={(desc)=>{this.setState({desc:desc})}}
        value ={this.state.desc}>

        </TextInput>
        <TouchableOpacity style={styles.buttonNewTask}
        onPress ={() => this.addTask()}>
          <Text style={styles.iconButton}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    )
    }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "white"
  },
  label:{
    width: "90%",
    marginTop:70,
    fontSize: 16,
    marginLeft: 20,
    color: "#f92de6a"
  },
  input: { 
    width: "90%", 
    marginTop: 10, 
    padding: 10, 
    height: 50, 
    borderBottomWidth: 1, 
    borderBottomColor: "#F92E6A", 
    marginLeft: "auto", 
    marginRight: "auto" },

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