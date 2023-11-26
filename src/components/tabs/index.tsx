import React, { useState } from "react";
import Tab from "../tab";
import { TabsWrapper } from "./styles";

interface TabList {
  name: string;
}
interface TabsProps {
  list: TabList[];
  defaultTab: string;
}
const Tabs = ({ list, defaultTab }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const handleOnTabClick = (value: string) => {
    setActiveTab(value);
  };
  return (
    <TabsWrapper>
      {list.map((item) => (
        <Tab
          key={item.name}
          label={item.name}
          active={item.name === activeTab ? "true" : "false"}
          onClick={() => handleOnTabClick(item.name)}
        />
      ))}
    </TabsWrapper>
  );
};

export default Tabs;
