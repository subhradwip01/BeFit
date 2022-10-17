import React, { useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import { Box } from "@mui/material"

import { fetchData, fetchDataOptions, BASE_URL, endPoint,YOUTUBE_SEARCH_BASE_URL, youtubeDataOptions  } from "../utils/fetchData";

import Details from  "../Components/Details"
import ExerciseVideos from "../Components/ExerciseVideos";
import SimilarExercises from "../Components/SimilarExercises";
import Loader from "../Components/Loader";

const ExerciseDetails = () =>{
    const [exerciseDetail,setExerciseDetail]=useState({});
    const [exerciseVideos, setExerciseVideos]=useState([]);
    const [targetExercises,setTargetExercises]=useState([])
    const [equipmentExercises,setEquipmentExercises]=useState([])
    const {id} = useParams();

    useEffect(()=>{
        const fetchExerciseDetails = async () =>{
            const exerciceDetails = await fetchData(BASE_URL+endPoint.EXERCISE_DETAILS(id),fetchDataOptions)
            setExerciseDetail(exerciceDetails);
            
            const exerciseVideosData= exerciceDetails && await fetchData(YOUTUBE_SEARCH_BASE_URL+endPoint.EXERCISE_YOUTUBE_VIDEO(exerciceDetails.name), youtubeDataOptions)
            setExerciseVideos(exerciseVideosData.contents);

            const targetMuscleExerciseData = exerciseDetail && await fetchData(BASE_URL+endPoint.TARGET_EXERCISE(exerciceDetails.target),fetchDataOptions);
            setTargetExercises(targetMuscleExerciseData);

            const equipmentExerciseData = exerciceDetails && await fetchData(BASE_URL+endPoint.EQUIPMENT_EXERCISE(exerciceDetails.equipment),fetchDataOptions)
            setEquipmentExercises(equipmentExerciseData);

        }
        fetchExerciseDetails();



    },[id])

    if(!exerciseDetail) {
        return <Loader/>
    }

    return  (
        <Box>
            <Details exerciseDetail ={exerciseDetail}/>
            <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
            <SimilarExercises targetExercises={targetExercises} equipmentExercises={equipmentExercises}/>
        </Box>
    )

}

export default ExerciseDetails