import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconWater = forwardRef<SVGSVGElement, IconProps>(function IconWater(
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
            d="M12 18.5a6.5 6.5 0 0 1-5.13-2.61c-.44-.53-1.28-.52-1.67.04A5 5 0 0 1 2 18.3m20 0a4.8 4.8 0 0 1-3.08-2.18c-.42-.6-1.35-.57-1.81.01q-.6.8-1.5 1.38"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 8.5c2.5 0 4.08-1.35 5.13-2.61.44-.53 1.28-.52 1.67.04A5 5 0 0 0 22 8.3m-20 0a4.8 4.8 0 0 0 3.08-2.2c.42-.6 1.35-.57 1.81.01q.6.8 1.5 1.38"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 13.29a4.8 4.8 0 0 1-3.08-2.18c-.42-.6-1.35-.57-1.81.01A6.2 6.2 0 0 1 12 13.5a6.5 6.5 0 0 1-5.13-2.61c-.44-.53-1.28-.52-1.67.04A5 5 0 0 1 2 13.3"
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
            d="M22 8.29a4.8 4.8 0 0 1-3.08-2.18c-.42-.6-1.35-.57-1.81.01A6.2 6.2 0 0 1 12 8.5a6.5 6.5 0 0 1-5.13-2.61c-.44-.53-1.28-.52-1.67.04A5 5 0 0 1 2 8.3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 18.29a4.8 4.8 0 0 1-3.08-2.18c-.42-.6-1.35-.57-1.81.01A6.2 6.2 0 0 1 12 18.5a6.5 6.5 0 0 1-5.13-2.61c-.44-.53-1.28-.52-1.67.04A5 5 0 0 1 2 18.3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22 13.29a4.8 4.8 0 0 1-3.08-2.18c-.42-.6-1.35-.57-1.81.01A6.2 6.2 0 0 1 12 13.5a6.5 6.5 0 0 1-5.13-2.61c-.44-.53-1.28-.52-1.67.04A5 5 0 0 1 2 13.3"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.58 5.51a1.8 1.8 0 0 1 2.86-.1C8.43 6.59 9.81 7.75 12 7.75a5.4 5.4 0 0 0 4.52-2.1c.72-.9 2.26-1.05 3.01.03.62.88 1.3 1.58 2.63 1.87a.75.75 0 1 1-.32 1.47 5.5 5.5 0 0 1-3.53-2.48q-.07-.11-.27-.12a.5.5 0 0 0-.35.17A6.9 6.9 0 0 1 12 9.25a7.2 7.2 0 0 1-5.71-2.88.3.3 0 0 0-.26-.12q-.15 0-.2.1a5.7 5.7 0 0 1-3.67 2.67.75.75 0 1 1-.32-1.47c1.41-.3 2.09-1.07 2.74-2.04m0 10a1.8 1.8 0 0 1 2.86-.1c.99 1.18 2.37 2.34 4.56 2.34a5.4 5.4 0 0 0 4.52-2.1c.72-.9 2.26-1.05 3.01.03.62.88 1.3 1.58 2.63 1.87a.75.75 0 1 1-.32 1.47 5.5 5.5 0 0 1-3.53-2.48q-.07-.11-.27-.12a.5.5 0 0 0-.35.17A6.9 6.9 0 0 1 12 19.25a7.2 7.2 0 0 1-5.71-2.88.3.3 0 0 0-.26-.12q-.15 0-.2.1a5.7 5.7 0 0 1-3.67 2.67.75.75 0 1 1-.32-1.47c1.41-.3 2.09-1.07 2.74-2.04"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M4.58 10.51a1.8 1.8 0 0 1 2.86-.1c.99 1.18 2.37 2.34 4.56 2.34a5.4 5.4 0 0 0 4.52-2.1c.72-.9 2.26-1.05 3.01.03.62.88 1.3 1.58 2.63 1.87a.75.75 0 0 1-.32 1.47 5.5 5.5 0 0 1-3.53-2.48q-.07-.11-.27-.12a.5.5 0 0 0-.35.17A6.9 6.9 0 0 1 12 14.25a7.2 7.2 0 0 1-5.71-2.88.3.3 0 0 0-.26-.12q-.15 0-.2.1a5.7 5.7 0 0 1-3.67 2.67.75.75 0 0 1-.32-1.47c1.41-.3 2.09-1.08 2.74-2.04"
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
            d="M4.58 5.51a1.8 1.8 0 0 1 2.86-.1C8.43 6.59 9.81 7.75 12 7.75a5.4 5.4 0 0 0 4.52-2.1c.72-.9 2.26-1.05 3.01.03.62.88 1.3 1.58 2.63 1.87a.75.75 0 1 1-.32 1.47 5.5 5.5 0 0 1-3.53-2.48q-.07-.11-.27-.12a.5.5 0 0 0-.35.17A6.9 6.9 0 0 1 12 9.25a7.2 7.2 0 0 1-5.71-2.88l.58-.48-.58.48a.3.3 0 0 0-.26-.12q-.15 0-.2.1a5.7 5.7 0 0 1-3.67 2.67.75.75 0 1 1-.32-1.47c1.41-.3 2.09-1.07 2.74-2.04m0 5a1.8 1.8 0 0 1 2.86-.1c.99 1.18 2.37 2.34 4.56 2.34a5.4 5.4 0 0 0 4.52-2.1c.72-.9 2.26-1.05 3.01.03.62.88 1.3 1.58 2.63 1.87a.75.75 0 1 1-.32 1.47 5.5 5.5 0 0 1-3.53-2.48q-.07-.11-.27-.12a.5.5 0 0 0-.35.17A6.9 6.9 0 0 1 12 14.25a7.2 7.2 0 0 1-5.71-2.88.3.3 0 0 0-.26-.12q-.15 0-.2.1a5.7 5.7 0 0 1-3.67 2.67.75.75 0 1 1-.32-1.47c1.41-.3 2.09-1.07 2.74-2.04m0 5a1.8 1.8 0 0 1 2.86-.1c.99 1.18 2.37 2.34 4.56 2.34a5.4 5.4 0 0 0 4.52-2.1c.72-.9 2.26-1.05 3.01.03.62.88 1.3 1.58 2.63 1.87a.75.75 0 1 1-.32 1.47 5.5 5.5 0 0 1-3.53-2.48q-.07-.11-.27-.12a.5.5 0 0 0-.35.17A6.9 6.9 0 0 1 12 19.25a7.2 7.2 0 0 1-5.71-2.88.3.3 0 0 0-.26-.12q-.15 0-.2.1a5.7 5.7 0 0 1-3.67 2.67.75.75 0 1 1-.32-1.47c1.41-.3 2.09-1.07 2.74-2.04"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconWater;
