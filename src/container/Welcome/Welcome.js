import React, { Component } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image, 
    Button, 
    Alert
  } from 'react-native';
  
const Welcome = ({navigation}) => {
        return (
            <View style={{ flex: 1 , justifyContent: 'center' , alignItems: 'center', position: 'relative'}}>
                <Image source={require('../../assets/Images/quran.png')}
                      style={{  height: 200 }} />
                <Text style={{ fontSize: 30, marginBottom: 30 }}>
                  Al-Qur'an & Terjemahan
                </Text>
                <Button
                title="Daftar Isi"
                color="#0f5645"
                onPress={() => navigation.navigate('Homepage')}
                />
                <Text style={{ fontSize: 15, position: 'absolute' , bottom: 50 }}>
                  Dev By Elcorleone
              </Text>
            </View>
        );
    }

export default Welcome;
