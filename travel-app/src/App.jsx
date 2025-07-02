// // // src/App.jsx
// // import React from 'react';
// // import { CssBaseline, Grid } from '@mui/material';


// // import Header from './components/Header/Header';
// // import List from './components/List/List';
// // import Map from './components/Map/Map';

// // const App = () => {
// //   return (
// //     <>
// //     <CssBaseline/>
// //     <Header/>
// //     <Grid container spacing={3} style={{ width: '100%' }}>
// //         <Grid container spacing={3}>
// //   <Grid span={12} md={4}>
// //     <List />
// //   </Grid>
// //   <Grid span={12} md={8}>
// //     <Map />
// //   </Grid>
// // </Grid>

// //       </Grid>

      
// //     </>
// //   )
// // };

// // export default App;


// import React from 'react';
// import { CssBaseline, Grid } from '@mui/material';

// import Header from './components/Header/Header';
// import List from './components/List/List';
// import Map from './components/Map/Map';

// const App = () => {
//   return (
//     <>
//       <CssBaseline />
//       <Header />
//       <Grid container spacing={3} columns={12} style={{ width: '100%' }}>
//         <Grid xs={12} md={4}>
//           <List />
//         </Grid>
//         <Grid xs={12} md={8}>
//           <Map />
//         </Grid>
//       </Grid>
//     </>
//   );
// };

// export default App;

//----------------------------------------------------------------------------------------------

// import React,{useState,useEffect} from 'react';
// import { CssBaseline, Grid } from '@mui/material';

// import {getPlacesData} from './api';
// import Header from './components/Header/Header';
// import List from './components/List/List';
// import Map from './components/Map/Map';

// const App = () => {
//   const [places,setPlaces]=useState([]);

//   const [coordinates,setCoordinates]=useState({});
//   const [bounds,setBounds]=useState(null);

//   useEffect(()=>{
//        getPlacesData()
//        .then((data)=>{
//         console.log(data);

//         setPlaces(data);
//        })
//   },[]);

//   return (
//     // <div>
//     //   <Map />
//     // </div>

//    <div style={{ display: 'flex', height: 'calc(100vh - 64px)' }}> {/* minus header height */}
//   <div style={{ width: '30%', overflowY: 'auto' }}>
//     <List />
//   </div>
//   <div style={{ width: '70%' }}>
//     <Map 
//     setCoordinates={setCoordinates}
//     setBounds={setBounds}
//     coordinates={coordinates}
//     />
//   </div>
// </div>

//   );
// };

// export default App;
//------------------------------------------------------------------------------------------------------------------

import React, { useState, useEffect } from 'react';
import { CssBaseline } from '@mui/material';

import { getPlacesData } from './api';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';

const App = () => {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({ lat: 28.6139, lng: 77.2090 }); // New Delhi
  const [bounds, setBounds] = useState(null);

  // ✅ These were missing before — Add them at the top
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // if (bounds) {
    //   setIsLoading(true);
    //   getPlacesData(bounds.sw, bounds.ne)
    //     .then((data) => {
    //       setPlaces(data);
    //       setIsLoading(false);
    //     });
    // }
    const timeout = setTimeout(() => {
    if (bounds) {
      setIsLoading(true);
      getPlacesData(bounds.sw, bounds.ne)
        .then((data) => {

          console.log('✅ Places fetched:', data);
          
          setPlaces(data);
          setIsLoading(false);
        });
    }
  }, 1000); // 1 second debounce

  return () => clearTimeout(timeout);
  }, [bounds]);

  return (
    <>
      <CssBaseline />
      <Header />
      <div style={{ display: 'flex', height: 'calc(100vh - 64px)' }}>
        <div style={{ width: '30%', overflowY: 'auto' }}>
          <List
            places={places}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
            isLoading={isLoading}
          />
        </div>
        <div style={{ width: '70%' }}>
          <Map
            coordinates={coordinates}
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            places={places}
          />
        </div>
      </div>
    </>
  );
};

export default App;
