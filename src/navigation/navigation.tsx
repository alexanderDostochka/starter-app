import {useAuth0} from 'react-native-auth0/';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTE_HOME, ROUTE_LOGIN} from './routes';
import LoginScreen from '../screens/login/login.screen';
import GlobalLoader from '../components/globalLoader/globalLoader.component';

import HomeScreen from '../screens/home/home.screen';

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
        <Stack.Group>
          <Stack.Screen name={ROUTE_HOME} component={HomeScreen} />
        </Stack.Group>
      ) : (
        <Stack.Group screenOptions={{headerShown: false}}>
          <Stack.Screen name={ROUTE_LOGIN} component={LoginScreen} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};

export default Navigation;
