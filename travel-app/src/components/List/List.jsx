// import React,{useState} from 'react';
// import { CircularProgress,Grid,Typography,InputLabel,MenuItem,FormControl,Select} from '@mui/material';

// import useStyles from './styles';

// const List=()=>{
//     const classes=useStyles();
//     const [type, setType]=useState('restaurants');
//     const [rating, setRating]=useState('');

//     return (
//         <div className={classes.container}>
//             <Typography variant="h4">Restaurant, Hotels and Attractions</Typography>
//             <FormControl className={classes.formControl}>
//                 <InputLabel>Rating</InputLabel>
//                 <Select value={rating} onChange={(e)=>setRating(e.target.value)}>
//                     <MenuItem value={0}>All</MenuItem>
//                     <MenuItem value={3}>Above 3.0</MenuItem>
//                     <MenuItem value={4}>Above 4.0</MenuItem>
//                     <MenuItem value={4.5}>Above 4.5</MenuItem>
//                 </Select>
//             </FormControl>
//             <FormControl className={classes.formControl}>
//                 <InputLabel>Type</InputLabel>
//                 <Select value={type} onChange={(e)=>setType(e.target.value)}>
//                     <MenuItem value="restaurants">restaurants</MenuItem>
//                     <MenuItem value="hotels">hotels</MenuItem>
//                     <MenuItem value="attractions">attractions</MenuItem>
//                 </Select>
//             </FormControl>
//         </div>
//     )
// }

// export default List

//--------------------------------------------------------------------------------------------------------------------
// import React, { useState } from 'react';
// import {
//   CircularProgress,
//   Grid,
//   Typography,
//   InputLabel,
//   MenuItem,
//   FormControl,
//   Select,
//   Box
// } from '@mui/material';

// import PlaceDetails from'../PlaceDetails/PlaceDetails';

// import useStyles from './styles';

// const List = () => {
//   const classes = useStyles();
//   const [type, setType] = useState('restaurants');
//   const [rating, setRating] = useState('');

//   const places=[
//     {name:'Cool Place'},
//     {name:'Best Beer'},
//     {name:'Best Food'},
//     {name:'Cool Place'},
//     {name:'Best Beer'},
//     {name:'Best Food'},
//     {name:'Cool Place'},
//     {name:'Best Beer'},
//     {name:'Best Food'},
// ];

//   return (
//     <div className={classes.container}>
//       <Typography variant="h4" gutterBottom>
//         Restaurants, Hotels and Attractions
//       </Typography>

//       <Box display="flex" gap={2} flexDirection="column">
//         <FormControl className={classes.formControl} variant="outlined">
//           <InputLabel>Type</InputLabel>
//           <Select
//             value={type}
//             onChange={(e) => setType(e.target.value)}
//             label="Type"
//           >
//             <MenuItem value="restaurants">Restaurants</MenuItem>
//             <MenuItem value="hotels">Hotels</MenuItem>
//             <MenuItem value="attractions">Attractions</MenuItem>
//           </Select>
//         </FormControl>

//         <FormControl className={classes.formControl} variant="outlined">
//           <InputLabel>Rating</InputLabel>
//           <Select
//             value={rating}
//             onChange={(e) => setRating(e.target.value)}
//             label="Rating"
//           >
//             <MenuItem value={0}>All</MenuItem>
//             <MenuItem value={3}>Above 3.0</MenuItem>
//             <MenuItem value={4}>Above 4.0</MenuItem>
//             <MenuItem value={4.5}>Above 4.5</MenuItem>
//           </Select>
//         </FormControl>
//       </Box>
//       {/* <Grid  container spacing={3} className={classes.list}>
//         {places?.map((place,i)=>(
//             <Grid item key={i} xs={12}>
//               <PlaceDetails place={place}/>
//             </Grid>
//         ))}
//       </Grid> */}
//       <Box className={classes.list}>
//   {places?.map((place, i) => (
//     <Box key={i} mb={2}>
//       <PlaceDetails place={place} />
//     </Box>
//   ))}
// </Box>
//     </div>
//   );
// };

// export default List;
//-------------------------------------------------------------------------------------------------------------------------

import React,{ useRef, useEffect } from 'react';
import {
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Box,
  CircularProgress,
} from '@mui/material';

import PlaceDetails from '../PlaceDetails/PlaceDetails';
import useStyles from './styles';

const List = ({ places, type, setType, rating, setRating, isLoading,childClicked }) => {
  const classes = useStyles();
  const refs=useRef([]);

  useEffect(() => {
    if (childClicked !== null && refs.current[childClicked]) {
      refs.current[childClicked].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [childClicked]);

  return (
    <div className={classes.container}>
      <Typography variant="h4" gutterBottom>
        Restaurants, Hotels & Attractions Around You
      </Typography>

      {isLoading ? (
        <Box display="flex" justifyContent="center" mt={4}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Box display="flex" gap={2} flexDirection="column" mb={3}>
            <FormControl className={classes.formControl} variant="outlined">
              <InputLabel>Type</InputLabel>
              <Select
                value={type}
                onChange={(e) => setType(e.target.value)}
                label="Type"
              >
                <MenuItem value="restaurants">Restaurants</MenuItem>
                <MenuItem value="hotels">Hotels</MenuItem>
                <MenuItem value="attractions">Attractions</MenuItem>
              </Select>
            </FormControl>

            <FormControl className={classes.formControl} variant="outlined">
              <InputLabel>Rating</InputLabel>
              <Select
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                label="Rating"
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value={3}>Above 3.0</MenuItem>
                <MenuItem value={4}>Above 4.0</MenuItem>
                <MenuItem value={4.5}>Above 4.5</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box className={classes.list}>
            {places?.map((place, i) => (
              <Box key={i} mb={2} ref={(el) => (refs.current[i] = el)}>
                <PlaceDetails place={place} />
              </Box>
            ))}
          </Box>
        </>
      )}
    </div>
  );
};

export default List;
