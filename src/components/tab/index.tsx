import React from "react";
import { TabComponent } from "./styles";

interface TabProps {
  label: string;
  active: string;
  onClick: () => void;
}
const Tab = ({ label, active, onClick }: TabProps) => {
  return (
    <TabComponent onClick={onClick} isactive={active}>
      {label}
    </TabComponent>
  );
};

export default Tab;
