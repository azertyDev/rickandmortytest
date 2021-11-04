import { Tab } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import TabPanel from "@mui/lab/TabPanel";
import { TabContext, TabList } from "@mui/lab";
import { Box } from "@mui/system";
import { useFetchAllCharacterQuery } from "../../services/apiService";
import { CustomCard } from "../common/CustomCard/CustomCard";

export const Home = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading, error } = useFetchAllCharacterQuery({ page });

  const { results } = data;
  const [value, setValue] = useState("1");

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Item One" value="1" />
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" />
            <Tab label="Item Four" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
          {isLoading ? (
            <p>isLoading...</p>
          ) : (
            results?.map((item) => <CustomCard {...item} />)
          )}
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
        <TabPanel value="4">Item Four</TabPanel>
      </TabContext>
    </>
  );
};
