import { Typography } from "@mui/material";
import { EyeIcon } from "../icons";
import { BaseCard } from "./baseCard";
import { CustomLink } from "../CustomLink/customLink";

export const VisitorsCard = () => {
  return (
    <BaseCard
      hasFilter
      HeaderIcon={EyeIcon}
      title="Visitors"
      CardBody={
        <Typography fontWeight={500} fontSize="42px">
          1824
        </Typography>
      }
      CardFooter={
        <CustomLink
          URL="#"
          content="Do you want more visits? Contact us!"
          hasIcon
        />
      }
    />
  );
};
