"use client";

import SumitPhoto from "../../../public/images/sumit_photo.png";
import { ArrowDownLeftIcon } from "@heroicons/react/24/outline";
import { MotionButton } from "utils/FramerMotion";
import { useModalState } from "utils/Zustand";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import { useScroll } from "framer-motion";

export default function FooterMobile() {
  const container = useRef<HTMLDivElement>(null);
  const [time, setTime] = useState("");
  const modalState = useModalState();
  const { scrollY } = useScroll();

  useEffect(() => {
    let interval = setInterval(
      () => setTime(`${moment().format("LT")} GMT +05:30`),
      1000,
    );
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      const _container = container.current;
      const _document = document.documentElement;
      if (_container) {
        if (latest > _container.offsetTop - 100) {
          _document.style.setProperty("--nav-button-border", "1px");
        } else {
          _document.style.setProperty("--nav-button-border", "0px");
        }
      }
    });
  }, [scrollY]);

  return (
    <div
      ref={container}
      className="flex h-[100lvh] w-full flex-col items-center justify-center bg-almost-black text-white relative"
    >
      <div className="mt-10 flex h-full w-full max-w-screen-screen-1180 flex-col items-center justify-center px-5">
        <div className="relative w-full border-b border-solid border-white/20 pb-[5em] sm:pb-[8em] lg:pb-[50px]">
          {/* Let's work together */}
          <div className="flex w-full flex-col -space-y-3 xl:-space-y-8">
            <div className="flex items-center">
              <MotionButton
                whileTap={{ scale: 0.9 }}
                onClick={() => modalState.setPhotoShow(true)}
                className="relative h-[50px] w-[50px] sm:h-[100px] sm:w-[100px]"
              >
                <Image
                  fill
                  alt="profile photo"
                  sizes="(min-width: 640px) 100px, 50px"
                  className="rounded-full object-cover"
                  src={SumitPhoto}
                />
              </MotionButton>
              <h2 className="leading-0 ml-[0.3em] text-[2.5em] font-normal xs:text-[2.8em] sm:text-[5vw]">
                Let&apos;s work
              </h2>
            </div>
            <h2 className="leading-0 m-0 text-[2.5em] font-normal xs:text-[2.8em] sm:text-[5vw]">
              together
            </h2>
          </div>
          {/* Get in touch */}
          <div className="absolute left-[calc(100%-200px)] top-[calc(100%-80px)] sm:left-[calc(100%-400px)] sm:top-[calc(100%-105px)]">
            <Link
              href="#"
              className="rounded-button flex h-[10em] w-[10em] cursor-pointer items-center justify-center rounded-full bg-[#334BD3] text-white outline-none sm:h-[13em] sm:w-[13em]"
            >
              <span className="relative z-[1] m-0 text-sm font-light xs:text-base">
                Get in touch
              </span>
            </Link>
          </div>
          {/* Arrow */}
          <ArrowDownLeftIcon className="absolute right-0 top-[40%] h-[20px] w-[20px] xs:h-[25px] xs:w-[25px] sm:h-[30px] sm:w-[30px]" />
        </div>
        <div className="mb-[3em] mt-[8em] flex w-full flex-col space-y-3 sm:flex-row sm:space-x-[35px] sm:space-y-0 lg:mt-[80px] lg:space-x-[70px]">
          {/* Email */}
          <Link
            href="mailto:sumitpaul.work@gmail.com"
            className="rounded-button relative flex cursor-pointer items-center justify-center rounded-full border border-solid border-white/20 py-5 outline-none sm:px-10 sm:py-6"
          >
            <span className="z-[1] text-sm xs:text-base sm:text-[18px]">
              sumitpaul.work@gmail.com
            </span>
          </Link>
          {/* Phone */}
          <Link
            href="tel:+918794007993"
            className="rounded-button relative flex cursor-pointer items-center justify-center rounded-full border border-solid border-white/20 py-5 outline-none sm:px-10 sm:py-6"
          >
            <span className="z-[1] text-sm xs:text-base sm:text-[18px]">
              +91 879 400 7993
            </span>
          </Link>
        </div>
      </div>
      <div className="flex w-full flex-col justify-between px-5 pb-10 sm:flex-row sm:px-10 sm:pb-10">
        <div className="order-3 flex items-center justify-between space-x-10 sm:order-1 sm:justify-start">
          <div className="flex flex-col space-y-3">
            <h3 className="text-[10px] font-medium uppercase tracking-wide text-white/50 xs:text-xs">
              Version
            </h3>
            <h4 className="text-sm text-white xs:text-base">2024 © Edition</h4>
          </div>
          <div className="flex flex-col space-y-3 text-end sm:text-start">
            <h3 className="text-[10px] font-medium uppercase tracking-wide text-white/50 xs:text-xs">
              Local Time
            </h3>
            <h4 className="text-sm text-white xs:text-base">{time}</h4>
          </div>
        </div>
        <div className="order-2 my-5 flex h-[1px] w-full bg-white/20 sm:hidden" />
        <div className="order-1 flex flex-col space-y-3 sm:order-2">
          <h3 className="text-[10px] font-medium uppercase tracking-wide text-white/50 xs:text-xs">
            Socials
          </h3>
          <div className="flex w-full justify-between sm:w-auto sm:justify-end sm:space-x-5">
            <Link
              href="#"
              className="text-underline cursor-pointer text-sm text-white xs:text-base"
            >
              Linkedin
            </Link>
            <Link
              href="#"
              className="text-underline cursor-pointer text-sm text-white xs:text-base"
            >
              Instagram
            </Link>
            <Link
              href="#"
              className="text-underline cursor-pointer text-sm text-white xs:text-base"
            >
              Facebook
            </Link>
            <Link
              href="#"
              className="text-underline cursor-pointer text-sm text-white xs:text-base"
            >
              Twitter
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}