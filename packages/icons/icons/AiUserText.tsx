import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiUserText = forwardRef<SVGSVGElement, IconProps>(function IconAiUserText(
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
            d="M2.5 20.5c0-3.3 3.1-6 7-6 .9 0 1.8.1 2.6.4m-.59-10.26a3.5 3.5 0 1 0 1.36 1.92"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.3 20.5v-3.12a2.08 2.08 0 0 1 4.16 0v3.12m-4.16-2.18h4.16m2.18-3.02v5.2"
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
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6 7.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0-7 0Zm-3.5 13c0-3.3 3.1-6 7-6 .9 0 1.8.1 2.6.4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.3 20.5v-3.12a2.08 2.08 0 0 1 4.16 0v3.12m-4.16-2.18h4.16m2.18-3.02v5.2"
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
            d="M9.5 3.25a4.4 4.4 0 0 1 3 1.25 4.4 4.4 0 0 1 1.25 3 4.4 4.4 0 0 1-1.25 3 4.4 4.4 0 0 1-3 1.25 4.4 4.4 0 0 1-3-1.25 4.4 4.4 0 0 1-1.25-3 4.4 4.4 0 0 1 1.25-3 4.4 4.4 0 0 1 3-1.25zM1.75 20.5a6.7 6.7 0 0 1 2.3-4.8 8.5 8.5 0 0 1 5.45-1.95c.94 0 1.97.13 2.86.45.3.1.49.39.49.7v5.6c0 .41-.34.75-.75.75H2.5a.75.75 0 0 1-.75-.75z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M13.55 20.5v-2.38c0-.75-.01-1.45.36-2.12a2.86 2.86 0 0 1 5.02.14c.3.63.28 1.3.28 1.97v2.39a.75.75 0 0 1-1.5 0v-1.43h-2.66v1.43a.75.75 0 0 1-1.5 0zm4.1-3.49c-.31-1.11-1.87-1.29-2.43-.28-.15.26-.18.55-.18.84h2.69q0-.3-.07-.56zm3-2.46c.4 0 .74.34.74.75v5.2a.75.75 0 0 1-1.5 0v-5.2c0-.41.34-.75.75-.75z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
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
            d="M9.5 3.25a4.4 4.4 0 0 1 3 1.25 4.4 4.4 0 0 1 1.25 3 4.4 4.4 0 0 1-1.25 3 4.4 4.4 0 0 1-3 1.25 4.4 4.4 0 0 1-3-1.25 4.4 4.4 0 0 1-1.25-3 4.4 4.4 0 0 1 1.25-3 4.4 4.4 0 0 1 3-1.25zM1.75 20.5a6.7 6.7 0 0 1 2.3-4.8 8.5 8.5 0 0 1 5.45-1.95c.94 0 1.97.13 2.86.45.3.1.49.39.49.7v5.6c0 .41-.34.75-.75.75H2.5a.75.75 0 0 1-.75-.75zm11.8 0v-2.38c0-.75-.01-1.45.36-2.12a2.86 2.86 0 0 1 5.02.14c.3.63.28 1.3.28 1.97v2.39a.75.75 0 0 1-1.5 0v-1.43h-2.66v1.43a.75.75 0 0 1-1.5 0zm4.1-3.49c-.31-1.11-1.87-1.29-2.43-.28-.15.26-.18.55-.18.84h2.69q0-.3-.07-.56zm3-2.46c.4 0 .74.34.74.75v5.2a.75.75 0 0 1-1.5 0v-5.2c0-.41.34-.75.75-.75z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiUserText;
