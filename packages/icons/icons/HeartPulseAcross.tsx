import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHeartPulseAcross = forwardRef<SVGSVGElement, IconProps>(
  function IconHeartPulseAcross(
    { className, variant = "Outline", strokeWidth = "1.5", ...rest },
    ref,
  ) {
    /* The four drawings are two booleans: filled or stroked, and whether the
     secondary shapes drop to half tone. */
    const fill = variant === "Bold" || variant === "Bulk";
    const duotone = variant === "TwoTone" || variant === "Bulk";

    /* Decorative by default: an icon sitting beside its own text label is read
     out twice otherwise. Naming it with aria-label or aria-labelledby promotes
     it to an image instead. */
    const labelled =
      rest["aria-label"] != null || rest["aria-labelledby"] != null;
    const a11y: SVGProps<SVGSVGElement> = labelled
      ? { role: "img" }
      : { "aria-hidden": true };

    return (
      <>
        {variant === "Broken" ? (
        <svg
          ref={ref}
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
          {...a11y}
          {...rest}
        >
          <path
            d="M21 12.25h-2.36c-.66 0-1 0-1.28.13-.3.13-.51.37-.95.86l-1.03 1.15c-.36.4-.55.6-.77.6-.23-.01-.4-.22-.75-.64l-3.53-4.27c-.32-.39-.48-.58-.7-.6-.21-.01-.4.16-.76.51l-1.5 1.43c-.43.41-.64.62-.91.72-.27.11-.57.11-1.16.11H3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="m8.96 19.16.47-.59zM12 5.76l-.54.51a.75.75 0 0 0 1.08 0zm3.04 13.4.46.59v0zM12 20.75V20zm-9.34-7.1a.75.75 0 0 0 1.27-.79zm3.87 2.38a.75.75 0 0 0-1.06 1.06zM2.75 9.39c0-2.8 1.26-4.54 2.83-5.14 1.58-.6 3.77-.17 5.88 2.02l1.08-1.04c-2.4-2.48-5.2-3.26-7.5-2.38S1.26 6.14 1.26 9.39zM15.5 19.75a30 30 0 0 0 4.7-4.52c1.41-1.74 2.55-3.77 2.55-5.84h-1.5c0 1.55-.87 3.24-2.21 4.9a29 29 0 0 1-4.47 4.28zm7.25-10.36c0-3.25-1.5-5.67-3.8-6.54s-5.1-.1-7.49 2.38l1.08 1.04c2.1-2.19 4.3-2.62 5.88-2.02 1.57.6 2.83 2.33 2.83 5.14zM8.5 19.75c1.27 1 2.15 1.74 3.5 1.74v-1.5c-.73 0-1.18-.32-2.57-1.42zm6.07-1.18c-1.39 1.1-1.84 1.42-2.57 1.42v1.5c1.35 0 2.23-.74 3.5-1.74zM3.93 12.85a7 7 0 0 1-1.18-3.46h-1.5c0 1.48.58 2.93 1.4 4.26zm5.5 5.72a32 32 0 0 1-2.9-2.55l-1.06 1.06a35 35 0 0 0 3.03 2.67z"
            fill="currentColor"
          />
        </svg>
      ) : !fill ? (
          <svg
            ref={ref}
            className={className}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            {...a11y}
            {...rest}
          >
            <path
              d="M21 12h-2.36c-.66 0-1 0-1.28.13-.3.13-.51.37-.95.86l-1.03 1.15c-.36.4-.55.6-.77.6-.23-.01-.4-.22-.75-.63l-3.53-4.28c-.32-.39-.48-.58-.7-.6-.21-.01-.4.16-.76.51l-1.5 1.43c-.43.41-.64.62-.91.72-.27.11-.57.11-1.16.11H3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m8.96 19.37.48-.58zM12 5.5l-.55.51a.75.75 0 0 0 1.1 0zm3.04 13.87.47.58zm-5.6-.58a29 29 0 0 1-4.47-4.43c-1.34-1.72-2.22-3.48-2.22-5.1h-1.5c0 2.13 1.13 4.22 2.54 6.02a31 31 0 0 0 4.7 4.67zM2.75 9.26c0-2.73 1.26-4.56 2.85-5.22 1.57-.65 3.75-.28 5.85 1.97l1.1-1.02c-2.4-2.58-5.22-3.3-7.53-2.33-2.28.95-3.77 3.42-3.77 6.6zm12.76 10.7a31 31 0 0 0 4.7-4.68c1.41-1.8 2.54-3.9 2.54-6.02h-1.5c0 1.62-.88 3.38-2.22 5.1a29 29 0 0 1-4.47 4.43zm7.24-10.7c0-3.18-1.5-5.65-3.77-6.6-2.3-.96-5.13-.25-7.53 2.33L12.55 6c2.1-2.25 4.28-2.62 5.85-1.97 1.6.66 2.85 2.5 2.85 5.22zM8.49 19.96c1.27 1.03 2.15 1.79 3.51 1.79v-1.5c-.72 0-1.17-.32-2.56-1.46zm6.07-1.17c-1.39 1.14-1.84 1.46-2.56 1.46v1.5c1.36 0 2.24-.76 3.51-1.8z"
              fill="currentColor"
            />
          </svg>
        ) : duotone ? (
          <svg
            ref={ref}
            className={className}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            {...a11y}
            {...rest}
          >
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2.35 11.25A6 6 0 0 1 2 9.26C2 3.35 7.5.66 12 5.5 16.5.66 22 3.35 22 9.26a6 6 0 0 1-.35 1.99h-3.13c-.54 0-1.03 0-1.47.2s-.76.55-1.13.96l-.07.08-1.03 1.15a.25.25 0 0 1-.38-.01l-3.55-4.3q-.21-.28-.44-.5a1.2 1.2 0 0 0-.77-.35c-.35-.02-.62.13-.8.26q-.26.2-.5.43l-1.53 1.46c-.47.45-.57.53-.67.57s-.23.05-.88.05z"
              fill="currentColor"
            />
            <path
              d="M21.65 11.25h-3.13c-.54 0-1.03 0-1.47.2s-.76.55-1.13.96l-.07.08-1.03 1.15a.25.25 0 0 1-.38-.01l-3.55-4.3q-.21-.28-.44-.5a1.2 1.2 0 0 0-.77-.35c-.35-.02-.62.13-.8.26q-.26.2-.5.43l-1.53 1.46c-.47.45-.57.53-.67.57s-.23.05-.88.05H2.35c1.03 3.1 4.19 6.14 6.61 8.12C10.3 20.46 10.96 21 12 21s1.7-.54 3.04-1.63c2.42-1.98 5.58-5.01 6.61-8.12"
              fill="currentColor"
            />
          </svg>
        ) : (
          <svg
            ref={ref}
            className={className}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            {...a11y}
            {...rest}
          >
            <path
              d="M2.35 11.25A6 6 0 0 1 2 9.26C2 3.35 7.5.66 12 5.5 16.5.66 22 3.35 22 9.26a6 6 0 0 1-.35 1.99h-3.13c-.54 0-1.03 0-1.47.2s-.76.55-1.13.96l-.07.08-1.03 1.15-.2.21-.18-.22-3.55-4.3q-.21-.28-.44-.5a1.2 1.2 0 0 0-.77-.35c-.35-.02-.62.13-.8.26q-.26.2-.5.43l-1.53 1.46c-.47.45-.57.53-.67.57s-.23.05-.88.05z"
              fill="currentColor"
            />
            <path
              d="M3 12.75c1.39 2.56 3.93 4.96 5.96 6.62C10.3 20.46 10.96 21 12 21s1.7-.54 3.04-1.63c2.03-1.66 4.57-4.06 5.96-6.62h-2.36c-.73 0-.87.02-.98.07-.1.04-.21.14-.7.68l-1.05 1.17q-.24.27-.49.5c-.18.15-.46.32-.83.31-.37 0-.64-.19-.82-.35a5 5 0 0 1-.46-.52l-3.56-4.3-.17-.2-.19.17-1.58 1.5c-.35.35-.67.65-1.07.8-.41.17-.85.17-1.34.17z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconHeartPulseAcross;
