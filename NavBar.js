import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export const NavBar = ({title}) => {
    return (
        <View style = {styles.navbar}>
            <Text style = {styles.text}>{title}</Text>  
        </View>
    )
};

const styles = StyleSheet.create({
    navbar: {
        height: 50,
        backgroundColor: '#033E6B',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 10,
        padding: 3
    },
    text: {
        color: 'white',
        fontSize: 25
    }
});