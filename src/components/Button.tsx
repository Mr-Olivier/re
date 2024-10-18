import React from "react";

interface Props {
  children: string;
  //   color?: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
  //   return <button className="btn btn-secondary">Button</button>;
  //   return <button className="btn btn-success">Button</button>;
  //   return <button className="btn btn-danger">Button</button>;
  //   return <button className="btn btn-warning">Button</button>;
  //   return <button className="btn btn-info">Button</button>;
  //   return <button className="btn btn-light">Button</button>;
  //   return <button className="btn btn-dark">Button</button>;
};

export default Button;
