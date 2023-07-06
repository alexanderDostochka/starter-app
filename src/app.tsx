import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'urql';
import {PaperProvider} from 'react-native-paper';
import Navigation from './navigation/navigation';
import {Auth0Provider} from 'react-native-auth0';
import {AUTHO_CLIENT_ID, AUTHO_DOMAIN} from './constants/auth0';
import {urqlClient} from './urql/client';

const App = () => (
  <Provider value={urqlClient}>
    <NavigationContainer>
      <Auth0Provider domain={AUTHO_DOMAIN} clientId={AUTHO_CLIENT_ID}>
        <PaperProvider>
          <Navigation />
        </PaperProvider>
      </Auth0Provider>
    </NavigationContainer>
  </Provider>
);

export default App;
