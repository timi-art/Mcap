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
const Digital = ({navigation}) => {
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
              Digital Marketing
            </Text>
          </View>
        </View>
      </ImageBackground>

      <Pressable
        style={{
          height: 50,
          width: SIZES.responsiveWidth('100%'),
          borderColor: COLORS.primaryBlue2,
          borderWidth: 0.5,
          paddingHorizontal: '5%',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={[
            GLOBAL_STYLE.h2Bold,
            {fontSize: 12, color: COLORS.primaryBlue},
          ]}>
          Engage by Level
        </Text>
        <Ionicons name="chevron-forward" size={25} color={COLORS.primaryBlue} />
      </Pressable>
      <Pressable
        onPress={() => setTransaction(!transaction)}
        style={{
          height: 50,
          width: SIZES.responsiveWidth('100%'),
          borderColor: COLORS.primaryBlue2,
          borderBottomWidth: 0.5,
          paddingHorizontal: '5%',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={[
            GLOBAL_STYLE.h2Bold,
            {fontSize: 12, color: COLORS.primaryBlue},
          ]}>
          Engage by Transaction status
        </Text>
        <Ionicons name="chevron-forward" size={25} color={COLORS.primaryBlue} />
      </Pressable>
      {transaction == true ? (
        <View
          style={{
            height: '15%',
            shadowColor: '#171717',
            shadowOpacity: 0.2,
            shadowRadius: 3,
            elevation: 3,
            width: '100%',
            backgroundColor: '#ffffff',
            paddingHorizontal: '5%',
          }}>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 10,
            }}>
            <Text
              style={[
                GLOBAL_STYLE.h2Bold,
                {fontSize: 12, color: COLORS.primaryBlue},
              ]}>
              Transacting
            </Text>
            <AntDesign
              name="checkcircle"
              size={13}
              color={COLORS.primaryBlue}
            />
          </View>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 10,
            }}>
            <Text
              style={[
                GLOBAL_STYLE.h2Bold,
                {fontSize: 12, color: COLORS.primaryBlue},
              ]}>
              Not Transacting
            </Text>
            <AntDesign
              name="checkcircleo"
              size={13}
              color={COLORS.primaryBlue}
            />
          </View>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 10,
            }}>
            <Text
              style={[
                GLOBAL_STYLE.h2Bold,
                {fontSize: 12, color: COLORS.primaryBlue},
              ]}>
              All
            </Text>
            <AntDesign
              name="checkcircle"
              size={13}
              color={COLORS.primaryBlue}
            />
          </View>
        </View>
      ) : null}

      <ScrollView>
        <View
          style={{
            paddingHorizontal: '5%',
            marginTop: transaction == true ? '10%' : '35%',
          }}>
          <View
            style={{
              width: '100%',
              backgroundColor: COLORS.grey,
              borderRadius: 5,
              borderColor: COLORS.primaryBlue2,
              borderWidth: 0.3,
              paddingHorizontal: '3%',
            }}>
            <TextInput
              placeholder={'Enter message'}
              placeholderTextColor={'#C4C4C4'}
              multiline={true}
              textAlignVertical={'top'}
              editable={true}
              style={{
                width: '80%',
                height: SIZES.responsiveHeight('25%'),
                fontSize: 12,
              }}
            />
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                paddingVertical: 5,
              }}>
              <Pressable>
                <Text
                  style={[
                    GLOBAL_STYLE.h2Bold,
                    {fontSize: 14, color: COLORS.grey4},
                  ]}>
                  T
                </Text>
              </Pressable>
              <Pressable >
                <Text
                  style={[
                    GLOBAL_STYLE.h2Bold,
                    {fontSize: 14, color: COLORS.grey4, fontWeight: 'bold'},
                  ]}>
                  B
                </Text>
              </Pressable>
              <Pressable>
                <Text
                  style={[
                    GLOBAL_STYLE.h2Bold,
                    {fontSize: 14, color: COLORS.grey4, fontStyle: 'italic'},
                  ]}>
                  I
                </Text>
              </Pressable>
              <Pressable>
                <Text
                  style={[
                    GLOBAL_STYLE.h2Bold,
                    {
                      fontSize: 14,
                      color: COLORS.grey4,
                      textDecorationLine: 'underline',
                    },
                  ]}>
                  U
                </Text>
              </Pressable>
              <Pressable>
                <Text
                  style={[
                    GLOBAL_STYLE.h2Bold,
                    {fontSize: 14, color: COLORS.grey4, fontWeight: 'bold'},
                  ]}>
                  h1
                </Text>
              </Pressable>
              <Pressable>
                <Text
                  style={[
                    GLOBAL_STYLE.h2Bold,
                    {fontSize: 14, color: COLORS.grey4, fontWeight: 'bold'},
                  ]}>
                  h2
                </Text>
              </Pressable>
              <Pressable>
                <Text
                  style={[
                    GLOBAL_STYLE.h2Bold,
                    {fontSize: 14, color: COLORS.grey4, fontWeight: 'bold'},
                  ]}>
                  h3
                </Text>
              </Pressable>
              <Pressable>
                <Text
                  style={[
                    GLOBAL_STYLE.h2Bold,
                    {fontSize: 14, color: COLORS.grey4, fontWeight: 'bold'},
                  ]}>
                  h4
                </Text>
              </Pressable>
            </View>
          </View>
        </View>

        <View
          style={{
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={[
              GLOBAL_STYLE.h2Bold,
              {fontSize: 14, color: COLORS.primaryBlue2},
            ]}>
            Send Via
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: '5%',
            marginTop: 30,
            justifyContent: 'space-between',
          }}>
          <Button
            borderRadius={10}
            width={'47%'}
            text={'Email'}
            fontSize={12}
            icon={images.email}
          />
          <Button
            borderRadius={10}
            width={'47%'}
            text={'Whatsapp'}
            fontSize={12}
            icon={images.whatsapp}
          />
        </View>

        <View style={{height: 30}}></View>
      </ScrollView>
    </View>
  );
};

export default Digital;
