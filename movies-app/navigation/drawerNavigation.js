import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import routes from "../utils/routes";
import Movies from "../screens/movies";
import Fav from "../screens/fav";
import { createStaticNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Image, View } from "react-native";
// static navigation is used to create a static navigation object that can be used to navigate between screens without using the react-navigation library
// const MyDrawer = createDrawerNavigator({
//     screens:{
//         [routes.movies]: Movies,
//         [routes.moviesFavorites]: Fav
//     }
// })
// const MyDrawer = createStaticNavigation();
const MyDrawer = createDrawerNavigator();
const CustomDrawerContent = (props) => {
    return (
        <DrawerContentScrollView {...props} contentContainerStyle = {{ flex: 1, backgroundColor: "#121212" }}>
            <View style={{ margin: 20, alignItems: "center", justifyContent: "center" }}>
                <Image source={require("../assets/background.png")} style={{ width: 100, height: 100, borderRadius: 50 }} />
            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}
const DrawerNavigation = () => {
    return (
        <MyDrawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                drawerType: "front",
                headerStyle: {
                    backgroundColor: '#1e1e1e',  
                },
                headerTintColor: '#D7B7FF',
                headerTitleStyle: {
                    fontSize: 20,
                    fontWeight: 'bold',
                },
                drawerStyle: {
                    backgroundColor: "#121212", 
                    width: 260,
                },
                drawerActiveBackgroundColor: "#1F1F1F", 
                drawerActiveTintColor: "#D7B7FF", 
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
