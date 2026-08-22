import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconExit = forwardRef<SVGSVGElement, IconProps>(function IconExit(
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
            d="M9 4.5H8c-2.36 0-3.54 0-4.27.73S3 7.14 3 9.5v5c0 2.36 0 3.54.73 4.27s1.91.73 4.27.73h1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M9 6.48c0-2.3 0-3.44.7-4.07.71-.63 1.8-.44 3.96-.06l2.33.4c2.4.42 3.59.63 4.3 1.5.71.89.71 2.16.71 4.7v6.1c0 2.54 0 3.81-.71 4.7-.71.87-1.9 1.08-4.3 1.5l-2.33.4c-2.16.38-3.25.57-3.95-.06S9 19.82 9 17.52z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 11v2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
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
            d="M9.05 4.5Q9 5.35 9 6.72v10.56q-.01 1.37.05 2.22H8c-2.36 0-3.54 0-4.27-.73S3 16.86 3 14.5v-5c0-2.36 0-3.54.73-4.27S5.64 4.5 8 4.5z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.7 2.4C9 3.05 9 4.19 9 6.49v11.04c0 2.3 0 3.44.7 4.07.71.63 1.8.44 3.96.06l2.33-.4c2.4-.42 3.59-.63 4.3-1.5.71-.89.71-2.16.71-4.7v-6.1c0-2.54 0-3.81-.71-4.7-.71-.87-1.9-1.08-4.3-1.5l-2.33-.4c-2.16-.38-3.25-.57-3.95.06m3.05 8.55a.77.77 0 0 0-.75-.78.77.77 0 0 0-.75.78v2.1c0 .43.34.78.75.78s.75-.35.75-.78z"
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
            d="M9.7 2.4C9 3.05 9 4.19 9 6.49v11.04c0 2.3 0 3.44.7 4.07.71.63 1.8.44 3.96.06l2.33-.4c2.4-.42 3.59-.63 4.3-1.5.71-.89.71-2.16.71-4.7v-6.1c0-2.54 0-3.81-.71-4.7-.71-.87-1.9-1.08-4.3-1.5l-2.33-.4c-2.16-.38-3.25-.57-3.95.06m2.3 7.77c.41 0 .75.35.75.78v2.1c0 .43-.34.78-.75.78a.77.77 0 0 1-.75-.78v-2.1c0-.43.34-.78.75-.78"
            fill="currentColor"
          />
          <path
            d="M7.55 4.5c-2.06 0-3.13.05-3.82.73C3 5.96 3 7.14 3 9.5v5c0 2.36 0 3.54.73 4.27.69.68 1.76.73 3.82.73q-.06-.94-.05-2.12V6.62q-.01-1.18.05-2.12"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconExit;
