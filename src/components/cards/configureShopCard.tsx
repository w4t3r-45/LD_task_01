import { Typography, useTheme } from "@mui/material";
import { ToolIcon } from "../icons";
import { BaseCard } from "./baseCard";
import { CustomLink } from "../CustomLink/customLink";

export const ConfigureShopCard = () => {
  const theme = useTheme();
  return (
    <BaseCard
      HeaderIcon={ToolIcon}
      title="Configure your shop"
      CardBody={
        <>
          <Typography
            fontWeight={600}
            fontSize="34px"
            color="#FFA26B"
            mb="20px"
            children={
              <>
                <span>45%</span>
                <span
                  style={{
                    fontSize: "15px",
                    fontWeight: 500,
                    display: "block",
                  }}
                >
                  Completed
                </span>
              </>
            }
          />
          <Typography fontSize="17px" color={theme.palette.text.secondary}>
            Complete all the steps to have a complete shop to best present to
            your customers.
          </Typography>
        </>
      }
      CardFooter={<CustomLink URL="#" content="Complete the setup! " hasIcon />}
    />
  );
};
