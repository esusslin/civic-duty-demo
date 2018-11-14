import axios from "axios";

const API_KEY = "AIzaSyDM1_bzoRASgpWPquIlkj5u3hSAf6bA8jo";
const ROOT_URL = `https://www.googleapis.com/civicinfo/v2/representatives`;

export const FETCH_REPS = "FETCH_REPS";

export function fetchWeather(address) {
  const request = axios.get(ROOT_URL, {
    params: {
      key: API_KEY,
      address: address,
      electionId: 2000
    }
  });

  console.log("Request:", request);

  return {
    type: FETCH_REPS,
    payload: request
  };
}
