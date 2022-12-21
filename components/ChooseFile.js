import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {
  COLORS,
  FONTS,
  isAndroid,
  isIOS,
  SIZES,
  GLOBAL_STYLE,
} from '../constants';

const ChooseFile = props => {
  return (
    <View
      style={{
        paddingVertical: 5,
        justifyContent: 'center',
        paddingHorizontal: '5%',
        marginTop: props.marginTop ? props.marginTop : 20,
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
        {props.label}
      </Text>
      <View
        style={{
          height: 50,
          width: '100%',
          borderWidth: 1,
          borderColor: COLORS.grey4,
          borderStyle: 'dashed',
          borderRadius: 5,
          paddingHorizontal: '5%',
          paddingVertical: 10,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Pressable
          style={{
            width: '45%',
            borderWidth: 0.5,
            borderColor: COLORS.lightBlue,
            height: '100%',
            backgroundColor: COLORS.grey,
            borderRadius: 6,
            justifyContent: 'center',
          }}>
          <Text
            style={[
              GLOBAL_STYLE.h2Bold,
              {
                textAlign: 'center',
                fontSize: 12,
                color: COLORS.grey4,
              },
            ]}>
            Choose file
          </Text>
        </Pressable>
        <Pressable
          style={{
            width: '45%',
            height: '100%',
            borderRadius: 6,
            justifyContent: 'center',
          }}>
          <Text
            style={[
              GLOBAL_STYLE.h2Bold,
              {
                textAlign: 'center',
                fontSize: 12,
                color: COLORS.grey4,
              },
            ]}>
            No file chosen
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ChooseFile;
