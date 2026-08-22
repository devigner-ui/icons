import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconVideoFrameCut2 = forwardRef<SVGSVGElement, IconProps>(
  function IconVideoFrameCut2(
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
              d="M8.5 4H8c-2.83 0-4.24 0-5.12.88S2 7.18 2 10v4c0 2.83 0 4.24.88 5.12S5.18 20 8 20h.5m7-16h.5c2.83 0 4.24 0 5.12.88S22 7.18 22 10v4c0 2.83 0 4.24-.88 5.12S18.82 20 16 20h-.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M17 4v16M7 4v16M2.5 9H7m10 0h4.5m-19 6H7m10 0h4.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M13.14 2h-2.28a.5.5 0 0 0-.43.75l1.14 1.99c.19.34.67.34.86 0l1.14-2a.5.5 0 0 0-.43-.74"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M13.14 22h-2.28a.5.5 0 0 1-.43-.75l1.14-1.99a.5.5 0 0 1 .86 0l1.14 2a.5.5 0 0 1-.43.74"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M12 11.5v1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M12 7.5v1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M12 15.5v1"
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
              d="M7.75 4v16h8.5V4z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.86 2h2.28a.5.5 0 0 1 .43.75L12.86 4h-1.72l-.71-1.25a.5.5 0 0 1 .43-.75m.28 18-.71 1.25a.5.5 0 0 0 .43.75h2.28a.5.5 0 0 0 .43-.75L12.86 20zM2.88 4.88c.67-.68 1.66-.83 3.37-.87v4.24H2.01c.04-1.7.2-2.7.87-3.37M2 14.25v-4.5h4.25v4.5zm.01 1.5c.04 1.7.2 2.7.87 3.37.67.68 1.66.83 3.37.87v-4.24zM17.75 4.01v4.24h4.24c-.04-1.7-.2-2.7-.87-3.37-.67-.68-1.66-.83-3.37-.87m0 5.74H22v4.5h-4.25zm4.24 6h-4.24v4.24c1.7-.04 2.7-.2 3.37-.87.68-.67.83-1.66.87-3.37"
              fill="currentColor"
            />
            <path
              d="m12.43 4.74.43-.74h-1.72l.43.74c.19.34.67.34.86 0"
              fill="currentColor"
            />
            <path
              d="M12 6.75c.41 0 .75.34.75.75v1a.75.75 0 0 1-1.5 0v-1c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
            <path
              d="M12 10.75c.41 0 .75.34.75.75v1a.75.75 0 0 1-1.5 0v-1c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
            <path
              d="M12 14.75c.41 0 .75.34.75.75v1a.75.75 0 0 1-1.5 0v-1c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
            <path
              d="m12.86 20-.43-.74a.5.5 0 0 0-.86 0l-.43.74z"
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
              d="M13.14 2h-2.28a.5.5 0 0 0-.43.75L11.14 4H7.75v16h3.4l-.72 1.25a.5.5 0 0 0 .43.75h2.28a.5.5 0 0 0 .43-.75L12.86 20h3.39V4h-3.4l.72-1.25a.5.5 0 0 0-.43-.75m-.28 18-.43-.74a.5.5 0 0 0-.86 0l-.43.74zm0-16-.43.74a.5.5 0 0 1-.86 0L11.14 4zm-.11 3.5a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0zm0 4a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0zm0 4a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0zM6.25 4.01c-1.7.04-2.7.2-3.37.87-.68.67-.83 1.66-.87 3.37h4.24zM2 9.75v4.5h4.25v-4.5zm.88 9.37c-.68-.67-.83-1.66-.87-3.37h4.24v4.24c-1.7-.04-2.7-.2-3.37-.87M17.75 8.25V4.01c1.7.04 2.7.2 3.37.87.68.67.83 1.66.87 3.37zM22 9.75h-4.25v4.5H22zm-4.25 6h4.24c-.04 1.7-.2 2.7-.87 3.37-.67.68-1.66.83-3.37.87z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconVideoFrameCut2;
