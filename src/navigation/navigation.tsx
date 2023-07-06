import {useAuth0} from 'react-native-auth0/';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTE_HOME, ROUTE_LOGIN} from './routes';
import LoginScreen from '../screens/login/login.screen';
import GlobalLoader from '../components/globalLoader/globalLoader.component';

import HomeScreen from '../screens/home/home.screen';
import {MD2Colors} from 'react-native-paper';

/* Create stack navigator */
const Stack = createNativeStackNavigator();

const Navigation = () => {
  const {user, isLoading} = useAuth0();

  /* Check auth status */
  const loggedIn = user !== undefined && user !== null;

  if (isLoading) return <GlobalLoader />;

  return (
    <Stack.Navigator
      initialRouteName={ROUTE_LOGIN}
      screenOptions={{contentStyle: {backgroundColor: 'white'}}}>
      {loggedIn ? (
        <Stack.Group
          screenOptions={{
            contentStyle: {paddingLeft: 20, paddingRight: 20},
            statusBarColor: 'transparent',
            statusBarStyle: 'light',
            statusBarTranslucent: true,
            headerTitleAlign: 'center',
            headerTitleStyle: {color: 'white'},
            headerStyle: {backgroundColor: MD2Colors.grey800},
          }}>
          <Stack.Screen name={ROUTE_HOME} component={HomeScreen} />
        </Stack.Group>
      ) : (
        <Stack.Group
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name={ROUTE_LOGIN} component={LoginScreen} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};

export default Navigation;
