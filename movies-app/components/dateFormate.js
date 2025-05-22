import React from 'react';
import { StyleSheet, View, Text } from 'react-native'; 

const DateFormate = ({ date }) => {
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', options);
    };
    return (
        <View>
            <Text style={styles.date}>
                {formatDate(date)}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    date: {
        fontSize: 14,
        color: '#D7B7FF',
        marginBottom: 4,
    }
});

export default DateFormate;
