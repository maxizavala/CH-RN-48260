import { Button, ScrollView, StyleSheet, Text, View } from "react-native"

import React from "react"

const AddTasks = ({ navigation }) => {

    return(
        <View style={{flex: 1}}> 
            <View style={styles.header}>
                <Text style={styles.title}>ADD TASKS</Text>
            </View> 
            
            <ScrollView>
                
            </ScrollView>

            <View style={styles.footer}>
                <Button title="ADD TASKS" onPress={ () => navigation.push('AddTasks') } />
                <Button title="VIEW TASKS" onPress={ () => navigation.push('ViewTasks') } />
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'black', 
        height: '10%', 
        width: '100%', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    title: {
        color: 'gray',
        fontSize: 20,
        marginTop: 30,
    },
    footer: {
        backgroundColor: 'black', 
        height: '6%', 
        width: '100%',
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    }
})

export default AddTasks