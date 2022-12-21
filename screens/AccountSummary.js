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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../components/Button';

// import {AppIcons} from '../components/images';
const AccountSummary = ({navigation}) => {
  const [active, setActive] = useState(true);
  const [transaction, setTransaction] = useState(false);

  return (
    <View style={{backgroundColor: '#E5E5E5', flex: 1}}>
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
              Account summary
            </Text>
          </View>
        </View>
      </ImageBackground>
      <ScrollView>
        <View
          style={{
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: '10%',
          }}>
          <MaterialCommunityIcons
            name="check-decagram"
            size={70}
            color={COLORS.primaryBlue}
          />
          <Text
            style={[
              GLOBAL_STYLE.h2Bold,
              {
                textAlign: 'center',
                fontSize: 12,
                color: COLORS.primaryBlue,
                marginTop: 10,
              },
            ]}>
            Account created successfully, Kindly find your account details below
          </Text>
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
        <Pressable
          onPress={() => navigation.navigate('ShareSummary')}
          style={{
            marginTop: 10,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: '10%',
          }}>
          <Text
            style={[
              GLOBAL_STYLE.h2Bold,
              {
                textAlign: 'center',
                fontSize: 11,
                color: COLORS.primaryBlue,
              },
            ]}>
            Share Summary
          </Text>
        </Pressable>
        <View
          style={{
            alignItems: 'center',
            marginTop: 30,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: '5%',
          }}>
          <Button
            onPress={() => navigation.navigate('Home')}
            width={'45%'}
            borderRadius={10}
            text={'Finish'}
          />
        </View>
        <View style={{height: 30}}></View>
      </ScrollView>
    </View>
  );
};

export default AccountSummary;
