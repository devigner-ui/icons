import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBatteryFullLine = forwardRef<SVGSVGElement, IconProps>(
  function IconBatteryFullLine(
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
            d="M2 12c0-3.77 0-5.66 1.17-6.83S6.23 4 10 4h1.5c3.77 0 5.66 0 6.83 1.17S19.5 8.23 19.5 12s0 5.66-1.17 6.83S15.27 20 11.5 20H10c-3.77 0-5.66 0-6.83-1.17-.65-.65-.94-1.53-1.07-2.83"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M22 14v-4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M7 9s.5.9.5 3-.5 3-.5 3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
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
              d="M2 12c0-3.77 0-5.66 1.17-6.83S6.23 4 10 4h1.5c3.77 0 5.66 0 6.83 1.17S19.5 8.23 19.5 12s0 5.66-1.17 6.83S15.27 20 11.5 20H10c-3.77 0-5.66 0-6.83-1.17S2 15.77 2 12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M22 14v-4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M7 9s.5.9.5 3-.5 3-.5 3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
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
              d="M2.77 5.17C1.6 6.34 1.6 8.23 1.6 12s0 5.66 1.17 6.83S5.83 20 9.6 20h1.5c3.77 0 5.66 0 6.83-1.17S19.1 15.77 19.1 12s0-5.66-1.17-6.83S14.87 4 11.1 4H9.6C5.83 4 3.94 4 2.77 5.17"
              fill="currentColor"
            />
            <path
              d="M20.85 14a.75.75 0 0 0 1.5 0v-4a.75.75 0 0 0-1.5 0z"
              fill="currentColor"
            />
            <path
              d="M6.24 8.34a.75.75 0 0 1 1.02.3L6.6 9l.66-.36.01.03.1.23q.1.21.2.63A10 10 0 0 1 7.86 12a10 10 0 0 1-.27 2.47 5 5 0 0 1-.3.86l-.02.02v.01a.75.75 0 0 1-1.32-.71v-.02l.04-.08q.06-.13.14-.45c.11-.42.23-1.11.23-2.1a9 9 0 0 0-.37-2.55l-.04-.08v-.01a.75.75 0 0 1 .3-1.02"
              fill="currentColor"
            />
            <path
              d="M10.76 8.64a.75.75 0 0 0-1.32.72l.04.1q.06.12.14.44c.11.42.23 1.11.23 2.1a9 9 0 0 1-.37 2.55l-.04.08v.02a.75.75 0 0 0 1.32.71L10.1 15l.66.36.01-.03.1-.22q.1-.22.2-.64a10 10 0 0 0 .28-2.47 10 10 0 0 0-.27-2.47 5 5 0 0 0-.3-.86z"
              fill="currentColor"
            />
            <path
              d="M13.24 8.34a.75.75 0 0 1 1.02.3L13.6 9l.66-.36.01.03.1.23q.1.21.2.63a10 10 0 0 1 .28 2.47 10 10 0 0 1-.27 2.47 5 5 0 0 1-.3.86l-.02.02v.01a.75.75 0 0 1-1.32-.71v-.02l.04-.08q.06-.13.14-.45c.11-.42.23-1.11.23-2.1a9 9 0 0 0-.37-2.55l-.04-.08v-.01a.75.75 0 0 1 .3-1.02"
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
              d="M1.6 12c0-3.77 0-5.66 1.17-6.83S5.83 4 9.6 4h1.5c3.77 0 5.66 0 6.83 1.17S19.1 8.23 19.1 12s0 5.66-1.17 6.83S14.87 20 11.1 20H9.6c-3.77 0-5.66 0-6.83-1.17S1.6 15.77 1.6 12m4.64-3.66a.75.75 0 0 1 1.02.3L6.6 9l.66-.36.01.03.1.22q.1.22.2.64A10 10 0 0 1 7.86 12a10 10 0 0 1-.27 2.47 5 5 0 0 1-.3.86l-.02.02v.01L6.6 15l.66.36a.75.75 0 0 1-1.32-.71v-.02l.04-.08q.06-.13.14-.45c.11-.42.23-1.11.23-2.1a9 9 0 0 0-.37-2.55l-.04-.08v-.02a.75.75 0 0 1 .3-1m4.52.3a.75.75 0 0 0-1.32.71v.02l.04.08q.06.13.14.45c.11.42.23 1.11.23 2.1a9 9 0 0 1-.37 2.55l-.04.08v.01a.75.75 0 0 0 1.32.72L10.1 15l.66.36.01-.03.1-.22q.1-.22.2-.64a10 10 0 0 0 .28-2.47 10 10 0 0 0-.27-2.47 5 5 0 0 0-.3-.86zM10.1 9l.66-.36zm3.14-.66a.75.75 0 0 1 1.02.3L13.6 9l.66-.36.01.03.1.22q.1.22.2.64a10 10 0 0 1 .28 2.47 10 10 0 0 1-.27 2.47 5 5 0 0 1-.3.86l-.02.02v.01L13.6 15l.66.36a.75.75 0 0 1-1.32-.71v-.02l.04-.08q.06-.13.14-.45c.11-.42.23-1.11.23-2.1a9 9 0 0 0-.37-2.55l-.04-.08v-.02a.75.75 0 0 1 .3-1"
              fill="currentColor"
            />
            <path
              d="M20.85 14a.75.75 0 0 0 1.5 0v-4a.75.75 0 0 0-1.5 0z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBatteryFullLine;
