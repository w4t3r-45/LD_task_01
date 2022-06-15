import { useEffect } from "react";
import { FileIcon } from "../icons";
import { BaseCard } from "./baseCard";
import { CustomLink } from "../CustomLink/customLink";
import { NewsItem } from "../sharedComponents/newsItem";
import { Box } from "@mui/material";
import { useNewsContext } from "../../CONTEXT";
import { useExtensionAction } from "../../CONTEXT/NewsContext/actions";

export const LastestNewsCard = () => {
  const { INIT_STATE } = useNewsContext();
  const { News__data_fetch } = useExtensionAction();

  useEffect(() => {
    News__data_fetch();
  }, []);

  return (
    <BaseCard
      HeaderIcon={FileIcon}
      headerLink={
        <CustomLink URL="#" content="Start inviting friends!" hasIcon />
      }
      title="Latest news"
      CardBody={
        <Box display="flex" flexWrap="wrap" justifyContent="left">
          {INIT_STATE.news__data?.map((item, index) => {
            console.log(item);
            return (
              <NewsItem
                category={item.lastname}
                content={item.email}
                imgUrl={item.image}
                url={item.website}
                key={`news${index}`}
              />
            );
          })}
        </Box>
      }
    />
  );
};
