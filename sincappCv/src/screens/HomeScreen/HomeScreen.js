import React from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native'
import Logo from '../../../assets/images/hasan.jpg'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
    const {height} = useWindowDimensions();
    const navigation = useNavigation();
    const onletterTrButtonPressed = () =>{
        navigation.navigate('LetterTr')
    }
    const onletterEnButtonPressed = () =>{
        navigation.navigate('LetterEn')
    }
    const onCvTrButtonPressed = () =>{
        navigation.navigate('CvTr')
    }
    const onCvEnButtonPressed = () =>{
        navigation.navigate('CvEn')
    }


    return (
        <ScrollView>
        <View style={styles.root}>
            <Image source={Logo} style={styles.logo} resizeMode="contain"/>
            <CustomButton text="NİYET MEKTUBU (TR)" onPress={onletterTrButtonPressed}/>
            <CustomButton text="NİYET MEKTUBU (EN)" onPress={onletterEnButtonPressed}/>
            <CustomButton text="HASAN ERTÜRK CV (TR)" onPress={onCvTrButtonPressed}/>
            <CustomButton text="HASAN ERTÜRK CV (EN)" onPress={onCvEnButtonPressed}/>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root:{
        width:'100%',
        height:'100%',
        alignItems:'center',
        padding:40,
        backgroundColor:'white'
    },
    logo:{
        width:'70%',
        maxWidth:200,
        height:200,
        borderRadius: 150
        
    }
})

export default HomeScreen