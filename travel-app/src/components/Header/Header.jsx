// // import React,{useRef} from'react';
// // import {Autocomplete} from '@react-google-maps/api';
// // import {AppBar, Toolbar,Typography,Box, InputBase} from '@mui/material';
// // import SearchIcon from '@mui/icons-material/Search';


// // import useStyles from './styles';
// // const Header=()=>{
// //     const classes=useStyles();
// //     const autocompleteRef = useRef(null);

// //      const onLoad = (autoC) => {
// //     autocompleteRef.current = autoC;
// //   };

// //   const onPlaceChanged = () => {
// //     const place = autocompleteRef.current.getPlace();
// //     if (place?.geometry?.location) {
// //       const lat = place.geometry.location.lat();
// //       const lng = place.geometry.location.lng();
// //       console.log('Selected:', place.name, lat, lng);
// //       setCoordinates({ lat, lng }); // Triggers map recenter + fetch
// //     }
// //   };

// //     return (
// //         <AppBar position='static'>
// //             <Toolbar className={classes.toolbar}>
// //                 <Typography variant="h5" className={classes.title}>
// //                     Travel Advisor

// //                 </Typography>
// //                 <Box display="flex">
// //                     <Typography variant="h6" className={classes.title}>
// //                     Explore new places

// //                 </Typography>
// //                 <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
// //                     <div className={classes.search}>
// //                        <div className={classes.searchIcon}> 
// //                           <SearchIcon/>
// //                        </div>
// //                        <InputBase placeholder='Search...' classes={{root:classes.inputRoot,input:classes.inputInput}}/>
// //                     </div>
// //                 </Autocomplete>
// //                 </Box>
// //             </Toolbar>
// //         </AppBar>
// //     )
// // }

// // export default Header


// import React, { useState } from 'react';
// import { AppBar, Toolbar, Typography, Box, InputBase, IconButton } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// import useStyles from './styles';

// const Header = ({ onSearch }) => {
//   const classes = useStyles();
//   const [query, setQuery] = useState('');

//   const handleSearch = async () => {
//     if (!query) return;
//     try {
//       const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`);
//       const data = await res.json();
//       if (data && data.length > 0) {
//         const { lat, lon } = data[0];
//         onSearch({ lat: parseFloat(lat), lng: parseFloat(lon) });
//       } else {
//         alert('No location found');
//       }
//     } catch (err) {
//       console.error('Search error:', err);
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') handleSearch();
//   };

//   return (
//     <AppBar position='static'>
//       <Toolbar className={classes.toolbar}>
//         <Typography variant="h5" className={classes.title}>
//           Travel Advisor
//         </Typography>
//         <Box display="flex">
//           <Typography variant="h6" className={classes.title}>
//             Explore new places
//           </Typography>
//           <div className={classes.search}>
//             <div className={classes.searchIcon}>
//               <SearchIcon />
//             </div>
//             <InputBase
//               placeholder="Search..."
//               classes={{ root: classes.inputRoot, input: classes.inputInput }}
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//               onKeyDown={handleKeyPress}
//             />
//             <IconButton onClick={handleSearch}>
//               <SearchIcon />
//             </IconButton>
//           </div>
//         </Box>
//       </Toolbar>  
//     </AppBar>
//   );
// };

// export default Header;

import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Autocomplete,
  TextField,
} from '@mui/material';
import useStyles from './styles';

const Header = ({ onSearch ,weather}) => {
  const classes = useStyles();
  const [query, setQuery] = useState('');
  const [options, setOptions] = useState([]);

  // Fetch autocomplete suggestions
  useEffect(() => {
    const fetchSuggestions = async () => {
      if (query.length < 3) return; // avoid too many calls

      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
            query
          )}&format=json&addressdetails=1&limit=5`
        );
        const data = await res.json();
        setOptions(data);
      } catch (error) {
        console.error('Autocomplete error:', error);
      }
    };

    const debounce = setTimeout(fetchSuggestions, 400);
    return () => clearTimeout(debounce);
  }, [query]);

  const handleSelect = (event, value) => {
    if (value && value.lat && value.lon) {
      onSearch({ lat: parseFloat(value.lat), lng: parseFloat(value.lon) });
    }
  };

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Travel Advisor
        </Typography>
        <Box display="flex" alignItems="center" gap={2}>
          <Typography variant="h6" className={classes.title}>
            Explore new places
          </Typography>

          {/* ✅ Autocomplete Search */}
          <Autocomplete
            options={options}
            getOptionLabel={(option) =>
              option.display_name || ''
            }
            onInputChange={(event, value) => setQuery(value)}
            onChange={handleSelect}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search a place..."
                variant="outlined"
                size="small"
              />
            )}
          />

          {weather && (
  <Box display="flex" alignItems="center" ml={2} gap={1}>
    <img
      src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
      alt={weather.weather[0].description}
      width={40}
      height={40}
    />
    <Typography variant="body1" color="inherit">
      {weather.main.temp}°C - {weather.weather[0].main}
    </Typography>
  </Box>
)}

        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

