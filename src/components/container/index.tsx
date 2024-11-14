import React from 'react';
import MuiContainer from '@mui/material/Container';

interface ContainerProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const Container: React.FC<ContainerProps> = ({ children, style }) => {
  return <MuiContainer style={style}>{children}</MuiContainer>;
};

export default Container;