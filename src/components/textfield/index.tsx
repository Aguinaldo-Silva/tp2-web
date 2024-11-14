import React from 'react';
import MuiTextField from '@mui/material/TextField';

interface TextFieldProps {
  value: string;
  onChange: (value: string) => void;
  style?: React.CSSProperties;
}

const TextField: React.FC<TextFieldProps> = ({ value, onChange, style }) => {
  return <MuiTextField value={value} onChange={(e) => onChange(e.target.value)} style={style} />;
};

export default TextField;