import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHistory2 = forwardRef<SVGSVGElement, IconProps>(function IconHistory2(
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
            d="M2 12A10 10 0 1 0 12 2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 9v4h4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            opacity={duotone ? "0.4" : "1"}
            cx="12"
            cy="12.0005"
            r="10"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray="0.5 3.5"
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
            d="M11.25 2c0-.41.34-.75.75-.75A10.75 10.75 0 1 1 1.25 12a.75.75 0 0 1 1.5 0A9.25 9.25 0 1 0 12 2.75a.75.75 0 0 1-.75-.75"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.1 2.4a.75.75 0 0 1-.43.97l-.42.17a.75.75 0 1 1-.6-1.37l.48-.2c.39-.15.82.04.97.43M5.65 4.24c.28.3.27.78-.03 1.06l-.32.32A.75.75 0 1 1 4.21 4.6l.38-.38a.75.75 0 0 1 1.06.03M3.16 7.26c.38.17.55.61.38 1l-.17.41a.75.75 0 0 1-1.4-.54l.2-.49a.75.75 0 0 1 .99-.38"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 8.25c.41 0 .75.34.75.75v3.25H16a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75V9c0-.41.34-.75.75-.75"
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
            d="M11.25 2c0-.41.34-.75.75-.75A10.75 10.75 0 1 1 1.25 12a.75.75 0 0 1 1.5 0A9.25 9.25 0 1 0 12 2.75a.75.75 0 0 1-.75-.75M12 8.25c.41 0 .75.34.75.75v3.25H16a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75V9c0-.41.34-.75.75-.75"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.1 2.4a.75.75 0 0 1-.43.97l-.42.17a.75.75 0 1 1-.6-1.37l.48-.2c.39-.15.82.04.97.43M5.65 4.24c.28.3.27.78-.03 1.06l-.32.32A.75.75 0 0 1 4.21 4.6l.38-.38a.75.75 0 0 1 1.06.03M3.16 7.26c.38.17.55.61.38 1l-.17.41a.75.75 0 0 1-1.4-.54l.2-.49a.75.75 0 0 1 .99-.38"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconHistory2;
