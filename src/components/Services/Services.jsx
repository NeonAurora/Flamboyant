import React from "react";
import SoftwareDev from "components/Services/SoftwareDev";
import { Box } from "@mui/material";
import AndroidDev from "components/Services/AndroidDev";
import CloudEngineering from "components/Services/CloudEngineering";
import UIDesigning from "components/Services/UIDesigning";

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
