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

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlacesData = async (sw, ne) => {
  try {
    const { data: { data } } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        // You can uncomment or add filters like these later if needed:
        // limit: '30',
        // currency: 'INR',
        // open_now: 'true',
        // lunit: 'km',
        // lang: 'en_US'
      },
      headers: {
        'x-rapidapi-key': '836d057db0msh88239e4499eeb14p17c883jsn7861bc7c0a90',
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
      }
    });

    return data;
  } catch (error) {
    console.error('API Error:', error);
    return [];
  }
};
