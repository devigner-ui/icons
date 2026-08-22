import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBookmark = forwardRef<SVGSVGElement, IconProps>(function IconBookmark(
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
            d="M21 16.1v-5c0-4.29 0-6.43-1.32-7.77S16.24 2 12 2 5.64 2 4.32 3.33C3 4.67 3 6.81 3 11.1v5c0 3.09 0 4.64.73 5.31.35.33.8.53 1.27.58.98.12 2.14-.9 4.44-2.94 1.02-.9 1.53-1.36 2.12-1.47q.45-.09.88 0c.59.11 1.1.57 2.12 1.47 2.3 2.04 3.46 3.06 4.44 2.94a2.2 2.2 0 0 0 1.27-.58c.73-.67.73-2.22.73-5.32"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15 6H9"
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
            d="M21 11.1v5c0 3.09 0 4.64-.73 5.31q-.55.5-1.27.58c-.98.12-2.14-.9-4.44-2.94-1.02-.9-1.53-1.36-2.12-1.47a2 2 0 0 0-.88 0c-.59.11-1.1.57-2.12 1.47-2.3 2.04-3.46 3.06-4.44 2.94a2.2 2.2 0 0 1-1.27-.58C3 20.74 3 19.2 3 16.1v-5c0-4.28 0-6.42 1.32-7.76S7.76 2 12 2s6.36 0 7.68 1.33C21 4.67 21 6.81 21 11.1"
            fill="currentColor"
          />
          <path
            d="M9 5.25a.75.75 0 1 0 0 1.5h6a.75.75 0 0 0 0-1.5z"
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
            d="M21 11.1v5c0 3.09 0 4.64-.73 5.31q-.55.5-1.27.58c-.98.12-2.14-.9-4.44-2.94-1.02-.9-1.53-1.36-2.12-1.47a2 2 0 0 0-.88 0c-.59.11-1.1.57-2.12 1.47-2.3 2.04-3.46 3.06-4.44 2.94a2.2 2.2 0 0 1-1.27-.58C3 20.74 3 19.2 3 16.1v-5c0-4.28 0-6.42 1.32-7.76S7.76 2 12 2s6.36 0 7.68 1.33C21 4.67 21 6.81 21 11.1M8.25 6c0-.41.34-.75.75-.75h6a.75.75 0 0 1 0 1.5H9A.75.75 0 0 1 8.25 6"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconBookmark;
