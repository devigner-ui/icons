import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCalendarCheck = forwardRef<SVGSVGElement, IconProps>(
  function IconCalendarCheck(
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
              d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M2 14c0-2.8 0-4.2.54-5.27a5 5 0 0 1 2.19-2.18C5.8 6 7.2 6 10 6h4c2.8 0 4.2 0 5.27.55a5 5 0 0 1 2.18 2.18C22 9.8 22 11.2 22 14s0 4.2-.55 5.27a5 5 0 0 1-2.18 2.19C18.2 22 16.8 22 14 22h-4c-2.8 0-4.2 0-5.27-.54a5 5 0 0 1-2.19-2.19C2 18.2 2 16.8 2 14"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="m9.5 14.4 1.43 1.6 3.57-4"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.54 8.73C2 9.8 2 11.2 2 14s0 4.2.54 5.27a5 5 0 0 0 2.19 2.19C5.8 22 7.2 22 10 22h4c2.8 0 4.2 0 5.27-.54a5 5 0 0 0 2.18-2.19C22 18.2 22 16.8 22 14s0-4.2-.55-5.27a5 5 0 0 0-2.18-2.18C18.2 6 16.8 6 14 6h-4c-2.8 0-4.2 0-5.27.55a5 5 0 0 0-2.19 2.18m12.52 3.77a.75.75 0 0 0-1.12-1l-3.01 3.37-.87-.97a.75.75 0 1 0-1.12 1l1.43 1.6a.75.75 0 0 0 1.12 0z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 2c4.71 0 7.07 0 8.53 1.46.76.76 1.13 1.76 1.3 3.2V10H2.16V6.66c.18-1.44.55-2.44 1.3-3.2C4.93 2 7.3 2 12 2"
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
              d="M2.54 8.73C2 9.8 2 11.2 2 14s0 4.2.54 5.27a5 5 0 0 0 2.19 2.19C5.8 22 7.2 22 10 22h4c2.8 0 4.2 0 5.27-.54a5 5 0 0 0 2.18-2.19C22 18.2 22 16.8 22 14s0-4.2-.55-5.27a5 5 0 0 0-2.18-2.18C18.2 6 16.8 6 14 6h-4c-2.8 0-4.2 0-5.27.55a5 5 0 0 0-2.19 2.18m12.52 3.77a.75.75 0 0 0-1.12-1l-3.01 3.37-.87-.97a.75.75 0 1 0-1.12 1l1.43 1.6a.75.75 0 0 0 1.12 0z"
              fill="currentColor"
            />
            <path
              d="M20.53 3.46C19.07 2 16.71 2 12 2S4.93 2 3.46 3.46c-.75.76-1.12 1.76-1.3 3.2A7 7 0 0 1 4.05 5.2a7 7 0 0 1 2.54-.64q1.34-.09 3.35-.07h4.12q2.01-.02 3.35.07a7 7 0 0 1 2.54.64 7 7 0 0 1 1.88 1.45c-.17-1.44-.54-2.44-1.3-3.2"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCalendarCheck;
