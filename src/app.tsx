import {NavigationContainer} from '@react-navigation/native';
import {PaperProvider} from 'react-native-paper';
import Navigation from './navigation/navigation';

const App = () => (
  <NavigationContainer>
    <PaperProvider>
      <Navigation />
    </PaperProvider>
  </NavigationContainer>
);

export default App;
