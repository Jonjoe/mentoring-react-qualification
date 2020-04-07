import React from "react";

interface InputProps {
  onChange: (value: string) => void;
  value: string;
}

function Input(props: InputProps): JSX.Element {
  const { onChange, value } = props;

  return (
    <input onChange={event => onChange(event.target.value)} value={value} />
  );
}

export default Input as React.FC<InputProps>;
