import RouteTransitionWrapper from "utils/RouteTransitionWrapper";
import { MotionOptimize } from "utils/FramerMotion";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Header from "components/Header";
import "styles/globals.css";

const NeueMontreal = localFont({
  src: [
    {
      path: "../../public/fonts/NeueMontreal-Bold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeueMontreal-BoldItalic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/fonts/NeueMontreal-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeueMontreal-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/NeueMontreal-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeueMontreal-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/NeueMontreal-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeueMontreal-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
  ],
  variable: "--font-neue",
});

type RouteProps = {
  params?: Record<string, string>;
  searchParams?: Record<string, string>;
  children?: React.ReactNode;
};

type NextPageProps<P extends RouteProps> = P;

type Props = NextPageProps<{
  children?: React.ReactNode;
}>;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sumeet Kumar Paul • Freelance Developer",
  description:
    "Helping brands thrive in the digital world. Delivering tailor-made digital designs and building interactive websites from scratch.",
  icons: "/favicon.ico",
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const BodyClass = `${inter.className} ${NeueMontreal.variable} overflow-x-hidden overflow-y-scroll m-0`;

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={BodyClass}>
        <MotionOptimize>
          <Header />
          {/* <RouteTransitionWrapper> */}
            {children}
            {/* </RouteTransitionWrapper> */}
        </MotionOptimize>
        <Analytics />
      </body>
    </html>
  );
}
