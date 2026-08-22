import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconVibe = forwardRef<SVGSVGElement, IconProps>(function IconVibe(
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
            d="m10.17 8.52 2.5 3.33 2.5-3.33z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.67 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m17.67 10-5 7-5-7"
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
            d="M24.67 0h-24v24h24z"
            fill="none"
          />
          <path
            d="M15.62 8.29a.5.5 0 0 0-.45-.28h-5a.5.5 0 0 0-.45.28.5.5 0 0 0 .05.52l2.5 3.33q.15.2.4.2t.4-.2l2.5-3.33a.5.5 0 0 0 .05-.52"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.67 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
            fill="currentColor"
          />
          <path
            d="M12.67 17.75a.8.8 0 0 1-.61-.31l-5-7a.76.76 0 0 1 .17-1.05.76.76 0 0 1 1.05.17l4.39 6.15 4.39-6.15a.74.74 0 0 1 1.05-.17c.34.24.42.71.17 1.05l-5 7a.8.8 0 0 1-.61.31"
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
            d="M12.67 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20M9.72 8.29a.5.5 0 0 1 .45-.28h5q.3.01.45.28.13.27-.05.52l-2.5 3.33a.5.5 0 0 1-.4.2.5.5 0 0 1-.4-.2l-2.5-3.33a.5.5 0 0 1-.05-.52m8.56 2.15-5 7a.7.7 0 0 1-.61.31.8.8 0 0 1-.61-.31l-5-7a.76.76 0 0 1 .17-1.05.76.76 0 0 1 1.05.17l4.39 6.15 4.39-6.15a.74.74 0 0 1 1.05-.17c.33.24.41.71.17 1.05"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconVibe;
