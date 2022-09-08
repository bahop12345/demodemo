import React, { useEffect } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import { useNavigate } from 'react-router-dom';

export default function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        if (value === 0) {
            navigate('/');
        } else if (value === 1) {
            navigate('/movies');
        } else if (value === 2) {
            navigate('/series');
        } else if (value === 3) {
            navigate('/search');
        }
    }, [value, navigate]);
    return (
        <BottomNavigation
            style={{
                width: '100%',
                position: 'fixed',
                bottom: 0,
                backgroundColor: '#fff',
                zIndex: 100,
                boxShadow: '0 1px 5px black',
            }}
            showLabels
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
        >
            <BottomNavigationAction label="Trending" icon={<WhatshotIcon />} />
            <BottomNavigationAction label="Movies" icon={<MovieIcon />} />
            <BottomNavigationAction label="Tv Series" icon={<LocationOnIcon />} />
            <BottomNavigationAction label="Search" icon={<LocationOnIcon />} />
        </BottomNavigation>
    );
}
