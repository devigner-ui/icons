import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCode = forwardRef<SVGSVGElement, IconProps>(function IconCode(
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
            d="m17 7.83 1.7 1.53c1.54 1.39 2.31 2.08 2.31 2.97s-.77 1.58-2.31 2.97L17 16.83"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M13.99 5 10 19.83"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M7 7.83 5.3 9.36C3.76 10.75 3 11.44 3 12.33s.77 1.58 2.31 2.97L7 16.83"
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
            d="M16.44 7.33a.75.75 0 0 1 1.06-.06l1.74 1.57c.74.66 1.35 1.2 1.77 1.7.44.53.75 1.1.75 1.79 0 .7-.31 1.26-.75 1.78q-.65.73-1.77 1.71L17.5 17.4a.75.75 0 1 1-1-1.12l1.7-1.52c.78-.71 1.31-1.2 1.66-1.6.33-.4.4-.62.4-.82s-.07-.42-.4-.82c-.35-.4-.88-.89-1.67-1.6L16.5 8.4a.75.75 0 0 1-.05-1.06"
            fill="currentColor"
          />
          <path
            d="M7.5 8.39a.75.75 0 1 0-1-1.12L4.76 8.84c-.74.66-1.35 1.2-1.77 1.7a2.7 2.7 0 0 0-.75 1.79c0 .7.31 1.26.75 1.78q.65.73 1.77 1.71L6.5 17.4a.75.75 0 1 0 1-1.12l-1.7-1.52c-.78-.71-1.31-1.2-1.66-1.6-.33-.4-.4-.62-.4-.82s.07-.42.4-.82c.35-.4.88-.89 1.67-1.6z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14.18 4.28c.4.1.64.51.53.91l-3.97 14.83a.75.75 0 1 1-1.45-.38L13.26 4.8c.11-.4.52-.64.92-.53"
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
            d="M14.18 4.28c.4.1.64.51.53.91l-3.97 14.83a.75.75 0 0 1-1.45-.38L13.26 4.8c.11-.4.52-.64.92-.53"
            fill="currentColor"
          />
          <path
            d="M16.44 7.33a.75.75 0 0 1 1.06-.06l1.74 1.57c.74.66 1.35 1.2 1.77 1.7.44.53.75 1.1.75 1.79 0 .7-.31 1.26-.75 1.78q-.65.73-1.77 1.71L17.5 17.4a.75.75 0 1 1-1-1.12l1.7-1.52a19 19 0 0 0 1.66-1.6c.33-.4.4-.62.4-.82s-.07-.42-.4-.82c-.35-.4-.88-.89-1.67-1.6L16.5 8.4a.75.75 0 0 1-.05-1.06"
            fill="currentColor"
          />
          <path
            d="M7.5 8.39a.75.75 0 0 0-1-1.12L4.76 8.84c-.74.66-1.35 1.2-1.77 1.7a2.7 2.7 0 0 0-.75 1.79c0 .7.31 1.26.75 1.78q.65.73 1.77 1.71L6.5 17.4a.75.75 0 1 0 1-1.12l-1.7-1.52a19 19 0 0 1-1.66-1.6c-.33-.4-.4-.62-.4-.82s.07-.42.4-.82c.35-.4.88-.89 1.67-1.6z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconCode;
