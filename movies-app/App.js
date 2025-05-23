import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './navigation/drawerNavigation';
import MoviesContextProvider from './context/moviesContextProvider';
import FavoritesContextProvider from './context/favoritesContextProvider';

export default function App() {
  return (
    <MoviesContextProvider>
      <FavoritesContextProvider>
        <NavigationContainer>
          <DrawerNavigation />
        </NavigationContainer>
      </FavoritesContextProvider>
    </MoviesContextProvider>
  );
}
