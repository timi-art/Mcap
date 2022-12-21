import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Modal,
  Pressable,
  Alert,
  Image,
  ImageBackground,
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
import React, {useEffect, useState} from 'react';
import {CustomButton, Input} from '../components';
import {
  ComputerIcon,
  OpenAccountIcon,
  DashboardIcon,
  KeystoneIcon,
  LoginWallpaperIcon,
  KeystoneIconTwo,
} from '../constants/icons';
import MenuBox from '../components';
import TextPut from '../components/TextPut';
import Button from '../components/Button';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as yup from 'yup';
import {Formik} from 'formik';

const Login = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground source={images.loginIcon} style={styles.backgroundImg}>
        <ScrollView style={{flexGrow: 1}}>
          <View
            style={{
              paddingVertical: 3,
              paddingHorizontal: '5%',
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: '5%',
            }}>
            <KeystoneIconTwo />
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
              Customer Activation On the Go
            </Text>
          </View>
          <View
            style={{
              paddingHorizontal: '5%',
              marginTop: SIZES.responsiveHeight('40%'),
              width: SIZES.responsiveWidth('100%'),
              height: SIZES.responsiveHeight('45%'),
            }}>
            <View
              style={{
                backgroundColor: '#F9F9F9',
                width: SIZES.responsiveWidth('90%'),
                height: SIZES.responsiveHeight('45%'),
                borderRadius: 15,
                paddingHorizontal: '5%',
                paddingVertical: '5%',
              }}>
              <TextPut placeholder={'Enter Username'} user={true} />
              <View style={{marginTop: '7%'}}>
                <TextPut placeholder={'Enter Password'} password={true} />
                <View
                  style={{
                    marginTop: '3%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={[
                        GLOBAL_STYLE.h2Bold,
                        {
                          textAlign: 'center',
                          fontSize: 12,
                          color: COLORS.primaryBlue,
                        },
                      ]}>
                      Remember me
                    </Text>
                  </View>
                  {/* <Pressable>
                    <Text
                      style={[
                        GLOBAL_STYLE.h2Bold,
                        {
                          textAlign: 'center',
                          fontSize: 12,
                          color: COLORS.primaryBlue,
                        },
                      ]}>
                      Forgot Password?
                    </Text>
                  </Pressable> */}
                </View>
              </View>
              <View
                style={{
                  marginTop: '10%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View style={{width: '80%'}}>
                  <Button
                    onPress={() => navigation.navigate('Home')}
                    borderRadius={20}
                    text={'Login'}
                  />
                </View>
                <Pressable style={{width: '15%', alignItems: 'flex-end'}}>
                  <Ionicons
                    name="finger-print-outline"
                    size={40}
                    color={COLORS.primaryBlue}
                  />
                </Pressable>
              </View>

              {/* <Pressable style={{marginTop: '15%'}}>
                <Text
                  style={[
                    GLOBAL_STYLE.h2Bold,
                    {
                      textAlign: 'center',
                      fontSize: 12,
                      color: COLORS.primaryBlue,
                    },
                  ]}>
                  Register new account
                </Text>
              </Pressable> */}
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonText1: {
    color: COLORS.lightBlue,
  },
  backgroundImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  container: {
    paddingHorizontal: '8%',
    paddingVertical: 60,
  },
});
export default Login;
