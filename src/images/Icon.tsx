import React from "react";

export interface IconInt {
  src: string;
  alt: string;
  height: string | number;
  width: string | number;
}

export default function Icon({ src, alt, height, width }: IconInt) {
  return <img src={src} alt={alt} height={height} width={width} />;
}
