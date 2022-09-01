import React, { Component, useEffect, useState } from 'react';
import {Text , View , ScrollView, Button, TouchableOpacity} from 'react-native';

const Homepage = ({navigation}) => {

        const [data, setData] = useState({});

        useEffect(()=> {
            fetch('https://equran.id/api/surat')
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch(error => error)
        }, []);

        const dataQuran = Object.values(data);

        return(
            <View style={{backgroundColor: 'black'}}>
                <ScrollView>
                    <Button title="Kembali" onPress={() => navigation.navigate('Welcome')} />
                    { dataQuran.length > 0 ? 
                    dataQuran.map( data => {
                        return(
                            <TouchableOpacity key={data.nomor} onPress={() => navigation.navigate('Surah' , {
                                surahID: data.nomor
                            })}>
                                <View  style={{ 
                                    marginTop: 20 , 
                                    marginRight: 10 , 
                                    justifyContent: 'center', 
                                    flex: 1, 
                                    alignItems: 'center',
                                    borderBottomColor: 'white',
                                    borderBottomWidth: 1,
                                    paddingBottom: 20
                                    }}> 
                                    <Text style={{fontSize: 30, fontWeight: 'bold', color:'white'}}>{data.nama}</Text>
                                    <Text style={{fontSize: 15, fontWeight: 'bold', color:'white'}}>{data.nama_latin}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    } )
                    
                    
                    : null }
                </ScrollView>
            </View>
        )
    }


export default Homepage;