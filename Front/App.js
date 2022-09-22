import React from 'react';
import { SafeAreaView, Text, StyleSheet, Image } from 'react-native'

export default () => {

  return(
    <SafeAreaView style={style.App}>
      <Image source={require('./MicrosoftTeams-image.png')}/>
      <Text style={style.Titulo}>Hello World!!</Text>

    </SafeAreaView>
  )
  

}

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },

  Titulo: {
    fontSize: 35,
    fontWeight: 'bold'
  }

})

