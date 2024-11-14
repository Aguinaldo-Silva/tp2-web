import React from 'react';
import MuiAvatar from '@mui/material/Avatar';

interface AvatarProps {
  src: string;
  alt: string;
  style?: React.CSSProperties;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, style }) => {
  return <MuiAvatar src={src} alt={alt} style={style} />;
};

export default Avatar;