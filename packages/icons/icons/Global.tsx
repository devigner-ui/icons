import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconGlobal = forwardRef<SVGSVGElement, IconProps>(function IconGlobal(
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
            d="M2 12h20m-6 0q0 1.98-.3 3.83-.3 1.83-.87 3.24a7 7 0 0 1-1.3 2.17q-.73.75-1.53.76-.8 0-1.53-.76a7 7 0 0 1-1.3-2.17q-.55-1.41-.87-3.24a24 24 0 0 1 0-7.66q.3-1.83.87-3.24.56-1.4 1.3-2.17Q11.2 2.01 12 2q.8 0 1.53.76.74.76 1.3 2.17.55 1.41.87 3.24.3 1.85.3 3.83"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.03 11.25A10 10 0 0 1 12 2c-.83 0-1.57.36-2.18.92A7 7 0 0 0 8.3 5.16q-.63 1.4-.96 3.17-.26 1.4-.32 2.92zm0 1.5H7q.06 1.51.32 2.92.33 1.77.96 3.17.62 1.38 1.53 2.24c.61.56 1.35.92 2.18.92a10 10 0 0 1-9.97-9.25"
            fill="currentColor"
          />
          <path
            d="M12 2c.83 0 1.57.36 2.18.92q.9.86 1.53 2.24.63 1.4.96 3.17.26 1.4.32 2.92h4.98A10 10 0 0 0 12 2"
            fill="currentColor"
          />
          <path
            d="M16.67 15.67a14 14 0 0 1-.96 3.17 7 7 0 0 1-1.53 2.24A3.2 3.2 0 0 1 12 22a10 10 0 0 0 9.97-9.25H17q-.06 1.51-.32 2.92"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M12 3.4c-.27 0-.63.11-1.04.5a6 6 0 0 0-1.2 1.78Q9.2 6.9 8.89 8.55a19 19 0 0 0-.3 2.7h6.82q-.06-1.4-.3-2.7-.3-1.64-.87-2.87a6 6 0 0 0-1.2-1.79c-.4-.38-.76-.5-1.04-.5"
              fill="currentColor"
            />
            <path
              d="M8.89 15.45q.3 1.65.87 2.87a6 6 0 0 0 1.2 1.79c.41.38.77.5 1.04.5.28 0 .63-.12 1.04-.5a6 6 0 0 0 1.2-1.8q.56-1.21.87-2.86.24-1.3.3-2.7H8.59q.06 1.4.3 2.7"
              fill="currentColor"
            />
          </g>
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
            d="M2.03 11.25A10 10 0 0 1 12 2c-.83 0-1.57.36-2.18.92A7 7 0 0 0 8.3 5.16q-.63 1.4-.96 3.17-.26 1.4-.32 2.92zm0 1.5H7q.06 1.51.32 2.92.33 1.77.96 3.17.62 1.38 1.53 2.24c.61.56 1.35.92 2.18.92a10 10 0 0 1-9.97-9.25"
            fill="currentColor"
          />
          <path
            d="M12 3.4c-.27 0-.63.11-1.04.5a6 6 0 0 0-1.2 1.78Q9.2 6.9 8.89 8.55a19 19 0 0 0-.3 2.7h6.82a19 19 0 0 0-.3-2.7q-.3-1.64-.87-2.87a6 6 0 0 0-1.2-1.79c-.41-.38-.76-.5-1.04-.5"
            fill="currentColor"
          />
          <path
            d="M8.89 15.45q.3 1.65.87 2.87a6 6 0 0 0 1.2 1.79c.41.38.77.5 1.04.5.28 0 .63-.12 1.04-.5a6 6 0 0 0 1.2-1.8q.56-1.21.87-2.86.24-1.3.3-2.7H8.59q.06 1.4.3 2.7"
            fill="currentColor"
          />
          <path
            d="M12 2c.83 0 1.57.36 2.18.92q.9.86 1.53 2.24.63 1.4.96 3.17.26 1.4.32 2.92h4.98A10 10 0 0 0 12 2"
            fill="currentColor"
          />
          <path
            d="M16.67 15.67a14 14 0 0 1-.96 3.17 7 7 0 0 1-1.53 2.24A3.2 3.2 0 0 1 12 22a10 10 0 0 0 9.97-9.25H17q-.06 1.51-.32 2.92"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconGlobal;
