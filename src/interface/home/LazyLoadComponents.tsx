"use client";

import dynamic from "next/dynamic";

const Description = dynamic(() => import("interface/home/Description"));
const ToolBox = dynamic(() => import("interface/home/ToolBox"));
const Projects = dynamic(() => import("interface/home/Projects"));
const StartToday = dynamic(() => import("interface/home/StartToday"));
const SayHey = dynamic(() => import("interface/home/SayHey"));

export default function LazyLoadComponents({ device }: DeviceType) {
  return (
    <>
      <Description device={device} />
      <ToolBox device={device} />
      <Projects device={device} />
      <StartToday device={device} />
      <SayHey device={device} />
    </>
  );
}