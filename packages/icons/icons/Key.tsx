import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconKey = forwardRef<SVGSVGElement, IconProps>(function IconKey(
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
            d="M15.68 14.59A6.3 6.3 0 0 0 22 8.29 6.3 6.3 0 0 0 15.68 2a6.3 6.3 0 0 0-6.32 6.3c0 1.6.74 2.77.74 2.77L2.45 18.7c-.34.34-.82 1.22 0 2.04l.89.88c.34.3 1.2.7 1.9 0l1.04-1.02c1.02 1.02 2.2.44 2.64-.15.74-1.02-.15-2.05-.15-2.05l.3-.29c1.4 1.4 2.64.59 3.08 0 .74-1.02 0-2.05 0-2.05-.29-.58-.88-.58-.14-1.32l.88-.87c.7.58 2.15.73 2.8.73"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17.89 8.3a2.2 2.2 0 1 1-4.4-.01 2.2 2.2 0 0 1 4.4 0"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22 8.3a6.3 6.3 0 0 1-6.32 6.29c-.64 0-2.09-.15-2.8-.73l-.87.87c-.52.52-.38.67-.15.92q.15.15.3.4s.73 1.03 0 2.05c-.45.59-1.68 1.4-3.1 0l-.29.3s.89 1.02.15 2.04c-.44.59-1.62 1.17-2.64.15L5.25 21.6c-.7.7-1.57.3-1.91 0l-.89-.88c-.82-.82-.34-1.7 0-2.04l7.65-7.62S9.36 9.9 9.36 8.3A6.3 6.3 0 0 1 15.68 2 6.3 6.3 0 0 1 22 8.3"
            fill="currentColor"
          />
          <path
            d="M17.89 8.3a2.2 2.2 0 1 1-4.4-.01 2.2 2.2 0 0 1 4.4 0"
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
            d="M22 8.3a6.3 6.3 0 0 1-6.32 6.29c-.64 0-2.09-.15-2.8-.73l-.87.87c-.52.52-.38.67-.15.92q.15.15.3.4s.73 1.03 0 2.05c-.45.59-1.68 1.4-3.1 0l-.29.3s.89 1.02.15 2.04c-.44.59-1.62 1.17-2.64.15L5.25 21.6c-.7.7-1.57.3-1.91 0l-.89-.88c-.82-.82-.34-1.7 0-2.04l7.65-7.62S9.36 9.9 9.36 8.3A6.3 6.3 0 0 1 15.68 2 6.3 6.3 0 0 1 22 8.3m-6.32 2.19a2.2 2.2 0 1 0 .01-4.4 2.2 2.2 0 0 0 0 4.4"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconKey;
