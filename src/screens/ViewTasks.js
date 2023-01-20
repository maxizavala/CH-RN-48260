import { FlatList, Text, TouchableOpacity } from 'react-native'

import CustomModal from '../components/CustomModal'
import React from 'react'
import { useState } from 'react'

const ViewTasks = ({itemList, setItemList}) => {

    const [modalVisible, setModalVisible] = useState(false)

    const [selectedItem, setSelectedItem] = useState()

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
        <>
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
        </>
    )
}

export default ViewTasks