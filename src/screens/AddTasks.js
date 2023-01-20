import { Button, TextInput, View } from 'react-native';

import React from 'react'
import colors from '../Estilos/constants/Colors.js';
import styles from '../Estilos/Estilos.js';
import { useState } from 'react';

const AddTasks = ({itemList, setItemList}) => {

    const [text, setText] = useState('')

    const addItem = (item) => {
        if (item != '') {
            setItemList([...itemList, {id: itemList.length +1, value: item}])
            setText('') 
        }
    }

    const onHandlerChangeItem = (t) => {
        setText(t)
    }
    
    return (
        <>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder = "Item de la Lista"
                    style={styles.input}
                    value={text}
                    onChangeText={onHandlerChangeItem}
                />
                <Button title="ADD" onPress={() => addItem(text)} color={colors.accent} />
            </View>
        </>
    )
}

export default AddTasks