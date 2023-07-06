import {useCallback} from 'react';
import {ScrollView, View} from 'react-native';
import {Button} from 'react-native-paper';
import Logo from '../../assets/logo.svg';
import styles from './login.styles';
import {words} from '../../constants/words';

const LoginScreen = () => {
  const onLogin = useCallback(() => {
    console.log('Press button');
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
