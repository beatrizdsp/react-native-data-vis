import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, Image, ScrollView,TextInput } from 'react-native';
import React, { useState } from 'react';
import MeteoriteList from './components/MeteoriteList';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <View style={{padding:10, backgroundColor:'#000073', borderBottomRightRadius:15,borderTopRightRadius:15,}}>
      <Text style={styles.title}>Meteorite Landing Database</Text>
      </View>
      <Text style={styles.subHeading}>powered by NASA</Text>
      </View>
      <Image 
      style={styles.logo}
      source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/NASA-Logo.svg/590px-NASA-Logo.svg.png',}}/>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <StatusBar style="auto" />
      <MeteoriteList/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    borderStyle: 'solid',
    borderColor: '#ffffff',
    backgroundColor: '#020517',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
position:'absolute',
top:0,
left:0,
marginTop:70,

  },
  title:{
    color: '#ffffff',
    fontSize:20,
    fontFamily:'monospace',
},
subHeading:{
  color:'#ffffff',
  fontFamily:'monospace',
  marginLeft:5
},
logo:{
  flex:1,
  flexDirection:'flexD',
  resizeMode: 'contain',
  position:'absolute',
  height:100,
  width:100,
  top:0,
  right:15,
  marginTop:70,
},
}
);
