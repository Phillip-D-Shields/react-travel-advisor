import axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";


export const getPlacesData = async (sw, ne) => {
  try {
    // req
    const {
      data: { data },
    } = await axios.get(URL, {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lng,
          bl_longitude: sw.lat,
          tr_longitude: ne.lng,
        },
        headers: {
          "X-RapidAPI-Key": "38fcf7fcfamshc75632e3ce098bdp1db136jsn816d2fbc625e",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      });

    return data;
  } catch (error) {
    console.log(error);
  }
};
