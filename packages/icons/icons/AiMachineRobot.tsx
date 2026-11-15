import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiMachineRobot = forwardRef<SVGSVGElement, IconProps>(function IconAiMachineRobot(
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
            d="M4 21.5v-3c0-2.2 1.8-4 4-4h8c2.2 0 4 1.8 4 4v3m-9.78-9H10a4 4 0 0 1-4-4v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4h-1.38"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.5 7v1.5m5-1.5v1.5M12 17v4.5"
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
            opacity={duotone ? "0.4" : "1"}
            d="M10 2.5h4a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4v-2a4 4 0 0 1 4-4Zm-6 19v-3c0-2.2 1.8-4 4-4h8c2.2 0 4 1.8 4 4v3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.5 7v1.5m5-1.5v1.5M12 17v4.5"
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
            d="M10 1.75h4a5 5 0 0 1 3.36 1.4 5 5 0 0 1 1.39 3.35v2a5 5 0 0 1-1.4 3.36A5 5 0 0 1 14 13.25h-4a5 5 0 0 1-3.36-1.4A5 5 0 0 1 5.25 8.5v-2a5 5 0 0 1 1.4-3.36A5 5 0 0 1 10 1.75zM3.25 21.5v-3a5 5 0 0 1 1.4-3.35A5 5 0 0 1 8 13.75h8a5 5 0 0 1 3.36 1.4 5 5 0 0 1 1.39 3.35v3c0 .41-.34.75-.75.75H4a.75.75 0 0 1-.75-.75z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M9.5 6.25c.41 0 .75.34.75.75v1.5a.75.75 0 0 1-1.5 0V7c0-.41.34-.75.75-.75zm5 0c.41 0 .75.34.75.75v1.5a.75.75 0 0 1-1.5 0V7c0-.41.34-.75.75-.75zm-2.5 10c.41 0 .75.34.75.75v4.5a.75.75 0 0 1-1.5 0V17c0-.41.34-.75.75-.75z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
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
            d="M10 1.75h4a5 5 0 0 1 3.36 1.4 5 5 0 0 1 1.39 3.35v2a5 5 0 0 1-1.4 3.36A5 5 0 0 1 14 13.25h-4a5 5 0 0 1-3.36-1.4A5 5 0 0 1 5.25 8.5v-2a5 5 0 0 1 1.4-3.36A5 5 0 0 1 10 1.75zM3.25 21.5v-3a5 5 0 0 1 1.4-3.35A5 5 0 0 1 8 13.75h8a5 5 0 0 1 3.36 1.4 5 5 0 0 1 1.39 3.35v3c0 .41-.34.75-.75.75h-7.25V17a.75.75 0 0 0-1.5 0v5.25H4a.75.75 0 0 1-.75-.75zM8.75 7v1.5a.75.75 0 0 0 1.5 0V7a.75.75 0 0 0-1.5 0zm5 0v1.5a.75.75 0 0 0 1.5 0V7a.75.75 0 0 0-1.5 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiMachineRobot;
