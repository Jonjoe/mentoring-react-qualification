import * as React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

function Button(props: ButtonProps): JSX.Element {
  const { onClick, label } = props;

  return <button onClick={onClick}>{label}</button>;
}

export default Button as React.FC<ButtonProps>;
