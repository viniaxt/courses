import {
  createAppContainer,
  createSwitchNavigator,
  createDrawerNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation';

import Login from './pages/Login';
import Main from './pages/Main';

// createAppContainer precisa ficar em volta de toda a navegação da aplicação
// createSwitchNavigator

export default createAppContainer(
  createSwitchNavigator({
    Login,
    Main,
  })
);
