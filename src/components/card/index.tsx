import React from 'react';
import MuiCard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';

interface CardProps {
  title: string;
  content: string;
  style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({ title, content, style }) => {
  return (
    <MuiCard style={style}>
      <CardHeader title={title} />
      <CardContent>{content}</CardContent>
    </MuiCard>
  );
};

export default Card;