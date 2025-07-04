// import axios from 'axios';

// const URL='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';


// const options = {

//   params: {
//     bl_latitude: '11.847676',
//     tr_latitude: '12.838442',
//     bl_longitude: '109.095887',
//     tr_longitude: '109.149359',
//     // restaurant_tagcategory_standalone: '10591',
//     // restaurant_tagcategory: '10591',
//     // limit: '30',
//     // currency: 'USD',
//     // open_now: 'false',
//     // lunit: 'km',
//     // lang: 'en_US'
//   },
//   headers: {
//     'x-rapidapi-key': '836d057db0msh88239e4499eeb14p17c883jsn7861bc7c0a90',
//     'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
//   }
// };



// export const getPlacesData=async ()=>{
//     try{
//         // request
//         const {data:{data}}=await axios.get(URL,options);

//         return data;

//     } catch(error){
//          console.log(error);
//     }
// }


import axios from 'axios';



export const getPlacesData = async (type,sw, ne) => {
  try {
    const response = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      
      },
      headers: {
        'x-rapidapi-key': import.meta.env.VITE_TRAVEL_API,
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
      }
    });

    return response.data.data;
  } catch (error) {
    console.error('API Error:', error);
    return [];
  }
}

// ⛅ Function to fetch weather data
export const getWeatherData = async (lat, lon) => {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather`,
      {
        params: {
          lat,
          lon,
          units: 'metric',
          appid: import.meta.env.VITE_WEATHER_API, // ⬅ Replace with actual key
        },
      }
    );
    return res.data;
  } catch (error) {
    console.error("API Error (weather):", error);
    return null;
  }
};

// export const getWeatherData = async (places) => {
//   const apiKey = import.meta.env.VITE_WEATHER_API;

//   const weatherRequests = places.map((place) => {
//     if (!place.latitude || !place.longitude) return null;

//     return axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
//       params: {
//         lat: place.latitude,
//         lon: place.longitude,
//         units: 'metric',
//         appid: apiKey,
//       },
//     });
//   });

//   const results = await Promise.allSettled(weatherRequests);

//   return results.map((res, index) =>
//     res.status === 'fulfilled'
//       ? { ...res.value.data, placeIndex: index }
//       : null
//   );
// };
