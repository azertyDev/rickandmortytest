import { Tab } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import TabPanel from "@mui/lab/TabPanel";
import { TabContext, TabList } from "@mui/lab";
import { Box } from "@mui/system";
import { Characters } from "../pages/Characters/Characters";
import { Episodes } from "../pages/Episodes/Episodes";

export const Home = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Characters" value="1" />
            <Tab label="Episodes" value="2" />
            <Tab label="Locations" value="3" />
            <Tab label="WatchList" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Characters />
        </TabPanel>
        <TabPanel value="2">
          <Episodes />
        </TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
        <TabPanel value="4">Item Four</TabPanel>
      </TabContext>
    </>
  );
};
