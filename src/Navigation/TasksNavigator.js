import AddTasks from '../screens/AddTasks'
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import ViewTasks from '../screens/ViewTasks'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const TasksNavigator = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName='AddTasks'
                screenOptions={{
                    headerShown: false,
                    animation: 'none'
                }}
            >
                <Stack.Screen name='AddTasks' component={AddTasks} />
                <Stack.Screen name='ViewTasks' component={ViewTasks} />
            </Stack.Navigator>
        </NavigationContainer>
    )  

}

export default TasksNavigator