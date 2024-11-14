import React from 'react';
import MuiFab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

interface FabProps {
  onClick: () => void;
  style?: React.CSSProperties;
}

const Fab: React.FC<FabProps> = ({ onClick, style }) => {
  return (
    <MuiFab color="primary" onClick={onClick} style={style}>
      <AddIcon />
    </MuiFab>
  );
};

export default Fab;