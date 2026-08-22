import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconWheelAngle = forwardRef<SVGSVGElement, IconProps>(
  function IconWheelAngle(
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
        {!fill ? (
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
              d="M16.5 22c2.49 0 4.5-4.48 4.5-10S18.99 2 16.5 2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M12 12c0 5.52-2.01 10-4.5 10S3 17.52 3 12 5.01 2 7.5 2 12 6.48 12 12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M7.5 2h9"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M7.5 22h9"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9 12c0 3.31-.67 6-1.5 6S6 15.31 6 12s.67-6 1.5-6S9 8.69 9 12m0 0H8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.43 4.77A17 17 0 0 0 3 12c0 2.85.56 5.4 1.43 7.23C5.33 21.1 6.46 22 7.5 22s2.17-.9 3.07-2.77A17 17 0 0 0 12 12c0-2.85-.56-5.4-1.43-7.23C9.67 2.9 8.54 2 7.5 2s-2.17.9-3.07 2.77M5.81 12c0 3.49.76 6.32 1.69 6.32.86 0 1.57-2.41 1.67-5.53h-1.1c-.47 0-.85-.35-.85-.79s.38-.79.84-.79h1.11c-.1-3.11-.8-5.53-1.67-5.53-.93 0-1.69 2.83-1.69 6.32"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10.57 19.23C9.67 21.1 8.54 22 7.5 22h8.87C18.93 22 21 17.52 21 12S18.93 2 16.37 2H7.5c1.04 0 2.17.9 3.07 2.77A17 17 0 0 1 12 12c0 2.85-.56 5.4-1.43 7.23"
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
              d="M21 12c0 5.52-2.07 10-4.63 10H8.66a6.5 6.5 0 0 0 2.2-2.72 18 18 0 0 0 1.4-7.28c0-2.81-.53-5.39-1.4-7.28A6.5 6.5 0 0 0 8.66 2h7.71C18.93 2 21 6.48 21 12"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.31 5.13A17 17 0 0 0 3 12c0 2.7.5 5.14 1.31 6.87.82 1.77 1.85 2.63 2.8 2.63s1.99-.86 2.8-2.63c.81-1.73 1.32-4.16 1.32-6.87s-.51-5.13-1.31-6.87C9.1 3.36 8.06 2.5 7.12 2.5c-.96 0-1.99.86-2.81 2.63M5.57 12c0 3.31.7 6 1.54 6 .8 0 1.44-2.29 1.54-5.25H7.63a.76.76 0 0 1-.77-.75c0-.41.34-.75.77-.75h1.02C8.55 8.3 7.9 6 7.1 6c-.85 0-1.54 2.69-1.54 6"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconWheelAngle;
