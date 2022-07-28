import React from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, ImageBackground} from 'react-native'

const LetterTRScreen = () =>{
    return(
<ScrollView showsVerticalScrollIndicator={false}>
    <View>
        <Text style={styles.titleText}>  React Native Staj Başvurusu</Text>
        <Text style={styles.text}>      Sayın Yetkili,</Text>
        <Text style={styles.text}>      Ben Hasan Ertürk. Kariyer planlamamda benim için büyük bir adım olacak React Native stajyer pozisyonu için başvuru yapmaktayım.</Text>
        <Text style={styles.text}>      2019 ve 2021 yıllarında BilgeAdam Akademiden almış olduğum ".NET" eğitimlerinin ardından yazılım hayatına girmiş bulundum. 2022 yılının Mart ayında Analitik Yazılım Şirketi'nde "Yazılım Destek Uzmanı" pozisyonunda işe başladım. İş hayatını deneyim ederken gerçekten istediğim alanda olduğumu ve hayalini kurduğum gelecek için çok doğru bir sektörü seçtiğimi gördüm. İşe başladığım günden bugüne yer aldığım projeler; Yurt Turnike Sistemi, Talep Takip Sistemi ve Kur Üzerinden Teklif Onay Sistemi. Edindiğim tecrübelerle birlikte daha çok heves duyduğum, üzerinde çalışırken daha heyecanlı ve istekli olduğum React Native alanına yönelme kararı aldım. Bu doğrultuda yaşamış olduğum heyecan ve istekle birlikte sizlere fayda sağlayacak bir stajyer ve sizler sayesinde hayalini kurduğum gelecek için donanım sahibi bir yazılımcı olacağıma inanıyorum.
</Text>
<Text style={styles.text}>      Yüksek sorumluluk, yüksek iletişim becerisi, her bir kişi ve ekibe uyum sağlayabilecek bir insan olduğumu çevremden aldığım geri bildirimlerden yola çıkarak rahatlıkla belirtebilirim. Tüm bunlarla birlikte sürekli üzerinde durduğum ve benim en büyük motivasyon kaynağım olan bu sektöre olan istek ve heyecanımla, sizlerin düzenlediği ve benim içinde yer alacak olduğum tüm projelerde fayda sağlayacağıma inanıyorum.
</Text>
<Text style={styles.text}>      Niyet mektubumu ve başvurumu okuyarak bana vakit ayırdığınız için teşekkür ederim.
Takımınızda sizlerle birlikte çalışabilmek dileğiyle.
</Text>

<Text style={styles.lastText}>      Saygılarımla,</Text>
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


export default LetterTRScreen