import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiTestTube = forwardRef<SVGSVGElement, IconProps>(function IconAiTestTube(
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
            d="M6.5 3v9.7m0 2.4v1.4a2.5 2.5 0 1 0 5 0V3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 3h8m-6.5 7.5h5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 10.8c.29 2.11 1.09 2.91 3.2 3.2-2.11.29-2.91 1.09-3.2 3.2-.29-2.11-1.09-2.91-3.2-3.2 2.11-.29 2.91-1.09 3.2-3.2Z"
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
            d="M6.5 3v13.5a2.5 2.5 0 1 0 5 0V3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 3h8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6.5 10.5h5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 10.8c.29 2.11 1.09 2.91 3.2 3.2-2.11.29-2.91 1.09-3.2 3.2-.29-2.11-1.09-2.91-3.2-3.2 2.11-.29 2.91-1.09 3.2-3.2Z"
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
            d="M12.25 3v13.5c-.03.84-.4 1.75-.95 2.3s-1.46.95-2.3.95-1.75-.4-2.3-.95a3.6 3.6 0 0 1-.95-2.3V3c0-.41.34-.75.75-.75h5c.41 0 .75.34.75.75z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M5.75 9.75h6.5v1.5h-6.5zm-.75-6h8a.75.75 0 0 0 0-1.5H5a.75.75 0 0 0 0 1.5z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M18.4 10.4c.15 1.13.4 1.8.9 2.3s1.17.76 2.3.9a.4.4 0 0 1 0 .8c-1.13.15-1.8.4-2.3.9s-.76 1.18-.9 2.3a.4.4 0 0 1-.8 0c-.15-1.12-.4-1.8-.9-2.3s-1.17-.75-2.3-.9a.4.4 0 0 1 0-.8c1.13-.14 1.8-.4 2.3-.9s.76-1.17.9-2.3a.4.4 0 0 1 .8 0z"
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
            d="M12.25 16.5c-.03.84-.4 1.75-.95 2.3s-1.46.95-2.3.95-1.75-.4-2.3-.95a3.6 3.6 0 0 1-.95-2.3V3.75H5a.75.75 0 0 1 0-1.5h8a.75.75 0 0 1 0 1.5h-.75z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M18.4 10.4c.15 1.13.4 1.8.9 2.3s1.17.76 2.3.9a.4.4 0 0 1 0 .8c-1.13.15-1.8.4-2.3.9s-.76 1.18-.9 2.3a.4.4 0 0 1-.8 0c-.15-1.12-.4-1.8-.9-2.3s-1.17-.75-2.3-.9a.4.4 0 0 1 0-.8c1.13-.14 1.8-.4 2.3-.9s.76-1.17.9-2.3a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiTestTube;
