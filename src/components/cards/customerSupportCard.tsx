import { Typography, Avatar, Button } from "@mui/material";
import { HeadphonesIcon } from "../icons";
import { BaseCard } from "./baseCard";
import { CustomLink } from "../CustomLink/customLink";

export const CustomerSupportCard = () => {
  return (
    <BaseCard
      HeaderIcon={HeadphonesIcon}
      title="Customer support"
      CardBody={
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar
            src="https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg"
            sx={{
              marginRight: "22px",
            }}
          />
          <Typography fontSize="15px">Simone is here to help you.</Typography>
        </div>
      }
      CardFooter={
        <Button
          sx={{
            textTransform: "none",
            width: "168px",
            height: "50px",
            bgcolor: "#21B8F9",
            fontWeight: 600,
          }}
          disableElevation
          variant="contained"
        >
          Contact us
        </Button>
      }
    />
  );
};
