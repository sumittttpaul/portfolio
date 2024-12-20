"use client";

import Sumit_Paul from "../../../public/images/sumit_photo.png";
import { MotionButton } from "utils/FramerMotion";
import { useModalState } from "utils/Zustand";
import Image from "next/image";

export default function PhotoButton({
  className,
  sizes,
}: {
  className: string;
  sizes: string;
}) {
  const modalState = useModalState();
  return (
    <MotionButton
      name="sumit_photo_modal_button"
      whileTap={{ scale: 0.9 }}
      onClick={() => modalState.setPhotoShow(true)}
      className={`${className} group relative overflow-hidden`}
    >
      <Image
        fill
        priority
        draggable={false}
        sizes={sizes}
        src={Sumit_Paul}
        className="transition-all duration-200 ease-linear group-hover:scale-[1.2]"
        alt="sumit paul photo"
      />
    </MotionButton>
  );
}
