import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSpeedometer = forwardRef<SVGSVGElement, IconProps>(
  function IconSpeedometer(
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
              d="M19.81 19.5a10 10 0 1 0-14.3-.01"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.67 21.5a3.38 3.38 0 1 0 0-6.76 3.38 3.38 0 0 0 0 6.76"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.92 12h.75c.82 0 1.5-.67 1.5-1.5 0-.82-.68-1.5-1.5-1.5s-1.5.67-1.5 1.5v.75c0 .41.34.75.75.75"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
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
              d="M19.77 20.3c-.2 0-.4-.1-.5-.2-.3-.3-.3-.8 0-1.1 1.7-1.7 2.6-4 2.6-6.5 0-5.1-4.1-9.2-9.2-9.2s-9.2 4.1-9.2 9.2c0 2.4.9 4.7 2.6 6.5.3.3.3.8 0 1.1s-.8.3-1.1 0c-2-2-3.1-4.7-3.1-7.5 0-6 4.9-10.9 10.8-10.9s10.8 4.8 10.8 10.8c0 2.8-1.1 5.5-3.1 7.5q-.3.3-.6.3"
              fill="currentColor"
            />
            <path
              d="M12.67 22a3.9 3.9 0 1 0 0-7.8 3.9 3.9 0 0 0 0 7.8"
              fill="currentColor"
            />
            <path
              d="M16.67 8.5a2 2 0 0 0-2 2v.8c0 .7.6 1.2 1.2 1.2h.8a2 2 0 0 0 2-2 2 2 0 0 0-2-2"
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
              d="M19.81 20.25a.75.75 0 0 1-.54-1.27A9.26 9.26 0 1 0 3.42 12.5c0 2.43.93 4.72 2.63 6.46.29.3.28.77-.01 1.06a.75.75 0 0 1-1.06-.01 10.76 10.76 0 1 1 15.36.02.7.7 0 0 1-.53.22"
              fill="currentColor"
            />
            <path
              d="M12.67 22a3.88 3.88 0 1 0 0-7.76 3.88 3.88 0 0 0 0 7.76"
              fill="currentColor"
            />
            <path
              d="M16.67 8.5a2 2 0 0 0-2 2v.75c0 .69.56 1.25 1.25 1.25h.75a2 2 0 0 0 2-2 2 2 0 0 0-2-2"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSpeedometer;
