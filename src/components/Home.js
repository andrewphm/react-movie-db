import React from 'react';
// API
import API from '../API'

// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config'

// Components

// Hook
import { useState, useEffect } from 'react';

// Image
import NoImage from '../images/no_image.jpg'

const Home = () => {
    // State to hold all the movies
    const [state, setState] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchMovies = async (page, searchTerm = "") => {
        try {
            setError(false);
            setLoading(true);

            const movies = await API.fetchMovies(searchTerm, page);

            setState(prev => ({
                ...movies,
                results: page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
            }));
        } catch (error) {
            setError(true);
        }

        setLoading(false);
    } 

    // Initial render
    useEffect(() => {
        fetchMovies(1)
    }, [])

    console.log(state);

    return <div>Home Page</div>
}

export default Home;
