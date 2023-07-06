import {ScrollView, View} from 'react-native';
import {Button, MD2Colors, Text} from 'react-native-paper';
import styles from './home.styles';
import Logo from '../../assets/logo.svg';
import {words} from '../../constants/words';
import {useAuth0} from 'react-native-auth0';
import {useCallback, useState} from 'react';

const HomeScreen = () => {
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
            onPress={() => {}}>
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
