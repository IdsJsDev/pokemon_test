import React from 'react';
import { Button, ButtonProps } from '@mui/material';
const ButtonUi: React.FC<ButtonProps> = (props) => {
  return <Button sx={{
    minHeight: '40px',
    padding: '0 20px',
    fontWeight: 'bold'
  }} {...props}/>;
};

export default ButtonUi;
