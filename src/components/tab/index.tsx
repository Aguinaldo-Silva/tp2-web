import React from 'react';
import MuiTabs from '@mui/material/Tabs';
import MuiTab from '@mui/material/Tab';

interface TabProps {
  labels: string[];
  activeTab: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
  style?: React.CSSProperties;
}

const Tab: React.FC<TabProps> = ({ labels, activeTab, onChange, style }) => {
  return (
    <MuiTabs value={activeTab} onChange={onChange} style={style}>
      {labels.map((label, index) => (
        <MuiTab key={index} label={label} />
      ))}
    </MuiTabs>
  );
};

export default Tab;