import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconQuant = forwardRef<SVGSVGElement, IconProps>(function IconQuant(
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
            d="m12.67 6.44-5 2.78v5.56l5 2.78 5-2.78V9.22z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="m12.67 2-9 5v10l9 5 5-2.5 4 2.5v-5l-4-2.22 4-2.78V7z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m3.67 7 4 2.23"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m3.67 17 4-2.23"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m21.67 7-4 2.23"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.67 6V2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.67 22v-4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.67 20v-5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
            />
          </g>
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
            d="M21.67 7v5l-4 2.78V9.23z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.67 17.56V22l-9-5 4-2.23v.01z"
            fill="currentColor"
          />
          <path d="M7.67 9.23v5.54l-4 2.23V7z" fill="currentColor" />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.67 2v4.44l-5 2.78v.01L3.67 7z"
            fill="currentColor"
          />
          <path d="m17.67 9.23-5-2.78V2l9 5z" fill="currentColor" />
          <path d="M17.67 14.78v4.72l-5 2.5v-4.44z" fill="currentColor" />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.67 17v5l-4-2.5v-4.72z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.6" : "1"}
            d="M17.67 9.22v5.56l-5 2.78-5-2.78V9.22l5-2.78z"
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
            d="m21.16 6.71-8-4.44a1 1 0 0 0-.97 0l-8 4.44a1 1 0 0 0-.51.87v8.82c0 .36.2.7.51.87l8.02 4.46c.29.16.64.17.93.02l4.03-2.01a1 1 0 0 1 .98.05l1.99 1.25a1 1 0 0 0 1.53-.85v-2.61a1 1 0 0 0-.51-.87l-3-1.66a1 1 0 0 0-.97 0l-4.03 2.24a1 1 0 0 1-.97 0l-4-2.22a1 1 0 0 1-.51-.87V9.82c0-.36.2-.7.51-.87l4-2.22c.3-.17.67-.17.97 0l4 2.22a1 1 0 0 1 .51.87v3.06a1 1 0 0 0 1.57.82l2-1.39a1 1 0 0 0 .43-.82V7.6c0-.37-.2-.71-.51-.89"
            fill="currentColor"
          />
          <path
            d="M16.53 10.42v3.15c0 .35-.19.67-.5.84l-2.89 1.61a1 1 0 0 1-.94 0l-2.89-1.61a1 1 0 0 1-.5-.84v-3.15c0-.35.19-.67.5-.84l2.89-1.61a1 1 0 0 1 .94 0l2.89 1.61c.31.17.5.49.5.84"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconQuant;
