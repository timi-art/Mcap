import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS} from '../constants';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

const TextPut = props => {
  const [focus, setFocus] = useState(false);

  return (
    <View
      style={{
        width: '100%',
        height: 45,
        backgroundColor: props.backgroundColor
          ? props.backgroundColor
          : '#FFFFFF',
        borderRadius: props.borderRadius ? props.borderRadius : 15,
        borderColor: COLORS.primaryBlue2,
        borderWidth: 0.4,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: '3%',
        justifyContent: 'space-between',
      }}>
      <TextInput
        placeholder={props.placeholder}
        placeholderTextColor={'#C4C4C4'}
        style={{width: '85%', fontSize: 12}}
        secureTextEntry={focus == true ? true : false}
      />
      {props.user ? (
        <View
          style={{
            height: '100%',
            width: '10%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Feather name="user" size={15} color={COLORS.grey2} />
        </View>
      ) : null}
      {props.calendar ? (
        <View
          style={{
            height: '100%',
            width: '10%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <AntDesign name="calendar" size={15} color={COLORS.primaryBlue} />
        </View>
      ) : null}

      {props.check ? (
        <View
          style={{
            height: '100%',
            width: '10%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <AntDesign name="checkcircleo" size={15} color={COLORS.green} />
        </View>
      ) : null}

      {props.password ? (
        <TouchableOpacity
          onPress={() => setFocus(!focus)}
          style={{
            height: '100%',
            width: '10%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {focus == true ? (
            <Feather name="eye" size={15} color={COLORS.grey2} />
          ) : (
            <Feather name="eye-off" size={15} color={COLORS.grey2} />
          )}
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default TextPut;
