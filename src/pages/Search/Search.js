import { Button, Tab, Tabs, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SingleContent from '../../components/SingleContents/SingleContent';
import CustomPagination from '../../components/Pagination/CustomPagination';

function Search() {
    const [page, setPage] = useState(1);
    const [type, setType] = useState(0);
    const [searchText, setSearchText] = useState('');
    const [content, setContent] = useState();
    const [numOfPages, setNumOfPages] = useState();

    const fetchSearch = async () => {
        try {
            const { data } = await axios.get(
                `https://api.themoviedb.org/3/search/${type ? 'tv' : 'movie'}?api_key=${
                    process.env.REACT_APP_MOVIE_API_KEY
                }&language=en-US&query=${searchText}&page=${page}&include_adult=false`,
            );
            setContent(data.results);
            setNumOfPages(data.total_pages);
            // console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        window.scroll(0, 0);
        fetchSearch();
        // eslint-disable-next-line
    }, [type, page]);

    return (
        <>
            <div style={{ display: 'flex', margin: '15px 0' }}>
                <TextField
                    style={{ flex: 1 }}
                    className="search"
                    label="Search"
                    variant="filled"
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <Button variant="contained" style={{ marginLeft: 10 }} onClick={fetchSearch}>
                    <SearchIcon />
                </Button>
            </div>
            <Tabs
                value={type}
                indicatorColor="primary"
                textColor="primary"
                onChange={(e, newValue) => {
                    setType(newValue);
                    setPage(1);
                }}
            >
                <Tab style={{ width: '50%' }} label="Search Movies" />
                <Tab style={{ width: '50%' }} label="Search TV" />
            </Tabs>
            <div className="trending">
                {content &&
                    content.map((c) => (
                        <SingleContent
                            key={c.id}
                            id={c.id}
                            poster={c.poster_path}
                            title={c.title || c.name}
                            date={c.first_air_date || c.release_date}
                            media_type="movie"
                            // vote_average={c.vote_average}

                            //truyenf sang cho SingleContent
                        />
                    ))}
                {searchText && !content(type ? <h2>No Series</h2> : <h2>No Tv</h2>)}
            </div>
            {numOfPages > 1 && <CustomPagination setPage={setPage} numOfPages={numOfPages} />}
        </>
    );
}

export default Search;
