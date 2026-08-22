import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMapPointSchool = forwardRef<SVGSVGElement, IconProps>(
  function IconMapPointSchool(
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
              d="M4 10.14C4 5.64 7.58 2 12 2s8 3.65 8 8.14c0 4.47-2.55 9.67-6.54 11.53-.93.44-2 .44-2.92 0C6.55 19.81 4 14.61 4 10.14"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M11.22 6.64a2.2 2.2 0 0 1 1.56 0l2.34.85c.5.19.5.83 0 1.02l-2.34.85a2.2 2.2 0 0 1-1.56 0l-2.34-.85c-.5-.19-.5-.83 0-1.02z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M14.5 9v2.7c0 .39-.23.74-.59.88-.51.19-1.27.42-1.91.42s-1.4-.23-1.91-.42a.9.9 0 0 1-.59-.88V9"
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
              d="M10.54 21.67c.93.44 2 .44 2.92 0C17.45 19.81 20 14.61 20 10.14 20 5.64 16.42 2 12 2s-8 3.65-8 8.14c0 4.47 2.55 9.67 6.54 11.53"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.03 5.93a3 3 0 0 0-2.06 0l-2.35.86c-.54.2-.87.68-.87 1.21s.33 1.02.87 1.21l.13.05v2.44c0 .67.4 1.33 1.08 1.58.53.2 1.4.47 2.17.47.78 0 1.64-.27 2.17-.47.69-.25 1.08-.9 1.08-1.58V9.26l.13-.05c.54-.2.87-.68.87-1.21a1.3 1.3 0 0 0-.87-1.21zm-2.78 3.88v1.89q.02.15.1.18c.5.18 1.15.37 1.65.37s1.15-.19 1.65-.37q.08-.02.1-.18V9.8l-.72.27c-.66.24-1.4.24-2.06 0zm2.27-2.47q-.51-.18-1.04 0L9.68 8l1.8.66q.51.18 1.04 0l1.8-.66z"
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
              d="M13.46 21.67c-.93.44-2 .44-2.92 0C6.55 19.81 4 14.61 4 10.14 4 5.64 7.58 2 12 2s8 3.65 8 8.14c0 4.47-2.55 9.67-6.54 11.53m-2.5-15.74a3 3 0 0 1 2.07 0l2.35.86c.54.2.87.68.87 1.21a1.3 1.3 0 0 1-.87 1.21l-.13.05v2.44c0 .67-.4 1.33-1.08 1.58-.53.2-1.4.47-2.17.47-.78 0-1.64-.27-2.17-.47a1.7 1.7 0 0 1-1.08-1.58V9.26l-.13-.05A1.3 1.3 0 0 1 7.75 8c0-.53.33-1.01.87-1.21z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.48 7.34q.51-.18 1.04 0l1.8.66-1.8.66q-.51.18-1.04 0L9.68 8z"
              fill="currentColor"
            />
            <path
              d="M10.25 11.7V9.8l.72.27c.66.24 1.4.24 2.06 0l.72-.26v1.89q-.02.15-.1.18c-.5.18-1.15.37-1.65.37s-1.15-.19-1.65-.37q-.08-.02-.1-.18"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMapPointSchool;
