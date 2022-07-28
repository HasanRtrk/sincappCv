import React from "react";
import {View,Text,StyleSheet, Pressable} from 'react-native';

const CustomButton = ({onPress,text}) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Text style={styles.text}>{text}</Text>
            
        </Pressable>
        
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#852B68',
        width:'100%',
        padding:25,
        marginTop:20,
        marginVertical:5,

        alignItems:'center',
        borderRadius: 20

    },
    text:{
        fontWeight: 'bold',
        color:'white',
    },
})
export default CustomButton;