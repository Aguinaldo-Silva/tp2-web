import React from 'react';
import MuiBox from '@mui/material/Box';

interface BoxProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const Box: React.FC<BoxProps> = ({ children, style }) => {
  return <MuiBox style={style}>{children}</MuiBox>;
};

export default Box;