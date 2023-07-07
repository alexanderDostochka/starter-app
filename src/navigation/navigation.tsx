import {useAuth0} from 'react-native-auth0/';
import {MD2Colors} from 'react-native-paper';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTE_HOME, ROUTE_LOGIN, ROUTE_MAP, ROUTE_URQL} from './routes';
import LoginScreen from '../screens/login/login.screen';
import GlobalLoader from '../components/globalLoader/globalLoader.component';
import {RootStackParamList} from './navigation.types';

import HomeScreen from '../screens/home/home.screen';
import MapScreen from '../screens/map/map.screen';
import UrqlScreen from '../screens/urql/urql.screen';

/* Create stack navigator */
const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  const {user, isLoading} = useAuth0();

  /* Check auth status */
  const loggedIn = user !== undefined && user !== null;

  if (isLoading) return <GlobalLoader />;

  return (
    <Stack.Navigator
      initialRouteName={ROUTE_LOGIN}
      screenOptions={{
        contentStyle: {backgroundColor: 'white'},
        animation: 'none',
      }}>
      {loggedIn ? (
        <Stack.Group
          screenOptions={{
            statusBarColor: 'transparent',
            statusBarStyle: 'light',
            headerTintColor: 'white',
            statusBarTranslucent: true,
            headerTitleAlign: 'center',
            headerTitleStyle: {color: 'white'},
            headerStyle: {backgroundColor: MD2Colors.grey800},
          }}>
          <Stack.Screen
            name={ROUTE_HOME}
            component={HomeScreen}
            options={{contentStyle: {paddingLeft: 20, paddingRight: 20}}}
          />
          <Stack.Screen name={ROUTE_URQL} component={UrqlScreen} />
          <Stack.Screen name={ROUTE_MAP} component={MapScreen} />
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
