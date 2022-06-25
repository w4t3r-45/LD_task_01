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
    <Box display="flex" margin={2} sx={{ width: "300px" }}>
      <img src={imgUrl} alt="news item image" width="100px" height="100px" />
      <Box
        display="flex"
        flexDirection="column"
        paddingLeft="16px"
        sx={{ overflow: "hidden" }}
      >
        <Typography
          fontWeight={500}
          fontSize="11px"
          color="#21B8F9"
          textTransform="uppercase"
        >
          {category}
        </Typography>
        <Typography fontWeight={500} fontSize="15px" noWrap>
          {content}
        </Typography>
        <Link
          href={url}
          target="_blank"
          sx={{ fontSize: "12px", fontWeight: 300, justifySelf: "flex-end" }}
        >
          go to link 😊
        </Link>
      </Box>
    </Box>
  );
};
