import React, { useState } from "react";
import { FilterMenuType } from "../../@types/filterMenuType";
import { Menu, MenuItem, Button } from "@mui/material";
import { ArrowDownIcon } from "../icons";
import { FILTER_MENU_CONFIG } from "./FILTER_MENU_CONFIG";

const handleClick = (
  event: React.MouseEvent<HTMLElement>,
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>
) => {
  setAnchorEl(event.currentTarget);
};
const handleSelect = (
  option: string,
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>,
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>
) => {
  setSelectedOption(option);
  setAnchorEl(null);
};
const handleClose = (
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>
) => {
  setAnchorEl(null);
};

export const FilterMenu: React.FC<FilterMenuType> = ({
  type,
}: FilterMenuType) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedOption, setSelectedOption] = useState(FILTER_MENU_CONFIG[0]);
  const open = Boolean(anchorEl);

  return (
    <div>
      <Button
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={(event) => handleClick(event, setAnchorEl)}
        sx={{
          textTransform: "none",
          color: "#666666",
          fontSize: "14px",
          fontWeight: 400,
        }}
      >
        {selectedOption}
        <ArrowDownIcon style={{ marginLeft: "0.5rem" }} color="#666666" />
      </Button>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose(setAnchorEl)}
        PaperProps={{
          style: {
            width: "20ch",
          },
        }}
      >
        {FILTER_MENU_CONFIG.map((option) => (
          <MenuItem
            key={option}
            selected={option === selectedOption}
            onClick={() => handleSelect(option, setAnchorEl, setSelectedOption)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
