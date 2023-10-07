import React, {useState} from 'react';
import {View, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

const Help = () => {  

 return (
    <SafeAreaView style={styles.container}>
        <Text>Help</Text>
    </SafeAreaView>
 )
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Help;