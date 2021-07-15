import React from 'react';

// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config'

// Components

// Hook
import { useState } from 'react';

// Image
import NoImage from '../images/no_image.jpg'

const Home = () => {
    // State to hold all the movies
    const [state, setState] = useState();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);


    return <div>Home Page</div>
}

export default Home;
