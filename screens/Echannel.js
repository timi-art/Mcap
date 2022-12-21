import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
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
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';

// import {AppIcons} from '../components/images';
const Echannel = ({navigation}) => {
  const [active, setActive] = useState('POS');

  return (
    <ScrollView
      contentContainerStyle={[
        GLOBAL_STYLE.scrollViewGlobalNopadding,
        {justifyContent: 'flex-start', marginTop: 10},
      ]}>
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
              Forms
            </Text>
          </View>
        </View>
      </ImageBackground>
      <View style={{marginTop: 20}}>
        <Pressable
          style={{
            paddingVertical: 12,
            borderWidth: 0.5,
            borderColor: COLORS.lightBlue,
            paddingHorizontal: '5%',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Fontisto
              name="shopping-pos-machine"
              size={20}
              color={COLORS.grey3}
            />
            <Text
              style={[
                GLOBAL_STYLE.h2Bold,
                {
                  textAlign: 'center',
                  fontSize: 12,
                  color: COLORS.grey3,
                  marginLeft: 10,
                },
              ]}>
              POS
            </Text>
          </TouchableOpacity>
          <Ionicons
            onPress={() => navigation.navigate('Pos')}
            name="ios-chevron-forward-outline"
            size={20}
            color={COLORS.grey3}
          />
        </Pressable>
        <Pressable
          style={{
            paddingVertical: 12,
            borderBottomWidth: 0.5,
            borderColor: COLORS.lightBlue,
            paddingHorizontal: '5%',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <MaterialCommunityIcons
              name="qrcode-scan"
              size={15}
              color={COLORS.grey3}
            />
            <Text
              style={[
                GLOBAL_STYLE.h2Bold,
                {
                  textAlign: 'center',
                  fontSize: 12,
                  color: COLORS.grey3,
                  marginLeft: 10,
                },
              ]}>
              NQR
            </Text>
          </View>
          <Ionicons
            name="ios-chevron-forward-outline"
            size={20}
            color={COLORS.grey3}
          />
        </Pressable>
        <Pressable
          style={{
            paddingVertical: 12,
            borderBottomWidth: 0.5,
            borderColor: COLORS.lightBlue,
            paddingHorizontal: '5%',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Feather name="phone-call" size={15} color={COLORS.grey3} />
            <Text
              style={[
                GLOBAL_STYLE.h2Bold,
                {
                  textAlign: 'center',
                  fontSize: 12,
                  color: COLORS.grey3,
                  marginLeft: 10,
                },
              ]}>
              Keyserv Agency
            </Text>
          </View>
          <Ionicons
            name="ios-chevron-forward-outline"
            size={20}
            color={COLORS.grey3}
          />
        </Pressable>
        <Pressable
          style={{
            paddingVertical: 12,
            borderBottomWidth: 0.5,
            borderColor: COLORS.lightBlue,
            paddingHorizontal: '5%',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Fontisto name="key" size={15} color={COLORS.grey3} />
            <Text
              style={[
                GLOBAL_STYLE.h2Bold,
                {
                  textAlign: 'center',
                  fontSize: 12,
                  color: COLORS.grey3,
                  marginLeft: 10,
                },
              ]}>
              KEYSWIFT
            </Text>
          </View>
          <Ionicons
            name="ios-chevron-forward-outline"
            size={20}
            color={COLORS.grey3}
          />
        </Pressable>
        <Pressable
          style={{
            paddingVertical: 12,
            borderBottomWidth: 0.5,
            borderColor: COLORS.lightBlue,
            paddingHorizontal: '5%',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <EvilIcons name="credit-card" size={15} color={COLORS.grey3} />
            <Text
              style={[
                GLOBAL_STYLE.h2Bold,
                {
                  textAlign: 'center',
                  fontSize: 12,
                  color: COLORS.grey3,
                  marginLeft: 10,
                },
              ]}>
              Visa Card Form
            </Text>
          </View>
          <Ionicons
            name="ios-chevron-forward-outline"
            size={20}
            color={COLORS.grey3}
          />
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default Echannel;
