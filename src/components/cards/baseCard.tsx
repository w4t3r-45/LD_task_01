import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  CardActions,
} from "@mui/material";
import { FilterMenu } from "../FilterMenu";
import { BaseCardType } from "../../@types/baseCardType";

export const BaseCard: React.FC<BaseCardType> = ({
  CardBody,
  CardFooter,
  hasFilter,
  HeaderIcon,
  title,
  style,
  headerLink,
}: BaseCardType) => {
  return (
    <Card
      sx={{
        padding: "5px 2.5px",
        minHeight: "220px",
        borderRadius: "10px",
        ...style,
      }}
      elevation={3}
    >
      <CardHeader
        avatar={HeaderIcon && <HeaderIcon />}
        title={
          title && (
            <Typography fontSize="20px" fontWeight={500}>
              {title}
            </Typography>
          )
        }
        action={
          (hasFilter && <FilterMenu type="date" />) ||
          (headerLink && headerLink)
        }
      />
      <CardContent sx={{ minHeight: "100px" }}>{CardBody}</CardContent>
      <CardActions sx={{ marginLeft: "12px", marginBottom: "14px" }}>
        {CardFooter}
      </CardActions>
    </Card>
  );
};
