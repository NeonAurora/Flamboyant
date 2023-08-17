import React from "react";
import SoftwareDev from "./SoftwareDev";
import { Box } from "@mui/material";
import AndroidDev from "./AndroidDev";
import CloudEngineering from "./CloudEngineering";
import UIDesigning from "./UIDesigning";

const Services = () => {
  return (
    <div>
      <Box gap="2vh" sx={{ marginLeft: "3%" }}>
        <Box display="flex" gap="3%">
          <SoftwareDev />
          <AndroidDev />
        </Box>
        <Box display="flex" gap="3%" sx={{ margin: "2% 3% 2% 1%", justifyContent: "flex-end"}}>
          <CloudEngineering />
          <UIDesigning />
        </Box>
      </Box>
    </div>
  );
};

export default Services;
