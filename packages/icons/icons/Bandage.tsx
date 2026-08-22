import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBandage = forwardRef<SVGSVGElement, IconProps>(function IconBandage(
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
            d="m20.42 12.77-9.19-9.19a5.41 5.41 0 0 0-7.65 7.66l9.19 9.18a5.41 5.41 0 0 0 7.65-7.65"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m12.77 20.42 7.65-7.65m-9.19-9.19-7.65 7.66"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <circle
            cx="9.17154"
            cy="12.0002"
            r="1"
            transform="rotate(-45 9.17154 12.0002)"
            fill="currentColor"
          />
          <circle
            cx="12"
            cy="14.8287"
            r="1"
            transform="rotate(-45 12 14.8287)"
            fill="currentColor"
          />
          <circle
            cx="12"
            cy="9.17181"
            r="1"
            transform="rotate(-45 12 9.17181)"
            fill="currentColor"
          />
          <circle
            cx="14.8284"
            cy="12.0002"
            r="1"
            transform="rotate(-45 14.8284 12.0002)"
            fill="currentColor"
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
            d="m20.42 12.77-9.19-9.19a5.41 5.41 0 0 0-7.65 7.66l9.19 9.18a5.41 5.41 0 0 0 7.65-7.65"
            fill="currentColor"
          />
          <path
            d="m19.89 12.23.53.54q.27.27.49.56l-7.58 7.58q-.3-.22-.56-.5l-.54-.52z"
            fill="currentColor"
          />
          <path
            d="M10.67 3.1q.3.21.56.48l.54.53-7.66 7.66-.53-.53a6 6 0 0 1-.49-.57z"
            fill="currentColor"
          />
          <circle
            cx="9.17154"
            cy="12.0002"
            r="1"
            transform="rotate(-45 9.17154 12.0002)"
            fill="currentColor"
          />
          <circle
            cx="12"
            cy="14.8286"
            r="1"
            transform="rotate(-45 12 14.8286)"
            fill="currentColor"
          />
          <circle
            cx="12"
            cy="9.17188"
            r="1"
            transform="rotate(-45 12 9.17188)"
            fill="currentColor"
          />
          <circle
            cx="14.8284"
            cy="12.0002"
            r="1"
            transform="rotate(-45 14.8284 12.0002)"
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
            d="m20.9 13.33-7.57 7.58a5.41 5.41 0 0 0 7.58-7.58"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m12.23 19.89 7.66-7.66-8.12-8.11-7.66 7.65zm-2.35-8.6a1 1 0 1 1-1.42 1.42 1 1 0 0 1 1.42-1.42m2.83 4.25a1 1 0 1 0-1.42-1.42 1 1 0 0 0 1.42 1.42m0-7.08a1 1 0 1 1-1.42 1.42 1 1 0 0 1 1.42-1.42m2.83 4.25a1 1 0 1 0-1.42-1.42 1 1 0 0 0 1.42 1.42"
            fill="currentColor"
          />
          <path
            d="m3.1 10.67 7.57-7.58a5.41 5.41 0 0 0-7.58 7.58"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconBandage;
