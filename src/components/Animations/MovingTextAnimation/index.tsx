"use client";

import dynamic from "next/dynamic";
const Desktop = dynamic(() => import("./Responsive").then((f) => f.Desktop));
const Mobile = dynamic(() => import("./Responsive").then((f) => f.Mobile));

export default function MovingTextAnimation({ device }: DeviceType) {
  const { isMobile, isTablet, isDesktop } = device;
  return (
    <>
      {isMobile && <Mobile />}
      {(isTablet || isDesktop) && <Desktop />}
    </>
  );
}