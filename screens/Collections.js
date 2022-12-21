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
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

// import {AppIcons} from '../components/images';
const Collections = ({navigation}) => {
  const [active, setActive] = useState('POS');

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
              Collections
            </Text>
          </View>
        </View>
      </ImageBackground>

      <View style={{paddingHorizontal: '5%', marginTop: 20}}>
        <View
          style={{
            width: '100%',
            height: 45,
            borderRadius: 5,
            borderWidth: 0.5,
            borderColor: 'rgba(0, 86, 163, 0.2)',
            flexDirection: 'row',
          }}>
          {active == 'POS' ? (
            <Pressable
              style={{
                width: '33%',
                height: 45,
                borderTopLeftRadius: 5,
                borderBottomLeftRadius: 5,
                backgroundColor: COLORS.primaryBlue,
                justifyContent: 'center',
              }}>
              <Text
                style={[
                  GLOBAL_STYLE.h2Bold,
                  {
                    textAlign: 'center',
                    fontSize: 11,
                    color: COLORS.white,
                  },
                ]}>
                POS
              </Text>
            </Pressable>
          ) : (
            <Pressable
              onPress={() => setActive('POS')}
              style={{
                width: '33%',
                height: 45,
                borderTopLeftRadius: 5,
                borderBottomLeftRadius: 5,

                justifyContent: 'center',
              }}>
              <Text
                style={[
                  GLOBAL_STYLE.h2Bold,
                  {
                    textAlign: 'center',
                    fontSize: 10,
                    color: COLORS.primaryBlue,
                  },
                ]}>
                POS
              </Text>
            </Pressable>
          )}

          {active == 'NQR' ? (
            <Pressable
              style={{
                width: '34%',
                height: 45,
                backgroundColor: COLORS.primaryBlue,
                justifyContent: 'center',
              }}>
              <Text
                style={[
                  GLOBAL_STYLE.h2Bold,
                  {
                    textAlign: 'center',
                    fontSize: 11,
                    color: COLORS.white,
                  },
                ]}>
                NQR
              </Text>
            </Pressable>
          ) : (
            <Pressable
              onPress={() => setActive('NQR')}
              style={{
                width: '34%',
                height: 45,
                justifyContent: 'center',
              }}>
              <Text
                style={[
                  GLOBAL_STYLE.h2Bold,
                  {
                    textAlign: 'center',
                    fontSize: 10,
                    color: COLORS.primaryBlue,
                  },
                ]}>
                NQR
              </Text>
            </Pressable>
          )}

          {active == 'Concession' ? (
            <Pressable
              style={{
                width: '33%',
                height: 45,
                borderBottomRightRadius: 5,
                borderTopRightRadius: 5,
                backgroundColor: COLORS.primaryBlue,
                justifyContent: 'center',
              }}>
              <Text
                style={[
                  GLOBAL_STYLE.h2Bold,
                  {
                    textAlign: 'center',
                    fontSize: 11,
                    color: COLORS.white,
                  },
                ]}>
                Concession
              </Text>
            </Pressable>
          ) : (
            <Pressable
              onPress={() => setActive('Concession')}
              style={{
                width: '33%',
                height: 45,
                borderBottomRightRadius: 5,
                borderTopRightRadius: 5,

                justifyContent: 'center',
              }}>
              <Text
                style={[
                  GLOBAL_STYLE.h2Bold,
                  {
                    textAlign: 'center',
                    fontSize: 10,
                    color: COLORS.primaryBlue,
                  },
                ]}>
                Concession
              </Text>
            </Pressable>
          )}
        </View>
      </View>
      <ScrollView>
        {active == 'POS' ? (
          <View
            style={{
              width: '100%',
              height: '100%',
              marginTop: 20,
              paddingHorizontal: '5%',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  borderRadius: 2,
                  flexDirection: 'row',
                  paddingHorizontal: 8,
                  borderWidth: 1,
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderColor: 'rgba(0, 86, 163, 0.2)',
                  width: '55%',
                }}>
                <TextInput
                  style={{
                    height: 35,
                    fontSize: 10,
                    width: '90%',
                    color: COLORS.primaryBlue,
                  }}
                  placeholder={'Search accounts number'}
                  placeholderTextColor={COLORS.primaryBlue}
                />
                <View style={{paddingHorizontal: 3}}>
                  <EvilIcons name="search" size={20} color={COLORS.grey2} />
                </View>
              </View>

              <View
                style={{
                  paddingVertical: 5,
                  paddingHorizontal: 7,
                  borderWidth: 1,
                  borderColor: 'rgba(0, 86, 163, 0.2)',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Text
                  style={[
                    GLOBAL_STYLE.h2Bold,
                    {fontSize: 10, color: COLORS.primaryBlue},
                  ]}>
                  - 07 - 01 - 2022 -
                </Text>
                <AntDesign
                  name="calendar"
                  size={12}
                  color={COLORS.primaryBlue}
                />
              </View>
            </View>

            <View
              style={{
                borderColor: 'rgba(0, 86, 163, 0.2)',
                borderWidth: 0.5,
                marginTop: 15,
                flexDirection: 'row',
                borderRadius: 2,
              }}>
              <View
                style={{
                  width: '35%',
                  borderRightWidth: 0.5,
                  borderColor: 'rgba(0, 86, 163, 0.2)',
                  justifyContent: 'center',
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                }}>
                <Text
                  style={[
                    GLOBAL_STYLE.h2Bold,
                    {
                      fontSize: 10,
                      color: COLORS.grey2,
                      fontWeight: 'bold',
                    },
                  ]}>
                  Name
                </Text>
              </View>
              <View
                style={{
                  width: '20%',
                  borderRightWidth: 0.5,
                  borderColor: 'rgba(0, 86, 163, 0.2)',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingVertical: 10,
                }}>
                <Text
                  style={[
                    GLOBAL_STYLE.h2Bold,
                    {
                      fontSize: 10,
                      color: COLORS.grey2,
                      fontWeight: 'bold',
                    },
                  ]}>
                  Status
                </Text>
              </View>

              <View
                style={{
                  width: '22%',
                  borderRightWidth: 0.5,
                  borderColor: 'rgba(0, 86, 163, 0.2)',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingVertical: 10,
                }}>
                <Text
                  style={[
                    GLOBAL_STYLE.h2Bold,
                    {
                      fontSize: 10,
                      color: COLORS.grey2,
                      fontWeight: 'bold',
                    },
                  ]}>
                  Counts
                </Text>
              </View>
              <View
                style={{
                  width: '23%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingVertical: 10,
                }}>
                <Text
                  style={[
                    GLOBAL_STYLE.h2Bold,
                    {
                      fontSize: 10,
                      color: COLORS.grey2,
                      fontWeight: 'bold',
                    },
                  ]}>
                  Amount
                </Text>
              </View>
            </View>

            <View
              style={{
                borderColor: 'rgba(0, 86, 163, 0.2)',
                borderWidth: 0.3,
                flexDirection: 'row',
                borderRadius: 2,
              }}>
              <View
                style={{
                  width: '35%',
                  borderRightWidth: 0.5,
                  borderColor: 'rgba(0, 86, 163, 0.2)',
                  justifyContent: 'center',
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                }}>
                <Text
                  style={[
                    GLOBAL_STYLE.h2Bold,
                    {
                      fontSize: 10,
                      color: COLORS.primaryBlue,
                      fontWeight: 'bold',
                    },
                  ]}>
                  Nwafor Timileyin
                </Text>
              </View>
              <View
                style={{
                  width: '20%',
                  borderRightWidth: 0.5,
                  borderColor: 'rgba(0, 86, 163, 0.2)',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingVertical: 10,
                }}>
                <Text
                  style={[
                    GLOBAL_STYLE.h2Bold,
                    {
                      fontSize: 10,
                      color: COLORS.green,
                      fontWeight: 'bold',
                    },
                  ]}>
                  Active
                </Text>
              </View>
              <View
                style={{
                  width: '22%',
                  borderRightWidth: 0.5,
                  borderColor: 'rgba(0, 86, 163, 0.2)',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingVertical: 10,
                }}>
                <Text
                  style={[
                    GLOBAL_STYLE.h2Bold,
                    {
                      fontSize: 10,
                      color: COLORS.grey2,
                      fontWeight: 'bold',
                    },
                  ]}>
                  20693
                </Text>
              </View>
              <View
                style={{
                  width: '23%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingVertical: 10,
                }}>
                <Text
                  style={[
                    GLOBAL_STYLE.h2Bold,
                    {
                      fontSize: 10,
                      color: COLORS.grey2,
                      fontWeight: 'bold',
                    },
                  ]}>
                  N22,074,097
                </Text>
              </View>
            </View>
            <View
              style={{
                borderColor: 'rgba(0, 86, 163, 0.2)',
                borderWidth: 0.3,
                flexDirection: 'row',
                borderRadius: 2,
              }}>
              <View
                style={{
                  width: '35%',
                  borderRightWidth: 0.5,
                  borderColor: 'rgba(0, 86, 163, 0.2)',
                  justifyContent: 'center',
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                }}>
                <Text
                  style={[
                    GLOBAL_STYLE.h2Bold,
                    {
                      fontSize: 10,
                      color: COLORS.primaryBlue,
                      fontWeight: 'bold',
                    },
                  ]}>
                  kafilat Aminat
                </Text>
              </View>
              <View
                style={{
                  width: '20%',
                  borderRightWidth: 0.5,
                  borderColor: 'rgba(0, 86, 163, 0.2)',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingVertical: 10,
                }}>
                <Text
                  style={[
                    GLOBAL_STYLE.h2Bold,
                    {
                      fontSize: 10,
                      color: COLORS.grey2,
                      fontWeight: 'bold',
                    },
                  ]}>
                  Inactive
                </Text>
              </View>
              <View
                style={{
                  width: '22%',
                  borderRightWidth: 0.5,
                  borderColor: 'rgba(0, 86, 163, 0.2)',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingVertical: 10,
                }}>
                <Text
                  style={[
                    GLOBAL_STYLE.h2Bold,
                    {
                      fontSize: 10,
                      color: COLORS.grey2,
                      fontWeight: 'bold',
                    },
                  ]}>
                  206
                </Text>
              </View>
              <View
                style={{
                  width: '23%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingVertical: 10,
                }}>
                <Text
                  style={[
                    GLOBAL_STYLE.h2Bold,
                    {
                      fontSize: 10,
                      color: COLORS.grey2,
                      fontWeight: 'bold',
                    },
                  ]}>
                  N2,074,097
                </Text>
              </View>
            </View>
          </View>
        ) : active == 'NQR' ? (
          <View
            style={{
              width: '100%',
              height: '100%',
              marginTop: 20,
              paddingHorizontal: '5%',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  borderRadius: 2,
                  flexDirection: 'row',
                  paddingHorizontal: 8,
                  borderWidth: 1,
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderColor: 'rgba(0, 86, 163, 0.2)',
                  width: '55%',
                }}>
                <TextInput
                  style={{
                    height: 35,
                    fontSize: 10,
                    width: '90%',
                    color: COLORS.primaryBlue,
                  }}
                  placeholder={'Search accounts number'}
                  placeholderTextColor={COLORS.primaryBlue}
                />
                <View style={{paddingHorizontal: 3}}>
                  <EvilIcons name="search" size={20} color={COLORS.grey2} />
                </View>
              </View>

              <View
                style={{
                  paddingVertical: 5,
                  paddingHorizontal: 7,
                  borderWidth: 1,
                  borderColor: 'rgba(0, 86, 163, 0.2)',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Text
                  style={[
                    GLOBAL_STYLE.h2Bold,
                    {fontSize: 10, color: COLORS.primaryBlue},
                  ]}>
                  - 07 - 01 - 2022 -
                </Text>
                <AntDesign
                  name="calendar"
                  size={12}
                  color={COLORS.primaryBlue}
                />
              </View>
            </View>

            <View
              style={{
                borderColor: 'rgba(0, 86, 163, 0.2)',
                borderWidth: 0.5,
                marginTop: 15,
                flexDirection: 'row',
                borderRadius: 2,
              }}>
              <View
                style={{
                  width: '35%',
                  borderRightWidth: 0.5,
                  borderColor: 'rgba(0, 86, 163, 0.2)',
                  justifyContent: 'center',
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                }}>
                <Text
                  style={[
                    GLOBAL_STYLE.h2Bold,
                    {
                      fontSize: 10,
                      color: COLORS.grey2,
                      fontWeight: 'bold',
                    },
                  ]}>
                  Name
                </Text>
              </View>
              <View
                style={{
                  width: '20%',
                  borderRightWidth: 0.5,
                  borderColor: 'rgba(0, 86, 163, 0.2)',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingVertical: 10,
                }}>
                <Text
                  style={[
                    GLOBAL_STYLE.h2Bold,
                    {
                      fontSize: 10,
                      color: COLORS.grey2,
                      fontWeight: 'bold',
                    },
                  ]}>
                  Status
                </Text>
              </View>

              <View
                style={{
                  width: '22%',
                  borderRightWidth: 0.5,
                  borderColor: 'rgba(0, 86, 163, 0.2)',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingVertical: 10,
                }}>
                <Text
                  style={[
                    GLOBAL_STYLE.h2Bold,
                    {
                      fontSize: 10,
                      color: COLORS.grey2,
                      fontWeight: 'bold',
                    },
                  ]}>
                  Counts
                </Text>
              </View>
              <View
                style={{
                  width: '23%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingVertical: 10,
                }}>
                <Text
                  style={[
                    GLOBAL_STYLE.h2Bold,
                    {
                      fontSize: 10,
                      color: COLORS.grey2,
                      fontWeight: 'bold',
                    },
                  ]}>
                  Amount
                </Text>
              </View>
            </View>

            <Pressable
              onPress={() => navigation.navigate('NQR')}
              style={{
                borderColor: 'rgba(0, 86, 163, 0.2)',
                borderWidth: 0.3,
                flexDirection: 'row',
                borderRadius: 2,
              }}>
              <View
                style={{
                  width: '35%',
                  borderRightWidth: 0.5,
                  borderColor: 'rgba(0, 86, 163, 0.2)',
                  justifyContent: 'center',
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                }}>
                <Text
                  style={[
                    GLOBAL_STYLE.h2Bold,
                    {
                      fontSize: 10,
                      color: COLORS.primaryBlue,
                      fontWeight: 'bold',
                    },
                  ]}>
                  Benjamin Anne
                </Text>
              </View>
              <View
                style={{
                  width: '20%',
                  borderRightWidth: 0.5,
                  borderColor: 'rgba(0, 86, 163, 0.2)',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingVertical: 10,
                }}>
                <Text
                  style={[
                    GLOBAL_STYLE.h2Bold,
                    {
                      fontSize: 10,
                      color: COLORS.green,
                      fontWeight: 'bold',
                    },
                  ]}>
                  Active
                </Text>
              </View>
              <View
                style={{
                  width: '22%',
                  borderRightWidth: 0.5,
                  borderColor: 'rgba(0, 86, 163, 0.2)',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingVertical: 10,
                }}>
                <Text
                  style={[
                    GLOBAL_STYLE.h2Bold,
                    {
                      fontSize: 10,
                      color: COLORS.grey2,
                      fontWeight: 'bold',
                    },
                  ]}>
                  206
                </Text>
              </View>
              <View
                style={{
                  width: '23%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingVertical: 10,
                }}>
                <Text
                  style={[
                    GLOBAL_STYLE.h2Bold,
                    {
                      fontSize: 10,
                      color: COLORS.grey2,
                      fontWeight: 'bold',
                    },
                  ]}>
                  N2,074,097
                </Text>
              </View>
            </Pressable>

            <Pressable
              style={{
                borderColor: 'rgba(0, 86, 163, 0.2)',
                borderWidth: 0.3,
                flexDirection: 'row',
                borderRadius: 2,
              }}>
              <View
                style={{
                  width: '35%',
                  borderRightWidth: 0.5,
                  borderColor: 'rgba(0, 86, 163, 0.2)',
                  justifyContent: 'center',
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                }}>
                <Text
                  style={[
                    GLOBAL_STYLE.h2Bold,
                    {
                      fontSize: 10,
                      color: COLORS.primaryBlue,
                      fontWeight: 'bold',
                    },
                  ]}>
                  Olayinka Aminat
                </Text>
              </View>
              <View
                style={{
                  width: '20%',
                  borderRightWidth: 0.5,
                  borderColor: 'rgba(0, 86, 163, 0.2)',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingVertical: 10,
                }}>
                <Text
                  style={[
                    GLOBAL_STYLE.h2Bold,
                    {
                      fontSize: 10,
                      color: COLORS.grey2,
                      fontWeight: 'bold',
                    },
                  ]}>
                  Inactive
                </Text>
              </View>
              <View
                style={{
                  width: '22%',
                  borderRightWidth: 0.5,
                  borderColor: 'rgba(0, 86, 163, 0.2)',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingVertical: 10,
                }}>
                <Text
                  style={[
                    GLOBAL_STYLE.h2Bold,
                    {
                      fontSize: 10,
                      color: COLORS.grey2,
                      fontWeight: 'bold',
                    },
                  ]}>
                  206
                </Text>
              </View>
              <View
                style={{
                  width: '23%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingVertical: 10,
                }}>
                <Text
                  style={[
                    GLOBAL_STYLE.h2Bold,
                    {
                      fontSize: 10,
                      color: COLORS.grey2,
                      fontWeight: 'bold',
                    },
                  ]}>
                  N2,074,097
                </Text>
              </View>
            </Pressable>
          </View>
        ) : (
          <View
            style={{
              width: '100%',
              height: '100%',
              marginTop: 20,
              paddingHorizontal: '5%',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  borderRadius: 2,
                  flexDirection: 'row',
                  paddingHorizontal: 8,
                  borderWidth: 1,
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderColor: 'rgba(0, 86, 163, 0.2)',
                  width: '55%',
                }}>
                <TextInput
                  style={{
                    height: 35,
                    fontSize: 10,
                    width: '90%',
                    color: COLORS.primaryBlue,
                  }}
                  placeholder={'Search accounts number'}
                  placeholderTextColor={COLORS.primaryBlue}
                />
                <View style={{paddingHorizontal: 3}}>
                  <EvilIcons name="search" size={20} color={COLORS.grey2} />
                </View>
              </View>

              <View
                style={{
                  paddingVertical: 5,
                  paddingHorizontal: 7,
                  borderWidth: 1,
                  borderColor: 'rgba(0, 86, 163, 0.2)',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Text
                  style={[
                    GLOBAL_STYLE.h2Bold,
                    {fontSize: 10, color: COLORS.primaryBlue},
                  ]}>
                  - 07 - 01 - 2022 -
                </Text>
                <AntDesign
                  name="calendar"
                  size={12}
                  color={COLORS.primaryBlue}
                />
              </View>
            </View>

            <View
              style={{
                borderColor: 'rgba(0, 86, 163, 0.2)',
                borderWidth: 0.5,
                marginTop: 15,
                flexDirection: 'row',
                borderRadius: 2,
              }}>
              <View
                style={{
                  width: '35%',
                  borderRightWidth: 0.5,
                  borderColor: 'rgba(0, 86, 163, 0.2)',
                  justifyContent: 'center',
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                }}>
                <Text
                  style={[
                    GLOBAL_STYLE.h2Bold,
                    {
                      fontSize: 10,
                      color: COLORS.grey2,
                      fontWeight: 'bold',
                    },
                  ]}>
                  Name
                </Text>
              </View>
              <View
                style={{
                  width: '20%',
                  borderRightWidth: 0.5,
                  borderColor: 'rgba(0, 86, 163, 0.2)',
                  justifyContent: 'center',
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                }}>
                <Text
                  style={[
                    GLOBAL_STYLE.h2Bold,
                    {
                      fontSize: 10,
                      color: COLORS.grey2,
                      fontWeight: 'bold',
                    },
                  ]}>
                  POS
                </Text>
                <Text
                  style={[
                    GLOBAL_STYLE.h2Bold,
                    {
                      fontSize: 10,
                      color: COLORS.grey2,
                      fontWeight: 'bold',
                    },
                  ]}>
                  Inflow
                </Text>
              </View>

              <View
                style={{
                  width: '22%',
                  borderRightWidth: 0.5,
                  borderColor: 'rgba(0, 86, 163, 0.2)',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingVertical: 10,
                }}>
                <Text
                  style={[
                    GLOBAL_STYLE.h2Bold,
                    {
                      fontSize: 10,
                      color: COLORS.grey2,
                      fontWeight: 'bold',
                    },
                  ]}>
                  Concession
                </Text>
              </View>
              <View
                style={{
                  width: '23%',
                  justifyContent: 'center',
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                }}>
                <Text
                  style={[
                    GLOBAL_STYLE.h2Bold,
                    {
                      fontSize: 10,
                      color: COLORS.grey2,
                      fontWeight: 'bold',
                    },
                  ]}>
                  NRFF+
                </Text>
                <Text
                  style={[
                    GLOBAL_STYLE.h2Bold,
                    {
                      fontSize: 10,
                      color: COLORS.grey2,
                      fontWeight: 'bold',
                    },
                  ]}>
                  Concession
                </Text>
              </View>
            </View>

            <View
              style={{
                borderColor: 'rgba(0, 86, 163, 0.2)',
                borderWidth: 0.3,
                flexDirection: 'row',
                borderRadius: 2,
              }}>
              <View
                style={{
                  width: '35%',
                  borderRightWidth: 0.5,
                  borderColor: 'rgba(0, 86, 163, 0.2)',
                  justifyContent: 'center',
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                }}>
                <Text
                  style={[
                    GLOBAL_STYLE.h2Bold,
                    {
                      fontSize: 10,
                      color: COLORS.primaryBlue,
                      fontWeight: 'bold',
                    },
                  ]}>
                  DENERO GLOBAL SERVICES LIMITED
                </Text>
              </View>
              <View
                style={{
                  width: '20%',
                  borderRightWidth: 0.5,
                  borderColor: 'rgba(0, 86, 163, 0.2)',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingVertical: 10,
                }}>
                <Text
                  style={[
                    GLOBAL_STYLE.h2Bold,
                    {
                      fontSize: 10,
                      color: COLORS.grey2,
                      fontWeight: 'bold',
                    },
                  ]}>
                  10819040
                </Text>
              </View>
              <View
                style={{
                  width: '22%',
                  borderRightWidth: 0.5,
                  borderColor: 'rgba(0, 86, 163, 0.2)',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingVertical: 10,
                }}>
                <Text
                  style={[
                    GLOBAL_STYLE.h2Bold,
                    {
                      fontSize: 10,
                      color: COLORS.grey2,
                      fontWeight: 'bold',
                    },
                  ]}>
                  49,478.9
                </Text>
              </View>
              <View
                style={{
                  width: '23%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingVertical: 10,
                }}>
                <Text
                  style={[
                    GLOBAL_STYLE.h2Bold,
                    {
                      fontSize: 10,
                      color: COLORS.grey2,
                      fontWeight: 'bold',
                    },
                  ]}>
                  2,074,097
                </Text>
              </View>
            </View>

            <View
              style={{
                borderColor: 'rgba(0, 86, 163, 0.2)',
                borderWidth: 0.3,
                flexDirection: 'row',
                borderRadius: 2,
              }}>
              <View
                style={{
                  width: '35%',
                  borderRightWidth: 0.5,
                  borderColor: 'rgba(0, 86, 163, 0.2)',
                  justifyContent: 'center',
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                }}>
                <Text
                  style={[
                    GLOBAL_STYLE.h2Bold,
                    {
                      fontSize: 10,
                      color: COLORS.primaryBlue,
                      fontWeight: 'bold',
                    },
                  ]}>
                  Olayinka Aminat
                </Text>
              </View>
              <View
                style={{
                  width: '20%',
                  borderRightWidth: 0.5,
                  borderColor: 'rgba(0, 86, 163, 0.2)',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingVertical: 10,
                }}>
                <Text
                  style={[
                    GLOBAL_STYLE.h2Bold,
                    {
                      fontSize: 10,
                      color: COLORS.grey2,
                      fontWeight: 'bold',
                    },
                  ]}>
                  10819040
                </Text>
              </View>
              <View
                style={{
                  width: '22%',
                  borderRightWidth: 0.5,
                  borderColor: 'rgba(0, 86, 163, 0.2)',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingVertical: 10,
                }}>
                <Text
                  style={[
                    GLOBAL_STYLE.h2Bold,
                    {
                      fontSize: 10,
                      color: COLORS.grey2,
                      fontWeight: 'bold',
                    },
                  ]}>
                  49,478.9
                </Text>
              </View>
              <View
                style={{
                  width: '23%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingVertical: 10,
                }}>
                <Text
                  style={[
                    GLOBAL_STYLE.h2Bold,
                    {
                      fontSize: 10,
                      color: COLORS.grey2,
                      fontWeight: 'bold',
                    },
                  ]}>
                  2,074,097
                </Text>
              </View>
            </View>
          </View>
        )}
        <View style={{height: 30}}></View>
      </ScrollView>
    </View>
  );
};

export default Collections;
