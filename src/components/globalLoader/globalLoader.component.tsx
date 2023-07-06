import {ActivityIndicator, MD2Colors} from 'react-native-paper';
import {View} from 'react-native';
import {memo} from 'react';
import styles from './globalLoader.styles';

const GlobalLoader = () => (
  <View style={styles.container}>
    <ActivityIndicator animating={true} color={MD2Colors.blue500} />
  </View>
);

export default memo(GlobalLoader);
