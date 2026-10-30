import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTextSquareOpen = forwardRef<SVGSVGElement, IconProps>(
  function IconTextSquareOpen(
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
            d="M12 3C7.75 3 5.62 3 4.3 4.32c-1 1-1.24 2.47-1.3 4.98m18 0c-.06-2.51-.3-3.98-1.3-4.98-.82-.82-1.95-1.13-3.7-1.25m5 11.63c-.06 2.51-.3 3.98-1.3 4.98C18.38 21 16.25 21 12 21s-6.38 0-7.7-1.32c-1-1-1.24-2.47-1.3-4.98"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M8 8h8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M12 16V8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M22 12h-2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M4 12H2"
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
              d="M21 9.3c-.06-2.51-.3-3.98-1.3-4.98C18.38 3 16.25 3 12 3S5.62 3 4.3 4.32c-1 1-1.24 2.47-1.3 4.98m18 5.4c-.06 2.51-.3 3.98-1.3 4.98C18.38 21 16.25 21 12 21s-6.38 0-7.7-1.32c-1-1-1.24-2.47-1.3-4.98"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M8 8h8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M12 16V8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M22 12h-2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M4 12H2"
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
              d="M7.75 7a.75.75 0 1 0 0 1.5H11v7.25a.75.75 0 0 0 1.5 0V8.5h3.25a.75.75 0 0 0 0-1.5z"
              fill="currentColor"
            />
            <path
              d="M20 11.75c0-.41.34-.75.75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
            <path
              d="M.75 11a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2 12c0-4.7 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
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
              d="m14.72 2.25-.17.02q-1.12-.02-2.5-.02h-.1q-1.38 0-2.5.02l-.17-.02c-2.48.06-4.25.28-5.5 1.52v.01C2.52 5.04 2.3 6.81 2.25 9.29l.01.17v.3H4a2.25 2.25 0 0 1 0 4.5H2.26l-.01.47c.06 2.48.28 4.25 1.52 5.5h.01c1.25 1.25 3.02 1.47 5.5 1.53l.17-.01 2.5.01h.1l2.5-.01.17.01c2.48-.06 4.25-.28 5.5-1.52v-.02c1.25-1.24 1.47-3 1.53-5.5l-.01-.16v-.31H20a2.25 2.25 0 0 1 0-4.5h1.74l.01-.47c-.06-2.48-.28-4.25-1.52-5.5h-.01c-1.25-1.25-3.02-1.47-5.5-1.53M8 7.25a.75.75 0 1 0 0 1.5h3.25V16a.75.75 0 0 0 1.5 0V8.75H16a.75.75 0 0 0 0-1.5z"
              fill="currentColor"
            />
            <path
              d="M19.25 12c0-.41.34-.75.75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
            <path
              d="M2 11.25a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconTextSquareOpen;
