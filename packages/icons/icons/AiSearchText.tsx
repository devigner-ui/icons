import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiSearchText = forwardRef<SVGSVGElement, IconProps>(function IconAiSearchText(
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
            d="M15.7 5.1A7.5 7.5 0 1 0 17.14 7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m16 16 4.5 4.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.05 12.5v-2.4a1.6 1.6 0 0 1 3.2 0v2.4m-3.2-1.68h3.2m1.68-2.32v4"
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
            d="M3 10.5a7.5 7.5 0 1 0 15 0 7.5 7.5 0 1 0-15 0Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {duotone ? (
            <path d="M21.03 19.97a.75.75 0 0 1-1.06 1.06l-4.2-4.19a8 8 0 0 0 1.07-1.06z" fill="currentColor" />
          ) : (
            <path
              d="m16 16 4.5 4.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
          <path
            d="M8.05 12.5v-2.4a1.6 1.6 0 0 1 3.2 0v2.4m-3.2-1.68h3.2m1.68-2.32v4"
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
            d="M10.5 2.25c2.22 0 4.38.97 5.83 2.42a8.4 8.4 0 0 1 2.42 5.83c0 2.22-.96 4.38-2.42 5.83a8.4 8.4 0 0 1-5.83 2.42 8.4 8.4 0 0 1-5.83-2.42 8.4 8.4 0 0 1-2.42-5.83c0-2.22.97-4.38 2.42-5.83a8.4 8.4 0 0 1 5.83-2.42z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M7.3 12.5v-1.8c0-.56-.02-1.1.23-1.62a2.37 2.37 0 0 1 4.16-.15c.32.56.3 1.15.3 1.77v1.8a.75.75 0 0 1-1.5 0v-.93H8.8v.93a.75.75 0 0 1-1.5 0zm3.16-2.65c-.22-.72-1.25-.8-1.58-.12a1 1 0 0 0-.08.34h1.7q0-.12-.04-.22zm2.47-2.1c.41 0 .75.34.75.75v4a.75.75 0 0 1-1.5 0v-4c0-.41.34-.75.75-.75zm8.1 12.22a.75.75 0 0 1-1.06 1.06l-4.2-4.19a8 8 0 0 0 1.07-1.06z"
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
            d="M10.5 2.25c2.22 0 4.38.97 5.83 2.42a8.4 8.4 0 0 1 2.42 5.83c0 1.96-.74 3.86-1.91 5.28l4.19 4.19a.75.75 0 1 1-1.06 1.06l-4.2-4.2a8.4 8.4 0 0 1-5.27 1.92 8.4 8.4 0 0 1-5.83-2.42 8.4 8.4 0 0 1-2.42-5.83c0-2.22.97-4.38 2.42-5.83a8.4 8.4 0 0 1 5.83-2.42zm-2.45 11c.41 0 .75-.34.75-.75v-.93h1.7v.93a.75.75 0 0 0 1.5 0v-1.8c0-.62 0-1.21-.31-1.77a2.37 2.37 0 0 0-4.16.15c-.25.52-.23 1.06-.23 1.62v1.8c0 .41.34.75.75.75zm2.45-3.18H8.8a1 1 0 0 1 .08-.34c.33-.68 1.36-.6 1.58.12zm1.68-1.57v4a.75.75 0 0 0 1.5 0v-4a.75.75 0 0 0-1.5 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiSearchText;
