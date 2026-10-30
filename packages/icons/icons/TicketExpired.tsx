import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTicketExpired = forwardRef<SVGSVGElement, IconProps>(
  function IconTicketExpired(
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
            d="M22 10.75v-.92c0-3.7-.92-4.62-4.62-4.62H11V12"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M10.91 20h6.47c3.7 0 4.62-.92 4.62-4.62a2.3 2.3 0 0 1-2.31-2.31"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M11 17v3H8.23c-1.48 0-2.35-1.01-3.31-3.33l-.18-.45a2.37 2.37 0 1 0-1.81-4.38l-.17-.43c-1.44-3.52-.94-4.75 2.58-6.2l2.64-1.08L11 11.45V14"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M8.17 20H8"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
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
              d="M10.9 19.87h6.47c3.7 0 4.62-.92 4.62-4.62a2.31 2.31 0 0 1 0-4.63V9.7c0-3.7-.92-4.62-4.62-4.62h-6.38v6.79"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10.99 16.87v3H8.23c-1.48 0-2.35-1.01-3.3-3.33l-.19-.45a2.37 2.37 0 1 0-1.81-4.38l-.17-.43c-1.45-3.52-.95-4.75 2.57-6.2L7.97 4l3.02 7.32v2.55"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.16 19.87h-.17"
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
              opacity={duotone ? "0.4" : "1"}
              d="M19.85 12.94c0 .8.65 1.46 1.45 1.46.38 0 .7.31.7.69 0 3.84-1.16 5-5 5h-5.25V18.5c0-.39-.3-.71-.68-.74v-2.85a.74.74 0 0 0 .68-.74V9.83c0-.39-.3-.71-.68-.74V4.93H17c3.84 0 5 1.16 5 5v.85a.7.7 0 0 1-.7.7c-.8 0-1.45.65-1.45 1.46"
              fill="currentColor"
            />
            <path
              d="M11.07 9.09c-.41 0-.82.33-.82.74v4.34c0 .41.34.75.75.75l.07-.01v2.85l-.07-.01a.76.76 0 0 0-.75.75v1.59H8.49c-1.88 0-2.85-1.41-3.73-3.54l-.17-.42a.7.7 0 0 1 .39-.91q.57-.23.81-.81.24-.57.01-1.15a1.53 1.53 0 0 0-1.98-.83.6.6 0 0 1-.54 0 .7.7 0 0 1-.38-.39l-.15-.4c-1.49-3.62-.84-5.17 2.78-6.67l2.45-1.01c.36-.15.77.02.91.38z"
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
              d="M19.85 12.94c0 .8.65 1.46 1.45 1.46.38 0 .7.31.7.69 0 3.84-1.16 5-5 5h-5.25V18.5c0-.39-.3-.71-.68-.74l-.07-.01a.76.76 0 0 0-.75.75v1.59H8.49c-1.88 0-2.85-1.41-3.73-3.54l-.17-.42a.7.7 0 0 1 .4-.91q.56-.23.8-.81.24-.57.01-1.15a1.53 1.53 0 0 0-1.98-.83.6.6 0 0 1-.54 0 .7.7 0 0 1-.38-.39l-.15-.4c-1.49-3.62-.84-5.17 2.78-6.67l2.45-1.01c.36-.15.77.02.91.38l2.18 4.75c-.4 0-.82.33-.82.74v4.34c0 .41.34.75.75.75l.07-.01a.74.74 0 0 0 .68-.74V9.83c0-.39-.3-.71-.68-.74V4.93H17c3.84 0 5 1.16 5 5v.85a.7.7 0 0 1-.7.7c-.8 0-1.45.65-1.45 1.46"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconTicketExpired;
