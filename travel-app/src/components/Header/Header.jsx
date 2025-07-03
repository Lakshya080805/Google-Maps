import React,{useRef} from'react';
import {Autocomplete} from '@react-google-maps/api';
import {AppBar, Toolbar,Typography,Box, InputBase} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


import useStyles from './styles';
const Header=()=>{
    const classes=useStyles();
    const autocompleteRef = useRef(null);

     const onLoad = (autoC) => {
    autocompleteRef.current = autoC;
  };

  const onPlaceChanged = () => {
    const place = autocompleteRef.current.getPlace();
    if (place?.geometry?.location) {
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();
      console.log('Selected:', place.name, lat, lng);
      setCoordinates({ lat, lng }); // Triggers map recenter + fetch
    }
  };

    return (
        <AppBar position='static'>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.title}>
                    Travel Advisor

                </Typography>
                <Box display="flex">
                    <Typography variant="h6" className={classes.title}>
                    Explore new places

                </Typography>
                <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                    <div className={classes.search}>
                       <div className={classes.searchIcon}> 
                          <SearchIcon/>
                       </div>
                       <InputBase placeholder='Search...' classes={{root:classes.inputRoot,input:classes.inputInput}}/>
                    </div>
                </Autocomplete>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header


// import React from 'react';
// import { AppBar, Toolbar, Typography, Box } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// import useStyles from './styles';
// import PlaceSearch from "../PlaceSearch";


// const Header = ({ setCoordinates }) => {
//   const classes = useStyles();

//   return (
//     <AppBar position='static'>
//       <Toolbar className={classes.toolbar}>
//         <Typography variant="h5" className={classes.title}>
//           Travel Advisor
//         </Typography>
//         <Box display="flex" alignItems="center">
//           <Typography variant="h6" className={classes.title}>
//             Explore new places
//           </Typography>
//           <Box className={classes.search} sx={{ display: 'flex', alignItems: 'center' }}>
//             <div className={classes.searchIcon}>
//               <SearchIcon />
//             </div>
//             <PlaceSearch setCoordinates={setCoordinates} className={classes.inputRoot} />
//           </Box>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Header;
