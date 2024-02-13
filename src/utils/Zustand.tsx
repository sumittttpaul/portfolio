import { StaticImageData } from "next/image";
import { create } from "zustand";

interface PreloaderState {
  Visible: boolean;
  toggleVisible: () => void;
}

export const usePreloaderState = create<PreloaderState>()((set) => ({
  Visible: true, // default value : true
  toggleVisible: () => set((value) => ({ Visible: !value.Visible })),
}));

interface ModalState {
  PhotoShow: boolean;
  setPhotoShow: (value: boolean) => void;
}

export const useModalState = create<ModalState>()((set) => ({
  PhotoShow: false, // default value : false
  setPhotoShow: (value) => set(() => ({ PhotoShow: value })),
}));

interface ToastHookState {
  ToastValue: ToastSettingType;
  setToastValue: (value: ToastSettingType) => void;
}

export const ToastHook = create<ToastHookState>()((set) => ({
  ToastValue: { Show: false, Title: "", Description: "", Type: "" },
  setToastValue: (value) => set(() => ({ ToastValue: value })),
}));

interface ImageViewerState {
  ImageViewerData: {
    show: boolean;
    images: StaticImageData[] | null;
  };
  setImageViewerData: (value: {
    show: boolean;
    images: StaticImageData[] | null;
  }) => void;
}

export const useImageViewerState = create<ImageViewerState>()((set) => ({
  ImageViewerData: { show: false, images: null },
  setImageViewerData: (value) => set(() => ({ ImageViewerData: value })),
}));
