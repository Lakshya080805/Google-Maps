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

import { getPlacesData,getWeatherData  } from './api';
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

  const [childClicked, setChildClicked] = useState(null);

  const [weather, setWeather] = useState(null);

  

//   const filteredPlaces = places.filter((place) =>
//   place.name &&
//   place.num_reviews > 0 &&
//   (!rating || Number(place.rating) >= rating) &&
//   (type === 'restaurants' || type === 'hotels' || type === 'attractions')
// );

const typeMapping = {
 restaurants: ['restaurant', 'restaurants'],
  hotels: ['hotel', 'hotels'],
  attractions: ['attraction', 'attractions'],
};

const filteredPlaces = places.filter((place) =>
  place.name &&
  place.num_reviews > 0 &&
  (!rating || Number(place.rating) >= rating) &&
  (!type || place.category?.key?.toLowerCase() === type.slice(0, -1))
);

   useEffect(() => {
  const timeout = setTimeout(() => {
    if (bounds) {
      console.log('📦 BOUNDS:', bounds); // 👈 CHECK THIS
      setIsLoading(true);
      getPlacesData(type, bounds.sw, bounds.ne)
        .then((data) => {
          console.log('📍 RAW API DATA:', data); // 👈 THIS IS CRITICAL
          setPlaces(data || []);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error('❌ API Error:', err);
        });
    }
  }, 1000);
  return () => clearTimeout(timeout);
}, [bounds, type]);

useEffect(() => {
  if (coordinates.lat && coordinates.lng) {
    getWeatherData(coordinates.lat, coordinates.lng).then((data) => {
      setWeather(data);
    });
  }
}, [coordinates]);

// useEffect(() => {
//   if (places && Array.isArray(places) && places.length > 0) {
//     getWeatherData(places).then((data) => {
//       setWeather(data.filter(Boolean)); // remove nulls
//     });
//   }
// }, [places]);



  return (
    <>
      <CssBaseline />
      <Header onSearch={(coords) => setCoordinates(coords)}  weather={weather}/>
      <div style={{ display: 'flex', height: 'calc(100vh - 64px)' }}>
        <div style={{ width: '30%', overflowY: 'auto' }}>
          <List
            places={filteredPlaces}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
            isLoading={isLoading}
            childClicked={childClicked} // 👈 pass to List
          />
        </div>
        <div style={{ width: '70%' }}>
          <Map
            coordinates={coordinates}
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            places={filteredPlaces}
            setChildClicked={setChildClicked} // 👈 pass to Map
            // weatherData={[weather]} 
          />
        </div>
      </div>
    </>
  );
};

export default App;
