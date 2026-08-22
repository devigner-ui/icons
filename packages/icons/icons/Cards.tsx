import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCards = forwardRef<SVGSVGElement, IconProps>(function IconCards(
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
            d="M2.67 12.61h17"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.67 10.28v7.15c-.03 2.85-.81 3.57-3.78 3.57H6.45c-3.02 0-3.78-.75-3.78-3.73v-6.99c0-2.7.63-3.57 3-3.71l.78-.02h9.44c3.02 0 3.78.75 3.78 3.73"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.67 6.73v6.99c0 2.7-.63 3.57-3 3.71v-7.15c0-2.98-.76-3.73-3.78-3.73H6.45l-.78.02C5.7 3.72 6.48 3 9.45 3h9.44c3.02 0 3.78.75 3.78 3.73"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5.92 17.81h1.72"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.78 17.81h3.44"
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
            d="M19.67 10.28v7.15c-.03 2.85-.81 3.57-3.78 3.57H6.45c-3.02 0-3.78-.75-3.78-3.73v-6.99c0-2.7.63-3.57 3-3.71l.78-.02h9.44c3.02 0 3.78.75 3.78 3.73"
            fill="currentColor"
          />
          <path
            d="M22.67 6.73v6.99c0 2.7-.63 3.57-3 3.71v-7.15c0-2.98-.76-3.73-3.78-3.73H6.45l-.78.02C5.7 3.72 6.48 3 9.45 3h9.44c3.02 0 3.78.75 3.78 3.73"
            fill="currentColor"
          />
          <path
            d="M7.63 18.56H5.91a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h1.72a.75.75 0 1 1 0 1.5"
            fill="currentColor"
          />
          <path
            d="M13.22 18.56H9.78a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h3.44a.75.75 0 1 1 0 1.5"
            fill="currentColor"
          />
          <path d="M19.67 11.86h-17v1.5h17z" fill="currentColor" />
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
            d="M15.9 6.55H6.44l-.78.02c-2.37.14-3 1.01-3 3.71v.58a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1v-.58c0-2.98-.76-3.73-3.78-3.73"
            fill="currentColor"
          />
          <path
            d="M3.67 13.36a1 1 0 0 0-1 1v2.91c0 2.98.76 3.73 3.78 3.73h9.44c2.97 0 3.75-.72 3.78-3.57v-3.07a1 1 0 0 0-1-1zm3.96 5.2h-1.7a.76.76 0 0 1-.76-.75c0-.41.34-.75.75-.75h1.72c.41 0 .75.34.75.75s-.34.75-.76.75m5.6 0H9.77a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h3.44a.75.75 0 1 1 0 1.5"
            fill="currentColor"
          />
          <path
            d="M22.67 13.33V8.09c0-3.13-1.79-4.49-4.49-4.49H9.25q-1.14 0-2.04.34-.71.26-1.23.75c-.18.17-.04.45.22.45h10.87a4.07 4.07 0 0 1 4.07 4.07v7.17c0 .25.27.39.45.21q1.07-1.08 1.08-3.26"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconCards;
