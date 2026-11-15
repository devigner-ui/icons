import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiHeadGear = forwardRef<SVGSVGElement, IconProps>(function IconAiHeadGear(
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
            d="M7 21.5v-3.8c-2.1-1.5-3.5-4-3.5-6.7a8.5 8.5 0 0 1 16.4-3.08m.76 2.28.74 2.1c.2.5-.2 1-.7 1h-1.2v2.4c0 1.6-1.3 2.8-2.8 2.8H15v3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m10.13 7.22.03-1.14h1.68l.03 1.14.7.29.82-.79 1.18 1.2-.78.82.29.7 1.14.02v1.68l-1.14.03-.29.7.79.82-1.2 1.19-.82-.79-.7.29-.02 1.14h-1.68l-.03-1.14-.7-.29-.82.79-1.18-1.2.78-.82-.29-.7-1.14-.02V9.46l1.14-.03.29-.7-.79-.82 1.2-1.19.82.79ZM9.6 10.3a1.4 1.4 0 1 0 2.8 0 1.4 1.4 0 1 0-2.8 0Z"
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
            d="M7 21.5v-3.8c-2.1-1.5-3.5-4-3.5-6.7a8.5 8.5 0 0 1 16.7-2.1l1.2 3.4c.2.5-.2 1-.7 1h-1.2v2.4c0 1.6-1.3 2.8-2.8 2.8H15v3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m10.13 7.22.03-1.14h1.68l.03 1.14.7.29.82-.79 1.18 1.2-.78.82.29.7 1.14.02v1.68l-1.14.03-.29.7.79.82-1.2 1.19-.82-.79-.7.29-.02 1.14h-1.68l-.03-1.14-.7-.29-.82.79-1.18-1.2.78-.82-.29-.7-1.14-.02V9.46l1.14-.03.29-.7-.79-.82 1.2-1.19.82.79ZM9.6 10.3a1.4 1.4 0 1 0 2.8 0 1.4 1.4 0 1 0-2.8 0Z"
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
            d="M6.25 21.5v-3.43A9.2 9.2 0 0 1 2.75 11c0-2.5 1.08-4.91 2.7-6.54A9.4 9.4 0 0 1 12 1.75c2.13 0 4.2.77 5.73 1.97a9.4 9.4 0 0 1 3.19 4.96l1.18 3.34c.12.46.05 1.1-.18 1.41-.23.32-.79.57-1.22.62h-.45v1.65a4 4 0 0 1-1.06 2.54c-.61.6-1.6.98-2.49 1.01h-.95v2.25c0 .41-.34.75-.75.75H7a.75.75 0 0 1-.75-.75z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M15.05 8.91c-.9 0-1.27-.64-.82-1.42a.95.95 0 0 0-.35-1.3l-.87-.5a.84.84 0 0 0-1.14.3l-.05.1c-.45.79-1.2.79-1.65 0l-.05-.1a.8.8 0 0 0-1.13-.3l-.87.5a.95.95 0 0 0-.35 1.3c.46.78.09 1.42-.82 1.42a.95.95 0 0 0-.95.95v.88c0 .52.43.95.95.95.9 0 1.28.64.82 1.43a.95.95 0 0 0 .35 1.29l.87.5c.39.23.9.09 1.14-.3l.05-.1c.45-.79 1.19-.79 1.65 0l.05.1a.84.84 0 0 0 1.14.3l.87-.5a.95.95 0 0 0 .35-1.3c-.46-.78-.09-1.42.82-1.42a.95.95 0 0 0 .95-.95v-.88a.95.95 0 0 0-.96-.95M11 11.93a1.63 1.63 0 0 1 0-3.25 1.63 1.63 0 0 1 0 3.25"
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
            d="M6.25 21.5v-3.43A9.2 9.2 0 0 1 2.75 11c0-2.5 1.08-4.91 2.7-6.54A9.4 9.4 0 0 1 12 1.75c2.13 0 4.2.77 5.73 1.97a9.4 9.4 0 0 1 3.19 4.96l1.18 3.34c.12.46.05 1.1-.18 1.41-.23.32-.79.57-1.22.62h-.45v1.65a4 4 0 0 1-1.06 2.54c-.61.6-1.6.98-2.49 1.01h-.95v2.25c0 .41-.34.75-.75.75H7a.75.75 0 0 1-.75-.75zm8.8-12.59c-.9 0-1.27-.64-.82-1.42a.95.95 0 0 0-.35-1.3l-.87-.5a.84.84 0 0 0-1.14.3l-.05.1c-.45.79-1.2.79-1.65 0l-.05-.1a.8.8 0 0 0-1.13-.3l-.87.5a.95.95 0 0 0-.35 1.3c.46.78.09 1.42-.82 1.42a.95.95 0 0 0-.95.95v.88c0 .52.43.95.95.95.9 0 1.28.64.82 1.43a.95.95 0 0 0 .35 1.29l.87.5c.39.23.9.09 1.14-.3l.05-.1c.45-.79 1.19-.79 1.65 0l.05.1a.84.84 0 0 0 1.14.3l.87-.5a.95.95 0 0 0 .35-1.3c-.46-.78-.09-1.42.82-1.42a.95.95 0 0 0 .95-.95v-.88a.95.95 0 0 0-.96-.95M11 11.93a1.63 1.63 0 0 1 0-3.25 1.63 1.63 0 0 1 0 3.25"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiHeadGear;
