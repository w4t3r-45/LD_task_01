import React from "react";
import Slick from "react-slick";
import { Skeleton, useMediaQuery, useTheme, Box } from "@mui/material";
import { SliderItem } from "../sharedComponents/sliderItem";
import { SliderType } from "../../@types/sliderIRelatedTypes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Slider: React.FC<SliderType> = ({ data }: SliderType) => {
  const them = useTheme();
  const mediaIsLarge = useMediaQuery(them.breakpoints.up(1973));
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: mediaIsLarge ? 3 : 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: mediaIsLarge ? "5px" : "40px",
  };
  return (
    <div
      style={{
        minWidth: "100%",
        width: 0,
      }}
    >
      <Slick {...settings}>
        {data
          ? data.map((item) => (
              <SliderItem
                key={item.id}
                imgLink={item.avatar}
                firstName={item.first_name}
                lastName={item.last_name}
              />
            ))
          : ["", "", "", "", ""].map((item, index) => (
              <Box key={`skeleton${index}`}>
                <Skeleton
                  variant="rectangular"
                  width={152}
                  height={152}
                  sx={{ borderRadius: "10px", marginBottom: "12px" }}
                />
                <Skeleton variant="rectangular" width="152px" height="20px" />
              </Box>
            ))}
      </Slick>
    </div>
  );
};
