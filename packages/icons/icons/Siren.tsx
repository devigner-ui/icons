import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSiren = forwardRef<SVGSVGElement, IconProps>(function IconSiren(
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
            d="M20 22v-6c0-2.8 0-4.2-.55-5.27a5 5 0 0 0-2.18-2.18C16.2 8 14.8 8 12 8s-4.2 0-5.27.55a5 5 0 0 0-2.19 2.18C4 11.8 4 13.2 4 16v6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M15 10.82c1.23 0 2.23.95 2.18 2.18"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M2 22h20"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M12 2v3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="m21 5-1.5 1.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="m3 5 1.5 1.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M13.5 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 19v3"
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
            d="M20 21.25V16c0-2.8 0-4.2-.55-5.27a5 5 0 0 0-2.18-2.18C16.2 8 14.8 8 12 8s-4.2 0-5.27.55a5 5 0 0 0-2.19 2.18C4 11.8 4 13.2 4 16v5.25z"
            fill="currentColor"
          />
          <path
            d="M14.25 10.82c0-.42.34-.75.75-.75 1.62 0 3 1.27 2.93 2.96a.75.75 0 1 1-1.5-.06c.03-.77-.59-1.4-1.43-1.4a.75.75 0 0 1-.75-.75"
            fill="currentColor"
          />
          <path
            d="M4 21.25H2a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5z"
            fill="currentColor"
          />
          <path
            d="M12.75 18.8a1.5 1.5 0 1 0-1.5 0v2.45h1.5z"
            fill="currentColor"
          />
          <path
            d="M12 1.25c.41 0 .75.34.75.75v3a.75.75 0 0 1-1.5 0V2c0-.41.34-.75.75-.75"
            fill="currentColor"
          />
          <path
            d="m21.53 5.53-1.5 1.5a.75.75 0 1 1-1.06-1.06l1.5-1.5a.75.75 0 1 1 1.06 1.06"
            fill="currentColor"
          />
          <path
            d="M3.53 4.47a.75.75 0 1 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.06-1.06z"
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
            d="M4 21.25H2a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5h-2V16c0-2.8 0-4.2-.55-5.27a5 5 0 0 0-2.18-2.18C16.2 8 14.8 8 12 8s-4.2 0-5.27.55a5 5 0 0 0-2.19 2.18C4 11.8 4 13.2 4 16zm9.5-3.75c0 .56-.3 1.04-.75 1.3v2.45h-1.5V18.8a1.5 1.5 0 1 1 2.25-1.3m1.5-7.43a.75.75 0 0 0 0 1.5c.84 0 1.46.63 1.44 1.4a.75.75 0 1 0 1.5.06A2.9 2.9 0 0 0 15 10.07"
            fill="currentColor"
          />
          <path
            d="M12 1.25c.41 0 .75.34.75.75v3a.75.75 0 0 1-1.5 0V2c0-.41.34-.75.75-.75"
            fill="currentColor"
          />
          <path
            d="m21.53 5.53-1.5 1.5a.75.75 0 1 1-1.06-1.06l1.5-1.5a.75.75 0 1 1 1.06 1.06"
            fill="currentColor"
          />
          <path
            d="M3.53 4.47a.75.75 0 1 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.06-1.06z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconSiren;
