import { Pagination } from '@mui/material';
import React from 'react';

// const darkThem = createMuiTheme({
//     palette: {
//         type: 'dark',
//     },
// });

function CustomPagination({ setPage, numOfPages = 10 }) {
    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0, 0);
    };
    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: 10 }}>
            {/* <ThemeProvider them={darkThem}> */}
            <Pagination
                onChange={(e) => handlePageChange(e.target.textContent)}
                count={numOfPages}
                color="primary"
                hideNextButton
                hidePrevButton
            />
            {/* </ThemeProvider> */}
        </div>
    );
}

export default CustomPagination;
