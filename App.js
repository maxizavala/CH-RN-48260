import { Button, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';

import CustomModal from './src/components/CustomModal.js';
import { StatusBar } from 'expo-status-bar';
import styles from './Estilos.js';
import { useState } from 'react';

export default function App() {

    const [text, setText] = useState('')

    const [itemList, setItemList] = useState([])

    const [modalVisible, setModalVisible] = useState(false)

    const [selectedItem, setSelectedItem] = useState()

    const addItem = (item) => {
            if (item != '') {
                setItemList([...itemList, {id: itemList.length +1, value: item}])
                setText('') 
            }
    }

	const onHandlerChangeItem = (t) => {
        setText(t)
    }

    const deleteItem = (id) => {
        const newList = itemList.filter(itemList => itemList.id !== id)
        setItemList(newList)
        setSelectedItem({})
        setModalVisible(!modalVisible);
    }

    const showModal = (id) => {
    setSelectedItem(itemList.find(itemList => itemList.id === id))
    setModalVisible(!modalVisible);
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
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => showModal(item.id) }>
                        <Text style={{fontSize: 20}}>· {item.value}</Text>
                    </TouchableOpacity>)}
            />

            <CustomModal
                deleteItem={deleteItem} 
                setModalVisible={setModalVisible}
                selectedItem={selectedItem}
                modalVisible={modalVisible}
            />
                
        </View>
    );
}

/*

*/