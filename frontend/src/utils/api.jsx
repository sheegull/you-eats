import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
  method: "GET",
  url: BASE_URL,
  params: { q: "desp", hl: "en", gl: "US" },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
