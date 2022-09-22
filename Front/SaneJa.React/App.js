import React, { Component } from 'react';
import { SafeAreaView, Text, StyleSheet, Image } from 'react-native';

class App extends Component {
  render() {
    return (
      <SafeAreaView style={style.App}>
        <Image source={require('./Resources/SaneJa.jpg' )} style={style.Logo}/>
        <Text style={style.Titulo}>Hello World!!</Text>
      </SafeAreaView>
    );
  }
}

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  Titulo: {
    fontSize: 35,
    fontWeight: 'bold'
  },

  Logo: {
    flex: 1,
    alignSelf: 'center',
    resizeMode: 'contain',
    height: '20%',
    width: '20%',
  }
})

export default App;
