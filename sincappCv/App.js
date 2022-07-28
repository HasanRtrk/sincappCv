/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   ImageBackground,
   View,
 } from 'react-native';
 import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import LetterTRScreen from './src/screens/LetterTRScreen';
import LetterENScreen from './src/screens/LetterENScreen';
import CvTR from './src/screens/CvTR';
import CvEN from './src/screens/CvEN';

 export default function App(){
  const Stack = createNativeStackNavigator();
   return (
     <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="LetterTr" component={LetterTRScreen}/>
        <Stack.Screen name="LetterEn" component={LetterENScreen}/>
        <Stack.Screen name="CvTr" component={CvTR}/>
        <Stack.Screen name="CvEn" component={CvEN}/>
      </Stack.Navigator>
     </NavigationContainer>
   );
 }
 
 const styles = StyleSheet.create({
 
   container:{
     flex:1,
     backgroundColor:'#fff',
     alignItems:'center',
     justifyContent:'center',
   },
   titleContainer:{
     width:'100%',
     height:'100%',
   },
   titles:{
     marginTop:'30%',
     width:'100%',
     alignItems:'center'
   },
   title:{
     fontSize:30,
     fontWeight:'700'
 
   },
   subTitle:{
     fontSize:18,
     color:'#5c5e5e',
     fontWeight:'550'
   },
   image:{
     width:'100%',
     height:'100%',
     alignItems:'baseline',
     resizeMode:'cover',
     position:'absolute'
     
   }
 
 });