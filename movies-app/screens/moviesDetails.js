import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';
import DateFormate from '../components/dateFormate';

const { width } = Dimensions.get('window');

const MoviesDetails = ({ route }) => {
    const { movie } = route.params;

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.card}>
                <Image
                    source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
                    style={styles.poster}
                />
                <Text style={styles.title}>{movie.title}</Text>
                <Text style={styles.originalTitle}>({movie.original_title})</Text>

                <View style={styles.infoContainer}>
                    {/* <Text style={styles.infoText}>📅 {formatDate(movie.release_date)}</Text> */}
                    <Text style={styles.infoText}>🌐 {movie.original_language.toUpperCase()}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.infoText}>📅 </Text>
                        <DateFormate date={movie.release_date} />
                    </View>
                    <Text style={styles.infoText}>⭐ {movie.vote_average} / 10</Text>
                </View>

                <Text style={styles.sectionTitle}>Overview</Text>
                <Text style={styles.overview}>{movie.overview}</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#121212',
    },
    card: {
        margin: 10,
        backgroundColor: '#1e1e1e',
        borderWidth: 1,
        borderColor: '#333',
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
    },
    poster: {
        width: width * 0.8,
        height: width * 1.2,
        borderRadius: 12,
        marginBottom: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#D7B7FF',
        textAlign: 'center',
    },
    originalTitle: {
        fontSize: 14,
        color: '#AAAAAA',
        fontStyle: 'italic',
        marginBottom: 15,
        textAlign: 'center',
    },
    infoContainer: {
        width: '100%',
        paddingHorizontal: 20,
        marginBottom: 15,
    },
    infoText: {
        fontSize: 14,
        color: '#D7B7FF',
        marginBottom: 4,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#D7B7FF',
        alignSelf: 'flex-start',
        marginBottom: 6,
        marginTop: 10,
    },
    overview: {
        fontSize: 14,
        color: '#CCCCCC',
        lineHeight: 22,
        textAlign: 'justify',
    },
});

export default MoviesDetails;
