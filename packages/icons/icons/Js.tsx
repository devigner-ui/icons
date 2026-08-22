import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconJs = forwardRef<SVGSVGElement, IconProps>(function IconJs(
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
            d="m9.67 9-.01 7.93a2 2 0 0 1-2.97 1.75l-2.51-1.39a1 1 0 0 1-.51-.87V7.6c0-.36.2-.7.51-.87l8-4.44c.3-.17.67-.17.97 0l8 4.44a1 1 0 0 1 .51.87v8.82a1 1 0 0 1-.51.87l-8 4.44a1 1 0 0 1-.97 0L10.67 21"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17.67 10.75c0-.97-.78-1.75-1.75-1.75h-1.75c-.97 0-1.75.78-1.75 1.75s.78 1.75 1.75 1.75h1.75c.97 0 1.75.78 1.75 1.75S16.89 16 15.92 16h-1.75c-.97 0-1.75-.78-1.75-1.75"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
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
            d="M24.67 0h-24v24h24z"
            fill="none"
          />
          <path
            d="M12.67 22.61q-.44 0-.85-.22l-1.48-.71a.75.75 0 1 1 .65-1.35l1.51.73q.17.08.28.02l8-4.44a.3.3 0 0 0 .13-.22V7.6a.3.3 0 0 0-.13-.22l-8-4.44a.3.3 0 0 0-.24 0l-8 4.44a.3.3 0 0 0-.13.22v8.82q0 .14.13.22l2.51 1.39c.39.22.85.21 1.24-.02s.62-.63.62-1.08L8.92 9c0-.41.34-.75.75-.75s.75.34.75.75l-.01 7.93c0 .98-.51 1.87-1.36 2.37s-1.87.51-2.73.03l-2.51-1.39c-.56-.31-.9-.9-.9-1.53V7.59c0-.63.34-1.22.9-1.53l8-4.44c.53-.3 1.17-.3 1.7 0l8 4.44c.56.31.9.9.9 1.53v8.82c0 .63-.34 1.22-.9 1.53l-8 4.44q-.4.23-.84.23"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.92 16.75h-1.75a2.5 2.5 0 0 1-2.5-2.5c0-.41.34-.75.75-.75s.75.34.75.75a1 1 0 0 0 1 1h1.75a1 1 0 0 0 1-1 1 1 0 0 0-1-1h-1.75a2.5 2.5 0 0 1 0-5h1.75a2.5 2.5 0 0 1 2.5 2.5c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75 1 1 0 0 0-1-1h-1.75a1 1 0 0 0-1 1 1 1 0 0 0 1 1h1.75a2.5 2.5 0 0 1 0 5"
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
            d="M15.92 16.75h-1.75a2.5 2.5 0 0 1-2.5-2.5c0-.41.34-.75.75-.75s.75.34.75.75a1 1 0 0 0 1 1h1.75a1 1 0 0 0 1-1 1 1 0 0 0-1-1h-1.75a2.5 2.5 0 0 1 0-5h1.75a2.5 2.5 0 0 1 2.5 2.5c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75 1 1 0 0 0-1-1h-1.75a1 1 0 0 0-1 1 1 1 0 0 0 1 1h1.75a2.5 2.5 0 0 1 0 5"
            fill="currentColor"
          />
          <path
            d="M12.67 22.61q-.44 0-.85-.22l-1.48-.71a.75.75 0 1 1 .65-1.35l1.51.73q.17.08.28.02l8-4.44a.3.3 0 0 0 .13-.22V7.6a.3.3 0 0 0-.13-.22l-8-4.44a.3.3 0 0 0-.24 0l-8 4.44a.3.3 0 0 0-.13.22v8.82q0 .14.13.22l2.51 1.39c.39.22.85.21 1.24-.02s.62-.63.62-1.08L8.92 9c0-.41.34-.75.75-.75s.75.34.75.75l-.01 7.93c0 .98-.51 1.87-1.36 2.37s-1.87.51-2.73.03l-2.51-1.39c-.56-.31-.9-.9-.9-1.53V7.59c0-.63.34-1.22.9-1.53l8-4.44c.53-.3 1.17-.3 1.7 0l8 4.44c.56.31.9.9.9 1.53v8.82c0 .63-.34 1.22-.9 1.53l-8 4.44q-.4.23-.84.23"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconJs;
