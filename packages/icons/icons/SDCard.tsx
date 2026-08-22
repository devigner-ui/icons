import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSDCard = forwardRef<SVGSVGElement, IconProps>(function IconSDCard(
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
            d="M3.46 20.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46C22 19.07 22 16.7 22 12c0-.34 0-.51-.02-.69a4 4 0 0 0-1.4-2.72l-5.17-5.17a4 4 0 0 0-2.73-1.4C12.52 2 12.35 2 12 2 7.29 2 4.93 2 3.46 3.46 2 4.93 2 7.3 2 12s0 7.07 1.46 8.54"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7 6v3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M10 6v3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M13 6v3"
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
            opacity={duotone ? "0.4" : "1"}
            d="M3.46 20.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46C22 19.07 22 16.7 22 12c0-.34 0-.51-.02-.69a4 4 0 0 0-1.4-2.72l-5.17-5.17a4 4 0 0 0-2.73-1.4C12.52 2 12.35 2 12 2 7.29 2 4.93 2 3.46 3.46 2 4.93 2 7.3 2 12s0 7.07 1.46 8.54"
            fill="currentColor"
          />
          <path
            d="M13.75 6a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0z"
            fill="currentColor"
          />
          <path
            d="M10.75 6a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0z"
            fill="currentColor"
          />
          <path
            d="M7.75 6a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0z"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 22c-4.71 0-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12s0-7.07 1.46-8.54C4.93 2 7.3 2 12 2c.34 0 .51 0 .69.02a4 4 0 0 1 2.72 1.4l5.17 5.17A4 4 0 0 1 22 12c0 4.71 0 7.07-1.46 8.54C19.07 22 16.7 22 12 22m1-16.75c.41 0 .75.34.75.75v3a.75.75 0 0 1-1.5 0V6c0-.41.34-.75.75-.75M10.75 6a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0zM7 5.25c.41 0 .75.34.75.75v3a.75.75 0 0 1-1.5 0V6c0-.41.34-.75.75-.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconSDCard;
