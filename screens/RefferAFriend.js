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
const RefferAFriend = ({navigation}) => {
  const [active, setActive] = useState(true);
  const [transaction, setTransaction] = useState(false);

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <ImageBackground
        source={images.header}
        style={{
          width: SIZES.responsiveWidth('100%'),
          height: SIZES.responsiveHeight('15%'),
          paddingVertical: 15,
          justifyContent: 'flex-end',
        }}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            paddingHorizontal: '5%',
            alignItems: 'center',
            marginBottom: '5%',
          }}>
          <Pressable
            onPress={() => navigation.navigate('Home')}
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
              width: '70%',
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
              Refer A Friend
            </Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            paddingHorizontal: '5%',
            alignItems: 'center',
          }}>
          <Text
            style={[
              GLOBAL_STYLE.h2Bold,
              {
                textAlign: 'center',
                fontSize: 16,
                color: COLORS.white,
                fontWeight: '600',
              },
            ]}>
            Get rewards on each of your referals
          </Text>
        </View>
      </ImageBackground>

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '20%',
        }}>
        <Image source={images.referPic} style={{height: 250, width: 200}} />
        <Pressable
          style={{
            height: 40,
            width: 120,
            borderWidth: 0.5,
            marginTop: 25,
            borderRadius: 20,
            borderColor: COLORS.primaryBlue,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={[
              GLOBAL_STYLE.h2Bold,
              {
                textAlign: 'center',
                fontSize: 18,
                color: COLORS.primaryBlue,
                fontWeight: '600',
              },
            ]}>
            OlA10L1
          </Text>
        </Pressable>
        <Text
          style={[
            GLOBAL_STYLE.h2Bold,
            {
              textAlign: 'center',
              fontSize: 14,
              color: COLORS.primaryBlue,
              fontWeight: '600',
              marginTop: 15,
            },
          ]}>
          Tap to copy code
        </Text>

        <Button marginTop={40} width={'60%'} borderRadius={10} text={'Share'} />
      </View>
    </View>
  );
};

export default RefferAFriend;
