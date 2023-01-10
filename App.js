import { Button, FlatList, Text, TextInput, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import styles from './Estilos.js';
import { useState } from 'react';

export default function App() {

    const [text, setText] = useState('')

    const [itemList, setItemList] = useState([])

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
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.title}>Task List</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder = "Item de la Lista"
                    style={styles.input}
                    value={text}
                    onChangeText={onHandlerChangeItem}
                />
                <Button title="ADD" onPress={() => addItem(text)} />
            </View>
            <FlatList
                data={itemList}
                keyExtractor={ item => item.id.toString() }
                renderItem={({item}) => (<Text style={{fontSize: 20}}>· {item.value}</Text>)}
            />
        </View>
    );
}

/*

*/