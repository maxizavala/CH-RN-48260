import AppLoading from 'expo-app-loading'
import React from "react"
import { StatusBar } from 'expo-status-bar';
import TasksNavigator from "./src/Navigation/TasksNavigator"
import { useFonts } from 'expo-font'

const App = () => {

    const [loaded] = useFonts({
        Bebas: require('./assets/fonts/BebasNeue-Regular.ttf'),
    })
	
	if (!loaded) { return <AppLoading/> }

    return(
        <>
            <TasksNavigator />
            <StatusBar style="auto" />
        </>
    );
}

export default App