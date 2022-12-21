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

const Button = props => {
  return (
    <Pressable
      onPress={props.onPress}
      style={{
        width: props.width ? props.width : '100%',
        height: 45,
        backgroundColor: props.backgroundColor
          ? props.backgroundColor
          : COLORS.primaryBlue,
        borderRadius: props.borderRadius,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: props.marginTop,
        borderWidth: 0.5,
        borderColor: COLORS.primaryBlue2,
        shadowColor: '#171717',
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
      }}>
      {props.icon ? (
        <Image
          source={props.icon}
          style={{height: 25, width: 25, marginRight: 10}}
        />
      ) : null}

      <Text
        style={[
          GLOBAL_STYLE.h2Bold,
          {
            textAlign: 'center',
            fontSize: props.fontSize ? props.fontSize : 14,
            color: props.color ? props.color : COLORS.white,
            textDecorationLine: props.underline ? 'underline' : null,
          },
        ]}>
        {props.text}
      </Text>
    </Pressable>
  );
};

export default Button;
