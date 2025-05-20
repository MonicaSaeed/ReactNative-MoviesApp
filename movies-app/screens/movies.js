import React, { useContext, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { moviesContext } from '../context/moviesContextProvider';
import MyCard from '../components/myCard';
import { ActivityIndicator, Searchbar } from 'react-native-paper';

const Movies = () => {
    const { popularMovies, topRatedMovies, upcomingMovies } = useContext(moviesContext);
    const movies = [...popularMovies, ...topRatedMovies, ...upcomingMovies];
    const [searchQuery, setSearchQuery] = useState('');
    const filteredMovies = movies.filter(movie => {
        if (searchQuery === '') {
            return movie;
        }
        if (movie.title.toLowerCase().includes(searchQuery.toLowerCase())) {
            return movie;
        }
    });

    return (
        <View style={{ flex: 1, backgroundColor: '#343434' }}>
            <Searchbar placeholder='Search' 
            style={{ backgroundColor: '#1e1e1e', borderRadius: 10, marginTop: 10, marginHorizontal: 10 }} 
            inputStyle={{ color: '#fff' }}
            iconColor='#BB86FC'
            placeholderTextColor='#BB86FC'
            value={searchQuery}
            onChangeText={query => setSearchQuery(query)}
            onIconPress={() => console.log('Search pressed')}
            />
            <FlatList
            style={styles.container}
            data={filteredMovies}
            keyExtractor={(item) => (item.id.toString()+item.title)}
            renderItem={({ item }) => (
                <View style={styles.movieCard}>
                    <MyCard movie={item} />
                </View>
            )}
            ListEmptyComponent={() => (
                searchQuery ? (
                    <View style={styles.loadingstyle}>
                        <Text style={{ color: '#BB86FC' }}>No movies found</Text>
                    </View>
                ) : (
                    <View style={styles.loadingstyle}>
                        <ActivityIndicator size="large" color="#BB86FC" />
                    </View>
                )
            )}
        />
        </View>
        
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
