"use client";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { usePreloaderState } from "./Zustand";
import { MotionMain } from "./FramerMotion";
import { FrozenRoute } from "./FrozenRoute";
import { useEffect } from "react";

export default function RouteTransitionWrapper({
  children,
}: React.PropsWithChildren) {
  const pathname = usePathname();
  const { Visible, toggleVisible } = usePreloaderState();

  useEffect(() => {
    if (pathname !== "/" && Visible) toggleVisible();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <AnimatePresence initial={true} mode="wait">
      <MotionMain key={`Routes_Pathname_${pathname}`}>
        <FrozenRoute>{children}</FrozenRoute>
      </MotionMain>
    </AnimatePresence>
  );
}
