export const BASE_URL = "https://exercisedb.p.rapidapi.com";
export const YOUTUBE_SEARCH_BASE_URL =
  "https://youtube-search-and-download.p.rapidapi.com";

export const endPoint = {
  ALL_EXERCISES: "/exercises",
  BODY_PART_LIST: "/exercises/bodyPartList",
  BODY_PART_EXERCISE: (bodyPartName) => `/exercises/bodyPart/${bodyPartName}`,
  EXERCISE_DETAILS: (exerciseId) => `/exercises/exercise/${exerciseId}`,
  TARGET_EXERCISE: (target)=> `/exercises/target/${target}`,
  EQUIPMENT_EXERCISE: (equipment)=> `/exercises/equipment/${equipment}`,
  EXERCISE_YOUTUBE_VIDEO: (exerciseName) => `/search?query=${exerciseName}&type=v`
};

export const fetchDataOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeDataOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
}

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
