import { Button, Text, View } from 'react-native';

import AddTasks from './src/screens/AddTasks.js';
import AppLoading from 'expo-app-loading'
import { StatusBar } from 'expo-status-bar';
import ViewTasks from './src/screens/ViewTasks.js';
import colors from './src/Estilos/constants/Colors.js';
import styles from './src/Estilos/Estilos.js';
import { useFonts } from 'expo-font'
import { useState } from 'react';

export default function App() {

    const [view, setView] = useState(false)

    const [itemList, setItemList] = useState([])

    const viewTasks = () => {
        setView(!view)
    }

    const [loaded] = useFonts({
        Bebas: require('./assets/fonts/BebasNeue-Regular.ttf'),
    })
	
	if (!loaded) { return <AppLoading/> }

    return (
        <>
            <StatusBar style="auto" />
            <View style={styles.container}>
                <Text style={styles.title}>Task List</Text>
                
                { !view ? <AddTasks itemList={itemList} setItemList={setItemList} /> : null }

                <View style={styles.containerButton}>
                    <Button 
                        title={view ? "ADD TASKS" : "SHOW TASKS"}
                        onPress={() => viewTasks()}
                        color={colors.primary} 
                    />
                </View>
                
                { view ? <ViewTasks itemList={itemList} setItemList={setItemList} /> : null }

            </View>
        </>
    );
}

/*

*/