import React from 'react';
import MuiTypography from '@mui/material/Typography';

interface TypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'body1';
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const Typography: React.FC<TypographyProps> = ({ variant, children, style }) => {
  return <MuiTypography variant={variant} style={style}>{children}</MuiTypography>;
};

export default Typography;