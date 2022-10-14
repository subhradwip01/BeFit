import { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollbar";
import {
  fetchData,
  fetchDataOptions,
  endPoint,
  BASE_URL,
} from "../utils/fetchData";


const SearchExercises = ({bodyPart,setExercises,setBodyPart}) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);


  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        BASE_URL + endPoint.BODY_PART_LIST,
        fetchDataOptions
      );
      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchExercisesData();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    let exercisesData =
      search &&
      (await fetchData(BASE_URL + endPoint.ALL_EXERCISES, fetchDataOptions));
    const filterdSearchedData = exercisesData.filter(
      (data) =>
        data.name.toLowerCase().includes(search) ||
        data.bodyPart.toLowerCase().includes(search) ||
        data.target.toLowerCase().includes(search) ||
        data.equipment.toLowerCase().includes(search)
    );
    console.log();
    setExercises(filterdSearchedData);
    setSearch("");
  };
  
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        {" "}
        Find the best <br /> Excercises for you{" "}
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
            },
            width: {
              lg: "800px",
              xs: "350px",
            },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          placeholder="Search Exercises"
        />
        <Button
          className="search-btn"
          sx={{
            backgroundColor: "#ff262f",
            color: "#fff",
            textTransform: "none",
            width: {
              lg: "175px",
              xs: "80px",
            },
            fontSize: {
              lg: "20px",
              xs: "14px",
            },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "realative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} bodyParts={bodyParts}/>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
