import React, { createContext, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { API_KEY } from '../env/myEnv';

export const moviesContext = createContext();

const MoviesContextProvider = ({ children }) => {
    // const [movies, setMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);

    useEffect(() => {
        const keyAuth = API_KEY;
        const totalPages = 1; 

        const fetchAllPages = async (endpoint, setState) => {
            try {
                const promises = [];
                for (let page = 1; page <= totalPages; page++) {
                    const url = `https://api.themoviedb.org/3/movie/${endpoint}?language=en-US&page=${page}`;
                    promises.push(
                        fetch(url, {
                            method: 'GET',
                            headers: {
                                accept: 'application/json',
                                Authorization: `Bearer ${keyAuth}`
                            }
                        }).then(res => res.json())
                    );
                }
                const results = await Promise.all(promises);
                const mergedMovies = results.flatMap(res => res.results);
                setState(mergedMovies);
            } catch (error) {
                console.error(`Error fetching ${endpoint} movies:`, error);
            }
        };

        fetchAllPages("popular", setPopularMovies);
        fetchAllPages("top_rated", setTopRatedMovies);
        fetchAllPages("upcoming", setUpcomingMovies);

    }, []);

    return (
        <moviesContext.Provider value={{ popularMovies, topRatedMovies, upcomingMovies }}>
            {children}
        </moviesContext.Provider>
    );
}

const styles = StyleSheet.create({})

export default MoviesContextProvider;
