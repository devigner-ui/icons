import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPassportNoLine = forwardRef<SVGSVGElement, IconProps>(
  function IconPassportNoLine(
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
            d="M12 16.85a3 3 0 1 0-3-3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M18 5.85v.75h.75v-.75zm-2.28-3.67-.1-.75zM4.92 3.72l-.1-.74h0zm.15 2.88H18V5.1H5.07zm13.68-.75v-1.7h-1.5v1.7zm-3.14-4.42L4.81 2.98l.22 1.48 10.8-1.54zM4.81 2.98c-.9.12-1.56.9-1.56 1.8h1.5c0-.16.12-.3.28-.32zm13.94 1.17a2.75 2.75 0 0 0-3.14-2.73l.21 1.49c.76-.1 1.43.48 1.43 1.24zm-13.68.94a.3.3 0 0 1-.32-.32h-1.5c0 1 .82 1.82 1.82 1.82z"
            fill="currentColor"
          />
          <path
            d="M4 5.85v13a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-5m-16-8v-1m0 1h13a3 3 0 0 1 3 3v1"
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
              d="M4 5.85v13a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-10a3 3 0 0 0-3-3zm0 0v-1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <circle
              opacity={duotone ? "0.4" : "1"}
              cx="12"
              cy="13.85"
              r="3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M18 5.85v.75h.75v-.75zm-2.28-3.67-.1-.75zM4.92 3.72l-.1-.74zm.15 2.88H18V5.1H5.07zm13.68-.75v-1.7h-1.5v1.7zm-3.14-4.42L4.81 2.98l.22 1.48 10.8-1.54zM4.81 2.98c-.9.12-1.56.9-1.56 1.8h1.5c0-.16.12-.3.28-.32zm13.94 1.17a2.75 2.75 0 0 0-3.14-2.73l.21 1.49c.76-.1 1.43.48 1.43 1.24zm-13.68.94a.3.3 0 0 1-.32-.32h-1.5c0 1 .82 1.82 1.82 1.82z"
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
              d="M12 10.9a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 4.85v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-10a3 3 0 0 0-3-3H5a1 1 0 0 1-1-1m8 4.55a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18 4.15v1.87a3 3 0 0 0-1-.18H5a1 1 0 0 1-1-1v-.07c0-.53.4-.98.92-1.06l10.8-1.54A2 2 0 0 1 18 4.15"
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
              d="M5 4.85a1 1 0 0 0-.6-.91q.23-.19.52-.22l10.8-1.54A2 2 0 0 1 18 4.15v.82a4 4 0 0 0-1-.12z"
              fill="currentColor"
            />
            <path
              d="M9.75 13.85a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18 6.02a3 3 0 0 1 2 2.83v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-14a1 1 0 0 0 1 1h12a3 3 0 0 1 1 .17m-6 4.08a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconPassportNoLine;
