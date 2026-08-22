import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconStream = forwardRef<SVGSVGElement, IconProps>(function IconStream(
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
            d="m17 9.5.66-.33c1.94-.97 2.92-1.46 3.63-1.02s.71 1.53.71 3.7v.3c0 2.17 0 3.26-.71 3.7s-1.69-.05-3.63-1.02L17 14.5z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M2 11.5c0-3.29 0-4.93.9-6.04a4 4 0 0 1 .56-.55C4.56 4 6.21 4 9.5 4s4.93 0 6.04.9a4 4 0 0 1 .55.56c.91 1.1.91 2.75.91 6.04v1c0 3.29 0 4.93-.9 6.04a4 4 0 0 1-.56.55c-1.1.91-2.75.91-6.04.91s-4.93 0-6.04-.9a4 4 0 0 1-.55-.56C2 17.44 2 15.79 2 12.5z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.5 15.5v-7m0 0 2.5 3m-2.5-3-2.5 3"
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
            d="M2 11.5c0-3.29 0-4.93.9-6.04a4 4 0 0 1 .56-.55C4.56 4 6.21 4 9.5 4s4.93 0 6.04.9a4 4 0 0 1 .55.56c.91 1.1.91 2.75.91 6.04v1c0 3.29 0 4.93-.9 6.04a4 4 0 0 1-.56.55c-1.1.91-2.75.91-6.04.91s-4.93 0-6.04-.9a4 4 0 0 1-.55-.56C2 17.44 2 15.79 2 12.5z"
            fill="currentColor"
          />
          <path
            d="m17 9.5.66-.33c1.94-.97 2.92-1.46 3.63-1.02s.71 1.53.71 3.7v.3c0 2.17 0 3.26-.71 3.7s-1.69-.05-3.63-1.02L17 14.5z"
            fill="currentColor"
          />
          <path
            d="M9.5 7.75q.34 0 .58.27l2.5 3a.75.75 0 1 1-1.16.96l-1.17-1.4v4.92a.75.75 0 1 1-1.5 0v-4.93l-1.17 1.41a.75.75 0 0 1-1.16-.96l2.5-3a.8.8 0 0 1 .58-.27"
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
            d="M2 12.5v-1c0-3.29 0-4.93.9-6.04a4 4 0 0 1 .56-.55C4.56 4 6.21 4 9.5 4s4.93 0 6.04.9a4 4 0 0 1 .55.56c.7.86.86 2.03.9 4.04l.67-.33c1.94-.97 2.92-1.46 3.63-1.02s.71 1.53.71 3.7v.3c0 2.17 0 3.26-.71 3.7s-1.69-.05-3.63-1.02l-.67-.33c-.04 2-.2 3.18-.9 4.04a4 4 0 0 1-.55.55c-1.1.91-2.75.91-6.04.91s-4.93 0-6.04-.9a4 4 0 0 1-.55-.56C2 17.44 2 15.79 2 12.5m8.08-4.48a.75.75 0 0 0-1.16 0l-2.5 3a.75.75 0 1 0 1.16.96l1.17-1.4v4.92a.75.75 0 0 0 1.5 0v-4.93l1.17 1.41a.75.75 0 0 0 1.16-.96z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconStream;
