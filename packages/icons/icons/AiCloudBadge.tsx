import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiCloudBadge = forwardRef<SVGSVGElement, IconProps>(function IconAiCloudBadge(
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
            d="M15.6 20H17a4.51 4.51 0 0 0 .6-9 6 6 0 0 0-11.7 1.4A3.84 3.84 0 1 0 7 20h6.2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.6 14a3.4 3.4 0 1 0 6.8 0 3.4 3.4 0 1 0-6.8 0z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 12.1c.17 1.25.65 1.73 1.9 1.9-1.25.17-1.73.65-1.9 1.9-.17-1.25-.65-1.73-1.9-1.9 1.25-.17 1.73-.65 1.9-1.9z"
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
            d="M7 20h10a4.5 4.5 0 0 0 .6-9 6 6 0 0 0-11.7 1.4A3.8 3.8 0 0 0 7 20Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.6 14a3.4 3.4 0 1 0 6.8 0 3.4 3.4 0 1 0-6.8 0z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 12.1c.17 1.25.65 1.73 1.9 1.9-1.25.17-1.73.65-1.9 1.9-.17-1.25-.65-1.73-1.9-1.9 1.25-.17 1.73-.65 1.9-1.9z"
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
            d="M1.9 16.86c-.17-1.2.2-2.51.87-3.4a4.5 4.5 0 0 1 2.46-1.67A5.6 5.6 0 0 1 7 8.17a7 7 0 0 1 4.08-2.05 6.7 6.7 0 0 1 7.06 4.2 4.4 4.4 0 0 1 3.12 1.72 5.5 5.5 0 0 1 1.29 3.81 5.4 5.4 0 0 1-1.79 3.6 5.6 5.6 0 0 1-3.77 1.3H7.04a5 5 0 0 1-3.34-.87 4.8 4.8 0 0 1-1.8-3.02z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M12 9.85c1.1 0 2.23.5 2.93 1.22A4.3 4.3 0 0 1 16.15 14c0 1.1-.5 2.23-1.22 2.93A4.3 4.3 0 0 1 12 18.15c-1.1 0-2.22-.5-2.93-1.22A4.3 4.3 0 0 1 7.85 14c0-1.1.5-2.22 1.22-2.93A4.3 4.3 0 0 1 12 9.85m0 1.5a.4.4 0 0 0-.4.35c-.09.7-.23 1.08-.53 1.37-.29.3-.68.44-1.37.53a.4.4 0 0 0 0 .8c.7.09 1.08.23 1.37.53.3.29.44.68.53 1.37a.4.4 0 0 0 .8 0c.09-.7.23-1.08.53-1.37.29-.3.68-.44 1.37-.53a.4.4 0 0 0 0-.8c-.7-.09-1.08-.23-1.37-.53-.3-.29-.44-.68-.53-1.37a.4.4 0 0 0-.4-.35z"
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
            d="M1.9 16.86c-.17-1.2.2-2.51.87-3.4a4.5 4.5 0 0 1 2.46-1.67A5.6 5.6 0 0 1 7 8.17a7 7 0 0 1 4.08-2.05 6.7 6.7 0 0 1 7.06 4.2 4.4 4.4 0 0 1 3.12 1.72 5.5 5.5 0 0 1 1.29 3.81 5.4 5.4 0 0 1-1.79 3.6 5.6 5.6 0 0 1-3.77 1.3H7.04a5 5 0 0 1-3.34-.87 4.8 4.8 0 0 1-1.8-3.02zm7.17-5.8A4.3 4.3 0 0 0 7.85 14c0 1.1.5 2.23 1.22 2.93A4.3 4.3 0 0 0 12 18.15c1.1 0 2.23-.5 2.93-1.22A4.3 4.3 0 0 0 16.15 14c0-1.1-.5-2.22-1.22-2.93A4.3 4.3 0 0 0 12 9.85c-1.1 0-2.22.5-2.93 1.22zm3.33.64c.09.7.23 1.08.53 1.37.29.3.68.44 1.37.53a.4.4 0 0 1 0 .8c-.7.09-1.08.23-1.37.53-.3.29-.44.68-.53 1.37a.4.4 0 0 1-.8 0c-.09-.7-.23-1.08-.53-1.37-.29-.3-.68-.44-1.37-.53a.4.4 0 0 1 0-.8c.7-.09 1.08-.23 1.37-.53.3-.29.44-.68.53-1.37a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiCloudBadge;
