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
import {CustomButton, Input} from '../components/index';
import {OpenAccountIcon} from '../constants/icons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Button from '../components/Button';
import TextPut from '../components/TextPut';
// import {AppIcons} from '../components/images';
const AccountReactivation1 = ({navigation}) => {
  const [active, setActive] = useState('4');
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
              Account Reactivation
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
                fontSize: 12,
                color: COLORS.white,
                fontWeight: '600',
              },
            ]}>
            You are few steps away from reactivating your account
          </Text>
        </View>
      </ImageBackground>

      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: SIZES.responsiveWidth('5%'),
            marginTop: 20,
            justifyContent: 'space-evenly',
          }}>
          <View
            style={{
              backgroundColor: COLORS.primaryBlue,
              height: 23,
              width: 23,
              borderRadius: 50,
              justifyContent: 'center',
            }}>
            <Text
              style={[
                GLOBAL_STYLE.h2Bold,
                {
                  textAlign: 'center',
                  fontSize: 13,
                  color: COLORS.white,
                },
              ]}>
              1
            </Text>
          </View>
          <View
            style={{
              width: '25%',
              borderWidth: 1,
              borderColor: COLORS.secondaryBlue,
            }}></View>
          <View
            style={{
              backgroundColor: COLORS.white,
              height: 23,
              width: 23,
              borderRadius: 50,
              justifyContent: 'center',
              borderColor: COLORS.primaryBlue,
              borderWidth: 0.5,
            }}>
            <Text
              style={[
                GLOBAL_STYLE.h2Bold,
                {
                  textAlign: 'center',
                  fontSize: 13,
                  color: COLORS.primaryBlue,
                },
              ]}>
              2
            </Text>
          </View>
          <View
            style={{
              width: '25%',
              borderWidth: 1,
              borderColor: COLORS.secondaryBlue,
            }}></View>
          <View
            style={{
              backgroundColor: COLORS.white,
              height: 23,
              width: 23,
              borderRadius: 50,
              justifyContent: 'center',
              borderColor: COLORS.primaryBlue,
              borderWidth: 0.5,
            }}>
            <Text
              style={[
                GLOBAL_STYLE.h2Bold,
                {
                  textAlign: 'center',
                  fontSize: 13,
                  color: COLORS.primaryBlue,
                },
              ]}>
              3
            </Text>
          </View>
          <View
            style={{
              width: '25%',
              borderWidth: 1,
              borderColor: COLORS.secondaryBlue,
            }}></View>
          <View
            style={{
              backgroundColor: COLORS.white,
              height: 23,
              width: 23,
              borderRadius: 50,
              justifyContent: 'center',
              borderColor: COLORS.primaryBlue,
              borderWidth: 0.5,
            }}>
            <Text
              style={[
                GLOBAL_STYLE.h2Bold,
                {
                  textAlign: 'center',
                  fontSize: 13,
                  color: COLORS.primaryBlue,
                },
              ]}>
              4
            </Text>
          </View>
        </View>
        <View
          style={{
            paddingVertical: 5,
            justifyContent: 'center',
            paddingHorizontal: '5%',
            marginTop: 20,
          }}>
          <Text
            style={[
              GLOBAL_STYLE.h2Bold,
              {
                fontSize: 12,
                color: COLORS.primaryBlue,
                marginBottom: 5,
              },
            ]}>
            BVN
          </Text>
          <TextPut
            placeholder={'Enter BVN'}
            backgroundColor={COLORS.grey}
            borderRadius={10}
            check={true}
          />
        </View>
        <View
          style={{
            paddingVertical: 5,
            justifyContent: 'center',
            paddingHorizontal: '5%',
            marginTop: 10,
          }}>
          <Text
            style={[
              GLOBAL_STYLE.h2Bold,
              {
                fontSize: 12,
                color: COLORS.primaryBlue,
                marginBottom: 5,
              },
            ]}>
            OTP Code
          </Text>
          <TextPut
            placeholder={'Enter OTP'}
            backgroundColor={COLORS.grey}
            borderRadius={10}
          />
        </View>
        <View
          style={{
            paddingVertical: 5,
            justifyContent: 'center',
            paddingHorizontal: '5%',
            marginTop: 10,
          }}>
          <Text
            style={[
              GLOBAL_STYLE.h2Bold,
              {
                fontSize: 12,
                color: COLORS.primaryBlue,
                marginBottom: 5,
              },
            ]}>
            DAO Code
          </Text>
          <TextPut
            placeholder={'Enter codes'}
            backgroundColor={COLORS.grey}
            borderRadius={10}
          />
        </View>
        <View
          style={{
            paddingVertical: 5,
            justifyContent: 'center',
            paddingHorizontal: '5%',
            marginTop: 10,
          }}>
          <Text
            style={[
              GLOBAL_STYLE.h2Bold,
              {
                fontSize: 12,
                color: COLORS.primaryBlue,
                marginBottom: 5,
              },
            ]}>
            Account Type
          </Text>
          <TextPut
            placeholder={'Select Account Type'}
            backgroundColor={COLORS.grey}
            borderRadius={10}
          />
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 50,
          }}>
          <Button
            onPress={() => navigation.navigate('AccountReactivation2')}
            width={'40%'}
            borderRadius={10}
            text={'Continue'}
          />
        </View>
        <View style={{height: 20}}></View>
      </ScrollView>
    </View>
  );
};

export default AccountReactivation1;
