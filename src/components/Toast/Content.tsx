"use client";

import { TransitionProps } from "@mui/material/transitions";
import { MotionButton, MotionDiv } from "utils/FramerMotion";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useAnimationControls } from "framer-motion";
import { useEffect, useRef } from "react";
import { Snackbar } from "@mui/material";
import Image from "next/image";

export interface ToastContentProps {
  Open: boolean;
  MessageTitle: string;
  MessageDescription: string;
  HideDuration: number;
  Icon: string;
  Color: string;
  Vertical: "top" | "bottom";
  Horizontal: "left" | "center" | "right";
  onClose: () => void;
  Transition: React.ComponentType<
    TransitionProps & {
      children: React.ReactElement<any, any>;
    }
  >;
}

export default function ToastContent(props: ToastContentProps) {
  const animate = useAnimationControls();
  const progressRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClose = (event: React.SyntheticEvent | Event, reason: string) => {
    if (reason === "clickaway") {
      return;
    }
    if (reason === "escapeKeyDown") {
      return;
    } else {
      props.onClose();
    }
  };

  const handlePointerEnter = () => {
    animate.stop();
  };

  const handlePointerLeave = () => {
    animate.start({
      width: "0%",
      transition: { duration: ResumeTime() },
    });
  };

  const handleAnimationComplete = () => {
    const progress = progressRef.current;
    if (progress) {
      const width = progress.offsetWidth;
      if (width < 1 || width == 0) props.onClose();
    }
  };

  const ResumeTime = () => {
    const progress = progressRef.current;
    const container = containerRef.current;
    if (progress && container) {
      const currentWidth = progress.offsetWidth;
      const totalWidth = container.offsetWidth;
      const getWidth = currentWidth / totalWidth;
      const calculatedWidth = getWidth * 100;
      const percentage = parseInt(calculatedWidth.toString().split(".")[0]);
      const decibel = percentage / 100;
      return decibel * props.HideDuration;
    }
  };

  useEffect(() => {
    animate.start({ width: "0%" });
  }, [props.Open]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Snackbar
      open={props.Open}
      onClose={handleClose}
      TransitionComponent={props.Transition}
      disableWindowBlurListener
      anchorOrigin={{
        vertical: props.Vertical,
        horizontal: props.Horizontal,
      }}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      className="z-10"
    >
      <div
        className={`${props.Color} Toast-DropShadow flex h-full flex-col overflow-hidden rounded-xl border border-solid border-white/20 text-white md:max-w-[500px]`}
      >
        <div className="flex h-full w-full space-x-3 px-1 pt-1">
          <div className="flex h-full items-start py-3 pl-2">
            <Image
              height={40}
              width={40}
              draggable={false}
              src={props.Icon}
              alt="toast_icon"
            />
          </div>
          <div className="flex w-full flex-col py-2">
            <h5 className="text-[13px] font-[600] text-white xs:text-[14px] sm:text-[15px]">
              {props.MessageTitle}
            </h5>
            <h6 className="text-[11px] font-medium leading-4 text-white/[0.85] xs:text-[12px] sm:text-[13px]">
              {props.MessageDescription}
            </h6>
          </div>
          <div className="flex h-full flex-col items-start justify-center">
            <MotionButton
              name="toast_exit_button"
              onClick={props.onClose}
              whileTap={{ scale: 0.9 }}
              className="m-0 cursor-default rounded-full bg-transparent p-2.5 transition-colors duration-300 ease-in-out hover:bg-white/20"
            >
              <XMarkIcon className="h-5 w-5 text-white" />
            </MotionButton>
          </div>
        </div>
        <div ref={containerRef} className="flex w-full px-2 pb-1.5 xs:pb-2">
          <MotionDiv
            ref={progressRef}
            onAnimationComplete={handleAnimationComplete}
            initial={{ width: "100%" }}
            animate={animate}
            transition={{ duration: props.HideDuration }}
            className="h-[1px] w-full bg-white sm:h-[2px]"
          />
        </div>
      </div>
    </Snackbar>
  );
}
