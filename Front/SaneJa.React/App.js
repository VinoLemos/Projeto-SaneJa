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
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  Titulo: {
    fontSize: 35,
    fontWeight: 'bold'
  },

  Logo: {
    flex: 1,
    alignSelf: 'center',
    height: 100,
    width: 355,
    padding: 40,
  }
})

export default App;
