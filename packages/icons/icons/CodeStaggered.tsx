import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCodeStaggered = forwardRef<SVGSVGElement, IconProps>(function IconCodeStaggered(
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
            d="m16 10.6 1.7 1.53c1.54 1.39 2.3 2.07 2.3 2.97s-.77 1.59-2.31 2.97L16 19.6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m13.99 4.6-1.14 4.29m-.9 3.38L10 19.6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 4.43 6.3 5.96C4.76 7.35 4 8.04 4 8.93s.77 1.58 2.31 2.97L8 13.43"
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
            d="m16 10.6 1.7 1.53c1.54 1.39 2.3 2.07 2.3 2.97s-.77 1.59-2.31 2.97L16 19.6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M13.99 4.6 10 19.6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M8 4.43 6.3 5.96C4.76 7.35 4 8.04 4 8.93s.77 1.58 2.31 2.97L8 13.43"
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
            d="M8.5 4.99a.75.75 0 1 0-1-1.12L5.76 5.44Q4.64 6.4 4 7.14a2.7 2.7 0 0 0-.75 1.79c0 .7.31 1.26.75 1.78q.64.73 1.77 1.71L7.5 14a.75.75 0 1 0 1-1.12l-1.7-1.52c-.78-.71-1.31-1.2-1.66-1.6-.33-.4-.4-.62-.4-.82s.07-.42.4-.82c.35-.4.88-.89 1.67-1.6z"
            fill="currentColor"
          />
          <path
            d="M15.44 10.1a.75.75 0 0 1 1.06-.06l1.74 1.57c.74.66 1.35 1.2 1.77 1.7.44.53.75 1.1.75 1.79 0 .7-.31 1.26-.75 1.78q-.65.73-1.77 1.71l-1.74 1.57a.75.75 0 1 1-1-1.12l1.7-1.52a19 19 0 0 0 1.66-1.6c.33-.4.4-.62.4-.82s-.07-.42-.4-.82c-.35-.4-.88-.89-1.67-1.6l-1.7-1.52a.75.75 0 0 1-.05-1.06"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14.18 3.88c.4.1.64.51.53.91l-3.99 15a.75.75 0 0 1-1.44-.38l3.98-15c.1-.4.52-.64.92-.53"
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
            d="M8.5 4.94a.75.75 0 1 0-1-1.12L5.76 5.39Q4.64 6.35 4 7.09a2.7 2.7 0 0 0-.75 1.79c0 .7.31 1.26.75 1.78q.64.73 1.77 1.71l1.73 1.58a.75.75 0 1 0 1-1.12l-1.7-1.52c-.78-.71-1.31-1.2-1.66-1.6-.33-.4-.4-.62-.4-.82s.07-.42.4-.82c.35-.4.88-.89 1.67-1.6z"
            fill="currentColor"
          />
          <path
            d="M14.18 3.83c.4.1.64.51.53.91l-3.99 15a.75.75 0 1 1-1.44-.38l3.98-15c.1-.4.52-.64.92-.53"
            fill="currentColor"
          />
          <path
            d="M15.44 10.05a.75.75 0 0 1 1.06-.06l1.74 1.57q1.12.97 1.77 1.7c.44.53.75 1.1.75 1.79 0 .7-.31 1.26-.75 1.78q-.65.73-1.77 1.71l-1.74 1.57a.75.75 0 1 1-1-1.12l1.7-1.52a19 19 0 0 0 1.66-1.6c.33-.4.4-.62.4-.82s-.07-.42-.4-.82c-.35-.4-.88-.89-1.67-1.6l-1.7-1.52a.75.75 0 0 1-.05-1.06"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconCodeStaggered;
