import React from 'react'
import {Box, Stack, Typography} from "@mui/material"
import Loader from './Loader'

const ExerciseVideos = ({exerciseVideos, name}) => {
  
  return (
    <Box sx={{marginTop:{lg:'200px', xs:"20px"}}} p="20px">
        <Typography variant='h3' mb="33px">
            Watch <spna style={{color:'#ff2625', textTransform:"captalize"}}>{name}</spna> exercise videos
        </Typography>

        <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center" sx={{flexDirection:{lg:"row"}, gap:{lg:'100px',xs:"0"}}}>
            {exerciseVideos.length? exerciseVideos.slice(0,6).map((item,index)=>(
                <>
                <a key={index} className="exercise-video" href={`https://www.youtube.com/watch?v=${item.video.videoId}`} target="_blank" rel="noreferrer">   
                <img src={item.video.thumbnails[0].url} alt={item.video.name}/>
                <Typography color="#000" fontWeight="bold">{item.video.title}</Typography>
                <Typography color="#000" >{item.video.channelName}</Typography>
                </a>
                </>
            )) : <Loader/>}
        </Stack>
    </Box>
  )
}

export default ExerciseVideos