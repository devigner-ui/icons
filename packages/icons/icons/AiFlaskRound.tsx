import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiFlaskRound = forwardRef<SVGSVGElement, IconProps>(function IconAiFlaskRound(
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
            d="M10 2.5v5.6a7 7 0 1 0 5 .39m-1-1.71V2.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.5 2.5h7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 11.4c.29 2.11 1.09 2.91 3.2 3.2-2.11.29-2.91 1.09-3.2 3.2-.29-2.11-1.09-2.91-3.2-3.2 2.11-.29 2.91-1.09 3.2-3.2Z"
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
            d="M10 2.5v5.6a7 7 0 1 0 4 0V2.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.5 2.5h7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 11.4c.29 2.11 1.09 2.91 3.2 3.2-2.11.29-2.91 1.09-3.2 3.2-.29-2.11-1.09-2.91-3.2-3.2 2.11-.29 2.91-1.09 3.2-3.2Z"
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
            d="M14.75 2.5v5.07a7.7 7.7 0 0 1 4.92 8.36 8 8 0 0 1-2.6 4.74A8 8 0 0 1 12 22.56a8 8 0 0 1-5.07-1.89 8 8 0 0 1-2.6-4.74 8 8 0 0 1 1.14-5.3 7.7 7.7 0 0 1 3.78-3.06V2.5c0-.41.34-.75.75-.75h4c.41 0 .75.34.75.75z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M7.75 2.5c0-.41.34-.75.75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M12.4 11c.15 1.13.4 1.8.9 2.3s1.18.75 2.3.9a.4.4 0 0 1 0 .8c-1.12.15-1.8.4-2.3.9s-.75 1.18-.9 2.3a.4.4 0 0 1-.8 0c-.15-1.12-.4-1.8-.9-2.3s-1.18-.75-2.3-.9a.4.4 0 0 1 0-.8c1.12-.14 1.8-.4 2.3-.9s.75-1.17.9-2.3a.4.4 0 0 1 .8 0z"
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
            d="M14.75 7.57a7.7 7.7 0 0 1 4.92 8.36 8 8 0 0 1-2.6 4.74A8 8 0 0 1 12 22.56a8 8 0 0 1-5.07-1.89 8 8 0 0 1-2.6-4.74 8 8 0 0 1 1.14-5.3 7.7 7.7 0 0 1 3.78-3.06V3.25H8.5a.75.75 0 0 1 0-1.5H10q0 0 0 0h5.5a.75.75 0 0 1 0 1.5h-.75zM12 10.65a.4.4 0 0 0-.4.35c-.15 1.13-.4 1.8-.9 2.3s-1.18.75-2.3.9a.4.4 0 0 0 0 .8c1.12.15 1.8.4 2.3.9s.75 1.18.9 2.3a.4.4 0 0 0 .8 0c.15-1.12.4-1.8.9-2.3s1.18-.75 2.3-.9a.4.4 0 0 0 0-.8c-1.12-.14-1.8-.4-2.3-.9s-.75-1.17-.9-2.3a.4.4 0 0 0-.4-.35z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiFlaskRound;
