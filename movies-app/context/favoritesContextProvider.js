import React, { createContext, useEffect, useState } from 'react';
import storage from '../storage/localStorageFav';

export const FavoritesContext = createContext();

const FavoritesContextProvider = ({ children }) => {
    const [favoriteMovieIds, setFavoriteMovieIds] = useState([]);
    const [favoritesChanged, setFavoritesChanged] = useState(false);

    useEffect(() => {
        loadFavorites();
    }, []);

    const loadFavorites = async () => {
        try {
            const stored = await storage.load({ key: 'favMovies' });
            // Handle case where stored is undefined or null
            if (!stored) {
                setFavoriteMovieIds([]);
                return;
            }
            // Filter out non-numbers and duplicates
            const ids = [...new Set(stored)]
            .filter(id => typeof id === 'number' || !isNaN(Number(id)))
            .map(id => Number(id));
            setFavoriteMovieIds(ids);
            // console.log('Cleaned favorites:', ids);
        } catch (err) {
            console.error('Error loading favorites:', err);
            setFavoriteMovieIds([]);
        }
    };

    const addFavorite = async (id) => {
        if (!favoriteMovieIds.includes(id)) {
            const updated = [...favoriteMovieIds, id];
            await storage.save({ key: 'favMovies', data: updated });
            setFavoriteMovieIds(updated);
            setFavoritesChanged(prev => !prev); 
        }
    };

    const removeFavorite = async (id) => {
        const updated = favoriteMovieIds.filter(movieId => movieId !== id);
        await storage.save({ key: 'favMovies', data: updated });
        setFavoriteMovieIds(updated);
        setFavoritesChanged(prev => !prev); 
    };

    return (
        <FavoritesContext.Provider value={{ favoriteMovieIds, addFavorite, removeFavorite, favoritesChanged }}>
            {children}
        </FavoritesContext.Provider>
    );
};

export default FavoritesContextProvider;
