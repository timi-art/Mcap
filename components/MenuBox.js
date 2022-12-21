import { View, Text, TextInput, TouchableOpacity,Pressable, Image } from "react-native";
import React, { useState } from "react";
import {
    COLORS,
    FONTS,
    isAndroid,
    isIOS,
    SIZES,
    GLOBAL_STYLE,
    images,
  } from '../constants';
  import { ComputerIcon, OpenAccountIcon,DashboardIcon } from "../constants/icons";
const MenuBox = (props) => {

  return (
    <Pressable onPress={props.onPress} style={{width:'48%', height:100, 
    backgroundColor: COLORS.white,
    borderRadius:5, 
    alignItems:'center',
   justifyContent:'center'   
    }}>
    <Image source={props.icon} style={{height:30, width:30}}/>
    <Text style={[GLOBAL_STYLE.h2Bold, { textAlign: "center",fontSize:12,color:COLORS.primaryBlue, marginTop:10, fontWeight:'600' }]}>
                   {props.text}
                   </Text>
    </Pressable>
  );
};

export default MenuBox;
