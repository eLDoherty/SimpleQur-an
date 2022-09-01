import React , {useEffect, useState} from 'react';
import {View, Text, Button, ScrollView} from 'react-native';
import SoundPlayer from 'react-native-sound-player';

const Surah = ({route, navigation}) => {

    const { surahID } = route.params;
    const urlSurahAPI = `https://equran.id/api/surat/${surahID}`;
   
    const [dataAyat, setDataAyat] = useState([]);
    const [audioURL , setAudioURL] = useState('');
    const [playAudio, audioHandle] = useState(false);
    
    useEffect(()=> {
        fetch(urlSurahAPI)
        .then((response) => response.json())
        .then((data) => setAudioURL(data.audio))
        .catch(error => error)
    }, []);

    useEffect(()=> {
        fetch(urlSurahAPI)
        .then((response) => response.json())
        .then((data) => setDataAyat(data.ayat))
        .catch(error => error)
    }, []);

    if ( playAudio === true ) {
        SoundPlayer.playUrl(audioURL)
    } else {
        SoundPlayer.pause();
    }

    const surah = Object.values(dataAyat);

    return(
        <View style={{paddingBottom:80}}>
            <Button
            title='Kembali'
            color="#0f5645"
            onPress={() => navigation.navigate('Homepage')}
            />
            <ScrollView>
                <Text style={{textAlign: 'center', marginTop: 30, marginBottom: 10 , fontSize: 25, fontWeight: 'bold'}}>بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</Text>
                <Text style={{textAlign: 'center', fontSize: 15, marginBottom: 40, fontStyle: 'italic'}}>Bismillahirrahmanirrahim</Text>
                <View  style={{ flex: 1, borderBottomColor: 'black', borderBottomWidth: 1, height: 1, marginBottom: 40}}/>
                { surah.length > 0 ? 
                surah.map( dt => {
                    const regex = /(<([^>]+)>)/ig;
                    const latin = dt.tr.replace(regex, '');
                    return(
                        <View key={dt.id} style={{paddingHorizontal: 30, marginBottom: 20}}>
                            <Text style={{fontSize: 30, fontWeight: 'bold' , marginBottom: 10}}>{dt.ar}</Text>
                            <Text>{latin}</Text>
                        </View>
                    )
                } )
                
                : null }

                
            </ScrollView>
            <View style={{position: 'absolute' , bottom: 40 , flex: 1, width: '100%'}}>
                { playAudio ? 
                    <Button
                        title='STOP'
                        color="#c85858"
                        onPress={ () => audioHandle(false)}
                        />
                :    <Button
                        title='PLAY MUROTTAL'
                        color="#0f5645"
                        onPress={ () => audioHandle(true)}
                        /> }
            </View>
        </View>
    )
}

export default Surah;