import React from 'react';
import MuiCheckbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  style?: React.CSSProperties;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange, style }) => {
  return (
    <FormControlLabel
      control={<MuiCheckbox checked={checked} onChange={(e) => onChange(e.target.checked)} />}
      label={label}
      style={style}
    />
  );
};

export default Checkbox;