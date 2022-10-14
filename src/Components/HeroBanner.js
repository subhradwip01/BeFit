import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png"

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: {
          lg: "212px",
          xs: "70px",
        },
        ml: {
          sm: "50px",
        },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        BE FIT
      </Typography>
      <Typography fontWeight={700} sx={{fontSize:{lg:'44px',xs:"40px"}}} mb="25px" mt="30px">
        A Fit body <br/> means perfect life
      </Typography>
      <Typography mb={3}>
        Checkout the most effective excercise
      </Typography>
      <Button variant="contained" color="error" href="#excercise">Explore Excercise</Button>
      <Typography fontWeight={600} color="#ff2625" sx={{
        opacity:0.1,
        display:{lg:"block",xs:"none"}
      }}
      mt="20px"
      fontSize="180px"
     
      >DO EXERCISE</Typography>

      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
