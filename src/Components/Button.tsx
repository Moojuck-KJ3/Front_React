import React, { FC, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className? : string;
}

export const CustomButton: FC<ButtonProps> = ({ onClick, ...props }) => {
  return (
    <button onClick={onClick} {...props}>
      {props.children}
    </button>
  );
};

export default CustomButton;
