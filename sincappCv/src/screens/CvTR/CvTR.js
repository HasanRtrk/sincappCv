import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView, ImageBackground} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CV from '../../../assets/images/cvhasantr.jpg'

const CvTR = () =>{
    return(
<ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.container}>

       <Image
       source={CV}
       style={styles.image}/>
    </View>
</ScrollView>
    )
}
    
const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:560
    }

})


export default CvTR