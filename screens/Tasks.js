import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert } from 'react-native'
import database from "../config.js"
import { MaterialIcons } from "@expo/vector-icons"

export default function Task({ navigation }) {
    const [task, setTask] = useState([])
    function deleteTask(id) {
        Alert.alert(
            "Delete",
            "Tem certeza que quer deletar?",
            [{
                text: "Cancel",
                onPress: () => {
                    return;
                },
                style: "cancel"
            }, {
                text: "Ok",
                onPress: () => {
                    database.collection("Tasks").doc(id).delete()
                }
            }], {
            cancelable: false
        }
        )
    }
    useEffect(() => {
        database.collection("Tasks").onSnapshot((query) => {
            const list = []
            query.forEach(doc => {
                list.push({ ...doc.data(), id: doc.id })
            });
            setTask(list)
        })
    }, [])
    return (
        <View style={styles.container}>
            <Text style={styles.label}>
                Lista de Tarefas:
            </Text>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={task}
                style={styles.FlatList}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.Tasks}>
                            <Text 
                            style={styles.descriptionTask} 
                            onPress={() => {
                                navigation.navigate("Details", {
                                    id: item.id,
                                    description: item.description
                                })
                            }} >
                                {item.description}
                            </Text>
                            <TouchableOpacity
                                style={styles.deleteTask}
                                onPress={() => deleteTask(item.id)} >
                                <MaterialIcons
                                    name="delete-forever"
                                    size={25}
                                    color="#F64372" />
                            </TouchableOpacity>
                        </View>
                    )
                }} />
            < TouchableOpacity
                style={styles.buttonNewTask}
                onPress={() => navigation.navigate("NewTask")}>
                <Text style={styles.iconButton}>
                    +
                </Text>
            </TouchableOpacity >
        </View >
    )
}

const styles = StyleSheet.create({
    label: {
        width: "90%",
        marginTop: 50,
        fontSize: 16,
        marginLeft: 20,
        color: "#F92E6A"
    },
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        paddingTop: 20
    },
    Tasks:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:5
       },
    buttonNewTask:{
        width:60,
        height:60,
        position:"absolute",
        bottom: 30,
        left:20,
        backgroundColor:"#F92e6a",
        borderRadius:50,
        justifyContent:"center",
        alignItems: "center"
       },
    iconButton: {
        color: "#FFF",
        fontSize: 25,
        fontWeight: "bold"
    },
    deleteTask: {
        justifyContent: "center",
        paddingLeft: 35
    },
    descriptionTask:{
        width:"75%",
        alignContent:"flex-start",
        backgroundColor:"#f5f5f5cf",
        padding:12,
        paddingHorizontal: 20,
        borderRadius:50,
        marginBottom: 5,
        marginRight:15,
        color:"#282b2db5",
    },  

})