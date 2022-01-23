import React, { ReactChildren } from "react";
import Label from "../inputs/Label";
export interface FieldInt {
  children: any;
  label: ReactChildren;
  widthGroup: { bp: string; col: number }[];
}

export default function Field({ label, children, widthGroup }: FieldInt) {
  const getClasses = (): string => {
    let classes = "";
    if (widthGroup.length > 0) {
      widthGroup.forEach(item => {
        classes += ` a-col--${item.bp}-${item.col}`;
      });
    }
    return classes;
  };
  return (
    <div className={`a-field ${getClasses()}`}>
      {label ? <Label>{label}</Label> : null}
      {children}
    </div>
  );
}
