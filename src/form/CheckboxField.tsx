import React from "react";
import Checkbox, { CheckboxInt } from "../inputs/Checkbox";
import Label from "../inputs/Label";
import Field, { FieldInt } from "./Field";

export interface CheckboxFieldInt extends FieldInt, CheckboxInt {}

export default function CheckboxField({
  widthGroup,
  label,
  value,
  checked,
  onChange,
  name,
}: CheckboxFieldInt) {
  return (
    <Field {...{ widthGroup, label }}>
      <Checkbox {...{ value, checked, onChange, name }} />
    </Field>
  );
}
