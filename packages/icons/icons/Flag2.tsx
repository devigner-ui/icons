import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconFlag2 = forwardRef<SVGSVGElement, IconProps>(function IconFlag2(
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
            d="M5 22V2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m5 14 2.47-.5a8.7 8.7 0 0 1 4.92.46c1.7.68 3.56.8 5.33.36l.1-.03a.9.9 0 0 0 .56-1.33l-1.57-2.6c-.34-.57-.5-.86-.55-1.17v-.38c.04-.31.21-.6.55-1.17l1.28-2.13a.73.73 0 0 0-.8-1.08 7.3 7.3 0 0 1-4.48-.3l-.42-.17a8.7 8.7 0 0 0-4.92-.45L5 4"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.5 1.75a.75.75 0 0 0-1.5 0v20a.75.75 0 0 0 1.5 0z"
            fill="currentColor"
          />
          <path
            d="m13.56 3.87-.42-.16a8.7 8.7 0 0 0-4.92-.45L6.5 3.6v10l1.72-.34a8.7 8.7 0 0 1 4.92.45c1.7.68 3.56.8 5.33.36l.1-.03a.9.9 0 0 0 .56-1.33l-1.57-2.6c-.34-.57-.5-.86-.55-1.17v-.38c.04-.31.21-.6.55-1.17l1.28-2.13a.73.73 0 0 0-.8-1.08 7.3 7.3 0 0 1-4.48-.3"
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
            d="M5.75 1c.41 0 .75.34.75.75V3.6l1.72-.34a8.7 8.7 0 0 1 4.92.45l.42.16c1.42.57 3 .68 4.48.3a.73.73 0 0 1 .8 1.1l-1.28 2.12c-.34.57-.5.86-.55 1.17v.38c.04.31.21.6.55 1.17l1.57 2.6a.9.9 0 0 1-.56 1.33l-.1.03a8.7 8.7 0 0 1-5.33-.36 8.7 8.7 0 0 0-4.92-.45l-1.72.34v8.15a.75.75 0 0 1-1.5 0v-20c0-.41.34-.75.75-.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconFlag2;
