import {
  View,
  Text,
  StyleSheet,
  ScrollView,
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
import {ComputerIcon, OpenAccountIcon, DashboardIcon} from '../constants/icons';
import MenuBox from '../components/MenuBox';
import Modal from 'react-native-modal';
import Button from '../components/Button';

const Home = ({navigation}) => {
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);

  return (
    <View style={{flex: 1}}>
      <ImageBackground source={images.home} style={styles.backgroundImg}>
        <ScrollView style={{flexGrow: 1}}>
          <View
            style={{
              color: 'white',
              paddingVertical: 25,
              width: SIZES.responsiveWidth('80%'),
              marginBottom: 10,
              justifyContent: 'space-around',
              alignItems: 'flex-start',
              flexDirection: 'row',
            }}>
            <DashboardIcon />
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
              Customer Activation Portal
            </Text>
          </View>
          <View
            style={{
              color: 'white',
              paddingVertical: 5,
              width: SIZES.responsiveWidth('85%'),
              marginBottom: 15,
              justifyContent: 'center',
              alignItems: 'flex-start',
              marginHorizontal: 20,
              marginTop: '-6%',
            }}>
            <Text
              style={[
                GLOBAL_STYLE.h2Bold,
                {
                  textAlign: 'center',
                  fontSize: 16,
                  color: COLORS.white,
                  fontWeight: 'bold',
                },
              ]}>
              Welcome back Elizabeth!
            </Text>
          </View>
          <Pressable
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: COLORS.white,
              color: 'white',
              paddingVertical: 20,
              paddingHorizontal: 25,
              width: SIZES.responsiveWidth('90%'),
              marginBottom: 10,
              borderRadius: 7,
              marginHorizontal: 18,
              justifyContent: 'space-around',
              alignItems: 'center',
              flexDirection: 'row',
            }}
            onPress={() => navigation.navigate('Accts')}>
            <ComputerIcon />
            <Text
              style={[
                GLOBAL_STYLE.h2Bold,
                {textAlign: 'center', fontSize: 18, color: COLORS.primaryBlue},
              ]}>
              Performance Dashboard
            </Text>
          </Pressable>

          <View
            style={{
              paddingHorizontal: '5%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <MenuBox
              onPress={() => setModal(true)}
              text={'Open Account'}
              icon={images.house}
            />
            <MenuBox
              onPress={() => navigation.navigate('AccountReactivation1')}
              text={'Reactivate Account'}
              icon={images.funnel}
            />
          </View>
          <View
            style={{
              paddingHorizontal: '5%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <MenuBox
              onPress={() => navigation.navigate('Collections')}
              text={'Collections'}
              icon={images.collection}
            />
            <MenuBox
              onPress={() => navigation.navigate('Echannel')}
              text={'E-channel Onboarding'}
              icon={images.health}
            />
          </View>
          <View
            style={{
              paddingHorizontal: '5%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <MenuBox
              onPress={() => navigation.navigate('ProductValue')}
              text={'Product Value Proposition'}
              icon={images.collection}
            />
            <MenuBox
              onPress={() => navigation.navigate('Digital')}
              text={'Digital Marketing'}
              icon={images.card}
            />
          </View>

          <CustomButton
            buttonText="Refer A Friend"
            buttonContainerStyle={styles.buttonLogin}
            buttonTextStyle={styles.buttonText}
            onPress={() => setModal2(true)}
          />
        </ScrollView>
      </ImageBackground>
      <Modal
        isVisible={modal}
        onBackButtonPress={() => setModal(false)}
        onBackdropPress={() => setModal(false)}
        backdropColor={'#4EABE9aa'}>
        <View
          style={{
            paddingVertical: 25,
            backgroundColor: COLORS.white,
            borderRadius: 10,
            paddingHorizontal: '5%',
          }}>
          <Text
            style={[
              GLOBAL_STYLE.h2Bold,
              {
                textAlign: 'center',
                fontSize: 20,
                color: COLORS.primaryBlue,
                fontWeight: '600',
              },
            ]}>
            Open new Account
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Button
              onPress={() => navigation.navigate('OpenAccountWithBVN')}
              borderRadius={20}
              width={'45%'}
              marginTop={20}
              text={'With BVN'}
              fontSize={12}
              backgroundColor={COLORS.white}
              color={COLORS.primaryBlue}></Button>
            <Button
              onPress={() => navigation.navigate('WithoutBVN')}
              borderRadius={20}
              width={'45%'}
              marginTop={20}
              text={'Without BVN'}
              fontSize={12}></Button>
          </View>
        </View>
      </Modal>
      <Modal
        isVisible={modal2}
        onBackButtonPress={() => setModal2(false)}
        onBackdropPress={() => setModal2(false)}
        backdropColor={'#4EABE9aa'}>
        <View
          style={{
            paddingVertical: 25,
            backgroundColor: COLORS.white,
            borderRadius: 10,
            paddingHorizontal: '5%',
          }}>
          <Text
            style={[
              GLOBAL_STYLE.h2Bold,
              {
                textAlign: 'center',
                fontSize: 20,
                color: COLORS.primaryBlue,
                fontWeight: '600',
              },
            ]}>
            Refer a Friend
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Button
              onPress={() => navigation.navigate('RefferAFriend')}
              borderRadius={20}
              width={'45%'}
              marginTop={20}
              text={'With Gift'}
              fontSize={12}
              backgroundColor={COLORS.white}
              color={COLORS.primaryBlue}></Button>
            <Button
              onPress={() => setModal2(false)}
              borderRadius={20}
              width={'45%'}
              marginTop={20}
              text={'Without Gift'}
              fontSize={12}></Button>
          </View>
        </View>
      </Modal>
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
    marginTop: '25%',
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
export default Home;
