import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAnkr = forwardRef<SVGSVGElement, IconProps>(function IconAnkr(
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
            d="M3.78 9.78V6.44L12.67 2l8.89 4.44v3.34"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.78 14.22v3.34L12.67 22l8.89-4.44v-3.34"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.67 22v-5.56"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.67 16.44a4.44 4.44 0 1 0 0-8.88 4.44 4.44 0 0 0 0 8.88"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
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
            d="M21.56 10.53a.76.76 0 0 1-.75-.75V6.91l-8.14-4.07-8.14 4.07v2.87c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V6.44c0-.28.16-.54.42-.67l8.89-4.44a.7.7 0 0 1 .67 0l8.89 4.44c.25.13.42.39.42.67v3.33a.77.77 0 0 1-.76.76"
            fill="currentColor"
          />
          <path
            d="M12.67 22.75a1 1 0 0 1-.33-.08l-8.89-4.44a.8.8 0 0 1-.42-.67v-3.33c0-.41.34-.75.75-.75s.75.34.75.75v2.87l8.14 4.07 8.14-4.07v-2.87c0-.41.34-.75.75-.75s.75.34.75.75v3.33c0 .28-.16.54-.42.67L13 22.67a1 1 0 0 1-.33.08"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17.11 12a4.44 4.44 0 1 0-5.17 4.37l-.01.07V22c0 .41.34.75.75.75s.75-.34.75-.75v-5.56l-.01-.07A4.4 4.4 0 0 0 17.11 12"
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
            d="M21.56 10.53a.76.76 0 0 1-.75-.75V6.91l-8.14-4.07-8.14 4.07v2.87c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V6.45c0-.28.16-.54.42-.67l8.89-4.44a.7.7 0 0 1 .67 0l8.89 4.44c.25.13.42.39.42.67v3.33a.77.77 0 0 1-.76.75"
            fill="currentColor"
          />
          <path
            d="M12.67 22.75a1 1 0 0 1-.33-.08l-8.89-4.44a.8.8 0 0 1-.42-.67v-3.33c0-.41.34-.75.75-.75s.75.34.75.75v2.87l8.14 4.07 8.14-4.07v-2.87c0-.41.34-.75.75-.75s.75.34.75.75v3.33c0 .28-.16.54-.42.67L13 22.67a1 1 0 0 1-.33.08"
            fill="currentColor"
          />
          <path
            d="M17.11 12a4.44 4.44 0 1 0-5.17 4.37l-.01.07V22c0 .41.34.75.75.75s.75-.34.75-.75v-5.56l-.01-.07A4.4 4.4 0 0 0 17.11 12"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconAnkr;
