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
const OpenAccountWithBVN3 = ({navigation}) => {
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
            onPress={() => navigation.navigate('OpenAccountWithBVN2')}
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
              Account opening
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
                fontSize: 13,
                color: COLORS.white,
                fontWeight: '600',
              },
            ]}>
            You are few steps away from creating an account
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
              borderColor: COLORS.primaryBlue,
            }}></View>
          <View
            style={{
              backgroundColor: COLORS.primaryBlue,
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
                  color: COLORS.white,
                },
              ]}>
              2
            </Text>
          </View>
          <View
            style={{
              width: '25%',
              borderWidth: 1,
              borderColor: COLORS.primaryBlue,
            }}></View>
          <View
            style={{
              backgroundColor: COLORS.primaryBlue,
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
                  color: COLORS.white,
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
            Residential Address
          </Text>
          <TextPut
            placeholder={'Enter your address'}
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
            Residential City
          </Text>
          <TextPut
            placeholder={'Enter your city'}
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
            Residential state
          </Text>
          <TextPut
            placeholder={'Enter your state'}
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
            Phone number
          </Text>
          <TextPut
            placeholder={'Enter your number'}
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
            Email
          </Text>
          <TextPut
            placeholder={'Enter your email'}
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
            Branch
          </Text>
          <TextPut
            placeholder={'Select branch'}
            backgroundColor={COLORS.grey}
            borderRadius={10}
          />
        </View>
        <View
          style={{
            alignItems: 'center',
            marginTop: 30,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: '5%',
            justifyContent: 'space-between',
          }}>
          <Button
            onPress={() => navigation.navigate('OpenAccountWithBVN2')}
            width={'35%'}
            borderRadius={10}
            text={'Previous'}
          />
          <Button
            onPress={() => navigation.navigate('OpenAccountWithBVN4')}
            width={'35%'}
            borderRadius={10}
            text={'Next'}
          />
        </View>
        <View style={{height: 30}}></View>
      </ScrollView>
    </View>
  );
};

export default OpenAccountWithBVN3;
