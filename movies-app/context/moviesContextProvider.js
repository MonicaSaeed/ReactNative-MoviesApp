import React, { createContext, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { API_KEY } from '../env/myEnv';

export const moviesContext = createContext();

const MoviesContextProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);

    useEffect(() => {
        const keyAuth = API_KEY;
        const moviesUrl = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`;
        const popularMoviesUrl = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`;
        
        fetch(moviesUrl, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${keyAuth}`
            }
        })
        .then((response) => response.json())
        .then((data) => {
            setMovies(data.results);
        })
        .catch((error) => {
            console.error(error);
        });


        fetch(popularMoviesUrl,{
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZDVjOWJkYWM4MTkwNDk5NDg5YWJhZjAwMjY3MzRmMyIsIm5iZiI6MTc0NzY3MjYxMy44NDQsInN1YiI6IjY4MmI1ZTI1Y2M5MjMxMzdjMDY0OTBiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JttM7kGMjcfc9Q3i-x26t6qsBZas37IIg0JI94RmnAE'
            }
        })
            .then((response) => response.json())
            .then((data) => {
                setPopularMovies(data.results);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    return (
        <moviesContext.Provider value={{ popularMovies, topRatedMovies, upcomingMovies, movies }}>
            {children}
        </moviesContext.Provider>
    );
}

const styles = StyleSheet.create({})

export default MoviesContextProvider;
