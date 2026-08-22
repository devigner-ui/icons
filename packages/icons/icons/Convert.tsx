import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconConvert = forwardRef<SVGSVGElement, IconProps>(function IconConvert(
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
            d="M12.68 21.98a9.98 9.98 0 1 0 0-19.95 9.98 9.98 0 0 0 0 19.95"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m6.8 4.02 8.17 8.18.02-4.54"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m18.53 19.98-8.16-8.17-.02 4.53"
            stroke="currentColor"
            strokeWidth={strokeWidth}
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
            d="M22.7 12.03a10 10 0 0 1-10 10 10 10 0 1 1 10-10"
            fill="currentColor"
          />
          <path
            d="m15.77 7.68-.01 4.55c0 .31-.19.58-.47.69a1 1 0 0 1-.28.06.8.8 0 0 1-.53-.22l-8.19-8.2-.1-.12q.57-.48 1.21-.89l6.86 6.87.01-2.74a.75.75 0 1 1 1.5 0"
            fill="currentColor"
          />
          <path
            d="M19.21 19.62q-.57.48-1.21.89l-6.86-6.87-.01 2.74a.75.75 0 1 1-1.5 0l.01-4.55c0-.31.19-.58.47-.69.27-.12.6-.06.81.16l8.19 8.2z"
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
            d="M12.7 2.03c-1.95 0-3.77.56-5.3 1.52l6.86 6.87.01-2.74c0-.4.34-.75.75-.75.42 0 .75.34.75.75v4.55c0 .31-.2.58-.48.7a1 1 0 0 1-.28.05.8.8 0 0 1-.53-.22L6.3 4.56l-.1-.12a9.98 9.98 0 0 0 6.51 17.6c1.95 0 3.77-.57 5.3-1.53l-6.86-6.87v2.74c0 .41-.35.75-.76.75a.75.75 0 0 1-.75-.75l.01-4.55c0-.3.2-.58.47-.69.27-.12.6-.06.81.16l8.2 8.2.1.12A9.98 9.98 0 0 0 12.7 2.03"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconConvert;
