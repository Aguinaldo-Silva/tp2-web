import React from 'react';
import MuiSwitch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  style?: React.CSSProperties;
}

const Switch: React.FC<SwitchProps> = ({ checked, onChange, style }) => {
  return (
    <FormControlLabel
      control={<MuiSwitch checked={checked} onChange={(e) => onChange(e.target.checked)} />}
      label="Switch"
      style={style}
    />
  );
};

export default Switch;