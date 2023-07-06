import {View} from 'react-native';
import Mapbox from '@rnmapbox/maps';
import {MAPBOX_ACCESS_TOKEN} from '../../constants/mapbox';
import styles from './map.styles';

Mapbox.setAccessToken(MAPBOX_ACCESS_TOKEN);

const MapScreen = () => {
  const kyivCoordinate = [30.5326905, 50.4020355];

  return (
    <View style={styles.flex}>
      <Mapbox.MapView style={styles.flex}>
        <Mapbox.Camera zoomLevel={10} centerCoordinate={kyivCoordinate} />
      </Mapbox.MapView>
    </View>
  );
};

export default MapScreen;
