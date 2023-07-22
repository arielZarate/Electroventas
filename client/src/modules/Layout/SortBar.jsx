import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Typography from "@mui/material/Typography";

import { IconButton, MenuItem } from "@mui/material";

import NorthRoundedIcon from "@mui/icons-material/NorthRounded";
import SouthRoundedIcon from "@mui/icons-material/SouthRounded";

const values = ["name", "stock", "price"];

export default function SortBar({ setSort }) {
  //const { get, url } = useSelector(({ state }) => state.server);
  const [type, setType] = useState({ key: "name", value: null });
  const [module, setModule] = useState([]);

  /*   const getModule = () => {
    get(url + `/dev/module/product`).then((res) => {
      setModule(res.data.filter((e) => values.includes(e.key)));
    });
  };

  useEffect(() => {
    getModule();
  }, [module.length > 0 ? null : module]); */

  const handleSort = (item) => {
    setType({ key: item.key, value: type.value === null ? true : !type.value });
    setSort({ [item.key]: type.value ? 1 : -1 });
  };
  return (
    <div className="relative w-full h-[100%] flex flex-row justify-start items-center py-5 text-gray ">
      {module &&
        module.map((e, i) => {
          return (
            <MenuItem
              key={i}
              disableGutters
              disableRipple
              disableTouchRipple
              //desabled hover
              sx={{ "&:hover": { backgroundColor: "transparent" } }}
            >
              <Typography sx={{ color: "gray" }}>{e.key}</Typography>

              <IconButton
                sx={{ ml: 1 }}
                onClick={() => {
                  handleSort(e);
                }}
              >
                {type.value && type.key === e.key ? (
                  <NorthRoundedIcon fontSize="small" />
                ) : (
                  <SouthRoundedIcon fontSize="small" />
                )}
              </IconButton>
            </MenuItem>
          );
        })}
    </div>
  );
}
