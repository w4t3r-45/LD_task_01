import { Grid } from "@mui/material";
import {
  VisitorsCard,
  OrdersCard,
  ConfigureShopCard,
  TrustPilotCard,
  CustomerSupportCard,
  InviteFriendCard,
  SellProductsCard,
  LastestNewsCard,
  ExtensionCard,
} from "../cards";

const RIGHT_CARDS = [
  ConfigureShopCard,
  TrustPilotCard,
  InviteFriendCard,
  CustomerSupportCard,
];

const LEFT_CARDS = [
  VisitorsCard,
  OrdersCard,
  SellProductsCard,
  ExtensionCard,
  LastestNewsCard,
];

export const CardsContainer = () => {
  return (
    <Grid
      container
      xs={12}
      sx={{ margin: "auto", marginTop: "-50px", padding: "0 40px" }}
    >
      <Grid
        container
        spacing={2}
        lg={8}
        xs={12}
        style={{
          display: "flex",
          alignContent: "flex-start",
          marginRight: "20px",
        }}
      >
        {LEFT_CARDS.map((Card, index) => (
          <Grid item md={index === 4 ? 12 : 6} xs={12}>
            <Card />
          </Grid>
        ))}
      </Grid>
      <Grid
        container
        lg={4}
        xs={12}
        spacing={2}
        style={{
          display: "flex",
          alignContent: "flex-start",
        }}
      >
        {RIGHT_CARDS.map((Card) => (
          <Grid item xs={12}>
            <Card />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
