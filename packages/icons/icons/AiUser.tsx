import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiUser = forwardRef<SVGSVGElement, IconProps>(function IconAiUser(
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
            d="M3.5 20.5c0-3.3 3.1-6 7-6s7 2.7 7 6M12.51 4.64a3.5 3.5 0 1 0 1.36 1.92"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.3 2.4c.23 1.72.88 2.37 2.6 2.6-1.72.23-2.37.88-2.6 2.6-.23-1.72-.88-2.37-2.6-2.6 1.72-.23 2.37-.88 2.6-2.6Z"
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
            d="M7 7.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0zm-3.5 13c0-3.3 3.1-6 7-6s7 2.7 7 6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.3 2.4c.23 1.72.88 2.37 2.6 2.6-1.72.23-2.37.88-2.6 2.6-.23-1.72-.88-2.37-2.6-2.6 1.72-.23 2.37-.88 2.6-2.6Z"
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
            d="M10.5 3.25a4.4 4.4 0 0 1 3 1.25 4.4 4.4 0 0 1 1.25 3 4.4 4.4 0 0 1-1.25 3 4.4 4.4 0 0 1-3 1.25 4.4 4.4 0 0 1-3-1.25 4.4 4.4 0 0 1-1.25-3 4.4 4.4 0 0 1 1.25-3 4.4 4.4 0 0 1 3-1.25zM2.75 20.5a6.7 6.7 0 0 1 2.3-4.8 8.5 8.5 0 0 1 5.45-1.95c2.09 0 4.1.77 5.45 1.94a6.7 6.7 0 0 1 2.3 4.81c0 .41-.34.75-.75.75h-14a.75.75 0 0 1-.75-.75z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M19.7 2c.12.93.33 1.47.73 1.87s.94.61 1.87.73a.4.4 0 0 1 0 .8c-.93.12-1.47.32-1.87.73s-.61.94-.73 1.87a.4.4 0 0 1-.8 0c-.12-.93-.32-1.47-.73-1.87s-.94-.61-1.87-.73a.4.4 0 0 1 0-.8c.93-.12 1.47-.32 1.87-.73s.61-.94.73-1.87a.4.4 0 0 1 .8 0z"
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
            d="M10.5 3.25a4.4 4.4 0 0 1 3 1.25 4.4 4.4 0 0 1 1.25 3 4.4 4.4 0 0 1-1.25 3 4.4 4.4 0 0 1-3 1.25 4.4 4.4 0 0 1-3-1.25 4.4 4.4 0 0 1-1.25-3 4.4 4.4 0 0 1 1.25-3 4.4 4.4 0 0 1 3-1.25zM2.75 20.5a6.7 6.7 0 0 1 2.3-4.8 8.5 8.5 0 0 1 5.45-1.95c2.09 0 4.1.77 5.45 1.94a6.7 6.7 0 0 1 2.3 4.81c0 .41-.34.75-.75.75h-14a.75.75 0 0 1-.75-.75z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M19.7 2c.12.93.33 1.47.73 1.87s.94.61 1.87.73a.4.4 0 0 1 0 .8c-.93.12-1.47.32-1.87.73s-.61.94-.73 1.87a.4.4 0 0 1-.8 0c-.12-.93-.32-1.47-.73-1.87s-.94-.61-1.87-.73a.4.4 0 0 1 0-.8c.93-.12 1.47-.32 1.87-.73s.61-.94.73-1.87a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiUser;
