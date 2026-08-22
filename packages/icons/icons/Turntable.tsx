import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTurntable = forwardRef<SVGSVGElement, IconProps>(
  function IconTurntable(
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
              d="M2 12c0-4.71 0-7.07 1.17-8.54S6.23 2 10 2h4c3.77 0 5.66 0 6.83 1.46C22 4.93 22 7.3 22 12s0 7.07-1.17 8.54S17.77 22 14 22h-4c-3.77 0-5.66 0-6.83-1.46C2 19.07 2 16.7 2 12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <rect
              x="6"
              y="8.00012"
              width="8"
              height="8"
              rx="4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M14.66 16.33a.75.75 0 1 0 .68 1.34zm1.23.22-.33-.67zm-.55 1.12.89-.45-.67-1.34-.9.45zm2.41-2.9V10.5h-1.5v4.26zm-1.52 2.45a2.8 2.8 0 0 0 1.52-2.46h-1.5c0 .48-.27.91-.7 1.12zM17 9.75a.75.75 0 0 1-.75-.75h-1.5c0 1.24 1 2.25 2.25 2.25zm.75-.75c0 .41-.34.75-.75.75v1.5c1.24 0 2.25-1 2.25-2.25zM17 8.25c.41 0 .75.34.75.75h1.5c0-1.24-1-2.25-2.25-2.25zm0-1.5c-1.24 0-2.25 1-2.25 2.25h1.5c0-.41.34-.75.75-.75z"
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
              d="M3.17 3.46C2 4.93 2 7.3 2 12s0 7.07 1.17 8.54S6.23 22 10 22h4c3.77 0 5.66 0 6.83-1.46C22 19.07 22 16.7 22 12s0-7.07-1.17-8.54S17.77 2 14 2h-4C6.23 2 4.34 2 3.17 3.46"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.25 12a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0m1.5 0a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.75 9a2.25 2.25 0 1 1 3 2.12v3.64c0 1.05-.59 2-1.52 2.46l-.9.45a.75.75 0 1 1-.67-1.34l.9-.45c.42-.21.69-.64.69-1.12v-3.64A2.25 2.25 0 0 1 14.75 9m1.5 0a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0"
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
              d="M16.25 9a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0"
              fill="currentColor"
            />
            <path
              d="M6.75 12a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.17 3.46C2 4.93 2 7.3 2 12s0 7.07 1.17 8.54S6.23 22 10 22h4c3.77 0 5.66 0 6.83-1.46C22 19.07 22 16.7 22 12s0-7.07-1.17-8.54S17.77 2 14 2h-4C6.23 2 4.34 2 3.17 3.46M17 6.75a2.25 2.25 0 0 0-.75 4.37v3.64c0 .48-.27.91-.7 1.12l-.89.45a.75.75 0 1 0 .68 1.34l.89-.45a2.8 2.8 0 0 0 1.52-2.46v-3.64A2.25 2.25 0 0 0 17 6.75m-7 .5a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconTurntable;
