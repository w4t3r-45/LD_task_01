import React from "react";
import { Typography, Box, Skeleton } from "@mui/material";
import { SliderItemType } from "../../@types/sliderIRelatedTypes";

export const SliderItem: React.FC<SliderItemType> = ({
  firstName,
  imgLink,
  lastName,
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
          border: "1px dashed rgba(0,0,0,0.5)",
          background: `url(${imgLink}) no-repeat center center/cover`,
        }}
      ></Box>
      <Typography fontSize="17px">{`${firstName} ${lastName}`}</Typography>
    </Box>
  );
};
