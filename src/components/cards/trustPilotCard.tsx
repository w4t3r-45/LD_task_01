import { Typography } from "@mui/material";
import { BaseCard } from "./baseCard";
import { CustomLink } from "../CustomLink/customLink";
import { TRUST_PILOT_PATH } from "../../helpers/iconsPaths";

export const TrustPilotCard = () => {
  return (
    <BaseCard
      HeaderIcon={() => (
        <img src={TRUST_PILOT_PATH} width="117px" height="28px" />
      )}
      style={{
        boxShadow:
          "0px 4px 4px rgba(50, 50, 71, 0.08), 0px 4px 8px rgba(50, 50, 71, 0.06)",
        borderRadius: "10px",
        background: "#000032",
      }}
      CardBody={
        <Typography fontSize="17px" color="#ffffff">
          Show us your love by leaving a{" "}
          <span style={{ color: "#00C48C" }}>positive</span> review on trust
          pilot and receive the extension of{" "}
          <span style={{ fontWeight: 700 }}>50 additional products</span>
        </Typography>
      }
      CardFooter={
        <CustomLink
          URL="#"
          linkIcnColor="#00C48C"
          linkTxtColor="#00C48C"
          content="Write a review on Trustpilot"
          hasIcon
        />
      }
    />
  );
};
