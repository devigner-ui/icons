import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBatteryFull = forwardRef<SVGSVGElement, IconProps>(
  function IconBatteryFull(
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
              d="M2 12c0-3.77 0-5.66 1.17-6.83S6.23 4 10 4h1.5c3.77 0 5.66 0 6.83 1.17S19.5 8.23 19.5 12s0 5.66-1.17 6.83S15.27 20 11.5 20H10c-3.77 0-5.66 0-6.83-1.17S2 15.77 2 12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M7 9s.5.9.5 3-.5 3-.5 3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10.5 9s.5.9.5 3-.5 3-.5 3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M14 9s.5.9.5 3-.5 3-.5 3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M20 10c.94 0 1.41 0 1.7.3.3.29.3.76.3 1.7s0 1.41-.3 1.7c-.29.3-.76.3-1.7.3z"
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
              d="M3.17 5.17C2 6.34 2 8.23 2 12s0 5.66 1.17 6.83S6.23 20 10 20h1.5c3.77 0 5.66 0 6.83-1.17S19.5 15.77 19.5 12s0-5.66-1.17-6.83S15.27 4 11.5 4H10C6.23 4 4.34 4 3.17 5.17"
              fill="currentColor"
            />
            <path
              d="M19.5 14v-4h.5c.94 0 1.41 0 1.7.3.3.29.3.76.3 1.7s0 1.41-.3 1.7c-.29.3-.76.3-1.7.3z"
              fill="currentColor"
            />
            <path
              d="M6.64 8.34a.75.75 0 0 1 1.02.3L7 9l.66-.36.01.03.1.23q.1.21.2.63A10 10 0 0 1 8.26 12a10 10 0 0 1-.27 2.47 5 5 0 0 1-.3.86l-.02.02v.01a.75.75 0 0 1-1.32-.71v-.02l.04-.08q.06-.13.14-.45c.11-.42.23-1.11.23-2.1a9 9 0 0 0-.37-2.55l-.04-.08v-.01a.75.75 0 0 1 .3-1.02"
              fill="currentColor"
            />
            <path
              d="M11.16 8.64a.75.75 0 0 0-1.32.72l.04.1q.06.12.14.44c.11.42.23 1.11.23 2.1a9 9 0 0 1-.37 2.55l-.04.08v.02a.75.75 0 0 0 1.32.71L10.5 15l.66.36.01-.03.1-.22q.1-.22.2-.64a10 10 0 0 0 .28-2.47 10 10 0 0 0-.27-2.47 5 5 0 0 0-.3-.86z"
              fill="currentColor"
            />
            <path
              d="M13.64 8.34a.75.75 0 0 1 1.02.3L14 9l.66-.36.01.03.1.23q.1.21.2.63a10 10 0 0 1 .28 2.47 10 10 0 0 1-.27 2.47 5 5 0 0 1-.3.86l-.02.02v.01a.75.75 0 0 1-1.32-.71v-.02l.04-.08q.06-.13.14-.45c.11-.42.23-1.11.23-2.1a9 9 0 0 0-.37-2.55l-.04-.08v-.01a.75.75 0 0 1 .3-1.02"
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
              d="M2 12c0-3.77 0-5.66 1.17-6.83S6.23 4 10 4h1.5c3.77 0 5.66 0 6.83 1.17.94.94 1.13 2.35 1.16 4.83H20c.94 0 1.41 0 1.7.3.3.29.3.76.3 1.7s0 1.41-.3 1.7c-.29.3-.76.3-1.7.3h-.5c-.04 2.48-.23 3.89-1.17 4.83C17.16 20 15.27 20 11.5 20H10c-3.77 0-5.66 0-6.83-1.17S2 15.77 2 12m4.64-3.66a.75.75 0 0 1 1.02.3L7 9l.66-.36.01.03.1.22q.1.22.2.64A10 10 0 0 1 8.26 12a10 10 0 0 1-.27 2.47 5 5 0 0 1-.3.86l-.02.02v.01L7 15l.66.36a.75.75 0 0 1-1.32-.71v-.02l.04-.08q.06-.13.14-.45c.11-.42.23-1.11.23-2.1a9 9 0 0 0-.37-2.55l-.04-.08v-.02a.75.75 0 0 1 .3-1m4.52.3a.75.75 0 0 0-1.32.71v.02l.04.08q.06.13.14.45c.11.42.23 1.11.23 2.1a9 9 0 0 1-.37 2.55l-.04.08v.01a.75.75 0 0 0 1.32.72L10.5 15l.66.36.01-.03.1-.22q.1-.22.2-.64a10 10 0 0 0 .28-2.47 10 10 0 0 0-.27-2.47 5 5 0 0 0-.3-.86zM10.5 9l.66-.36zm3.14-.66a.75.75 0 0 1 1.02.3L14 9l.66-.36.01.03.1.22q.1.22.2.64a10 10 0 0 1 .28 2.47 10 10 0 0 1-.27 2.47 5 5 0 0 1-.3.86l-.02.02v.01L14 15l.66.36a.75.75 0 0 1-1.32-.71v-.02l.04-.08q.06-.13.14-.45c.11-.42.23-1.11.23-2.1a9 9 0 0 0-.37-2.55l-.04-.08v-.02a.75.75 0 0 1 .3-1"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBatteryFull;
