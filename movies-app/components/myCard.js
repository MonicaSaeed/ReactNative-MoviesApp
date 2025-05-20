import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-paper';

const MyCard = ({movie}) => {
    const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    return (
        <Card style={styles.card}>
            <Card.Cover source={{ uri: imageUrl }} />
            <Card.Content>
                    <Text style={styles.title} variant="titleLarge">
                        {movie.title}
                    </Text>
                    <Text variant="bodyMedium" style={styles.originalTitle}>
                        {movie.original_title}
                    </Text>
            </Card.Content>
            <Card.Actions>
                {/* <Button onPress={() => console.log('Pressed')}>View Details</Button> */}
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
        color: '#BB86FC',
        marginBottom: 10,
        textAlign: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#BB86FC',
        marginBottom: 10,
        marginTop: 10,
        textAlign: 'center',
    },
});

export default MyCard;
