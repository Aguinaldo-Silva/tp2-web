import React from 'react';
import MuiIconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

interface IconButtonProps {
  onClick: () => void;
  style?: React.CSSProperties;
}

const IconButton: React.FC<IconButtonProps> = ({ onClick, style }) => {
  return (
    <MuiIconButton onClick={onClick} style={style}>
      <SearchIcon />
    </MuiIconButton>
  );
};

export default IconButton;