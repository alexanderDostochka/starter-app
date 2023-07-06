import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTE_LOGIN} from './routes';
import LoginScreen from '../screens/login/login.screen';

/* Create stack navigator */
const Stack = createNativeStackNavigator();

const Navigation = () => (
  <Stack.Navigator
    initialRouteName={ROUTE_LOGIN}
    screenOptions={{contentStyle: {backgroundColor: 'white'}}}>
    <Stack.Group screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTE_LOGIN} component={LoginScreen} />
    </Stack.Group>
  </Stack.Navigator>
);

export default Navigation;
