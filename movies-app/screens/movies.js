import React, { useContext, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { moviesContext } from '../context/moviesContextProvider';
import MyCard from '../components/myCard';
import { ActivityIndicator } from 'react-native-paper';

const Movies = () => {
    const { popularMovies, topRatedMovies, upcomingMovies } = useContext(moviesContext);
    const movies = [...popularMovies, ...topRatedMovies, ...upcomingMovies];

    return (
        <FlatList
            style={styles.container}
            data={movies}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <View style={styles.movieCard}>
                    <MyCard movie={item} />
                </View>
            )}
            ListEmptyComponent={() => (
                <ActivityIndicator size={50} color="#BB86FC" style={styles.loadingstyle} />
            )}

        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#343434',
        paddingTop: 20,
    },
    movieCard: {
        marginHorizontal: 10,
        marginVertical: 5,
    },
    loadingstyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
});

export default Movies;
