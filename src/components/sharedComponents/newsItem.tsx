import React from "react";
import { NewsItemType } from "../../@types/newsItemType";
import { Box, Typography, Link } from "@mui/material";

export const NewsItem: React.FC<NewsItemType> = ({
  category,
  content,
  imgUrl,
  url,
}: NewsItemType) => {
  return (
    <Box display="flex" margin={2} flexBasis="20%">
      <img src="#" alt="news item image" width="100px" height="100px" />
      <Box display="flex" flexDirection="column" marginLeft="16px">
        <Typography
          fontWeight={500}
          fontSize="11px"
          color="#21B8F9"
          textTransform="uppercase"
        >
          Hello this is category
        </Typography>
        <Typography fontWeight={500} fontSize="15px">
          Hello this is content
        </Typography>
        <Link href="#" sx={{ fontSize: "12px", fontWeight: 300 }}>
          go to link 😊
        </Link>
      </Box>
    </Box>
  );
};
