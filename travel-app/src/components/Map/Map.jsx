// // // import React from'react';
// // // import GoogleMapReact from 'google-map-react';
// // // import { Paper, Typography, useMediaQuery } from '@mui/material';
// // // import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
// // // import Rating from '@mui/material/Rating';

// // // import useStyles from './styles';

// // // const Map=()=>{ 
// // //     const classes=useStyles();
// // //     const isMobile=useMediaQuery('(min-width:600px)');

// // //     // const coordinates={ lat:0,lng:0};

// // //     const coordinates = { lat:0, lng: 0 };

// // //     return (
// // //         // <div className={classes.mapContainer}>
// // //         //     <GoogleMapReact
// // //         //        bootstrapURLKeys={{key:'AIzaSyDU_I2vCwEuHLxUj2cNadwgm0o4OoIqnWI'}}
// // //         //        defaultCenter={coordinates}
// // //         //        center={coordinates}
// // //         //        defaultZoom={14}
// // //         //        margin={[50,50,50,50]}
// // //         //        options={''}
// // //         //        onChange={''}
// // //         //        onChildClick={''}
// // //         //     >
// // //         //         {/* 🧭 Marker */}
// // //         // <div lat={coordinates.lat} lng={coordinates.lng}>
// // //         //   📍
// // //         // </div>
// // //        //  </GoogleMapReact>
// // //         // </div>
// // //         <div className={classes.mapContainer}>
// // //   <GoogleMapReact
// // //     bootstrapURLKeys={{ key: 'AIzaSyDU_I2vCwEuHLxUj2cNadwgm0o4OoIqnWI' }}
// // //     defaultCenter={coordinates}
// // //     center={coordinates}
// // //     defaultZoom={14}
// // //     margin={[50, 50, 50, 50]}
// // //     // Remove or replace with actual functions if needed
// // //     options={{}} 
// // //     onChange={() => {}} 
// // //     onChildClick={() => {}} 
// // //   >
// // //     {/* 🧭 Marker */}
// // //     <div lat={coordinates.lat} lng={coordinates.lng} style={{ fontSize: '2rem' }}>
// // //       📍
// // //     </div>
// // //   </GoogleMapReact>
// // // </div>

// // //     )
// // // }

// // // export default Map

// // // // import React from 'react';
// // // // import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// // // // import 'leaflet/dist/leaflet.css';
// // // // import L from 'leaflet';

// // // // // Fix for missing marker icons
// // // // import icon from 'leaflet/dist/images/marker-icon.png';
// // // // import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// // // // let DefaultIcon = L.icon({
// // // //   iconUrl: icon,
// // // //   shadowUrl: iconShadow
// // // // });
// // // // L.Marker.prototype.options.icon = DefaultIcon;

// // // // const Map = () => {
// // // //   const center = [28.6139, 77.2090]; // New Delhi

// // // //   return (
// // // //     <div style={{ height: '90vh', width: '100%' }}>
// // // //       <MapContainer center={center} zoom={13} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
// // // //         <TileLayer
// // // //           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// // // //           attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
// // // //         />
// // // //         <Marker position={center}>
// // // //           <Popup>You're here — New Delhi</Popup>
// // // //         </Marker>
// // // //       </MapContainer>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Map;


// // // src/components/Map/Map.jsx
// // import React from 'react';
// // import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// // import 'leaflet/dist/leaflet.css';
// // import L from 'leaflet';

// // // Fix for missing marker icons
// // import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
// // import markerIcon from 'leaflet/dist/images/marker-icon.png';
// // import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// // // Set default marker icon manually
// // L.Icon.Default.mergeOptions({
// //   iconRetinaUrl: markerIcon2x,
// //   iconUrl: markerIcon,
// //   shadowUrl: markerShadow,
// // });

// // const Map = () => {
// //   const center = [28.6139, 77.2090]; // New Delhi coordinates

// //   return (
// //     <div style={{ height: '90vh', width: '100%' }}>
// //       <MapContainer center={center} zoom={13} scrollWheelZoom style={{ height: '100%', width: '100%' }}>
// //         <TileLayer
// //           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// //           attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
// //         />
// //         <Marker position={center}>
// //           <Popup>
// //             You are here — <strong>New Delhi</strong>
// //           </Popup>
// //         </Marker>
// //       </MapContainer>
// //     </div>
// //   );
// // };

// // export default Map;

// //-------------------------------------------------------------------------------------------------------------

// // import React, { useEffect, useRef } from 'react';
// // import maplibregl from 'maplibre-gl';
// // import 'maplibre-gl/dist/maplibre-gl.css';

// // const Map = ({setCoordinates,setBounds,coordinates}) => {
// //   const mapContainer = useRef(null);
// //   const map = useRef(null);

// //   useEffect(() => {
// //     if (map.current) return; // initialize map only once

// //     map.current = new maplibregl.Map({
// //       container: mapContainer.current,
// //       // style: 'https://demotiles.maplibre.org/style.json', 3
// //       style: 'https://tiles.stadiamaps.com/styles/osm_bright.json',
// //       center: [77.2090, 28.6139], // [lng, lat] — New Delhi
// //       zoom: 12,
// //     });

// //     new maplibregl.Marker().setLngLat([77.2090, 28.6139]).addTo(map.current);

// //      map.current.addControl(new maplibregl.NavigationControl(), 'top-right');
// //   }, []);

  

// //   return (
// //     <div ref={mapContainer} style={{ width: '100%', height: '90vh' }} />
// //   );
// // };

// // export default Map;
// //===============================================================================================================

// import React, { useEffect, useRef } from 'react';
// import maplibregl from 'maplibre-gl';
// import 'maplibre-gl/dist/maplibre-gl.css';

// const Map = ({ coordinates, setCoordinates, setBounds, places }) => {
//   const mapContainer = useRef(null);
//   const map = useRef(null);

//   useEffect(() => {
//     if (map.current) return;

//     map.current = new maplibregl.Map({
//       container: mapContainer.current,
//       style: 'https://tiles.stadiamaps.com/styles/osm_bright.json',
//       center: [coordinates.lng, coordinates.lat],
//       zoom: 12,
//     });

//     map.current.addControl(new maplibregl.NavigationControl(), 'top-right');

//     map.current.on('moveend', () => {
//       const bounds = map.current.getBounds();
//       setBounds({
//         sw: bounds.getSouthWest().wrap(),
//         ne: bounds.getNorthEast().wrap(),
//       });
//       const center = map.current.getCenter();
//       setCoordinates({ lat: center.lat, lng: center.lng });
//     });
//   }, []);

//   useEffect(() => {
//     if (!map.current) return;

//     // Add markers for places
//     places.forEach((place) => {
//       if (place.latitude && place.longitude) {
//         new maplibregl.Marker()
//           .setLngLat([Number(place.longitude), Number(place.latitude)])
//           .addTo(map.current);
//       }
//     });
//   }, [places]);

//   return (
//     <div ref={mapContainer} style={{ width: '100%', height: '90vh' }} />
//   );
// };

// export default Map;



//==============================================================================================================

// import React, { useEffect, useRef } from 'react';
// import maplibregl from 'maplibre-gl';
// import 'maplibre-gl/dist/maplibre-gl.css';
// import './Map.css'; // for marker styling

// const Map = ({ coordinates, setCoordinates, setBounds, places }) => {
//   const mapContainer = useRef(null);
//   const map = useRef(null);

//   useEffect(() => {
//     if (map.current) return;

//     map.current = new maplibregl.Map({
//       container: mapContainer.current,
//       style: 'https://tiles.stadiamaps.com/styles/osm_bright.json',
//       center: [coordinates.lng, coordinates.lat],
//       zoom: 13,
//     });

//     map.current.addControl(new maplibregl.NavigationControl(), 'top-right');

//     map.current.on('moveend', () => {
//       const bounds = map.current.getBounds();
//       setBounds({
//         sw: bounds.getSouthWest().wrap(),
//         ne: bounds.getNorthEast().wrap(),
//       });
//       const center = map.current.getCenter();
//       setCoordinates({ lat: center.lat, lng: center.lng });
//     });
//   }, []);

//   useEffect(() => {
//     if (!map.current || !places) return;

//     // Remove existing markers if any (prevent duplicates)
//     document.querySelectorAll('.custom-marker').forEach((el) => el.remove());

//     places.forEach((place) => {
//       if (place.latitude && place.longitude) {
//         const el = document.createElement('div');
//         el.className = 'custom-marker';

//         // Place image inside marker
//         el.innerHTML = `
//           <img src="${place.photo?.images?.small?.url || 'https://via.placeholder.com/50'}"
//                alt="${place.name}" 
//                title="${place.name}" />
//         `;

//         new maplibregl.Marker(el)
//           .setLngLat([Number(place.longitude), Number(place.latitude)])
//           .addTo(map.current);
//       }
//     });
//   }, [places]);

//   return (
//     <div ref={mapContainer} style={{ width: '100%', height: '90vh' }} />
//   );
// };

// export default Map;


import React, { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './Map.css';

const Map = ({ coordinates, setCoordinates, setBounds, places }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const markersRef = useRef([]);

  useEffect(() => {
    if (map.current ) return;

    

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: 'https://tiles.stadiamaps.com/styles/osm_bright.json',
      center: [coordinates.lng, coordinates.lat],
      zoom: 13,
    });

    map.current.addControl(new maplibregl.NavigationControl(), 'top-right');

    map.current.on('moveend', () => {
      const bounds = map.current.getBounds();
      const center = map.current.getCenter();
      setBounds({
        sw: bounds.getSouthWest().wrap(),
        ne: bounds.getNorthEast().wrap(),
      });
      setCoordinates({ lat: center.lat, lng: center.lng });
    });
  }, []);

  useEffect(() => {
    if (!map.current || !places || places.length === 0) return;

    console.log('Rendering markers for:', places.length, 'places');

    // Clear old markers
    markersRef.current.forEach((marker) => marker.remove());
    markersRef.current = [];

    places.forEach((place) => {
      if (place.latitude && place.longitude) {
        const markerEl = document.createElement('div');
        markerEl.className = 'custom-marker';

        const img = document.createElement('img');
        img.src = place.photo?.images?.small?.url || 'https://via.placeholder.com/50';
        img.alt = place.name || 'Place';
        img.title = place.name || '';

        markerEl.appendChild(img);

        const newMarker = new maplibregl.Marker(markerEl)
  .setLngLat([Number(place.longitude), Number(place.latitude)])
  .addTo(map.current);

markersRef.current.push(newMarker);
      }
    });
  }, [places]);

  return <div ref={mapContainer} style={{ width: '100%', height: '90vh' }} />;
};

export default Map;
