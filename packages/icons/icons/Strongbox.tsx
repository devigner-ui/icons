import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconStrongbox = forwardRef<SVGSVGElement, IconProps>(
  function IconStrongbox(
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
            d="M2 15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v1.91h7.65"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M14.35 10.91c-.1.71-.52 1.31-1.1 1.67v1.98a1.25 1.25 0 0 1-2.5 0v-1.98a2.4 2.4 0 0 1-1.13-2.02 2.38 2.38 0 1 1 4.73.35Z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            stroke="currentColor"
          />
          <path
            d="M18 10.91h-3.65"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
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
              d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M14.35 10.91c-.1.71-.52 1.31-1.1 1.67v1.98a1.25 1.25 0 0 1-2.5 0v-1.98a2.4 2.4 0 0 1-1.13-2.02 2.38 2.38 0 1 1 4.73.35"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
              />
              <path
                d="M22 10.91h-7.65"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
              />
              <path
                d="M9.65 10.91H2"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
              />
            </g>
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
              d="M16.19 2H7.82C4.18 2 2.01 4.17 2.01 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2"
              fill="currentColor"
            />
            <path
              d="M22 10.16h-7.67q0-.11-.03-.22a2.4 2.4 0 0 0-1.66-1.66 2.36 2.36 0 0 0-2.97 1.88H2v1.5h7.91q.3.58.84.92v1.98a1.25 1.25 0 0 0 2.5 0v-1.98q.54-.34.84-.92H22z"
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
              d="M13.25 12.58v1.98a1.25 1.25 0 0 1-2.5 0v-1.98a2.3 2.3 0 0 1-.84-.92h-6.9a1 1 0 0 0-1 1v3.53A5.8 5.8 0 0 0 7.8 22h8.37c3.22 0 5.82-2.6 5.82-5.81v-3.53a1 1 0 0 0-1-1h-6.9q-.3.58-.85.92"
              fill="currentColor"
            />
            <path
              d="M16.19 2H7.81a5.8 5.8 0 0 0-5.8 5.81v1.35a1 1 0 0 0 1 1h6.66a2.37 2.37 0 0 1 4.63-.22l.03.22H21a1 1 0 0 0 1-1V7.81A5.8 5.8 0 0 0 16.2 2"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconStrongbox;
