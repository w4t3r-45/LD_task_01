import React from "react";
import Slick from "react-slick";
import { useMediaQuery, useTheme } from "@mui/material";
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
        {data.map((item) => (
          <SliderItem
            TopChild={item.TopChild}
            bgcolor={item.bgcolor}
            title={item.title}
          />
        ))}
      </Slick>
    </div>
  );
};
