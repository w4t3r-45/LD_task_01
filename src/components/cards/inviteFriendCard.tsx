import { Typography } from "@mui/material";
import { UsersIcon } from "../icons";
import { BaseCard } from "./baseCard";
import { CustomLink } from "../CustomLink/customLink";

export const InviteFriendCard = () => {
  return (
    <BaseCard
      HeaderIcon={UsersIcon}
      title="Invite friend"
      CardBody={
        <Typography fontSize="17px">
          <span style={{ color: "#00C48C", fontWeight: 700 }}>
            Receive 50 products{" "}
          </span>{" "}
          by inviting a friend who subscribes to a plan. Your friend will
          receive a 30% discount coupon valid for any plan.
        </Typography>
      }
      CardFooter={
        <CustomLink URL="#" content="Start inviting friends!" hasIcon />
      }
    />
  );
};
