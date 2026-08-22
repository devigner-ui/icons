import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconDevices = forwardRef<SVGSVGElement, IconProps>(function IconDevices(
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
            d="M6 8c.04-2.48.23-3.89 1.17-4.83C8.34 2 10.23 2 14 2s5.66 0 6.83 1.17S22 6.23 22 10v4c0 3.77 0 5.66-1.17 6.83S17.77 22 14 22h-2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2 14.5c0-1.4 0-2.1.34-2.61a2 2 0 0 1 .55-.55C3.39 11 4.09 11 5.5 11c1.4 0 2.1 0 2.61.34a2 2 0 0 1 .55.55c.34.5.34 1.2.34 2.61v4c0 1.4 0 2.1-.34 2.61a2 2 0 0 1-.55.55c-.5.34-1.2.34-2.61.34-1.4 0-2.1 0-2.61-.34a2 2 0 0 1-.55-.55C2 20.61 2 19.91 2 18.5z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17 19h-5"
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
            d="M14.05 2c1.68 0 3.01 0 4.05.14 1.08.15 1.94.46 2.63 1.15.68.7.99 1.58 1.13 2.67.14 1.06.14 2.42.14 4.13v3.82c0 1.71 0 3.07-.14 4.13a4.4 4.4 0 0 1-1.13 2.67c-.69.7-1.55 1-2.63 1.15-1.04.14-2.37.14-4.05.14h-.1c-1.68 0-3.01 0-4.05-.14a4.3 4.3 0 0 1-2.63-1.15 4.4 4.4 0 0 1-1.13-2.67C6 16.98 6 15.62 6 13.9v-3.8c0-1.71 0-3.07.14-4.13A4.4 4.4 0 0 1 7.27 3.3c.69-.7 1.55-1 2.63-1.15C10.94 2 12.27 2 13.95 2z"
            fill="currentColor"
          />
          <path
            d="M12 18.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z"
            fill="currentColor"
          />
          <path
            d="M2 14.5c0-1.4 0-2.1.34-2.61a2 2 0 0 1 .55-.55C3.39 11 4.09 11 5.5 11c1.4 0 2.1 0 2.61.34a2 2 0 0 1 .55.55c.34.5.34 1.2.34 2.61v4c0 1.4 0 2.1-.34 2.61a2 2 0 0 1-.55.55c-.5.34-1.2.34-2.61.34-1.4 0-2.1 0-2.61-.34a2 2 0 0 1-.55-.55C2 20.61 2 19.91 2 18.5z"
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
            d="M2 14.5c0-1.4 0-2.1.34-2.61a2 2 0 0 1 .55-.55C3.39 11 4.09 11 5.5 11c1.4 0 2.1 0 2.61.34a2 2 0 0 1 .55.55c.34.5.34 1.2.34 2.61v4c0 1.4 0 2.1-.34 2.61a2 2 0 0 1-.55.55c-.5.34-1.2.34-2.61.34-1.4 0-2.1 0-2.61-.34a2 2 0 0 1-.55-.55C2 20.61 2 19.91 2 18.5z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22 10v4c0 3.77 0 5.66-1.17 6.83S17.77 22 14 22c-1.7 0-3.02 0-4.06-.1.34-.53.46-1.09.51-1.6q.06-.76.05-1.73v-4.14q.01-.97-.05-1.72a3.5 3.5 0 0 0-.54-1.65 4 4 0 0 0-.97-.97 3.5 3.5 0 0 0-1.65-.54Q6.73 9.5 6 9.5c0-3.44.05-5.21 1.17-6.33C8.34 2 10.23 2 14 2s5.66 0 6.83 1.17S22 6.23 22 10m-10.75 9c0-.41.34-.75.75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconDevices;
