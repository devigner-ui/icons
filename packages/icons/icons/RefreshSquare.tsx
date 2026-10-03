import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRefreshSquare = forwardRef<SVGSVGElement, IconProps>(
  function IconRefreshSquare(
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
            d="M7.38 11.63h-.75zm0 .93-.56.5a.75.75 0 0 0 1.08.04zm2.14-1.02a.75.75 0 0 0-1.04-1.08zM6.56 10.5a.75.75 0 1 0-1.12 1zM14.93 9a.75.75 0 1 0 1.1-1zm-2.89-2.75a5.4 5.4 0 0 0-5.41 5.38h1.5a3.9 3.9 0 0 1 3.91-3.88zm-5.41 5.38v.93h1.5v-.93zM7.9 13.1l1.62-1.56-1.04-1.08L6.86 12zm.04-1.04L6.56 10.5l-1.12 1 1.38 1.55zm8.1-4.07a5.4 5.4 0 0 0-4-1.74v1.5c1.15 0 2.18.49 2.9 1.26z"
            fill="currentColor"
          />
          <path
            d="m16.62 11.44.56-.5a.75.75 0 0 0-1.08-.04zm-2.14 1.02a.75.75 0 1 0 1.04 1.08zm2.96 1.04a.75.75 0 0 0 1.12-1zM9.04 15a.75.75 0 0 0-1.09 1.03zm2.9 2.75a5.4 5.4 0 0 0 5.43-5.38h-1.5a3.9 3.9 0 0 1-3.94 3.88zm5.43-5.38v-.93h-1.5v.93zM16.1 10.9l-1.62 1.56 1.04 1.08 1.62-1.55zm-.04 1.04 1.38 1.56 1.12-1-1.38-1.55zm-8.1 4.1a5.5 5.5 0 0 0 3.97 1.71v-1.5A4 4 0 0 1 9.05 15z"
            fill="currentColor"
          />
          <path
            d="M22 12c0 4.71 0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12s0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46c.97.98 1.3 2.35 1.4 4.54"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
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
              d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="m15.98 8.71-.44-.45c-1.96-2-5.12-2-7.08 0a5.2 5.2 0 0 0 0 7.24c1.96 2 5.12 2 7.08 0a5.2 5.2 0 0 0 1.42-4.26m-.98-2.53h-2.65m2.65 0V6"
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
              d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
              fill="currentColor"
            />
            <path
              d="M16.4 6.29a.75.75 0 0 0-1.28-.53l-.76.77a5.7 5.7 0 0 0-6.43 1.2 5.95 5.95 0 0 0 0 8.3 5.67 5.67 0 0 0 8.14 0 6 6 0 0 0 1.64-4.88.75.75 0 0 0-1.5.18A4.4 4.4 0 0 1 15 14.98a4.17 4.17 0 0 1-6 0 4.45 4.45 0 0 1 0-6.2 4.2 4.2 0 0 1 4.22-1.08l-.76.78A.75.75 0 0 0 13 9.75h2.65c.42 0 .75-.34.75-.75z"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12m13.93-6.4c.29.1.47.38.47.69V9c0 .41-.33.75-.75.75H13a.75.75 0 0 1-.54-1.27l.76-.78A4.2 4.2 0 0 0 9 8.79a4.45 4.45 0 0 0 0 6.19 4.17 4.17 0 0 0 6 0 4.4 4.4 0 0 0 1.2-2.48c.07-.41.4-.77.82-.77.4 0 .74.33.7.73a6 6 0 0 1-1.65 3.56 5.67 5.67 0 0 1-8.14 0 5.95 5.95 0 0 1 0-8.28 5.7 5.7 0 0 1 6.43-1.21l.76-.77a.8.8 0 0 1 .81-.17"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconRefreshSquare;
