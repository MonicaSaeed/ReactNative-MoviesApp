import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';
import routes from '../utils/routes';
import DateFormate from './dateFormate';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import storage from '../storage/localStorageFav';
import { useContext } from 'react';
import { FavoritesContext } from '../context/favoritesContextProvider';

const MyCard = ({movie}) => {
    const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    const navigate =  useNavigation();
    const { favoriteMovieIds, addFavorite, removeFavorite } = useContext(FavoritesContext);

    const isFav = favoriteMovieIds.includes(movie.id);
    const toggleFavorite = () => {
  if (isFav) {
    removeFavorite(movie.id);
  } else {
    addFavorite(movie.id); // Only store the ID
  }   
}

    return (
        <Card style={styles.card}>
            <View style={{ position: 'relative' }}>
                <Card.Cover source={{ uri: imageUrl }} style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
                <MaterialCommunityIcons
                    name={isFav ? "heart" : "heart-outline"}
                    size={30}
                    color="#F60002"
                    style={{ position: 'absolute', top: 10, right: 10 }}
                    onPress={toggleFavorite}
                />
            </View>
            <Card.Content>
                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.title} variant="titleLarge">
                        {movie.title}
                    </Text>
                    <DateFormate date={movie.release_date}  />
                </View>
            </Card.Content>
            <Card.Actions>
                <Button onPress={() => navigate.navigate(routes.movieDetails, { movie })} mode="contained" buttonColor="#D7B7FF" textColor="#1e1e1e"
                style={{ borderRadius: 10, margin: 10, backgroundColor: '#D7B7FF' }}>
                    <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Details</Text>
                </Button>
            </Card.Actions>
        </Card>
    );
}

const styles = StyleSheet.create({
    card: {
        margin: 10,
        backgroundColor: '#1e1e1e',
        borderWidth: 1,
        borderRadius: 10,
    },
    originalTitle: {
        fontSize: 14,
        color: '#D7B7FF',
        marginBottom: 10,
        textAlign: 'center',
    },
    date: {
        fontSize: 14,
        color: '#D7B7FF',
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#D7B7FF',
        marginBottom: 10,
        marginTop: 10,
    },
});

export default MyCard;
