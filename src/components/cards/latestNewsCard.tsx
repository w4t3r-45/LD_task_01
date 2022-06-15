import { FileIcon } from "../icons";
import { BaseCard } from "./baseCard";
import { CustomLink } from "../CustomLink/customLink";
import { NewsItem } from "../sharedComponents/newsItem";
import { Box } from "@mui/material";

export const LastestNewsCard = () => {
  return (
    <BaseCard
      HeaderIcon={FileIcon}
      headerLink={
        <CustomLink URL="#" content="Start inviting friends!" hasIcon />
      }
      title="Latest news"
      CardBody={
        <Box display="flex" flexWrap="wrap" justifyContent="left">
          {["", "", "", "", ""].map((item, index) => (
            <NewsItem
              category=""
              content=""
              imgUrl=""
              url=""
              key={`news${index}`}
            />
          ))}
        </Box>
      }
    />
  );
};
