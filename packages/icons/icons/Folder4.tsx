import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconFolder4 = forwardRef<SVGSVGElement, IconProps>(function IconFolder4(
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
            d="M22.67 11v6c0 4-1 5-5 5h-10c-4 0-5-1-5-5V7c0-4 1-5 5-5h1.5c1.5 0 1.83.44 2.4 1.2l1.5 2c.38.5.6.8 1.6.8h3c4 0 5 1 5 5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.67 2h9q3 0 3 3v1.38"
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
            d="M16.39 2H8.95a.7.7 0 0 0-.7.7c0 .38.32.7.7.7h3.26l1.4 1.86c.31.41.35.47.93.47h3.72q.57 0 1.11.15.06.27.06.55v.35c0 .38.32.7.7.7a.7.7 0 0 0 .7-.7v-.36A4.45 4.45 0 0 0 16.39 2"
            fill="currentColor"
          />
          <path
            d="M20.81 6.54a4 4 0 0 0-1.45-.67q-.53-.15-1.11-.15h-3.72c-.58 0-.62-.06-.93-.47l-1.4-1.86C11.55 2.53 11.04 2 9.41 2H7.09a4.4 4.4 0 0 0-4.42 4.42v11.16A4.4 4.4 0 0 0 7.09 22h11.16a4.4 4.4 0 0 0 4.42-4.42v-7.44a4.4 4.4 0 0 0-1.86-3.6M15 16h-4.66a.7.7 0 0 1-.7-.7c0-.38.31-.7.7-.7h4.65c.38 0 .7.32.7.7a.7.7 0 0 1-.69.7"
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
            d="M20.1 4.03c.14.21-.09.45-.33.4a5 5 0 0 0-1.52-.21h-3.3a.5.5 0 0 1-.4-.2L13.4 2.49c-.14-.2 0-.49.24-.49h2.75a4.4 4.4 0 0 1 3.71 2.03"
            fill="currentColor"
          />
          <path
            d="M20.81 6.54a4 4 0 0 0-1.45-.67q-.54-.15-1.11-.15h-3.72c-.58 0-.62-.05-.93-.46L12.2 3.4C11.55 2.53 11.04 2 9.41 2H7.09a4.4 4.4 0 0 0-4.42 4.42v11.16A4.4 4.4 0 0 0 7.09 22h11.16a4.4 4.4 0 0 0 4.42-4.42v-7.44a4.4 4.4 0 0 0-1.86-3.6m-5.75 9.8h-4.79a.7.7 0 0 1-.69-.7c0-.38.3-.7.69-.7h4.79c.39 0 .7.32.7.7a.7.7 0 0 1-.7.7"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconFolder4;
