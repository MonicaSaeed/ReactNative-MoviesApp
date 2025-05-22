import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, Button, ActivityIndicator } from 'react-native';
import { FavoritesContext } from '../context/favoritesContextProvider';
import { API_KEY } from '../env/myEnv';
import MyCardFav from '../components/myCardFav';
const Fav = () => {
    const { favoriteMovieIds, favoritesChanged } = useContext(FavoritesContext);
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [refreshing, setRefreshing] = useState(false);

    // Fetch movies when favorites change
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);
                if (favoriteMovieIds?.length > 0) {
                    await fetchMovies(favoriteMovieIds);
                } else {
                    setMovies([]);
                }
            } catch (err) {
                console.error('Failed to load favorites:', err);
                setError('Failed to load favorites');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [favoriteMovieIds, favoritesChanged]);

    const fetchMovies = async (ids) => {
        try {
            // Filter out invalid IDs and duplicates
            const uniqueIds = [...new Set(ids.filter(id => 
                id && !isNaN(id) && Number.isInteger(Number(id))
            ))];

            console.log('Fetching movies for IDs:', uniqueIds);
        
            const results = await Promise.all(
                uniqueIds.map(id => 
                fetch(`https://api.themoviedb.org/3/movie/${id}`, {
                    method: 'GET',
                    headers: {
                    'accept': 'application/json',
                    'Authorization': `Bearer ${API_KEY}`
                    }
                })
                .then(async res => {
                    if (!res.ok) {
                        const errorData = await res.json();
                        throw new Error(errorData.status_message || `HTTP error! status: ${res.status}`);
                    }
                    return res.json();
                })
                .catch(err => {
                    console.error(`Failed to fetch movie ${id}:`, err);
                    return null;
                })
                )
            );

            // Filter out null responses and invalid movies
            const validMovies = results.filter(movie => 
                movie && movie.id && movie.title
            );

            console.log('Successfully fetched:', validMovies.length, 'movies');
            setMovies(validMovies);
        } catch (err) {
            console.error('Fetch failed:', err);
            setError(err.message);
            setMovies([]);
        }
    };

    const handleRefresh = async () => {
        setRefreshing(true);
        try {
        await fetchMovies(favoriteMovieIds);
        } catch (err) {
        console.error('Refresh failed:', err);
        setError(err.message);
        } finally {
        setRefreshing(false);
        }
    };

    const renderMovie = ({ item }) => <MyCardFav movie={item} />;


    const renderEmptyComponent = () => (
        <View style={styles.emptyContainer}>
        <Image 
            source={require('../assets/empty2.png')}
            style={{ width: 300, height: 300, marginBottom: 20 }}
            resizeMode="contain"
        />
        <Text style={styles.emptyText}>No favorite movies yet</Text>
        <Text style={styles.emptySubText}>Add movies to your favorites to see them here</Text>
        </View>
    );

    if (loading && !refreshing) {
        return (
        <View style={[styles.container, styles.center]}>
            <ActivityIndicator size="large" color="#D7B7FF" />
            <Text style={styles.loadingText}>Loading your favorites...</Text>
        </View>
        );
    }

    if (error) {
        return (
        <View style={[styles.container, styles.center]}>
            <Text style={styles.errorText}>Error loading favorites</Text>
            <Text style={styles.errorDetail}>{error}</Text>
            <Button
            title="Try Again"
            onPress={handleRefresh}
            color="#D7B7FF"
            />
        </View>
        );
    }

    return (
        <View style={styles.container}>
        <FlatList
            data={movies}
            renderItem={renderMovie}
            keyExtractor={item => `fav_${item.id}_${item.title}`}
            contentContainerStyle={movies.length === 0 ? styles.emptyList : styles.list}
            ListEmptyComponent={renderEmptyComponent}
            refreshing={refreshing}
            onRefresh={handleRefresh}
        />
        </View>
    );
    };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#1e1e1e'
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#D7B7FF',
        marginBottom: 10,
        textAlign: 'center'
    },
    list: {
        paddingBottom: 20
    },
    emptyList: {
        flex: 1
    },
    rating: {
        fontSize: 14,
        color: '#D7B7FF',
        marginTop: 5
    },
    emptyContainer: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        marginTop: 50
    },
    emptyText: {
        fontSize: 20,
        color: '#D7B7FF',
        textAlign: 'center',
        marginBottom: 10
    },
    emptySubText: {
        fontSize: 16,
        color: '#aaa',
        textAlign: 'center'
    },
    loadingText: {
        marginTop: 10,
        color: '#D7B7FF'
    },
    errorText: {
        fontSize: 20,
        color: '#ff6b6b',
        marginBottom: 10
    },
    errorDetail: {
        fontSize: 16,
        color: '#aaa',
        marginBottom: 20,
        textAlign: 'center'
    }
});

export default Fav;