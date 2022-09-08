import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CustomPagination from '../../components/Pagination/CustomPagination';
import SingleContent from '../../components/SingleContents/SingleContent';

function Series() {
    const [page, setPage] = useState(1);
    const [numOfPages, setNumOfPages] = useState();
    const [content, setContent] = useState([]);

    const fetchTV = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`,
        );

        // console.log(data);
        setContent(data.results);
        setNumOfPages(data.total_pages);
    };

    useEffect(() => {
        window.scroll(0, 0);
        fetchTV();
        // eslint-disable-next-line
    }, [page]);

    return (
        <div>
            <span className="pageTitle">Series</span>
            <div className="trending">
                {content &&
                    content.map((c) => (
                        <SingleContent
                            key={c.id}
                            id={c.id}
                            poster={c.poster_path}
                            title={c.title || c.name}
                            date={c.first_air_date || c.release_date}
                            media_type={c.media_type}
                            // vote_average={c.vote_average}

                            //truyenf sang cho SingleContent
                        />
                    ))}
            </div>

            {numOfPages > 1 && <CustomPagination setPage={setPage} numOfPages={numOfPages} />}
        </div>
    );
}

export default Series;
