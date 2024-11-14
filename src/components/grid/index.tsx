import React from 'react';
import MuiGrid from '@mui/material/Grid';

interface GridProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const Grid: React.FC<GridProps> = ({ children, style }) => {
  return <MuiGrid container spacing={2} style={style}>{children}</MuiGrid>;
};

export default Grid;