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
import {OpenAccountIcon} from '../constants/icons';
import Modal from 'react-native-modal';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// import {AppIcons} from '../components/images';
const Accts = ({navigation}) => {
  const [active, setActive] = useState('sign');
  const [modal, setModal] = useState(false);

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
              DASHBOARD
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
            borderColor: COLORS.lightBlue,
            flexDirection: 'row',
          }}>
          {active == 'sign' ? (
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
                Sign-Ons
              </Text>
            </Pressable>
          ) : (
            <Pressable
              onPress={() => setActive('sign')}
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
                    fontSize: 11,
                    color: COLORS.primaryBlue,
                  },
                ]}>
                Sign-Ons
              </Text>
            </Pressable>
          )}

          {active == 'hardcore' ? (
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
                Hardcore
              </Text>
            </Pressable>
          ) : (
            <Pressable
              onPress={() => setActive('hardcore')}
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
                    fontSize: 11,
                    color: COLORS.primaryBlue,
                  },
                ]}>
                Hardcore
              </Text>
            </Pressable>
          )}

          {active == 'accounts' ? (
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
                DAO Accounts
              </Text>
            </Pressable>
          ) : (
            <Pressable
              onPress={() => setActive('accounts')}
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
                    fontSize: 11,
                    color: COLORS.primaryBlue,
                  },
                ]}>
                DAO Accounts
              </Text>
            </Pressable>
          )}
        </View>
      </View>
      <ScrollView>
        {active == 'sign' ? (
          <View
            style={{
              width: '100%',
              height: '100%',
              marginTop: 20,
              paddingHorizontal: '5%',
            }}>
            <View
              style={{
                backgroundColor: COLORS.primaryBlue,
                paddingVertical: 10,
                paddingHorizontal: '3%',
                borderRadius: 8,
              }}>
              <View>
                <Text
                  style={[
                    GLOBAL_STYLE.h2Bold,
                    {
                      textAlign: 'center',
                      fontSize: 18,
                      color: COLORS.white,
                      marginTop: '4%',
                      fontWeight: '600',
                    },
                  ]}>
                  TOTAL ACCOUNTS
                </Text>
                <Text
                  style={[
                    GLOBAL_STYLE.h2Bold,
                    {
                      textAlign: 'center',
                      fontSize: 25,
                      color: COLORS.white,
                      marginTop: '3%',
                      fontWeight: 'bold',
                    },
                  ]}>
                  3,500,000
                </Text>
              </View>
              <View
                style={{
                  borderTopWidth: 1,
                  borderColor: COLORS.white,
                  paddingVertical: 10,
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  marginTop: 10,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: SIZES.responsiveWidth('42%'),
                    paddingRight: '3%',
                    borderRightWidth: 1,
                    borderColor: COLORS.white,
                  }}>
                  <View>
                    <Text
                      style={[
                        GLOBAL_STYLE.h2Bold,
                        {textAlign: 'left', fontSize: 12, color: COLORS.white},
                      ]}>
                      ACTIVE
                    </Text>
                    <Text
                      style={[
                        GLOBAL_STYLE.h2Bold,
                        {
                          textAlign: 'center',
                          fontSize: 15,
                          color: COLORS.white,
                          marginTop: 5,
                        },
                      ]}>
                      1,000,000
                    </Text>
                  </View>

                  <Text
                    style={[
                      GLOBAL_STYLE.h2Bold,
                      {textAlign: 'center', fontSize: 18, color: COLORS.white},
                    ]}>
                    30%
                  </Text>
                </View>
                {/* <View
                style={{
                  height: 30,
                  width: 1,
                  backgroundColor: COLORS.white,
                }}></View> */}
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: SIZES.responsiveWidth('42%'),
                    paddingLeft: '3%',
                  }}>
                  <View>
                    <Text
                      style={[
                        GLOBAL_STYLE.h2Bold,
                        {textAlign: 'left', fontSize: 12, color: COLORS.white},
                      ]}>
                      INACTIVE
                    </Text>
                    <Text
                      style={[
                        GLOBAL_STYLE.h2Bold,
                        {
                          textAlign: 'center',
                          fontSize: 15,
                          color: COLORS.white,
                          marginTop: 5,
                        },
                      ]}>
                      1,500,000
                    </Text>
                  </View>
                  <Text
                    style={[
                      GLOBAL_STYLE.h2Bold,
                      {textAlign: 'center', fontSize: 18, color: COLORS.white},
                    ]}>
                    35%
                  </Text>
                </View>
              </View>

              <View
                style={{
                  borderTopWidth: 1,
                  borderColor: COLORS.white,
                  paddingVertical: 10,
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  marginTop: 10,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: SIZES.responsiveWidth('42%'),
                    paddingRight: '3%',
                    borderRightWidth: 1,
                    borderColor: COLORS.white,
                  }}>
                  <View>
                    <Text
                      style={[
                        GLOBAL_STYLE.h2Bold,
                        {textAlign: 'left', fontSize: 12, color: COLORS.white},
                      ]}>
                      Dormant
                    </Text>
                    <Text
                      style={[
                        GLOBAL_STYLE.h2Bold,
                        {
                          textAlign: 'center',
                          fontSize: 15,
                          color: COLORS.white,
                          marginTop: 5,
                        },
                      ]}>
                      500,000
                    </Text>
                  </View>

                  <Text
                    style={[
                      GLOBAL_STYLE.h2Bold,
                      {textAlign: 'center', fontSize: 18, color: COLORS.white},
                    ]}>
                    7%
                  </Text>
                </View>
                {/* <View
                style={{
                  height: 30,
                  width: 1,
                  backgroundColor: COLORS.white,
                }}></View> */}
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: SIZES.responsiveWidth('42%'),
                    paddingLeft: '3%',
                  }}>
                  <View>
                    <Text
                      style={[
                        GLOBAL_STYLE.h2Bold,
                        {textAlign: 'left', fontSize: 12, color: COLORS.white},
                      ]}>
                      No BVN
                    </Text>
                    <Text
                      style={[
                        GLOBAL_STYLE.h2Bold,
                        {
                          textAlign: 'center',
                          fontSize: 15,
                          color: COLORS.white,
                          marginTop: 5,
                        },
                      ]}>
                      1,000,000
                    </Text>
                  </View>
                  <Text
                    style={[
                      GLOBAL_STYLE.h2Bold,
                      {textAlign: 'center', fontSize: 18, color: COLORS.white},
                    ]}>
                    7%
                  </Text>
                </View>
              </View>
            </View>

            <View style={{marginTop: '7%'}}>
              <Text
                style={[
                  GLOBAL_STYLE.h2Bold,
                  {fontSize: 14, color: COLORS.navyBlue},
                ]}>
                ACTIVE ACCOUNTS AND CHANNELS
              </Text>
            </View>
          </View>
        ) : active == 'hardcore' ? (
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
              <Text
                style={[
                  GLOBAL_STYLE.h2Bold,
                  {fontSize: 12, color: COLORS.grey2},
                ]}>
                Total balance as at:
              </Text>
              <View
                style={{
                  paddingVertical: 5,
                  paddingHorizontal: 5,
                  borderWidth: 1,
                  borderColor: COLORS.lightBlue,
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
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
                  size={10}
                  color={COLORS.primaryBlue}
                />
              </View>
            </View>
            <View style={{marginTop: 10}}>
              <ImageBackground
                source={images.hardcoreCard}
                style={{height: 200, width: '100%', borderRadius: 19}}>
                <View
                  style={{
                    flexDirection: 'row',
                    paddingHorizontal: '5%',
                    marginTop: 15,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={[
                      GLOBAL_STYLE.h2Bold,
                      {fontSize: 18, color: COLORS.white, fontWeight: 'bold'},
                    ]}>
                    Average Deposit Portfolio
                  </Text>
                  <Ionicons
                    name="chevron-down"
                    size={18}
                    color={COLORS.white}
                  />
                </View>
                <View style={{paddingHorizontal: '5%'}}>
                  <View
                    style={{
                      marginTop: 8,
                      borderColor: COLORS.white,
                      borderBottomWidth: 0.8,
                    }}></View>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 5,
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        backgroundColor: 'blue',
                        paddingHorizontal: 7,
                        paddingVertical: 3,
                      }}>
                      <Text
                        style={[
                          GLOBAL_STYLE.h2Bold,
                          {fontSize: 8, color: COLORS.white, fontWeight: '600'},
                        ]}>
                        ₦.NGN
                      </Text>
                    </View>

                    <Feather name="eye" size={10} color={COLORS.white} />
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 10,
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={[
                        GLOBAL_STYLE.h2Bold,
                        {fontSize: 11, color: COLORS.white, fontWeight: '600'},
                      ]}>
                      Opening:
                    </Text>

                    <Text
                      style={[
                        GLOBAL_STYLE.h2Bold,
                        {fontSize: 16, color: COLORS.white, fontWeight: 'bold'},
                      ]}>
                      N2,642,324
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 10,
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={[
                        GLOBAL_STYLE.h2Bold,
                        {fontSize: 11, color: COLORS.white, fontWeight: '600'},
                      ]}>
                      Closing:
                    </Text>

                    <Text
                      style={[
                        GLOBAL_STYLE.h2Bold,
                        {fontSize: 16, color: COLORS.white, fontWeight: 'bold'},
                      ]}>
                      N5,642,324
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 10,
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={[
                        GLOBAL_STYLE.h2Bold,
                        {fontSize: 11, color: COLORS.white, fontWeight: '600'},
                      ]}>
                      Movement:
                    </Text>

                    <Text
                      style={[
                        GLOBAL_STYLE.h2Bold,
                        {fontSize: 16, color: COLORS.white, fontWeight: 'bold'},
                      ]}>
                      N3,642,324
                    </Text>
                  </View>
                </View>
              </ImageBackground>
            </View>
            <View
              style={{
                marginTop: 15,
                backgroundColor: 'rgba(218, 218, 218, 0.2)',
                borderRadius: 7,
                flexDirection: 'row',
                paddingHorizontal: 10,
                borderWidth: 1,
                alignItems: 'center',
                justifyContent: 'space-between',
                borderColor: 'rgba(30, 31, 32, 0.2)',
              }}>
              <TextInput
                style={{width: '92%', height: 40, fontSize: 12}}
                placeholder={'Search accounts here'}
              />
              <EvilIcons name="search" size={20} color={COLORS.grey2} />
            </View>

            <View
              style={{
                borderColor: COLORS.lightBlue,
                borderWidth: 0.5,
                marginTop: 15,
                flexDirection: 'row',
                borderRadius: 2,
              }}>
              <View
                style={{
                  width: '35%',
                  borderRightWidth: 0.5,
                  borderColor: COLORS.lightBlue,
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
                  borderColor: COLORS.lightBlue,
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
                  borderColor: COLORS.lightBlue,
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
                  Products
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
                  Balance
                </Text>
              </View>
            </View>

            <View
              style={{
                borderColor: COLORS.lightBlue,
                borderWidth: 0.3,
                flexDirection: 'row',
                borderRadius: 2,
              }}>
              <View
                style={{
                  width: '35%',
                  borderRightWidth: 0.5,
                  borderColor: COLORS.lightBlue,
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
                  borderColor: COLORS.lightBlue,
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
                  borderColor: COLORS.lightBlue,
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
            <View
              style={{
                borderColor: COLORS.lightBlue,
                borderWidth: 0.3,
                flexDirection: 'row',
                borderRadius: 2,
              }}>
              <View
                style={{
                  width: '35%',
                  borderRightWidth: 0.5,
                  borderColor: COLORS.lightBlue,
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
                  borderColor: COLORS.lightBlue,
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
                  borderColor: COLORS.lightBlue,
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
        ) : (
          <View
            style={{
              width: '100%',
              height: '100%',
              marginTop: 15,
              paddingHorizontal: '5%',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    height: 10,
                    width: 10,
                    borderRadius: 50,
                    backgroundColor: COLORS.lemon,
                  }}></View>
                <Text
                  style={[
                    GLOBAL_STYLE.h2Bold,
                    {
                      fontSize: 11,
                      color: COLORS.grey3,
                      fontWeight: '600',
                      marginLeft: 8,
                    },
                  ]}>
                  Active
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: 20,
                }}>
                <View
                  style={{
                    height: 10,
                    width: 10,
                    borderRadius: 50,
                    backgroundColor: '#DADADA',
                  }}></View>
                <Text
                  style={[
                    GLOBAL_STYLE.h2Bold,
                    {
                      fontSize: 11,
                      color: COLORS.grey3,
                      fontWeight: '600',
                      marginLeft: 8,
                    },
                  ]}>
                  Inactive
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: 20,
                }}>
                <View
                  style={{
                    height: 10,
                    width: 10,
                    borderRadius: 50,
                    backgroundColor: COLORS.red,
                  }}></View>
                <Text
                  style={[
                    GLOBAL_STYLE.h2Bold,
                    {
                      fontSize: 11,
                      color: COLORS.grey3,
                      fontWeight: '600',
                      marginLeft: 8,
                    },
                  ]}>
                  Dormant
                </Text>
              </View>
            </View>
            <View
              style={{
                borderColor: COLORS.lightBlue,
                borderWidth: 0.5,
                marginTop: 15,
                flexDirection: 'row',
                borderRadius: 2,
              }}>
              <View
                style={{
                  width: '35%',
                  borderRightWidth: 0.5,
                  borderColor: COLORS.lightBlue,
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
                      fontWeight: '600',
                    },
                  ]}>
                  Name
                </Text>
              </View>
              <View
                style={{
                  width: '11%',
                  borderRightWidth: 0.5,
                  borderColor: COLORS.lightBlue,
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
                      fontWeight: '600',
                    },
                  ]}>
                  Mobile
                </Text>
              </View>
              <View
                style={{
                  width: '10%',
                  borderRightWidth: 0.5,
                  borderColor: COLORS.lightBlue,
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
                      fontWeight: '600',
                    },
                  ]}>
                  USSD
                </Text>
              </View>
              <View
                style={{
                  width: '11%',
                  borderRightWidth: 0.5,
                  borderColor: COLORS.lightBlue,
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
                      fontWeight: '600',
                    },
                  ]}>
                  IBank
                </Text>
              </View>
              <View
                style={{
                  width: '11%',
                  borderRightWidth: 0.5,
                  borderColor: COLORS.lightBlue,
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
                      fontWeight: '600',
                    },
                  ]}>
                  Cards
                </Text>
              </View>
              <View
                style={{
                  width: '22%',
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
                      fontWeight: '600',
                    },
                  ]}>
                  A/C summary
                </Text>
              </View>
            </View>

            <Pressable
              onPress={() => setModal(true)}
              style={{
                borderColor: COLORS.lightBlue,
                borderWidth: 0.5,
                marginTop: 15,
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: '35%',
                  borderRightWidth: 0.5,
                  borderColor: COLORS.lightBlue,
                  paddingVertical: 10,
                }}>
                <Text
                  style={[
                    GLOBAL_STYLE.h2Bold,
                    {
                      fontSize: 12,
                      color: COLORS.primaryBlue,
                      fontWeight: '600',
                      marginLeft: 8,
                    },
                  ]}>
                  Benjamin Anne
                </Text>
              </View>
              <View
                style={{
                  width: '11%',

                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingVertical: 10,
                }}>
                <View
                  style={{
                    height: 10,
                    width: 10,
                    borderRadius: 50,
                    backgroundColor: COLORS.lemon,
                  }}></View>
              </View>
              <View
                style={{
                  width: '10%',

                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingVertical: 10,
                }}>
                <View
                  style={{
                    height: 10,
                    width: 10,
                    borderRadius: 50,
                    backgroundColor: COLORS.lemon,
                  }}></View>
              </View>
              <View
                style={{
                  width: '11%',

                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingVertical: 10,
                }}>
                <View
                  style={{
                    height: 10,
                    width: 10,
                    borderRadius: 50,
                    backgroundColor: COLORS.lemon,
                  }}></View>
              </View>
              <View
                style={{
                  width: '11%',

                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingVertical: 10,
                }}>
                <View
                  style={{
                    height: 10,
                    width: 10,
                    borderRadius: 50,
                    backgroundColor: COLORS.grey,
                  }}></View>
              </View>
              <View
                style={{
                  width: '22%',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  paddingVertical: 10,
                  flexDirection: 'row',
                  paddingLeft: 10,
                }}>
                <View
                  style={{
                    height: 10,
                    width: 10,
                    borderRadius: 50,
                    backgroundColor: COLORS.red,
                  }}></View>
                <Entypo
                  name="dots-three-vertical"
                  size={15}
                  color={COLORS.grey2}
                />
              </View>
            </Pressable>
          </View>
        )}
        <View style={{height: 30}}></View>
      </ScrollView>
      <Modal
        isVisible={modal}
        onBackButtonPress={() => setModal(false)}
        onBackdropPress={() => setModal(false)}
        backdropColor={'rgba(30, 31, 32, 0.7)'}>
        <View
          style={{
            backgroundColor: COLORS.white,
            borderRadius: 5,
            marginLeft: '65%',
          }}>
          <Pressable
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: 40,
              paddingHorizontal: '10%',
            }}>
            <Text
              style={[
                GLOBAL_STYLE.h2Bold,
                {
                  fontSize: 13,
                  color: COLORS.primaryBlue,
                  fontWeight: '600',
                },
              ]}>
              Call
            </Text>
            <View
              style={{
                height: 25,
                width: 25,
                backgroundColor: COLORS.lightBlue,
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Feather name="phone-call" size={13} color={COLORS.primaryBlue} />
            </View>
          </Pressable>

          <Pressable
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: 40,
              borderTopWidth: 1,
              paddingHorizontal: '10%',
              borderColor: COLORS.lightBlue,
            }}>
            <Text
              style={[
                GLOBAL_STYLE.h2Bold,
                {
                  fontSize: 13,
                  color: COLORS.primaryBlue,
                  fontWeight: '600',
                },
              ]}>
              Email
            </Text>
            <View
              style={{
                height: 25,
                width: 25,
                backgroundColor: COLORS.lightBlue,
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <MaterialCommunityIcons
                name="email-fast"
                size={15}
                color={COLORS.primaryBlue}
              />
            </View>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
};

export default Accts;
