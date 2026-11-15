import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiImageToVideo = forwardRef<SVGSVGElement, IconProps>(function IconAiImageToVideo(
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
            d="M5 2.5h5A2.5 2.5 0 0 1 12.5 5v4a2.5 2.5 0 0 1-2.5 2.5H5A2.5 2.5 0 0 1 2.5 9V5A2.5 2.5 0 0 1 5 2.5zm10.26 19H14a2.5 2.5 0 0 1-2.5-2.5v-4a2.5 2.5 0 0 1 2.5-2.5h5a2.5 2.5 0 0 1 2.5 2.5v4a2.5 2.5 0 0 1-2.5 2.5h-1.34"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.9 15.4v3.2c0 .4.4.6.8.4l2.6-1.6c.3-.2.3-.6 0-.8L15.7 15c-.4-.2-.8 0-.8.4Zm1.6-11.9c1.7 0 3 1.3 3 3V9m1.34-.99L19.5 9.5l-1.34-1.49M7.5 20.5c-1.7 0-3-1.3-3-3V15m-1.34.99L4.5 14.5l1.34 1.49"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.5 5c.18 1.32.68 1.82 2 2-1.32.18-1.82.68-2 2-.18-1.32-.68-1.82-2-2 1.32-.18 1.82-.68 2-2Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
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
            opacity={duotone ? "0.4" : "1"}
            d="M5 2.5h5A2.5 2.5 0 0 1 12.5 5v4a2.5 2.5 0 0 1-2.5 2.5H5A2.5 2.5 0 0 1 2.5 9V5A2.5 2.5 0 0 1 5 2.5Zm9 10h5a2.5 2.5 0 0 1 2.5 2.5v4a2.5 2.5 0 0 1-2.5 2.5h-5a2.5 2.5 0 0 1-2.5-2.5v-4a2.5 2.5 0 0 1 2.5-2.5Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.9 15.4v3.2c0 .4.4.6.8.4l2.6-1.6c.3-.2.3-.6 0-.8L15.7 15c-.4-.2-.8 0-.8.4Zm1.6-11.9c1.7 0 3 1.3 3 3V9m1.34-.99L19.5 9.5l-1.34-1.49M7.5 20.5c-1.7 0-3-1.3-3-3V15m-1.34.99L4.5 14.5l1.34 1.49"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.5 5c.18 1.32.68 1.82 2 2-1.32.18-1.82.68-2 2-.18-1.32-.68-1.82-2-2 1.32-.18 1.82-.68 2-2Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
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
            d="M5 1.75h5c.84.03 1.75.4 2.3.95s.92 1.46.95 2.3v4c-.03.84-.4 1.75-.95 2.3s-1.46.92-2.3.95H5a3.6 3.6 0 0 1-2.3-.95A3.6 3.6 0 0 1 1.75 9V5c.03-.84.4-1.75.95-2.3A3.6 3.6 0 0 1 5 1.75zm9 10h5c.84.03 1.75.4 2.3.95s.92 1.46.95 2.3v4c-.03.84-.4 1.75-.95 2.3s-1.46.92-2.3.95h-5a3.6 3.6 0 0 1-2.3-.95 3.6 3.6 0 0 1-.95-2.3v-4c.03-.84.4-1.75.95-2.3a3.6 3.6 0 0 1 2.3-.95z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="m16.1 14.36 2.62 1.62c.27.24.56.7.56 1.02s-.31.8-.59 1.04l-2.65 1.63c-.37.14-.93.18-1.23.03-.31-.16-.6-.7-.66-1.1v-3.2c.06-.4.35-.94.66-1.1.3-.15.91-.08 1.28.06zm.4-11.61q.66 0 1.3.22.48.18.92.48a3.7 3.7 0 0 1 1.47 2.34c.08.43.06.87.06 1.31v.45l.03-.04a.75.75 0 1 1 1.12 1L20.07 10l-.04.04a.75.75 0 0 1-.85.15l-.2-.15-.04-.04-1.33-1.48a.75.75 0 1 1 1.11-1l.03.04v-.21c0-.42.04-.87-.04-1.28a2.2 2.2 0 0 0-2.2-1.81.75.75 0 0 1 0-1.5zm-9 18.5q-.66 0-1.3-.22a3.7 3.7 0 0 1-2.39-2.82c-.08-.43-.06-.87-.06-1.31v-.45l-.03.04a.75.75 0 1 1-1.12-1L3.93 14l.04-.04a.75.75 0 0 1 .85-.15 1 1 0 0 1 .24.19l1.33 1.47a.75.75 0 1 1-1.11 1l-.03-.03v.21c0 .42-.04.87.04 1.28a2.2 2.2 0 0 0 2.2 1.81.75.75 0 0 1 0 1.5z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M7.9 4.6c.1.73.25 1.14.55 1.45.31.3.72.46 1.45.55a.4.4 0 0 1 0 .8c-.73.1-1.14.25-1.45.55-.3.31-.46.72-.55 1.45a.4.4 0 0 1-.8 0c-.1-.73-.25-1.14-.55-1.45-.31-.3-.72-.46-1.45-.55a.4.4 0 0 1 0-.8c.73-.1 1.14-.25 1.45-.55.3-.31.46-.72.55-1.45a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
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
            d="M5 1.75h5c.84.03 1.75.4 2.3.95s.92 1.46.95 2.3v4c-.03.84-.4 1.75-.95 2.3s-1.46.92-2.3.95H5a3.6 3.6 0 0 1-2.3-.95A3.6 3.6 0 0 1 1.75 9V5c.03-.84.4-1.75.95-2.3A3.6 3.6 0 0 1 5 1.75zm9 10h5c.84.03 1.75.4 2.3.95s.92 1.46.95 2.3v4c-.03.84-.4 1.75-.95 2.3s-1.46.92-2.3.95h-5a3.6 3.6 0 0 1-2.3-.95 3.6 3.6 0 0 1-.95-2.3v-4c.03-.84.4-1.75.95-2.3a3.6 3.6 0 0 1 2.3-.95zm2.5-9q.66 0 1.3.22.48.18.92.48a3.7 3.7 0 0 1 1.47 2.34c.08.43.06.87.06 1.31v.45l.03-.04a.75.75 0 1 1 1.12 1L20.07 10l-.04.04a.75.75 0 0 1-.85.15l-.2-.15-.04-.04-1.33-1.48a.75.75 0 1 1 1.11-1l.03.04v-.21c0-.42.04-.87-.04-1.28a2.2 2.2 0 0 0-2.2-1.81.75.75 0 0 1 0-1.5zm-9 18.5q-.66 0-1.3-.22a3.7 3.7 0 0 1-2.39-2.82c-.08-.43-.06-.87-.06-1.31v-.45l-.03.04a.75.75 0 1 1-1.12-1L3.93 14l.04-.04a.75.75 0 0 1 .85-.15 1 1 0 0 1 .24.19l1.33 1.47a.75.75 0 1 1-1.11 1l-.03-.03v.21c0 .42-.04.87.04 1.28a2.2 2.2 0 0 0 2.2 1.81.75.75 0 0 1 0 1.5zm7.32-6.95c-.32.16-.6.7-.67 1.1v3.2c.06.4.35.94.66 1.1.3.15.86.11 1.23-.03l2.65-1.63c.28-.24.59-.72.59-1.04s-.29-.78-.56-1.02l-2.63-1.62c-.36-.14-.97-.2-1.27-.06zM7.5 4.25a.4.4 0 0 0-.4.35c-.1.73-.25 1.14-.55 1.45-.31.3-.72.46-1.45.55a.4.4 0 0 0 0 .8c.73.1 1.14.25 1.45.55.3.31.46.72.55 1.45a.4.4 0 0 0 .8 0c.1-.73.25-1.14.55-1.45.31-.3.72-.46 1.45-.55a.4.4 0 0 0 0-.8c-.73-.1-1.14-.25-1.45-.55-.3-.31-.46-.72-.55-1.45a.4.4 0 0 0-.4-.35z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiImageToVideo;
