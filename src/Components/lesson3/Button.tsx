import React from 'react';

type ButtonProps = {
  title: string | number;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<ButtonProps> = ({ title, className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
