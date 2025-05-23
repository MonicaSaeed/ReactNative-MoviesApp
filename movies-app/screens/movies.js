import React, { useContext, useState } from 'react';
import { FlatList, StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native';
import { moviesContext } from '../context/moviesContextProvider';
import MyCard from '../components/myCard';
import { ActivityIndicator, Button, Searchbar } from 'react-native-paper';

const Movies = () => {
    const { popularMovies, topRatedMovies, upcomingMovies } = useContext(moviesContext);
    const [searchQuery, setSearchQuery] = useState('');
    const [modalVisible, setModalVisible] = useState(false); 

    const categoryLabels = {
        all: 'All',
        popular: 'Popular',
        topRated: 'Top Rated',
        upcoming: 'Upcoming'
    };
    const [filterCategory, setFilterCategory] = useState('all');

    let movies = [];
    if (filterCategory === 'popular') {
        movies = popularMovies;
    } else if (filterCategory === 'topRated') {
        movies = topRatedMovies;
    } else if (filterCategory === 'upcoming') {
        movies = upcomingMovies;
    } else {
        movies = [...popularMovies, ...topRatedMovies, ...upcomingMovies];
    }

    const filteredMovies = movies.filter(movie => {
        if (searchQuery === '') return true;
        return movie.title.toLowerCase().includes(searchQuery.toLowerCase());
    });

    return (
        <View style={{ flex: 1, backgroundColor: '#343434' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
            <Searchbar
            placeholder='Search'
            style={{ backgroundColor: '#1e1e1e', borderRadius: 10, marginTop: 10, marginHorizontal: 10, width: '60%' }}
            inputStyle={{ color: '#fff' }}
            iconColor='#D7B7FF'
            placeholderTextColor='#D7B7FF'
            value={searchQuery}
            onChangeText={setSearchQuery}
            />
            <Button
            icon={"filter"}
            mode="contained"
            onPress={() => setModalVisible(true)} // open modal on press
            style={styles.filterButton}
            labelStyle={{ color: '#D7B7FF' }}
            >
            {categoryLabels[filterCategory]}
            </Button>
        </View>

        {/* Filter Selection Modal */}
        <Modal
            transparent={true}
            visible={modalVisible}
            animationType="fade"
            onRequestClose={() => setModalVisible(false)}
        >
            <TouchableOpacity
            style={styles.modalOverlay}
            activeOpacity={1}
            onPressOut={() => setModalVisible(false)}
            >
            <View style={styles.modalContent}>
                {Object.entries(categoryLabels).map(([key, label]) => (
                <TouchableOpacity
                    key={key}
                    style={[styles.modalItem, filterCategory === key && styles.modalItemSelected]}
                    onPress={() => {
                    setFilterCategory(key);
                    setModalVisible(false);
                    }}
                >
                    <Text style={{ color: filterCategory === key ? '#D7B7FF' : '#CCCCCC', fontSize: 18 }}>
                    {label}
                    </Text>
                </TouchableOpacity>
                ))}
            </View>
            </TouchableOpacity>
        </Modal>

        <FlatList
            style={styles.container}
            data={filteredMovies}
            keyExtractor={item => `${item.id}_${item.title}`} 
            renderItem={({ item }) => (
            <View style={styles.movieCard}>
                <MyCard movie={item} />
            </View>
            )}
            ListEmptyComponent={() => (
            searchQuery ? (
                <View style={styles.loadingstyle}>
                <Text style={{ color: '#D7B7FF' }}>No movies matching "{searchQuery}"</Text>
                <Text style={{ color: '#D7B7FF', marginTop: 10, fontSize: 16 }}>Try searching for something else</Text>
                </View>
            ) : (
                <View style={styles.loadingstyle}>
                <ActivityIndicator size="large" color="#D7B7FF" />
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
    filterButton: {
        backgroundColor: '#1e1e1e',
        borderRadius: 10,
        marginTop: 10,
        width: '30%',
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderWidth: 1,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'center',
        paddingHorizontal: 30,
    },
    modalContent: {
        backgroundColor: '#1e1e1e',
        borderRadius: 10,
        paddingVertical: 10,
    },
    modalItem: {
        paddingVertical: 15,
        paddingHorizontal: 20,
    },
    modalItemSelected: {
        backgroundColor: '#121212',
    },
});

export default Movies;
