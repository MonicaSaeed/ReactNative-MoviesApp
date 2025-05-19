import React, { useContext } from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import MoviesContextProvider, { moviesContext } from '../context/moviesContextProvider';

const Movies = () => {
    const {movies} = useContext(moviesContext);
    if (!movies) {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
        );
    }
    return (
        <ScrollView style={styles.container}>
            {movies.map((movie) => (
                <View key={movie.id} style={{ margin: 10 }}>
                    <Text style={{ fontSize: 20 }}>{movie.title}</Text>
                    <Text>{movie.release_date}</Text>
                    <Image
                        source={{ uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}` }}
                        style={{ width: 100, height: 150 }}
                    />
                </View>
            ))}
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 20,
    },
    movieCard: {
        margin: 10,
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 5,
    },
    movieTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    movieReleaseDate: {
        fontSize: 16,
        color: '#555',
    },

    
});
export default Movies;
