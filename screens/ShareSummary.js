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
import ChooseFile from '../components/ChooseFile';
// import {AppIcons} from '../components/images';
const ShareSummary = ({navigation}) => {
  const [active, setActive] = useState('4');
  const [transaction, setTransaction] = useState(false);

  return (
    <View style={{backgroundColor: '#E5E5E5', flex: 1}}>
      <ImageBackground
        source={images.header}
        style={{
          width: SIZES.responsiveWidth('100%'),
          paddingVertical: 20,
        }}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            paddingHorizontal: '5%',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              width: '75%',
            }}>
            <Text
              style={[
                GLOBAL_STYLE.h2Bold,
                {
                  textAlign: 'left',
                  fontSize: 19,
                  color: COLORS.white,
                  fontWeight: 'bold',
                },
              ]}>
              Welcome to Keystone Bank
            </Text>
            <Text
              style={[
                GLOBAL_STYLE.h2Bold,
                {
                  textAlign: 'left',
                  fontSize: 14,
                  color: COLORS.white,
                  marginTop: 5,
                },
              ]}>
              Further to your account opening, we are glad to let you know that
              your account has been approved and is ready.
            </Text>
            <Text
              style={[
                GLOBAL_STYLE.h2Bold,
                {
                  textAlign: 'left',
                  fontSize: 14,
                  color: COLORS.white,
                  marginTop: 20,
                },
              ]}>
              Please find the details of your account account below:
            </Text>
          </View>
          <View
            style={{
              marginLeft: 5,
            }}>
            <Image
              source={images.KeyMobileLogo2}
              style={{height: 30, width: 70}}
            />
          </View>
        </View>
      </ImageBackground>

      <ScrollView>
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
                marginBottom: 10,
                fontWeight: 'bold',
              },
            ]}>
            Account Details
          </Text>
          <View
            style={{
              width: '100%',
              borderWidth: 1,
              borderColor: COLORS.grey4,
              borderStyle: 'dashed',
              borderRadius: 5,
              backgroundColor: COLORS.white,
            }}>
            <View
              style={{
                height: 45,
                width: '100%',
                borderBottomWidth: 1,
                borderColor: COLORS.grey4,
                borderStyle: 'dashed',
                paddingHorizontal: '3%',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: '40%',
                  height: '100%',
                  justifyContent: 'center',
                }}>
                <Text
                  style={[
                    GLOBAL_STYLE.h2Bold,
                    {
                      fontSize: 11,
                      color: COLORS.primaryBlue,
                    },
                  ]}>
                  Account Name:
                </Text>
              </View>
              <View
                style={{
                  width: '60%',
                  height: '100%',
                  justifyContent: 'center',
                }}>
                <Text
                  style={[
                    GLOBAL_STYLE.h2Bold,
                    {
                      textAlign: 'left',
                      fontSize: 12,
                      color: COLORS.primaryBlue,
                    },
                  ]}>
                  OLALEKAN BABATUNDE AMINU
                </Text>
              </View>
            </View>

            <View
              style={{
                height: 45,
                width: '100%',
                borderBottomWidth: 1,
                borderColor: COLORS.grey4,
                borderStyle: 'dashed',
                paddingHorizontal: '3%',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: '40%',
                  height: '100%',
                  justifyContent: 'center',
                }}>
                <Text
                  style={[
                    GLOBAL_STYLE.h2Bold,
                    {
                      fontSize: 11,
                      color: COLORS.primaryBlue,
                    },
                  ]}>
                  Account Number:
                </Text>
              </View>
              <View
                style={{
                  width: '60%',
                  height: '100%',
                  justifyContent: 'center',
                }}>
                <Text
                  style={[
                    GLOBAL_STYLE.h2Bold,
                    {
                      textAlign: 'left',
                      fontSize: 12,
                      color: COLORS.primaryBlue,
                    },
                  ]}>
                  12094830209
                </Text>
              </View>
            </View>

            <View
              style={{
                height: 60,
                width: '100%',
                paddingHorizontal: '3%',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: '40%',
                  height: '100%',
                  justifyContent: 'center',
                }}>
                <Text
                  style={[
                    GLOBAL_STYLE.h2Bold,
                    {
                      fontSize: 11,
                      color: COLORS.primaryBlue,
                    },
                  ]}>
                  Account Type:
                </Text>
              </View>
              <View
                style={{
                  width: '60%',
                  height: '100%',
                  justifyContent: 'center',
                }}>
                <Text
                  style={[
                    GLOBAL_STYLE.h2Bold,
                    {
                      textAlign: 'left',
                      fontSize: 12,
                      color: COLORS.primaryBlue,
                    },
                  ]}>
                  SAVINGS ACCOUNT
                </Text>
              </View>
            </View>
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
                marginBottom: 10,
                fontWeight: 'bold',
              },
            ]}>
            Account Officer Details
          </Text>
          <View
            style={{
              width: '100%',
              borderWidth: 1,
              borderColor: COLORS.grey4,
              borderStyle: 'dashed',
              borderRadius: 5,
              backgroundColor: COLORS.white,
            }}>
            <View
              style={{
                height: 45,
                width: '100%',
                borderBottomWidth: 1,
                borderColor: COLORS.grey4,
                borderStyle: 'dashed',
                paddingHorizontal: '3%',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: '40%',
                  height: '100%',
                  justifyContent: 'center',
                }}>
                <Text
                  style={[
                    GLOBAL_STYLE.h2Bold,
                    {
                      fontSize: 11,
                      color: COLORS.primaryBlue,
                    },
                  ]}>
                  Name:
                </Text>
              </View>
              <View
                style={{
                  width: '60%',
                  height: '100%',
                  justifyContent: 'center',
                }}>
                <Text
                  style={[
                    GLOBAL_STYLE.h2Bold,
                    {
                      textAlign: 'left',
                      fontSize: 12,
                      color: COLORS.primaryBlue,
                    },
                  ]}>
                  OLAWALE ADEBAYO WILLIAMS
                </Text>
              </View>
            </View>

            <View
              style={{
                height: 45,
                width: '100%',
                paddingHorizontal: '3%',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: '40%',
                  height: '100%',
                  justifyContent: 'center',
                }}>
                <Text
                  style={[
                    GLOBAL_STYLE.h2Bold,
                    {
                      fontSize: 11,
                      color: COLORS.primaryBlue,
                    },
                  ]}>
                  Number:
                </Text>
              </View>
              <View
                style={{
                  width: '60%',
                  height: '100%',
                  justifyContent: 'center',
                }}>
                <Text
                  style={[
                    GLOBAL_STYLE.h2Bold,
                    {
                      textAlign: 'left',
                      fontSize: 12,
                      color: COLORS.primaryBlue,
                    },
                  ]}>
                  12094830209
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
            paddingHorizontal: '5%',
          }}>
          <Text
            style={[
              GLOBAL_STYLE.h2Bold,
              {
                textAlign: 'left',
                fontSize: 13,
                color: COLORS.primaryBlue,
                fontWeight: 'bold',
              },
            ]}>
            For enquiries:
          </Text>
          <Text
            style={[
              GLOBAL_STYLE.h2Bold,
              {
                textAlign: 'left',
                fontSize: 13,
                color: COLORS.primaryBlue,
                marginTop: 5,
              },
            ]}>
            0700 2000 3000
          </Text>
          <Text
            style={[
              GLOBAL_STYLE.h2Bold,
              {
                textAlign: 'left',
                fontSize: 13,
                color: COLORS.primaryBlue,
                marginTop: 5,
              },
            ]}>
            ContactCentre@keystonebankng.com
          </Text>
          <Text
            style={[
              GLOBAL_STYLE.h2Bold,
              {
                textAlign: 'left',
                fontSize: 13,
                color: COLORS.primaryBlue,
                marginTop: 5,
              },
            ]}>
            www.keystonebankng.com
          </Text>
        </View>

        <View style={{height: 30}}></View>
      </ScrollView>
    </View>
  );
};

export default ShareSummary;
