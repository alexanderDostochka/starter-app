import {FC, memo} from 'react';
import styles from './errorScreen.styles';
import {Text, MD2Colors} from 'react-native-paper';
import {View} from 'react-native';

interface IErrorScreenProps {
  message: string;
  color?: string;
}

const ErrorScreen: FC<IErrorScreenProps> = ({
  message,
  color = MD2Colors.black,
}) => (
  <View style={styles.errorContainer}>
    <Text variant="bodyLarge" style={{...styles.centerText, color}}>
      {message}
    </Text>
  </View>
);

export default memo(ErrorScreen);
