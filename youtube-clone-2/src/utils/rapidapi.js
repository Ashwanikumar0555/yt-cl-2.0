import axios from "axios";

const API_KEY=import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL="https://youtube138.p.rapidapi.com";

const options = {
 
  headers: {
    "x-rapidapi-key": API_KEY,
    "x-rapidapi-host": 'youtube138.p.rapidapi.com',
  },
};

export const fetchData=async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (error) {
    console.error("error fetching api data: ", error);
    throw error;
  }
}

////////////////////////////////////
// import axios from "axios";

// const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY; // Ensure the API_KEY is correctly set in the environment variables
// const BASE_URL = "https://youtube138.p.rapidapi.com";


// if (!API_KEY) {
//   throw new Error("Missing API Key. Please set VITE_YOUTUBE_API_KEY in your environment variables.");
// }

// export const fetchData = async (url, params = {}) => {
//   try {
//     // Make the API call with dynamic params
//     const response = await axios.get(`${BASE_URL}/${url}`, {
//       method: "GET",
//       headers: {
//         "x-rapidapi-key": API_KEY,
//         "x-rapidapi-host": "youtube138.p.rapidapi.com",
//       },
//       params, // Attach query parameters dynamically
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching API data:", error.message);
//     throw new Error(`Failed to fetch data from API: ${error.message}`);
//   }
// };

