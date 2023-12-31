import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { signOutUser } from "../../firebase/auth";
import { useState } from "react";
import {Image} from 'expo-image'

import { tabParamsList } from "../../App";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import React from "react";
import colors from '../../constants/colors';


type Props = BottomTabScreenProps<tabParamsList, 'Profile'>;

export default function Profile({ route, navigation }: Props) {

  const [error, setError] = useState("");
  const user = route.params.user;

  return (
    <View style={styles.container}>
    <Image source={require('../../constants/images/youth.png')} style={styles.logo}/>
      
      {/* Display User's Display Name */}
      <Text style={styles.displayName}>{user.displayName}</Text>

      {/* Display User's Email Address */}
      <Text style={styles.email}>{user.email}</Text>

      <View style={styles.bottom}>
        <TouchableOpacity onPress={() => signOutUser(setError)} style={styles.signoutButton}>
          <Text style={styles.signout}>Sign Out</Text>
        </TouchableOpacity>
        <Text>{error}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,  // Light pink background
    padding: 80
  },
  logo:{
    marginLeft: 15,
    width: 200,
    height: 200,
  },
  displayName: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 10,
    textAlign: 'center',
    padding: 10,
    color: colors.pink
  },
  email: {
    fontSize: 16,
    fontWeight: '500', fontStyle:'italic',
    marginTop: 5,
    marginBottom: 10,
    color: colors.pink,
    textAlign: 'center'
  },
  club: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 10,
    color: colors.pink,
    textAlign: 'center'
  },
  signoutButton: {
    backgroundColor: colors.pink,
    padding: 10,
    borderRadius: 5,
    marginTop: 10
  },
  signout: {
    color: 'white',  // White text on the pink button
    fontWeight: 'bold'
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  }
});