import axios from "axios";

const API_KEY = "AIzaSyDM1_bzoRASgpWPquIlkj5u3hSAf6bA8jo";
const ROOT_URL = `https://www.googleapis.com/civicinfo/v2/representatives`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(address) {
  const request = axios.get(ROOT_URL, {
    params: {
      key: API_KEY,
      address: "3726 Grand Ave Oakland CA",
      electionId: 2000
    }
  });

  console.log("Request:", request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
