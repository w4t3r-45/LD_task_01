import { Typography } from "@mui/material";
import { MenuIcon } from "../icons";
import { BaseCard } from "./baseCard";
import { CustomLink } from "../CustomLink/customLink";

export const OrdersCard = () => {
  return (
    <BaseCard
      hasFilter
      HeaderIcon={MenuIcon}
      title="Orders"
      CardBody={
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography fontWeight={400} fontSize="17px">
              Orders received:
            </Typography>
            <Typography fontWeight={500} fontSize="17px">
              156
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography fontWeight={400} fontSize="17px">
              Earnings:
            </Typography>
            <Typography fontWeight={500} fontSize="17px">
              € 1893,24
            </Typography>
          </div>
        </div>
      }
      CardFooter={
        <CustomLink URL="#" content="10 free tips to increase your sales" />
      }
    />
  );
};
