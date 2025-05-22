import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const MyCardFav = ({ movie }) => {
    return (
        <View style={styles.card}>
            <Image
                source={{ uri: `https://image.tmdb.org/t/p/w200${movie.poster_path}` }}
                style={styles.poster}
                resizeMode="contain"
                onError={() => console.log('Image load failed for:', movie.title)}
            />
            <View style={styles.info}>
                <Text style={styles.title} numberOfLines={1}>{movie.title}</Text>
                <Text style={styles.date}>
                    {movie.release_date ? `Release: ${movie.release_date}` : 'Release date not available'}
                </Text>
                <Text style={styles.rating}>
                    Rating: {movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: '#2e2e2e',
        borderRadius: 10,
        marginBottom: 10,
        alignItems: 'center',
        overflow: 'hidden'
    },
    poster: {
        width: 80,
        height: 120,
        backgroundColor: '#3e3e3e'
    },
    info: {
        padding: 10,
        flex: 1
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    },
    date: {
        fontSize: 14,
        color: '#ccc',
        marginTop: 5
    },
    rating: {
        fontSize: 14,
        color: '#D7B7FF',
        marginTop: 5
    }
});

export default MyCardFav;
