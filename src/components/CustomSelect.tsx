import React, { useState } from "react";
import { Box, MenuItem, FormControl, Typography } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { SelectBoxType } from "../@types/selectBoxType";

const handleChange = (
  event: SelectChangeEvent,
  setSvalue: React.Dispatch<React.SetStateAction<string>>
) => {
  console.log("hello");
  setSvalue(event.target.value);
};

export const CustomSelect: React.FC<SelectBoxType> = ({
  data,
  title,
}: SelectBoxType) => {
  const [value, setSvalue] = useState(data[0]);

  return (
    <Box sx={{ padding: "0 20px" }}>
      <FormControl
        fullWidth
        sx={{
          width: "115px",
          "& .MuiOutlinedInput-root": {
            borderRadius: "5px",
            width: "215px",
            height: "50px",
            fontSize: "1rem",
            fontWeight: 500,
          },
        }}
      >
        <Typography variant="body1" fontSize="15px" mb="15px">
          {title}
        </Typography>
        <Select
          onChange={(event: SelectChangeEvent) =>
            handleChange(event, setSvalue)
          }
          value={value}
        >
          {data.map((item) => (
            <MenuItem value={item} sx={{ minWidth: "115px" }}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
