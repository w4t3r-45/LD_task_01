import React from "react";
import { Typography, Box, Link } from "@mui/material";
import { SliderItemType } from "../../@types/sliderIRelatedTypes";

export const SliderItem: React.FC<SliderItemType> = ({
  bgcolor,
  title,
  TopChild,
}: SliderItemType) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{
        width: "152px",
      }}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        mb="12px"
        sx={{
          borderRadius: "10px",
          height: "152px",
          backgroundColor: bgcolor,
        }}
      >
        <TopChild />
      </Box>
      <Typography fontSize="17px">{title}</Typography>
    </Box>
  );
};
