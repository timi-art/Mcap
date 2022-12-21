import {Dimensions, Platform, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');
import {
  widthPercentageToDP as responsiveWidth,
  heightPercentageToDP as responsiveHeight,
} from 'react-native-responsive-screen';

export const COLORS = {
  primaryBlue: '#0056A3',
  primaryBlue2: '#4EABE9',
  secondaryBlue: '#BDE4FE',
  secondaryBlue2: '#D7EFFF',
  secondaryBlue3: '#77869E',
  lightBlue: 'rgba(0, 86, 163, 0.2)',
  navyBlue: '#002561',
  primaryGreen: '#1EBD71',
  primaryYellow: '#FFDD67',
  primaryYellow2: '#FF9F29',
  white: '#FFFFFF',
  grey: 'rgba(0, 0, 0, 0.02)',
  grey2: 'rgba(30, 31, 32, 0.7)',
  grey3: '#636F82',
  grey4: 'rgba(30, 31, 32, 0.5)',
  danger: '#FF0000',
  error: '#ff0033',
  red: '#F51212',
  green: '#33AB3F',
  lemon: '#0AF321',
};

export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';

export const SIZES = {
  height,
  width,
  responsiveHeight,
  responsiveWidth,
};

const globalstyle = StyleSheet.create({
  customFont: {
    fontFamily: 'Poppins_400Regular',
  },
  customFontBold: {
    fontFamily: 'Poppins_500Medium',
    // fontFamily: 'Poppins_700Bold'
  },
  background: {
    backgroundColor: COLORS.white,
    flex: 1,
    paddingHorizontal: '5%',
  },
  backgroundNoPadding: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  scrollStyle: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingHorizontal: '5%',
  },
  scrollStyleNoPadding: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  rowBetween: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowAround: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  columnAround: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  columnBetween: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  iconBg: {
    width: 40,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  formError: {
    color: 'red',
    fontSize: 10,
  },
  h0Bold: {
    // fontSize: 20,
    fontSize: SIZES.responsiveHeight('5%'),
    fontFamily: 'Poppins_500Medium',
    color: COLORS.primaryBlue,
  },
  h1Bold: {
    // fontSize: 20,
    fontSize: SIZES.responsiveHeight('3%'),
    fontFamily: 'Poppins_500Medium',
    color: COLORS.primaryBlue,
  },
  h2Bold: {
    // fontSize: 16,
    fontSize: SIZES.responsiveHeight('2.2%'),
    fontFamily: 'Poppins_500Medium',
    color: COLORS.primaryBlue,
  },
  h3Bold: {
    // fontSize: 14,
    fontSize: SIZES.responsiveHeight('2.0%'),
    fontFamily: 'Poppins_500Medium',
    color: COLORS.primaryBlue,
  },
  h4Bold: {
    fontSize: SIZES.responsiveHeight('1.7%'),
    fontFamily: 'Poppins_500Medium',
    color: COLORS.primaryBlue,
  },
  h5Bold: {
    // fontSize: 10,
    fontSize: SIZES.responsiveHeight('1.5%'),
    fontFamily: 'Poppins_500Medium',
    color: COLORS.primaryBlue,
  },
  h6Bold: {
    // fontSize: 10,
    fontSize: SIZES.responsiveHeight('1.3%'),
    fontFamily: 'Poppins_500Medium',
    color: COLORS.primaryBlue,
  },
  h0: {
    // fontSize: 20,
    fontSize: SIZES.responsiveHeight('5%'),
    fontFamily: 'Poppins_400Regular',
    color: COLORS.primaryBlue,
  },
  h1: {
    // fontSize: 20,
    fontSize: SIZES.responsiveHeight('3%'),
    fontFamily: 'Poppins_400Regular',
    color: COLORS.primaryBlue,
  },
  h2: {
    // fontSize: 16,
    fontSize: SIZES.responsiveHeight('2.2%'),
    fontFamily: 'Poppins_400Regular',
    color: COLORS.primaryBlue,
  },
  h3: {
    // fontSize: 14,
    fontSize: SIZES.responsiveHeight('2.0%'),
    fontFamily: 'Poppins_400Regular',
    color: COLORS.primaryBlue,
  },
  h4: {
    fontSize: SIZES.responsiveHeight('1.7%'),
    fontFamily: 'Poppins_400Regular',
    color: COLORS.primaryBlue,
  },
  h5: {
    fontSize: SIZES.responsiveHeight('1.5%'),
    fontFamily: 'Poppins_400Regular',
    color: COLORS.primaryBlue,
  },
  h6: {
    fontSize: SIZES.responsiveHeight('1.3%'),
    fontFamily: 'Poppins_400Regular',
    color: COLORS.primaryBlue,
  },
  dropDownItem: {
    fontSize: SIZES.responsiveHeight('2.0%'),
    fontFamily: 'Poppins_400Regular',
    color: COLORS.primaryBlue,
    color: COLORS.primaryBlue,
    paddingVertical: 15,
    marginLeft: 15,
  },
});
export const FONTS = {
  normal: globalstyle.customFont.fontFamily,
  bold: globalstyle.customFontBold.fontFamily,
};

export const GLOBAL_STYLE = {
  background: globalstyle.background,
  backgroundNoPadding: globalstyle.backgroundNoPadding,
  scrollViewGlobal: globalstyle.scrollStyle,
  scrollViewGlobalNopadding: globalstyle.scrollStyleNoPadding,
  rowBetween: globalstyle.rowBetween,
  rowAround: globalstyle.rowAround,
  columnBetween: globalstyle.columnBetween,
  columnAround: globalstyle.columnAround,
  textError: globalstyle.formError,
  iconBg: globalstyle.iconBg,
  dropDownItem: globalstyle.dropDownItem,
  h0: globalstyle.h0,
  h1: globalstyle.h1,
  h2: globalstyle.h2,
  h3: globalstyle.h3,
  h4: globalstyle.h4,
  h5: globalstyle.h5,
  h6: globalstyle.h6,
  h0Bold: globalstyle.h0Bold,
  h1Bold: globalstyle.h1Bold,
  h2Bold: globalstyle.h2Bold,
  h3Bold: globalstyle.h3Bold,
  h4Bold: globalstyle.h4Bold,
  h5Bold: globalstyle.h5Bold,
  h6Bold: globalstyle.h6Bold,
};
const appTheme = {
  COLORS,
  SIZES,
  isIOS,
  isAndroid,
  FONTS,
  isAndroid,
  isIOS,
  GLOBAL_STYLE,
};

export default appTheme;
