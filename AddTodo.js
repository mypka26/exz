import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Alert, Text } from 'react-native';

export const AddTodo = ({ onSubmit }) => {
    var [value, setValue]  = useState(value);
    var S

    const pressHandler1 = () => {
        Alert.alert("Формула: S = π * r^2", "\nS - площадь\nr - радиус\nπ = 3.14")
    }

    const pressHandler2 = () => {
        if (value >= 0) {
            S = Math.PI * Math.pow(value, 2);
            Alert.alert("Площадь окружности: " + S)
        } 
        else {
            Alert.alert('Введите положительные числа в поля');
        }
    };

    return (
        <View>
            <View style = {styles.block1}>
                <View style = {styles.block2}>
                   <Text style = {styles.form}>Введите радиус:  </Text>
                    <TextInput 
                        placeholder = '0'    
                        style = {styles.input}
                        keyboardType = 'numeric'  
                        onChangeText = {setValue}                                      
                        value = {value}
                        maxLength = {8}
                    />
                </View>
                <View style = {styles.button1}>
                    <Button 
                        color = '#033E6B' 
                        title = " ! " 
                        onPress = {pressHandler1}
                    /> 
                </View>
            </View>            
            <View style = {styles.button2}>
                <Button 
                    color = '#033E6B' 
                    title = " Посчитать " 
                    onPress = {pressHandler2}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        fontSize: 25,
        padding: 1    
    },
    block1: {
        flexDirection: 'row', 
        alignItems: 'baseline',
        padding: 10    
    },
    block2: {
        flexDirection: 'row',  
        justifyContent: 'flex-start'    
    },
    input: {
        width: '20%',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        fontSize: 23,
        textAlign: 'center',
        padding: 3,   
        borderBottomColor: '#033E6B'
    }, 
    button1: {
        width: '15%',
        fontSize: 20,
        marginTop: 10,
        justifyContent: 'flex-end',
        padding: 7
    },
    button2: {
        width: '100%',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 7
    }
});