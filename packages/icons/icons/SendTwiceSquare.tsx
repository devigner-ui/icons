import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSendTwiceSquare = forwardRef<SVGSVGElement, IconProps>(
  function IconSendTwiceSquare(
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
              d="M17 15.5h-7m0 0 3-2.5m-3 2.5 3 2.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17 8.5h-7m0 0L13 6m-3 2.5 3 2.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 6v12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
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
              d="M17.75 8.5a.75.75 0 0 0-.75-.75h-4.93l1.41-1.17a.75.75 0 0 0-.96-1.16l-3 2.5a.75.75 0 0 0 0 1.16l3 2.5a.75.75 0 1 0 .96-1.16l-1.4-1.17H17c.41 0 .75-.34.75-.75"
              fill="currentColor"
            />
            <path
              d="M17.75 15.5a.75.75 0 0 0-.75-.75h-4.93l1.41-1.17a.75.75 0 0 0-.96-1.16l-3 2.5a.75.75 0 0 0 0 1.16l3 2.5a.75.75 0 1 0 .96-1.16l-1.4-1.17H17c.41 0 .75-.34.75-.75"
              fill="currentColor"
            />
            <path
              d="M7.75 18a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 1.5 0z"
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
              d="M3.46 3.46C2 4.93 2 7.3 2 12s0 7.07 1.46 8.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46C22 19.07 22 16.7 22 12s0-7.07-1.46-8.54C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46M17 14.75a.75.75 0 0 1 0 1.5h-4.93l1.41 1.17a.75.75 0 0 1-.96 1.16l-3-2.5a.75.75 0 0 1 0-1.16l3-2.5a.75.75 0 0 1 .96 1.16l-1.4 1.17zm.75-6.25a.75.75 0 0 0-.75-.75h-4.93l1.41-1.17a.75.75 0 0 0-.96-1.16l-3 2.5a.75.75 0 0 0 0 1.16l3 2.5a.75.75 0 0 0 .96-1.16l-1.4-1.17H17c.41 0 .75-.34.75-.75M7.75 6a.75.75 0 0 0-1.5 0v12a.75.75 0 0 0 1.5 0z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSendTwiceSquare;
