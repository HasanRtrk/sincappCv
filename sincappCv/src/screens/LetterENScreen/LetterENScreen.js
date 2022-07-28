import React from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, ImageBackground} from 'react-native'

const LetterENScreen = () =>{
    return(
<ScrollView showsVerticalScrollIndicator={false}>
    <View>
        <Text style={styles.titleText}>  Application for the position of Intern (React Native)</Text>
        <Text style={styles.text}>      To whom it may concern,</Text>
        <Text style={styles.text}>      I am Hasan Ertürk, I am applying for the React Native Intern position, which will be a major step forward for me in my career.</Text>
        <Text style={styles.text}>      After the .NET courses I took from BilgeAdam Akademi in 2019 and 2021, I entered the software development field. In March 2022, I started to work as a Software Support Specialist at Analitik Yazılım. Having experienced business life, I realized that I was in the field I wanted and that I had chosen the appropriate business sector for the future I dreamed of. I have been involved in many projects since the day I started working. Some of these projects are; “Yurt Turnike Sistemi”, “Talep Takip Sistemi” and “Kur Üzerinden Teklif Onay Sistemi”. I am planning to work up for React Native, where I see myself as more enthusiastic and more eager to work. I believe that I will become an intern who will serve with the excitement and a competent software developer for the future I dream of thanks to you.</Text>
<Text style={styles.text}>      I can easily state that I am a person with high responsibility, high communication skills, a complete team member, and a person who can adapt to each person and team, based on the feedback I received from people around me. Additionally, I believe that I will benefit from all the projects organized by React Native and serve the projects in which I will be involved, with full of enthusiasm for this business sector which is my biggest source of motivation.</Text>
        <Text style={styles.text}>Thank you for the time to read my letter of intent and application.
Hope to work with you on your team.
</Text>
<Text style={styles.lastText}>      Respectfully,</Text>
<Text style={styles.lastText}>      Hasan Ertürk</Text>

    </View>
</ScrollView>
    )
}

const styles = StyleSheet.create({
    titleText:{
        fontWeight:'bold',
    },
    text:{
        lineHeight:23
    },
    lastText:{
        lineHeight: 40
    }
})


export default LetterENScreen