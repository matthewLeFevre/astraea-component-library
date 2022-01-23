import React from "react";
export interface CheckboxInt {
  value: any;
  checked: boolean;
  name: string;
  onChange: Function;
}
export default function Checkbox({
  value,
  checked,
  name,
  onChange,
}: CheckboxInt) {
  return <div></div>;
}
