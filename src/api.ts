import axios from "axios";

const API_KEY = "f33a484cf794d08d0148764789aaba32";
const URL = "https://api.openweathermap.org/data/2.5/weather";

export const fetchWeather = async (query: string) => {
  const { data } = await axios.get<any>(URL, {
    params: {
      q: query,
      units: "metric",
      APPID: API_KEY,
    },
  });

  return data;
};
