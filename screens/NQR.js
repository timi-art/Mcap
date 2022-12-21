import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  Alert,
  Image,
  ImageBackground,
  TextInput,
} from 'react-native';
import {
  COLORS,
  FONTS,
  isAndroid,
  isIOS,
  SIZES,
  GLOBAL_STYLE,
  images,
} from '../constants';
import {CustomButton} from '../components';
import {OpenAccountIcon} from '../constants/icons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Button from '../components/Button';

// import {AppIcons} from '../components/images';
const NQR = ({navigation}) => {
  const [active, setActive] = useState(true);
  const [transaction, setTransaction] = useState(false);

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <ImageBackground
        source={images.header}
        style={{
          width: '100%',
          height: 80,
          paddingVertical: 15,
          justifyContent: 'flex-end',
        }}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            paddingHorizontal: '5%',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Pressable
            onPress={() => navigation.navigate('Collections')}
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="chevron-back" size={25} color={COLORS.white} />
            <View style={{marginLeft: 5}}>
              <Text
                style={[
                  GLOBAL_STYLE.h2Bold,
                  {textAlign: 'center', fontSize: 14, color: COLORS.white},
                ]}>
                Back
              </Text>
            </View>
          </Pressable>
          <View
            style={{
              marginLeft: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={[
                GLOBAL_STYLE.h2Bold,
                {
                  textAlign: 'center',
                  fontSize: 18,
                  color: COLORS.white,
                  fontWeight: 'bold',
                },
              ]}>
              NQR
            </Text>
          </View>
          <View style={{}}>
            <Ionicons name="chevron-back" size={25} color={COLORS.white} />
          </View>
        </View>
      </ImageBackground>
      <View style={{marginTop: '10%'}}>
        <Text
          style={[
            GLOBAL_STYLE.h2Bold,
            {
              textAlign: 'center',
              fontSize: 18,
              color: COLORS.primaryBlue,
            },
          ]}>
          Olalekan Aminu
        </Text>
      </View>
      <View style={{marginTop: '1.5%'}}>
        <Text
          style={[
            GLOBAL_STYLE.h2Bold,
            {
              textAlign: 'center',
              fontSize: 12,
              color: COLORS.primaryBlue,
            },
          ]}>
          Share and Download Merchant QR Code
        </Text>
      </View>
      <View style={{paddingHorizontal: '5%', height: '100%'}}>
        <View
          style={{
            marginTop: '10%',
            backgroundColor: 'rgba(0, 86, 163, 0.05)',
            height: '45%',
          }}></View>
        <View
          style={{
            marginTop: '5%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Ionicons name="chevron-back" size={25} color={COLORS.primaryBlue} />
        </View>
        <View style={{marginTop: '1.5%'}}>
          <Text
            style={[
              GLOBAL_STYLE.h2Bold,
              {
                textAlign: 'center',
                fontSize: 12,
                color: COLORS.primaryBlue,
              },
            ]}>
            Download QR Code
          </Text>
        </View>
      </View>
    </View>
  );
};

export default NQR;
