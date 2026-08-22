import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCloudyMoon = forwardRef<SVGSVGElement, IconProps>(
  function IconCloudyMoon(
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
              opacity={duotone ? "0.4" : "1"}
              d="m21.07 11.86-.64-.4zm-5.57 2.39a.75.75 0 0 0 0 1.5zM8.25 8.5a.75.75 0 0 0 1.5 0zm3.9-5.57-.4-.64zm-10.4 12.3a.75.75 0 1 0 1.42-.45zM16.61 20a.75.75 0 1 0 .76 1.3zM2.75 12c0-5.1 4.14-9.25 9.25-9.25v-1.5A10.75 10.75 0 0 0 1.25 12zm17.68-.53a5.8 5.8 0 0 1-4.93 2.78v1.5c2.63 0 4.94-1.4 6.2-3.5zM9.75 8.5a5.8 5.8 0 0 1 2.78-4.93l-.77-1.28A7.3 7.3 0 0 0 8.25 8.5zm-6.58 6.28A9 9 0 0 1 2.75 12h-1.5q0 1.68.5 3.22zM21.25 12a9.3 9.3 0 0 1-4.63 8.01l.76 1.3A10.8 10.8 0 0 0 22.75 12zM12 2.75a.4.4 0 0 1-.27-.12.3.3 0 0 1-.08-.15c0-.03 0-.12.1-.19l.78 1.28c.5-.3.67-.86.6-1.3A1.13 1.13 0 0 0 12 1.25zm9.7 9.5c-.06.1-.15.1-.18.1a.3.3 0 0 1-.15-.08.4.4 0 0 1-.12-.27h1.5c0-.72-.57-1.08-1.03-1.14-.43-.06-1 .1-1.3.6z"
              fill="currentColor"
            />
            <path
              d="M10.05 15.14a4 4 0 0 1 2.45 0m-7.17 1.62a3 3 0 0 0-.54-.05A2.7 2.7 0 0 0 2 19.35 2.7 2.7 0 0 0 4.79 22h6.5A3.63 3.63 0 0 0 15 18.47a3.55 3.55 0 0 0-2.5-3.34m-7.17 1.63q-.23-.58-.23-1.23A3.63 3.63 0 0 1 8.8 12a3.65 3.65 0 0 1 3.7 3.13m-7.18 1.63q.54.1 1 .4"
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
              opacity={duotone ? "0.4" : "1"}
              d="M12 22a10 10 0 0 0 10-10c0-.46-.7-.54-.93-.14a6.5 6.5 0 1 1-8.93-8.93c.4-.24.32-.93-.14-.93a10 10 0 1 0 0 20"
              fill="currentColor"
            />
            <path
              d="M11.29 22A3.63 3.63 0 0 0 15 18.47a3.55 3.55 0 0 0-2.5-3.34A3.65 3.65 0 0 0 8.81 12a3.63 3.63 0 0 0-3.71 3.53q0 .65.23 1.23a3 3 0 0 0-.54-.05A2.7 2.7 0 0 0 2 19.35 2.7 2.7 0 0 0 4.79 22z"
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
              d="M11.29 22A3.63 3.63 0 0 0 15 18.47a3.55 3.55 0 0 0-2.5-3.34A3.65 3.65 0 0 0 8.81 12a3.63 3.63 0 0 0-3.71 3.53q0 .65.23 1.23a3 3 0 0 0-.54-.05A2.7 2.7 0 0 0 2 19.35 2.7 2.7 0 0 0 4.79 22z"
              fill="currentColor"
            />
            <path
              d="M2.72 15.72q.41-.22.88-.35a5.13 5.13 0 0 1 5.72-4.85 6.5 6.5 0 0 1 2.82-7.59c.4-.24.32-.93-.14-.93a10 10 0 0 0-9.28 13.72"
              fill="currentColor"
            />
            <path
              d="M22 12a10 10 0 0 1-6.43 9.34 4.86 4.86 0 0 0-.53-6.36l.46.02a6.5 6.5 0 0 0 5.57-3.14c.24-.4.93-.32.93.14"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCloudyMoon;
