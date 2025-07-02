import React from'react';
import {Box,Typography,Button,Card,CardMedia,CardContent,CardActions,Chip,Rating} from  '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

import useStyles from './styles';

const PlaceDetails=({place})=>{

    const classes = useStyles();

    console.log(place);
    return (
         <Card elevation={3}>
      {/* Place Image */}
      <CardMedia
        style={{ height: 200 }}
        image={
          place.photo?.images?.large?.url ||
          'https://via.placeholder.com/400x200?text=No+Image'
        }
        title={place.name}
      />

      {/* Place Info */}
      <CardContent>
        <Typography gutterBottom variant="h6">
          {place.name}
        </Typography>

        {/* Rating & Reviews */}
        {place.rating && (
          <Box display="flex" justifyContent="space-between" my={1}>
            <Rating value={Number(place.rating)} readOnly precision={0.1} />
            <Typography variant="subtitle2">
              {place.num_reviews} review{place.num_reviews > 1 ? 's' : ''}
            </Typography>
          </Box>
        )}

        {/* Price and Ranking */}
        {place.price_level && (
          <Typography variant="body2">Price: {place.price_level}</Typography>
        )}
        {place.ranking && (
          <Typography variant="body2">Ranking: {place.ranking}</Typography>
        )}

        {/* Address */}
        {place.address && (
          <Typography
            variant="body2"
            color="text.secondary"
            mt={1}
          >
            <LocationOnIcon fontSize="small" sx={{ mr: 1 }} />
            {place.address}
          </Typography>
        )}

        {/* Phone */}
        {place.phone && (
          <Typography
            variant="body2"
            color="text.secondary"
            mt={0.5}
          >
            <PhoneIcon fontSize="small" sx={{ mr: 1 }} />
            {place.phone}
          </Typography>
        )}
      </CardContent>

      {/* Buttons */}
      <CardActions>
        {place.web_url && (
          <Button size="small" color="primary" href={place.web_url} target="_blank">
            TripAdvisor
          </Button>
        )}
        {place.website && (
          <Button size="small" color="primary" href={place.website} target="_blank">
            Website
          </Button>
        )}
      </CardActions>
    </Card>
    );
}

export default PlaceDetails;