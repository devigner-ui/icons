import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSuperIntelligenceSearch = forwardRef<SVGSVGElement, IconProps>(function IconSuperIntelligenceSearch(
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
            d="M11.03 9.13C10.4 8.3 8.2 8.3 7.9 9.5c-.25.82 3.13 1 3.13 2.2-.31 1.2-2.5 1.2-3.13.37m5.2-3.77v4.6"
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
            d="M11.03 9.13C10.4 8.3 8.2 8.3 7.9 9.5c-.25.82 3.13 1 3.13 2.2-.31 1.2-2.5 1.2-3.13.37m5.2-3.77v4.6"
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
            d="M10.43 9.58c-.29-.33-.94-.33-1.32-.23q-.15.03-.28.1l.08.04q.43.18.87.32c.86.32 1.75.73 1.96 1.66a1 1 0 0 1-.03.54c-.66 1.71-3.28 1.83-4.4.52a.75.75 0 0 1 1.19-.91c.28.33.93.33 1.32.24a1 1 0 0 0 .38-.18l-.26-.17q-.33-.16-.68-.3c-.74-.27-1.97-.54-2.1-1.47-.12-.74.5-1.4 1.12-1.69 1.08-.5 2.56-.3 3.35.62a.75.75 0 0 1-1.2.91zm2.67-2.03c.41 0 .75.34.75.75v4.6a.75.75 0 0 1-1.5 0V8.3c0-.41.34-.75.75-.75zm7.93 12.42a.75.75 0 0 1-1.06 1.06l-4.2-4.19a8 8 0 0 0 1.07-1.06z"
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
            d="M10.5 2.25c2.22 0 4.38.97 5.83 2.42a8.4 8.4 0 0 1 2.42 5.83c0 1.96-.74 3.86-1.91 5.28l4.19 4.19a.75.75 0 1 1-1.06 1.06l-4.2-4.2a8.4 8.4 0 0 1-5.27 1.92 8.4 8.4 0 0 1-5.83-2.42 8.4 8.4 0 0 1-2.42-5.83c0-2.22.97-4.38 2.42-5.83a8.4 8.4 0 0 1 5.83-2.42zm.98 7.48c.33-.26.4-.73.15-1.06-.8-.92-2.27-1.12-3.35-.62-.62.29-1.24.95-1.13 1.7.14.92 1.37 1.2 2.1 1.47q.36.13.69.3.15.06.26.16-.17.14-.38.17c-.39.1-1.04.1-1.32-.23a.75.75 0 0 0-1.2.9c1.13 1.32 3.75 1.2 4.41-.5a.8.8 0 0 0 .03-.55c-.21-.93-1.1-1.33-1.96-1.65l-.87-.33-.08-.04q.13-.07.28-.1c.38-.1 1.03-.1 1.32.23.25.33.72.4 1.05.15zm.87-1.43v4.6a.75.75 0 0 0 1.5 0V8.3a.75.75 0 0 0-1.5 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconSuperIntelligenceSearch;
