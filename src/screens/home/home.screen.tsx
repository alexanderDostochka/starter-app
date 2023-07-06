import {ScrollView, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Button, MD2Colors, Text} from 'react-native-paper';
import styles from './home.styles';
import Logo from '../../assets/logo.svg';
import {words} from '../../constants/words';
import {useAuth0} from 'react-native-auth0';
import {useCallback, useState} from 'react';
import {ROUTE_MAP} from '../../navigation/routes';
import {HomeScreenNavigationProp} from '../../navigation/navigation.types';

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const {user, clearSession} = useAuth0();
  const [loader, setLoader] = useState<boolean>(false);

  const onLogout = useCallback(async () => {
    try {
      setLoader(true);
      await clearSession();
    } catch (e) {
      console.log('Log out cancelled');
    } finally {
      setLoader(false);
    }
  }, []);

  const gotoMapScreen = useCallback(() => {
    navigation.navigate(ROUTE_MAP);
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <Logo style={styles.logo} />
        <Text style={styles.statusText}>
          {words.loggedIdAs}
          <Text style={styles.boldText}>{user.name}</Text>
        </Text>
        <View style={styles.buttonGroup}>
          <Button
            disabled={loader}
            style={styles.button}
            mode="contained"
            buttonColor={MD2Colors.grey800}
            onPress={gotoMapScreen}>
            {words.map}
          </Button>
          <Button
            disabled={loader}
            style={styles.button}
            mode="contained"
            buttonColor={MD2Colors.grey800}>
            {words.urql}
          </Button>
        </View>
        <Button
          loading={loader}
          disabled={loader}
          onPress={onLogout}
          style={styles.button}
          mode="contained"
          buttonColor={MD2Colors.red400}>
          {words.logout}
        </Button>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
