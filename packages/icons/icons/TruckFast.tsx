import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTruckFast = forwardRef<SVGSVGElement, IconProps>(
  function IconTruckFast(
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
              d="M12.67 14h1a2 2 0 0 0 2-2V2h-9a4 4 0 0 0-3.49 2.05"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.67 17a3 3 0 0 0 3 3h1c0-1.1.9-2 2-2a2 2 0 0 1 2 2h4c0-1.1.9-2 2-2a2 2 0 0 1 2 2h1a3 3 0 0 0 3-3v-3h-3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1.3l-1.72-2.99A2 2 0 0 0 17.51 5h-1.84v7a2 2 0 0 1-2 2h-1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.67 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.67 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22.67 12v2h-3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1.3z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.67 8h6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.67 11h4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.67 14h2"
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
              d="M22.67 14v3a3 3 0 0 1-3 3h-1a2 2 0 0 0-2-2 2 2 0 0 0-2 2h-4a2 2 0 0 0-2-2 2 2 0 0 0-2 2h-1a3 3 0 0 1-3-3v-3h11a2 2 0 0 0 2-2V5h1.84c.72 0 1.38.39 1.74 1.01L20.96 9h-1.29a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1z"
              fill="currentColor"
            />
            <path
              d="M8.67 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
              fill="currentColor"
            />
            <path
              d="M16.67 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
              fill="currentColor"
            />
            <path
              d="M22.67 12.53V14h-3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1.29l1.45 2.54a2 2 0 0 1 .26.99"
              fill="currentColor"
            />
            <path
              d="M14.67 2h-8a4 4 0 0 0-3.92 3.25h4.92c.41 0 .75.34.75.75s-.34.75-.75.75h-5v1.5h3c.41 0 .75.34.75.75s-.34.75-.75.75h-3v1.5h1c.41 0 .75.34.75.75s-.34.75-.75.75h-1V14h11a2 2 0 0 0 2-2V3a1 1 0 0 0-1-1"
              fill="currentColor"
            />
            <path
              d="M2.75 5.25H1.67A.76.76 0 0 0 .92 6c0 .41.34.75.75.75h1V6q0-.39.08-.75"
              fill="currentColor"
            />
            <path
              d="M1.67 8.25A.76.76 0 0 0 .92 9c0 .41.34.75.75.75h1v-1.5z"
              fill="currentColor"
            />
            <path
              d="M1.67 11.25a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h1v-1.5z"
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
              d="M22.17 15.5c.28 0 .5.22.5.5v1a3 3 0 0 1-3 3 3 3 0 0 0-3-3 3 3 0 0 0-3 3h-2a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1h9.5a2.5 2.5 0 0 0 2.5-2.5V6a1 1 0 0 1 1-1h.84c.72 0 1.38.39 1.74 1.01l.64 1.12a.25.25 0 0 1-.22.37 2.5 2.5 0 0 0-2.5 2.5v3a2.5 2.5 0 0 0 2.5 2.5z"
              fill="currentColor"
            />
            <path
              d="M8.67 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
              fill="currentColor"
            />
            <path
              d="M16.67 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
              fill="currentColor"
            />
            <path
              d="M22.67 12.53V14h-3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1.3l1.44 2.54a2 2 0 0 1 .26.99"
              fill="currentColor"
            />
            <path
              d="M13.75 2H6.36a3.7 3.7 0 0 0-3.62 2.98h4.37c.38 0 .68.31.68.69s-.3.68-.68.68H2.67v1.38h2.6a.7.7 0 0 1 .7.69.7.7 0 0 1-.7.68h-2.6v1.38h.77a.7.7 0 0 1 .7.69.7.7 0 0 1-.7.68h-.77v.23a1 1 0 0 0 1 1h9.15c1.02 0 1.85-.83 1.85-1.85V2.92a.9.9 0 0 0-.92-.92"
              fill="currentColor"
            />
            <path
              d="M2.74 4.98H1.61a.7.7 0 0 0-.69.69c0 .38.31.68.7.68h1.05v-.66q0-.36.07-.71"
              fill="currentColor"
            />
            <path
              d="M2.52 7.73h-.9a.7.7 0 0 0-.7.69c0 .38.31.68.7.68h1.05V7.73z"
              fill="currentColor"
            />
            <path
              d="M2.52 10.48h-.9a.7.7 0 0 0-.7.69c0 .38.31.68.7.68h1.05v-1.37z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconTruckFast;
