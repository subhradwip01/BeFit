import React,{useState,useEffect} from "react"
import {BASE_URL, fetchData, fetchDataOptions,endPoint} from "../utils/fetchData"
import {Box,Typography,Stack,Pagination} from "@mui/material"
import ExerciseCard from "./ExerciseCard"

const Exercises = ({exercises,setExercises,bodyPart}) =>{
    const [currentPage, setCurrentPage] = useState(1)
    useEffect(()=>{
        const fetchAllExercises= async (end_point_name) => {
            const data=await fetchData(BASE_URL + end_point_name, fetchDataOptions);
            setExercises(data);
          }
        if(bodyPart==="all"){
            fetchAllExercises(endPoint.ALL_EXERCISES);
        }  else {
            fetchAllExercises(endPoint.BODY_PART_EXERCISE(bodyPart))
        }
    },[bodyPart,setExercises])
    const exercisesPerPage=9
    const indexOfLastExercises= currentPage * exercisesPerPage;
    const indexOfFirstExercise= indexOfLastExercises - exercisesPerPage;

    const currentExercises = React.useMemo(()=>exercises.slice(indexOfFirstExercise,indexOfLastExercises),[exercises,currentPage]);

    const paginate=(e,value)=>{
        setCurrentPage(value)
    }


    return (
    <Box id="exercises" sx={{mt:{lg:"110px"}}} mt="50px" p="20px">
        <Typography variant="h3" mb="46px">Showing Results</Typography>
        <Stack direction="row" sx={{gap:{lg:"110px",xs:"50px"}}} flexWrap="wrap" justifyContent="center">
            {currentExercises.map((exercise,index)=>(
                <ExerciseCard key={index} exercise={exercise}/>
            ))}
        </Stack>
        <Stack mt="100px" alignItems="center">
            {exercises.length > exercisesPerPage && <Pagination color="standard" shape="rouded" count={Math.ceil(exercises.length/exercisesPerPage)} page={currentPage} onChange={(e,val)=>paginate(e,val)} size="large"/>}
        </Stack>
    </Box> 
    )

}

export default Exercises