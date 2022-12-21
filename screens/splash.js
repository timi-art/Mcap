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
import {CustomButton} from '../components';
import {
  ComputerIcon,
  OpenAccountIcon,
  DashboardIcon,
  KeystoneIcon,
} from '../constants/icons';
import MenuBox from '../components';
import {Redirect} from 'react-router-dom';
const Splash = ({navigation}) => {
  const [redirectNow, setRedirectNow] = useState(true);

  const slpash = () => {
    setRedirectNow(false);
    navigation.navigate('Login');
  };

  useEffect(() => {
    setTimeout(() => slpash(), 1000);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#002561',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <KeystoneIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonLogin: {
    borderRadius: 20,
    borderWidth: 1,
    paddingVertical: 3,
    borderColor: COLORS.lightBlue,
    width: SIZES.responsiveWidth('90%'),
    backgroundColor: COLORS.white,
    marginTop: '110%',
    marginHorizontal: 18,
  },
  buttonLogin2: {
    marginBottom: 5,
    borderRadius: 20,
    borderWidth: 1,
    paddingVertical: 3,
    borderColor: COLORS.lightBlue,
    width: SIZES.responsiveWidth('35%'),
  },
  buttonText: {
    color: COLORS.primaryBlue,
    fontWeight: 'bold',
  },
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
export default Splash;
