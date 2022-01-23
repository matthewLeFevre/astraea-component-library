import React, { ReactChildren } from "react";
import Icon, { IconInt } from "../images/Icon";

export default function Alert({
  severity = "low",
  children,
  icon,
}: {
  icon?: IconInt;
  children: ReactChildren;
  severity?: string;
}) {
  return (
    <div className={`a-alert--${severity}`}>
      {icon ? (
        <Icon
          src={icon.src}
          width={icon.width}
          height={icon.height}
          alt={icon.alt}
        />
      ) : null}
      <div className='a-alert__body'>{children}</div>
    </div>
  );
}
