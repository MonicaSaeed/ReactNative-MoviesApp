import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import Movies from '../screens/movies';
import MoviesDetails from '../screens/moviesDetails';
import routes from '../utils/routes';

const Stack = createStackNavigator();


const DynamicStackNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#1e1e1e',
                },
                headerTintColor: '#D7B7FF',
                headerTitleStyle: {
                    fontSize: 20,
                    fontWeight: 'bold',
                },
            }}
        >
            <Stack.Screen
                name={routes.movies}
                component={Movies}
                // hide the header
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={routes.movieDetails}
                component={MoviesDetails}
                options={{ title: 'Details' }}
            />
            </Stack.Navigator>
    );
}

const styles = StyleSheet.create({})

export default DynamicStackNavigation;
