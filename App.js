import * as React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';

import Splash from './screens/splash';
import Login from './screens/Login';
import Accts from './screens/Accts';
import Digital from './screens/Digital';
import Dashboard from './screens/RefferAFriend';
import OpenAccountWithBVN from './screens/OpenAccWithBVN';
import Collections from './screens/Collections';
import NQR from './screens/NQR';
import ProductValue from './screens/ProductValue';
import Echannel from './screens/Echannel';
import OpenAccountWithBVN2 from './screens/OpenAccWithBVN2';
import OpenAccountWithBVN3 from './screens/OpenAccWithBVN3';
import OpenAccountWithBVN4 from './screens/OpenAccWithBVN4';
import AccountSummary from './screens/AccountSummary';
import ShareSummary from './screens/ShareSummary';
import WithoutBVN from './screens/WithoutBVN';
import WithoutBVN2 from './screens/WithoutBVN2';
import WithoutBVN3 from './screens/WithoutBVN3';
import WithoutBVN4 from './screens/WithoutBVN4';
import AccountReactivation1 from './screens/AccountReactivation1';
import AccountReactivation2 from './screens/AccountReactivation2';
import AccountReactivation3 from './screens/AccountReactivation3';
import AccountReactivation4 from './screens/AccountReactivation4';
import RefferAFriend from './screens/RefferAFriend';
import Pos from './screens/Pos';
import AccountOpening from './screens/AccountOpening';
import AccountOpening2 from './screens/AccountOpening2';
const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Accts"
          component={Accts}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Digital"
          component={Digital}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RefferAFriend"
          component={RefferAFriend}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OpenAccountWithBVN"
          component={OpenAccountWithBVN}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OpenAccountWithBVN2"
          component={OpenAccountWithBVN2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OpenAccountWithBVN3"
          component={OpenAccountWithBVN3}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OpenAccountWithBVN4"
          component={OpenAccountWithBVN4}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AccountSummary"
          component={AccountSummary}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ShareSummary"
          component={ShareSummary}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="WithoutBVN"
          component={WithoutBVN}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="WithoutBVN2"
          component={WithoutBVN2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="WithoutBVN3"
          component={WithoutBVN3}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="WithoutBVN4"
          component={WithoutBVN4}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AccountReactivation1"
          component={AccountReactivation1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AccountReactivation2"
          component={AccountReactivation2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AccountReactivation3"
          component={AccountReactivation3}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AccountReactivation4"
          component={AccountReactivation4}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Collections"
          component={Collections}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NQR"
          component={NQR}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProductValue"
          component={ProductValue}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Echannel"
          component={Echannel}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Pos"
          component={Pos}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AccountOpening"
          component={AccountOpening}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AccountOpening2"
          component={AccountOpening2}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
