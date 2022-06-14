import { Typography, styled } from "@mui/material";

const StyledBox = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 182px;
  background: linear-gradient(
    180deg,
    #21b8f9 0%,
    rgba(33, 184, 249, 0) 132.05%
  );
  padding: 40px 37px 0 37px;
`;

export const DashboardWelcome = () => {
  return (
    <StyledBox>
      <Typography variant="body1" fontSize="34px" color="#fff">
        welcome Mario!
      </Typography>
      <div>
        <a
          href="http://app.vetrinalive.it/fenoh-store"
          target="_blank"
          style={{ fontSize: "17px", fontWeight: 500, color: "#fff" }}
        >
          app.vetrinalive.it/fenoh-store
        </a>
      </div>
    </StyledBox>
  );
};
