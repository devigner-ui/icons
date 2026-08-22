import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBacteria = forwardRef<SVGSVGElement, IconProps>(function IconBacteria(
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
            d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M6 15a3 3 0 1 1 6 0 3 3 0 0 1-6 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m4.5 11.5.41-1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M14.46 7.17s1.25-.17 2.13.7c.87.89.7 2.13.7 2.13"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M9 9.3s-1.24.16-2.12-.71c-.88-.88-.7-2.13-.7-2.13"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M19 13.14s-1.16.47-1.48 1.67.44 2.19.44 2.19"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M13.42 17.77 15 19"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14.5 14v-2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 5h-2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="m12.5 9.5-1-1"
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
          <path d="M6 15a3 3 0 1 1 6 0 3 3 0 0 1-6 0" fill="currentColor" />
          <path
            stroke="currentColor"
            d="M14.46 7.17s1.25-.17 2.13.7c.87.89.7 2.13.7 2.13"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            stroke="currentColor"
            d="M9 9.3s-1.24.16-2.12-.71c-.88-.88-.7-2.13-.7-2.13"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            stroke="currentColor"
            d="M19 13.14s-1.16.47-1.48 1.67.44 2.19.44 2.19"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            stroke="currentColor"
            d="M13.42 17.77 15 19"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m-6.4 8.79a.75.75 0 1 0-1.38-.58l-.41 1a.75.75 0 1 0 1.38.58zm8.9.46c.41 0 .75.34.75.75v2a.75.75 0 1 1-1.5 0v-2c0-.41.34-.75.75-.75m-2.5-7h-2a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5"
            fill="currentColor"
          />
          <path
            stroke="currentColor"
            d="m12.5 9.5-1-1"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
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
            d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20M9 12a3 3 0 1 0 0 6 3 3 0 0 0 0-6M5.2 9.8c.38.17.57.6.4.99l-.4 1a.75.75 0 1 1-1.4-.58l.42-1c.16-.38.6-.56.98-.4m8.52-2.53c.06.41.43.7.84.65.66-.04 1.99.3 1.99 1.98-.05.41.23.79.64.84.41.06.8-.26.85-.67l.02-.26q.01-.26-.05-.66a3.3 3.3 0 0 0-.9-1.8 3.3 3.3 0 0 0-1.8-.9 4 4 0 0 0-.85-.03h-.1a.75.75 0 0 0-.64.85M9.74 9.2a.75.75 0 0 1-.64.85h-.03l-.26.02q-.26.01-.66-.05a3.3 3.3 0 0 1-1.8-.9 3.3 3.3 0 0 1-.9-1.8 4 4 0 0 1-.03-.91v-.03c.06-.41.44-.7.85-.65.41.06.7.43.65.84-.04.66.3 1.99 1.98 1.99.41-.05.79.23.84.64m10 3.8c.07.4-.18.8-.58.88l-.06.02q-.1.03-.25.14c-.2.14-.46.42-.6.97-.16.56-.07.93.03 1.15a1 1 0 0 0 .19.3.75.75 0 0 1-1 1.12l.5-.57-.5.57-.01-.02-.02-.01-.19-.21q-.16-.2-.34-.58a3.2 3.2 0 0 1-.12-2.13c.24-.91.72-1.47 1.17-1.8a3 3 0 0 1 .86-.41h.03l.15.73-.14-.74c.4-.08.8.19.88.6m-6.91 4.32a.75.75 0 0 1 1.05-.13l1.58 1.23a.75.75 0 1 1-.92 1.18l-1.58-1.23a.75.75 0 0 1-.13-1.05M15.25 12a.75.75 0 0 0-1.5 0v2a.75.75 0 1 0 1.5 0zM10 4.25h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 1 1 0-1.5m2.03 3.72a.75.75 0 1 0-1.06 1.06l1 1a.75.75 0 1 0 1.06-1.06z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconBacteria;
