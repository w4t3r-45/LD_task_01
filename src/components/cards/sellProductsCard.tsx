import { Typography } from "@mui/material";
import { BaseCard } from "./baseCard";
import { CustomLink } from "../CustomLink/customLink";
import {
  IPHONE_PICTURE_PATH,
  APP_STORE_PATH,
  GOOGLE_PLAY_PATH,
} from "../../helpers/iconsPaths";

export const SellProductsCard = () => {
  return (
    <BaseCard
      style={{
        boxShadow:
          "0px 4px 4px rgba(50, 50, 71, 0.08), 0px 4px 8px rgba(50, 50, 71, 0.06)",
        background: "#F3A35C",
        height: "349px",
      }}
      CardBody={
        <div style={{ maxWidth: "450px", margin: "auto", marginTop: "-20px" }}>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div>
              <Typography
                fontSize="22px"
                fontWeight={500}
                color="#ffffff"
                style={{ width: "162px", marginBottom: "13px" }}
              >
                Sell your products on your exclusive APP published on the stores
              </Typography>
              <CustomLink
                URL="#"
                linkIcnColor="#ffffff"
                linkTxtColor="#ffffff"
                content="Show more"
                hasIcon
              />
            </div>
            <img
              src={IPHONE_PICTURE_PATH}
              alt="iphone picture"
              width="105.23px"
              height="226.19px"
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "30px",
            }}
          >
            <img
              src={APP_STORE_PATH}
              alt="iphone picture"
              width="123.81px"
              height="38.25px"
            />
            <img
              src={GOOGLE_PLAY_PATH}
              alt="iphone picture"
              width="141px"
              height="40px"
            />
          </div>
        </div>
      }
    />
  );
};
