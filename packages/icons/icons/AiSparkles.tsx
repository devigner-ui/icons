import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiSparkles = forwardRef<SVGSVGElement, IconProps>(function IconAiSparkles(
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
            d="M9.5 7.5c.59 4.29 2.21 5.91 6.5 6.5-4.29.59-5.91 2.21-6.5 6.5-.59-4.29-2.21-5.91-6.5-6.5 4.29-.59 5.91-2.21 6.5-6.5Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 2.5c.27 1.98 1.02 2.73 3 3-1.98.27-2.73 1.02-3 3-.27-1.98-1.02-2.73-3-3 1.98-.27 2.73-1.02 3-3Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19 15.5c.18 1.32.68 1.82 2 2-1.32.18-1.82.68-2 2-.18-1.32-.68-1.82-2-2 1.32-.18 1.82-.68 2-2Z"
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
            d="M9.5 7.5c.59 4.29 2.21 5.91 6.5 6.5-4.29.59-5.91 2.21-6.5 6.5-.59-4.29-2.21-5.91-6.5-6.5 4.29-.59 5.91-2.21 6.5-6.5Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 2.5c.27 1.98 1.02 2.73 3 3-1.98.27-2.73 1.02-3 3-.27-1.98-1.02-2.73-3-3 1.98-.27 2.73-1.02 3-3Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19 15.5c.18 1.32.68 1.82 2 2-1.32.18-1.82.68-2 2-.18-1.32-.68-1.82-2-2 1.32-.18 1.82-.68 2-2Z"
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
            d="M9.9 7.1c.3 2.21.83 3.65 1.84 4.66 1.02 1 2.45 1.55 4.66 1.84a.4.4 0 0 1 0 .8c-2.21.3-3.65.83-4.66 1.84-1 1.01-1.55 2.45-1.84 4.66a.4.4 0 0 1-.8 0c-.3-2.22-.83-3.65-1.84-4.66S4.8 14.7 2.6 14.4a.4.4 0 0 1 0-.8c2.21-.3 3.65-.83 4.66-1.84 1-1.02 1.55-2.45 1.84-4.66a.4.4 0 0 1 .8 0zm8.5-5c.14 1.06.38 1.7.84 2.16.47.46 1.1.7 2.16.84a.4.4 0 0 1 0 .8c-1.06.13-1.7.38-2.16.84s-.7 1.1-.84 2.16a.4.4 0 0 1-.8 0c-.14-1.06-.38-1.7-.84-2.16-.47-.47-1.1-.7-2.16-.85a.4.4 0 0 1 0-.79c1.06-.14 1.7-.38 2.16-.84.46-.47.7-1.1.84-2.16a.4.4 0 0 1 .8 0zm1 13c.1.73.25 1.14.56 1.45.3.3.71.46 1.44.55a.4.4 0 0 1 0 .8c-.73.1-1.14.25-1.44.56-.31.3-.47.71-.56 1.44a.4.4 0 0 1-.8 0c-.1-.73-.25-1.14-.56-1.44-.3-.31-.71-.47-1.44-.56a.4.4 0 0 1 0-.8c.73-.1 1.14-.25 1.44-.55s.47-.72.56-1.45a.4.4 0 0 1 .8 0z"
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
            d="M9.9 7.1c.3 2.21.83 3.65 1.84 4.66 1.02 1 2.45 1.55 4.66 1.84a.4.4 0 0 1 0 .8c-2.21.3-3.65.83-4.66 1.84-1 1.01-1.55 2.45-1.84 4.66a.4.4 0 0 1-.8 0c-.3-2.22-.83-3.65-1.84-4.66S4.8 14.7 2.6 14.4a.4.4 0 0 1 0-.8c2.21-.3 3.65-.83 4.66-1.84 1-1.02 1.55-2.45 1.84-4.66a.4.4 0 0 1 .8 0zm8.5-5c.14 1.06.38 1.7.84 2.16.47.46 1.1.7 2.16.84a.4.4 0 0 1 0 .8c-1.06.13-1.7.38-2.16.84s-.7 1.1-.84 2.16a.4.4 0 0 1-.8 0c-.14-1.06-.38-1.7-.84-2.16-.47-.47-1.1-.7-2.16-.85a.4.4 0 0 1 0-.79c1.06-.14 1.7-.38 2.16-.84.46-.47.7-1.1.84-2.16a.4.4 0 0 1 .8 0zm1 13c.1.73.25 1.14.56 1.45.3.3.71.46 1.44.55a.4.4 0 0 1 0 .8c-.73.1-1.14.25-1.44.56-.31.3-.47.71-.56 1.44a.4.4 0 0 1-.8 0c-.1-.73-.25-1.14-.56-1.44-.3-.31-.71-.47-1.44-.56a.4.4 0 0 1 0-.8c.73-.1 1.14-.25 1.44-.55s.47-.72.56-1.45a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiSparkles;
