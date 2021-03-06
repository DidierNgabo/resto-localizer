import axios from 'axios';

const URL =
  'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlacesData = async (bounds) => {
  try {
    const response = await axios.get(URL, {
      params: {
        bl_latitude: bounds.sw.lat,
        tr_latitude: bounds.ne.lat,
        bl_longitude: bounds.sw.lng,
        tr_longitude: bounds.ne.lng,
      },
      headers: {
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_TRAVEL_API_KEY,
      },
    });

    console.log(response.data.data);

    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};
