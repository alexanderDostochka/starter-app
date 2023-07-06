import {useCallback} from 'react';
import {ScrollView, View} from 'react-native';
import {Button} from 'react-native-paper';
import {useAuth0} from 'react-native-auth0';
import Logo from '../../assets/logo.svg';
import styles from './login.styles';
import {words} from '../../constants/words';

const LoginScreen = () => {
  const {authorize} = useAuth0();

  const onLogin = useCallback(async () => {
    try {
      await authorize();
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <Logo style={styles.logo} />
        <Button style={styles.loginButton} mode="contained" onPress={onLogin}>
          {words.login}
        </Button>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
