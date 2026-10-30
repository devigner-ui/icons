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
            d="M8 12v4m-2-2h4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 12.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
            fill="currentColor"
          />
          <path
            d="M18 15.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
            fill="currentColor"
          />
          <path
            d="M12 6V5a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1V2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.92 6H14c2.8 0 4.2 0 5.27.54.94.48 1.7 1.25 2.18 2.19C22 9.8 22 11.2 22 14v1.1m-.28 3.48q-.1.38-.27.69a5 5 0 0 1-2.18 2.18C18.2 22 16.8 22 14 22h-4c-2.8 0-4.2 0-5.27-.55a5 5 0 0 1-2.19-2.18C2 18.2 2 16.8 2 14s0-4.2.54-5.27a5 5 0 0 1 2.19-2.19q.33-.17.71-.27"
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
            <g clipPath="url(#clip0_1_23182)">
              <path
                opacity={duotone ? "0.4" : "1"}
                d="M8 12v4m-2-2h4"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
              />
              <g opacity={duotone ? "0.4" : "1"}>
                <path
                  d="M16 12.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
                  fill="currentColor"
                />
                <path
                  d="M18 15.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
                  fill="currentColor"
                />
              </g>
              <path
                opacity={duotone ? "0.4" : "1"}
                d="M12 6V5a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1V2"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
              />
              <path
                d="M2 14c0-2.8 0-4.2.54-5.27a5 5 0 0 1 2.19-2.19C5.8 6 7.2 6 10 6h4c2.8 0 4.2 0 5.27.54a5 5 0 0 1 2.18 2.19C22 9.8 22 11.2 22 14s0 4.2-.55 5.27a5 5 0 0 1-2.18 2.18C18.2 22 16.8 22 14 22h-4c-2.8 0-4.2 0-5.27-.55a5 5 0 0 1-2.19-2.18C2 18.2 2 16.8 2 14"
                stroke="currentColor"
                strokeWidth={strokeWidth}
              />
            </g>
            <defs>
              <clipPath>
                <rect y="0.5" width="24" height="24" fill="none" />
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
              d="M12.75 6.4H14c3.77 0 5.66 0 6.83 1.17S22 10.63 22 14.4s0 5.66-1.17 6.83S17.77 22.4 14 22.4h-4c-3.77 0-5.66 0-6.83-1.17S2 18.17 2 14.4s0-5.66 1.17-6.83S6.23 6.4 10 6.4z"
              fill="currentColor"
            />
            <path
              d="M8.75 12.4a.75.75 0 0 0-1.5 0v1.05a.2.2 0 0 1-.2.2H6a.75.75 0 0 0 0 1.5h1.05q.18.02.2.2v1.05a.75.75 0 0 0 1.5 0v-1.05q.02-.18.2-.2H10a.75.75 0 0 0 0-1.5H8.95a.2.2 0 0 1-.2-.2z"
              fill="currentColor"
            />
            <path
              d="M15 13.9a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
              fill="currentColor"
            />
            <path
              d="M18 15.9a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
              fill="currentColor"
            />
            <path
              d="M15.75 2.4a.75.75 0 0 0-1.5 0v1q-.02.23-.25.25h-1c-.97 0-1.75.78-1.75 1.75v1h1.5v-1c0-.14.11-.25.25-.25h1c.97 0 1.75-.78 1.75-1.75z"
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
              d="M15 1.65c.41 0 .75.34.75.75v1c0 .97-.78 1.75-1.75 1.75h-1a.25.25 0 0 0-.25.25v1H14c3.77 0 5.66 0 6.83 1.17S22 10.63 22 14.4s0 5.66-1.17 6.83S17.77 22.4 14 22.4h-4c-3.77 0-5.66 0-6.83-1.17S2 18.17 2 14.4s0-5.66 1.17-6.83S6.23 6.4 10 6.4h1.25v-1c0-.97.78-1.75 1.75-1.75h1c.14 0 .25-.11.25-.25v-1c0-.41.34-.75.75-.75M8.75 12.4a.75.75 0 0 0-1.5 0v1.05a.2.2 0 0 1-.2.2H6a.75.75 0 0 0 0 1.5h1.05q.18.02.2.2v1.05a.75.75 0 0 0 1.5 0v-1.05q.02-.18.2-.2H10a.75.75 0 0 0 0-1.5H8.95a.2.2 0 0 1-.2-.2zM15 13.9a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconGamepadOld;
