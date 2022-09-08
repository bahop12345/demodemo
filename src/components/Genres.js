import { Chip } from '@mui/material';
import axios from 'axios';
import React, { useEffect } from 'react';

function Genres({ type, selectdGenres, setSelectdGenres, genre, setGenre, setPage }) {
    const fetchGenres = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`,
        );
        setGenre(data.genre);
        // console.log(data);
    };

    // console.log(genres);
    useEffect(() => {
        fetchGenres();
        //ngat api tra ve 1 cai moi
        return () => {
            setGenre({});
        };
    }, []);
    return (
        <div style={{ padding: '6px 0' }}>
            {/* {genre.map((c) => ( */}
            <Chip />
            {/* ))} */}
        </div>
    );
}

export default Genres;
