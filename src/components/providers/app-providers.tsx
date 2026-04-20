"use client";

import { ReactNode } from "react";
import { LazyMotion, domAnimation } from "framer-motion";
import { SmoothScrollProvider } from "./smooth-scroll";

import { PageLoader } from "../ui/page-loader";

type AppProvidersProps = {
  children: ReactNode;
};

/**
 * Wrap client-side providers (motion, theming, analytics) here.
 * LazyMotion reduces bundle size vs full MotionConfig for many sites.
 */
export function AppProviders({ children }: AppProvidersProps) {
  return (
    <LazyMotion features={domAnimation}>
      <PageLoader />
      <SmoothScrollProvider>{children}</SmoothScrollProvider>
    </LazyMotion>
  );
}
