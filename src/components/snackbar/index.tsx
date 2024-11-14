import React from 'react';
import MuiSnackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

interface SnackBarProps {
  message: string;
  open: boolean;
  onClose: () => void;
  style?: React.CSSProperties;
}

const SnackBar: React.FC<SnackBarProps> = ({ message, open, onClose, style }) => {
  return (
    <MuiSnackbar open={open} autoHideDuration={6000} onClose={onClose} style={style}>
      <MuiAlert onClose={onClose} severity="info" sx={{ width: '100%' }}>
        {message}
      </MuiAlert>
    </MuiSnackbar>
  );
};

export default SnackBar;