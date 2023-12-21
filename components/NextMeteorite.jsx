import React,{ useState } from "react";
import {StyleSheet, Text, View, Image, ScrollView,TextInput, Pressable,Button } from 'react-native';

const NextMeteorite = ({ totalMeteorites, onNextClick }) => {
    const [randomIndex, setRandomIndex] = useState(0);

    const generateRandomIndex = () => {
        const newIndex = Math.floor(Math.random() * totalMeteorites);
        setRandomIndex(newIndex);
        onNextClick(newIndex);
    };

    return (
        <View>
            <Pressable style={{width:30, backgroundColor:'#000073'}} onPress={generateRandomIndex} >
                <Text>Next!</Text>
            </Pressable>
        </View>
    );
};
const styles = StyleSheet.create({
   button:{

   }
  }
  );

export default NextMeteorite;