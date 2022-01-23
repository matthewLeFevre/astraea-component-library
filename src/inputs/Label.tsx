import React, { ReactChildren } from "react";

export default function Label({ children }: { children: ReactChildren }) {
  return <label className='a-label'>{children}</label>;
}
