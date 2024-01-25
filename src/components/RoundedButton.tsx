"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap/gsap-core";
import Magnetic from "components/Magnetic";
import React from "react";

export default function RoundedButton({
  disableHoverEffectOnMobile,
  children,
  onClick,
  className,
  ...attributes
}: {
  disableHoverEffectOnMobile?: boolean;
  children?: React.ReactNode;
  onClick: () => void;
  className: string;
}) {
  const circle = useRef(null);
  let timeline = useRef<any>(null);
  let timeoutId: any = null;

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 640) setIsMobile(true);
  }, []);

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
        "enter",
      )
      .to(
        circle.current,
        { top: "-150%", width: "125%", duration: 0.25 },
        "exit",
      );
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeline.current.tweenFromTo("enter", "exit");
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current.play();
    }, 300);
  };

  if (disableHoverEffectOnMobile) {
    return (
      <Magnetic>
        <button
          className={`${className} rounded-button relative flex cursor-pointer items-center justify-center rounded-full border-0 outline-none`}
          style={{ overflow: "hidden" }}
          onClick={onClick}
          onMouseEnter={() => {
            manageMouseEnter();
          }}
          onMouseLeave={() => {
            manageMouseLeave();
          }}
          {...attributes}
        >
          {children}
          {!isMobile && (
            <div
              ref={circle}
              className="absolute top-full h-[150%] w-full rounded-[50%] bg-hover-blue"
            />
          )}
        </button>
      </Magnetic>
    );
  }

  return (
    <Magnetic>
      <button
        className={`${className} rounded-button relative flex cursor-pointer items-center justify-center rounded-full`}
        style={{ overflow: "hidden" }}
        onClick={onClick}
        onMouseEnter={() => {
          manageMouseEnter();
        }}
        onMouseLeave={() => {
          manageMouseLeave();
        }}
        {...attributes}
      >
        {children}
        <div
          ref={circle}
          className="absolute top-full h-[150%] w-full rounded-[50%] bg-hover-blue"
        />
      </button>
    </Magnetic>
  );
}
