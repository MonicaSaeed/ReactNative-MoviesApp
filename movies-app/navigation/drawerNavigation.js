import { createDrawerNavigator } from "@react-navigation/drawer";
import routes from "../utils/routes";
import Movies from "../screens/movies";
import Fav from "../screens/fav";
import { createStaticNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// static navigation is used to create a static navigation object that can be used to navigate between screens without using the react-navigation library
// const MyDrawer = createDrawerNavigator({
//     screens:{
//         [routes.movies]: Movies,
//         [routes.moviesFavorites]: Fav
//     }
// })
// const MyDrawer = createStaticNavigation();
const MyDrawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <MyDrawer.Navigator
            screenOptions={{
                drawerType: "front",
                headerStyle: {
                    backgroundColor: '#1e1e1e',  
                },
                headerTintColor: '#ffffff',
                headerTitleStyle: {
                    fontSize: 20,
                    fontWeight: 'bold',
                },
                drawerStyle: {
                    backgroundColor: "#121212", 
                    width: 260,
                },
                drawerActiveBackgroundColor: "#1F1F1F", 
                drawerActiveTintColor: "#BB86FC", 
                drawerInactiveTintColor: "#CCCCCC", 
                drawerLabelStyle: {
                    fontSize: 15,
                },
                drawerItemStyle: {
                    marginVertical: 6,
                    borderRadius: 12,
                    paddingHorizontal: 10,
                },
                }}
            initialRouteName={routes.movies}
        >
            <MyDrawer.Screen 
            name={routes.movies} component={Movies}  
            options={{
                drawerLabel: "Movies", 
                drawerIcon: ({ color }) => (
                    <MaterialCommunityIcons name="movie" color={color} size={24} />
                ),
            }}
            />
            <MyDrawer.Screen 
            name={routes.moviesFavorites} component={Fav} 
            options={{
                drawerLabel: "Favorites", 
                drawerIcon: ({ color }) => (
                    <MaterialCommunityIcons name="heart" color={color} size={24} />
                ),
            }}
            />
        </MyDrawer.Navigator>
        
    );
}

export default DrawerNavigation;
