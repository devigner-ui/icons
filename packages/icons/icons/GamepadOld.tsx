import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconGamepadOld = forwardRef<SVGSVGElement, IconProps>(
  function IconGamepadOld(
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
            <g clipPath="url(#clip0_1_23182)">
              <path
                opacity={duotone ? "0.4" : "1"}
                d="M8 10v4m-2-2h4"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
              />
              <g opacity={duotone ? "0.4" : "1"}>
                <path
                  d="M16 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
                  fill="currentColor"
                />
                <path
                  d="M18 13.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
                  fill="currentColor"
                />
              </g>
              <path
                opacity={duotone ? "0.4" : "1"}
                d="M12 4V3a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1V0"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
              />
              <path
                d="M2 12c0-2.8 0-4.2.54-5.27a5 5 0 0 1 2.19-2.19C5.8 4 7.2 4 10 4h4c2.8 0 4.2 0 5.27.54a5 5 0 0 1 2.18 2.19C22 7.8 22 9.2 22 12s0 4.2-.55 5.27a5 5 0 0 1-2.18 2.18C18.2 20 16.8 20 14 20h-4c-2.8 0-4.2 0-5.27-.55a5 5 0 0 1-2.19-2.18C2 16.2 2 14.8 2 12"
                stroke="currentColor"
                strokeWidth={strokeWidth}
              />
            </g>
            <defs>
              <clipPath>
                <rect width="24" height="24" fill="none" />
              </clipPath>
            </defs>
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
              d="M12.75 6H14c3.77 0 5.66 0 6.83 1.17S22 10.23 22 14s0 5.66-1.17 6.83S17.77 22 14 22h-4c-3.77 0-5.66 0-6.83-1.17S2 17.77 2 14s0-5.66 1.17-6.83S6.23 6 10 6z"
              fill="currentColor"
            />
            <path
              d="M8.75 12a.75.75 0 0 0-1.5 0v1.05a.2.2 0 0 1-.2.2H6a.75.75 0 0 0 0 1.5h1.05q.18.02.2.2V16a.75.75 0 0 0 1.5 0v-1.05q.02-.18.2-.2H10a.75.75 0 0 0 0-1.5H8.95a.2.2 0 0 1-.2-.2z"
              fill="currentColor"
            />
            <path
              d="M15 13.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
              fill="currentColor"
            />
            <path
              d="M18 15.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
              fill="currentColor"
            />
            <path
              d="M15.75 2a.75.75 0 0 0-1.5 0v1c0 .14-.11.25-.25.25h-1c-.97 0-1.75.78-1.75 1.75v1h1.5V5c0-.14.11-.25.25-.25h1c.97 0 1.75-.78 1.75-1.75z"
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
              d="M15 1.25c.41 0 .75.34.75.75v1c0 .97-.78 1.75-1.75 1.75h-1a.25.25 0 0 0-.25.25v1H14c3.77 0 5.66 0 6.83 1.17S22 10.23 22 14s0 5.66-1.17 6.83S17.77 22 14 22h-4c-3.77 0-5.66 0-6.83-1.17S2 17.77 2 14s0-5.66 1.17-6.83S6.23 6 10 6h1.25V5c0-.97.78-1.75 1.75-1.75h1c.14 0 .25-.11.25-.25V2c0-.41.34-.75.75-.75M8.75 12a.75.75 0 0 0-1.5 0v1.05a.2.2 0 0 1-.2.2H6a.75.75 0 0 0 0 1.5h1.05q.18.02.2.2V16a.75.75 0 0 0 1.5 0v-1.05q.02-.18.2-.2H10a.75.75 0 0 0 0-1.5H8.95a.2.2 0 0 1-.2-.2zM15 13.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconGamepadOld;
