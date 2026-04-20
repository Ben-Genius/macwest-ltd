"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { m } from "framer-motion";

interface TextStyle {
  color?: string;
  fontSize?: string;
  gradient?: string;
}

interface ButtonStyle {
  backgroundColor?: string;
  color?: string;
  borderRadius?: string;
  hoverColor?: string;
  hoverForeground?: string;
}

interface SlideContent {
  title: string;
  image: string;
}

interface DicedHeroSectionProps {
  topText: string;
  mainText: string;
  subMainText: string;
  buttonText: string;
  slides: SlideContent[];
  onMainButtonClick?: () => void;
  onGridImageHover?: (index: number) => void;
  onGridImageClick?: (index: number) => void;
  topTextStyle?: TextStyle;
  mainTextStyle?: TextStyle;
  subMainTextStyle?: TextStyle;
  buttonStyle?: ButtonStyle;
  componentBorderRadius?: string;
  backgroundColor?: string;
  separatorColor?: string;
  maxContentWidth?: string;
  mobileBreakpoint?: number;
  fontFamily?: string;
  isRTL?: boolean;
}

// Inline fallback for the ChronicleButton
export const ChronicleButton: React.FC<{
  text: string;
  onClick?: () => void;
  hoverColor?: string;
  hoverForeground?: string;
  borderRadius?: string;
  fontFamily?: string;
  customBackground?: string;
  customForeground?: string;
}> = ({
  text,
  onClick,
  hoverColor,
  hoverForeground,
  borderRadius,
  fontFamily,
  customBackground,
  customForeground,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <m.button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: isHovered ? hoverColor : customBackground,
        color: isHovered ? hoverForeground : customForeground,
        borderRadius: borderRadius || "8px",
        fontFamily,
        padding: "0.875rem 1.75rem",
        border: "none",
        cursor: "pointer",
        fontWeight: 700,
        transition: "all 0.3s ease",
        display: "inline-block",
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {text}
    </m.button>
  );
};

export const DicedHeroSection: React.FC<DicedHeroSectionProps> = ({
  topText,
  mainText,
  subMainText,
  buttonText,
  slides,
  onMainButtonClick,
  onGridImageHover,
  onGridImageClick,
  topTextStyle,
  mainTextStyle,
  subMainTextStyle,
  buttonStyle = {},
  componentBorderRadius = "0px",
  backgroundColor,
  separatorColor = "#005baa",
  maxContentWidth = "1536px",
  mobileBreakpoint = 1000,
  fontFamily = "inherit",
  isRTL = false,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const isRTLCheck = (text: string): boolean => {
    return /[\u0590-\u05FF\u0600-\u06FF\u0700-\u074F]/.test(text);
  };

  useEffect(() => {
    setHasMounted(true);
    const checkMobile = () => {
      if (containerRef.current) {
        setIsMobile(window.innerWidth < mobileBreakpoint);
      }
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [mobileBreakpoint]);

  const getGradientStyle = (gradient?: string) => {
    if (gradient) {
      return {
        backgroundImage: gradient,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      };
    }
    return {};
  };

  if (!hasMounted) return null;

  return (
    <main
      ref={containerRef}
      style={{
        borderRadius: componentBorderRadius,
        backgroundColor: backgroundColor || "transparent",
        padding: "5rem 2rem",
        overflow: "hidden",
        display: "flex",
        flexDirection: isMobile ? "column" : isRTL ? "row-reverse" : "row",
        justifyContent: "center",
        alignItems: "stretch",
        width: "100%",
        maxWidth: maxContentWidth,
        margin: "0 auto",
        minHeight: "auto",
        height: "auto",
        fontFamily,
        position: "relative",
      }}
    >
      <div
        style={{
          flex: 1,
          marginRight: isMobile ? 0 : isRTL ? 0 : "2rem",
          marginLeft: isMobile ? 0 : isRTL ? "2rem" : 0,
          textAlign: isMobile ? "center" : isRTL ? "right" : "left",
          alignItems: isMobile ? "center" : isRTL ? "flex-end" : "flex-start",
          maxWidth: isMobile ? "100%" : "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          zIndex: 1,
          paddingBottom: isMobile ? "3rem" : 0,
        }}
      >
        <div>
          <m.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              ...topTextStyle,
              ...getGradientStyle(topTextStyle?.gradient),
              direction: isRTLCheck(topText) ? "rtl" : "ltr",
              textAlign: isRTLCheck(topText) ? "right" : "left",
              display: "block",
            }}
          >
            {topText}
          </m.span>
          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              ...mainTextStyle,
              direction: isRTLCheck(mainText) ? "rtl" : "ltr",
              textAlign: isMobile
                ? "center"
                : isRTLCheck(mainText)
                ? "right"
                : "left",
              fontSize: mainTextStyle?.fontSize,
              lineHeight: 1.1,
              marginTop: "0.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <m.span
              style={{
                ...getGradientStyle(mainTextStyle?.gradient),
                display: "inline-block",
              }}
            >
              {mainText}
            </m.span>
          </m.h2>
          <m.hr
            initial={{ width: 0 }}
            whileInView={{ width: "6.25rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              height: "0.25rem",
              background: separatorColor,
              border: "none",
              margin: isMobile
                ? "1.125rem auto 1.875rem"
                : isRTLCheck(mainText)
                ? "1.125rem 0 1.875rem auto"
                : "1.125rem 0 1.875rem",
              alignSelf: isMobile
                ? "center"
                : isRTLCheck(mainText)
                ? "flex-end"
                : "flex-start",
            }}
          />
          <m.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              ...subMainTextStyle,
              ...getGradientStyle(subMainTextStyle?.gradient),
              direction: isRTLCheck(subMainText) ? "rtl" : "ltr",
              textAlign: isMobile ? "center" : isRTLCheck(subMainText) ? "right" : "left",
              lineHeight: 1.6,
            }}
          >
            {subMainText}
          </m.p>
        </div>
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{
            marginTop: "2rem",
            display: "flex",
            justifyContent: isMobile
              ? "center"
              : isRTL
              ? "flex-end"
              : "flex-start",
          }}
        >
          <ChronicleButton
            text={buttonText}
            onClick={onMainButtonClick}
            hoverColor={buttonStyle?.hoverColor}
            hoverForeground={buttonStyle?.hoverForeground ?? "#fff"}
            borderRadius={buttonStyle?.borderRadius}
            fontFamily={fontFamily}
            customBackground={buttonStyle?.backgroundColor}
            customForeground={buttonStyle?.color}
          />
        </m.div>
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: isRTL ? "flex-start" : "flex-end",
          position: "relative",
          width: isMobile ? "100%" : "50%",
          paddingLeft: isMobile ? 0 : isRTL ? 0 : "2rem",
          paddingRight: isMobile ? 0 : isRTL ? "2rem" : 0,
          height: "auto",
        }}
      >
        <m.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "20px",
            width: "100%",
            aspectRatio: "1 / 1",
          }}
        >
          {[slides[3], slides[2], slides[1], slides[0]].map((slide, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                width: "100%",
                paddingBottom: "100%",
                overflow: "hidden",
                borderRadius: "20px",
              }}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className={`warped-image ${
                  ["bottom-right", "bottom-left", "top-right", "top-left"][
                    index
                  ]
                }`}
                style={{
                  objectFit: "cover",
                  cursor: "pointer",
                }}
                onClick={() => onGridImageClick?.(index)}
                onMouseEnter={() => onGridImageHover?.(index)}
              />
            </div>
          ))}
        </m.div>
      </div>
      <style>{`
        .warped-image {
          --r: 20px;
          --s: 40px;
          --x: 25px;
          --y: 5px;
          transition: transform 0.4s ease;
        }
        .warped-image:hover {
          transform: scale(1.05);
        }
        .top-right {
          --_m:/calc(2*var(--r)) calc(2*var(--r)) radial-gradient(#000 70%,#0000 72%);
          --_g:conic-gradient(at calc(100% - var(--r)) var(--r),#0000 25%,#000 0);
          --_d:(var(--s) + var(--r));
          mask: calc(100% - var(--_d) - var(--x)) 0 var(--_m), 100% calc(var(--_d) + var(--y)) var(--_m), radial-gradient(var(--s) at 100% 0,#0000 99%,#000 calc(100% + 1px)) calc(-1*var(--r) - var(--x)) calc(var(--r) + var(--y)), var(--_g) calc(-1*var(--_d) - var(--x)) 0, var(--_g) 0 calc(var(--_d) + var(--y));
          mask-repeat: no-repeat;
        }
        .top-left {
          --_m:/calc(2*var(--r)) calc(2*var(--r)) radial-gradient(#000 70%,#0000 72%);
          --_g:conic-gradient(at var(--r) var(--r),#000 75%,#0000 0);
          --_d:(var(--s) + var(--r));
          mask: calc(var(--_d) + var(--x)) 0 var(--_m), 0 calc(var(--_d) + var(--y)) var(--_m), radial-gradient(var(--s) at 0 0,#0000 99%,#000 calc(100% + 1px)) calc(var(--r) + var(--x)) calc(var(--r) + var(--y)), var(--_g) calc(var(--_d) + var(--x)) 0, var(--_g) 0 calc(var(--_d) + var(--y));
          mask-repeat: no-repeat;
        }
        .bottom-left {
          --_m:/calc(2*var(--r)) calc(2*var(--r)) radial-gradient(#000 70%,#0000 72%);
          --_g:conic-gradient(from 180deg at var(--r) calc(100% - var(--r)),#0000 25%,#000 0);
          --_d:(var(--s) + var(--r));
          mask: calc(var(--_d) + var(--x)) 100% var(--_m), 0 calc(100% - var(--_d) - var(--y)) var(--_m), radial-gradient(var(--s) at 0 100%,#0000 99%,#000 calc(100% + 1px)) calc(var(--r) + var(--x)) calc(-1*var(--r) - var(--y)), var(--_g) calc(var(--_d) + var(--x)) 0, var(--_g) 0 calc(-1*var(--_d) - var(--y));
          mask-repeat: no-repeat;
        }
        .bottom-right {
          --_m:/calc(2*var(--r)) calc(2*var(--r)) radial-gradient(#000 70%,#0000 72%);
          --_g:conic-gradient(from 90deg at calc(100% - var(--r)) calc(100% - var(--r)),#0000 25%,#000 0);
          --_d:(var(--s) + var(--r));
          mask: calc(100% - var(--_d) - var(--x)) 100% var(--_m), 100% calc(100% - var(--_d) - var(--y)) var(--_m), radial-gradient(var(--s) at 100% 100%,#0000 99%,#000 calc(100% + 1px)) calc(-1*var(--r) - var(--x)) calc(-1*var(--r) - var(--y)), var(--_g) calc(-1*var(--_d) - var(--x)) 0, var(--_g) 0 calc(-1*var(--_d) - var(--y));
          mask-repeat: no-repeat;
        }
      `}</style>
    </main>
  );
};
