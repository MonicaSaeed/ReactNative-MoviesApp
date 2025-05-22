import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';

const About = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.card}>
                <Image
                    source={require('../assets/background.png')} 
                    style={styles.image}
                />
                <Text style={styles.title}>Movie Explorer</Text>
                <Text style={styles.subtitle}>Discover the world of cinema!</Text>

                <Text style={styles.sectionTitle}>📌 About This App</Text>
                <Text style={styles.paragraph}>
                    Movie Explorer is your personal gateway into the world of movies. Browse trending films, check ratings, and read in-depth overviews with a sleek dark-themed UI built for a smooth experience.
                </Text>

                <Text style={styles.sectionTitle}>🛠️ Built With</Text>
                <Text style={styles.paragraph}>
                    - React Native{"\n"}
                    - React Navigation{"\n"}
                    - TMDB API{"\n"}
                    - Styled using custom dark mode
                    - Local storage for saved favorites "using react-native-storage"
                    - State management with React Context API
                </Text>

                <Text style={styles.sectionTitle}>👨‍💻 Developer</Text>
                <Text style={styles.paragraph}>
                    Designed and developed by Monica Saeed. This app was built to showcase creativity, coding, and a love for cinema.
                </Text>

                <Text style={styles.footer}>© {new Date().getFullYear()} Movie Explorer. All rights reserved.</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: '#121212',
        flexGrow: 1,
    },
    card: {
        backgroundColor: '#1e1e1e',
        padding: 20,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#333',
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 15,
    },
    title: {
        fontSize: 22,
        color: '#D7B7FF',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 14,
        color: '#AAAAAA',
        fontStyle: 'italic',
        textAlign: 'center',
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 16,
        color: '#D7B7FF',
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        marginTop: 15,
        marginBottom: 6,
    },
    paragraph: {
        fontSize: 14,
        color: '#CCCCCC',
        textAlign: 'left',
        lineHeight: 22,
        alignSelf: 'stretch',
    },
    footer: {
        fontSize: 12,
        color: '#666',
        marginTop: 30,
        textAlign: 'center',
    },
});

export default About;
