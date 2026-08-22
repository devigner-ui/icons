import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconDonut = forwardRef<SVGSVGElement, IconProps>(function IconDonut(
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
          <circle
            cx="12"
            cy="12.0001"
            r="10"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <circle
            cx="12"
            cy="12.0001"
            r="3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2 13s2.2 2 4 2c1.21 0 2.6-.9 3.39-1.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14 14.22c.47.42 1.09.78 1.8.78 1.7 0 1.7-2 3.38-2 1.08 0 1.93.81 2.4 1.4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M14.5 7 16 5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m19 7 1-1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="m12 5-1-1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m10.5 7-1.37.37"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m16.65 8.98.07 1.4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M20.68 10.09 19 11.56"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7 5 6 4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="m6.8 9.14-.6-1.28"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="m5.66 12.64.84-1.14"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M3.68 10.35 3.6 8.94"
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
            d="M12 2a10 10 0 0 0-9.95 11.05C2.4 13.35 4.37 15 6 15c1.21 0 2.6-.9 3.39-1.5Q9.02 12.81 9 12a3 3 0 1 1 5 2.23c.48.41 1.1.77 1.8.77 1.7 0 1.7-2 3.38-2 1.08 0 1.93.81 2.4 1.4l.1.14A10 10 0 0 0 12 2"
            fill="currentColor"
          />
          <path
            d="M9.39 13.5C8.6 14.1 7.2 15 6 15c-1.63 0-3.6-1.65-3.95-1.95a10 10 0 0 0 19.63 1.49l-.1-.14c-.47-.59-1.32-1.4-2.4-1.4-1.69 0-1.69 2-3.37 2-.72 0-1.33-.36-1.8-.77a3 3 0 0 1-4.61-.74z"
            fill="currentColor"
          />
          <path
            d="m19.53 5.42-.06.05-1 1a.75.75 0 0 0 1.06 1.06l.9-.9q-.4-.64-.9-1.21"
            fill="currentColor"
          />
          <path
            d="m5.42 4.47.05.06 1 1a.75.75 0 1 0 1.06-1.06l-.9-.9q-.64.4-1.21.9"
            fill="currentColor"
          />
          <path
            d="M10.47 4.53a.75.75 0 0 1 1.06-1.06l1 1a.75.75 0 0 1-1.06 1.06z"
            fill="currentColor"
          />
          <path
            d="M16.6 5.45a.75.75 0 1 0-1.2-.9l-1.5 2a.75.75 0 1 0 1.2.9z"
            fill="currentColor"
          />
          <path
            d="M8.41 7.56c.1.4.52.64.92.53l1.36-.37a.75.75 0 0 0-.38-1.44l-1.37.36c-.4.1-.64.52-.53.92"
            fill="currentColor"
          />
          <path
            d="M17.47 10.35a.75.75 0 0 1-1.5.07l-.07-1.4a.75.75 0 1 1 1.5-.08z"
            fill="currentColor"
          />
          <path
            d="M18.44 12.06c.27.3.74.34 1.06.07l1.67-1.48a.75.75 0 1 0-.99-1.13L18.5 11a.75.75 0 0 0-.06 1.06"
            fill="currentColor"
          />
          <path
            d="M5.52 8.17a.75.75 0 1 1 1.37-.62l.59 1.28a.75.75 0 1 1-1.37.62z"
            fill="currentColor"
          />
          <path
            d="M6.94 10.9c.34.24.41.7.17 1.04l-.84 1.14a.75.75 0 1 1-1.21-.88l.83-1.14a.75.75 0 0 1 1.05-.16"
            fill="currentColor"
          />
          <path
            d="M2.86 8.98a.75.75 0 1 1 1.5-.08l.07 1.4a.75.75 0 1 1-1.5.1z"
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
            d="M18.68 14.53c.49-.5.8-.78 1.47-.78.6 0 1.14.24 1.58.55a10 10 0 0 1-19.32.55c.83.45 1.9.9 2.92.9a6 6 0 0 0 2.33-.6q.8-.4 1.42-.8a3.74 3.74 0 0 0 4.96.8c.57.33 1.28.6 2.1.6 1.32 0 2-.7 2.52-1.2z"
            fill="currentColor"
          />
          <path
            d="M9.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 8.25a3.75 3.75 0 0 0-3.61 4.76c-.38.26-.86.55-1.37.78-.6.28-1.19.46-1.69.46-.76 0-1.7-.4-2.51-.9q-.46-.27-.78-.5Q2 12.42 2 12c0-3 1.32-5.7 3.42-7.53l.05.06 1 1a.75.75 0 1 0 1.06-1.06l-.9-.9a10 10 0 0 1 12.9 1.85l-.06.05-1 1a.75.75 0 0 0 1.06 1.06l.9-.9a10 10 0 0 1 1.55 6.07 4 4 0 0 0-1.83-.45c-1.31 0-2 .7-2.51 1.2l-.02.02c-.5.5-.8.78-1.48.78q-.52 0-.99-.22.59-.89.6-2.03A3.75 3.75 0 0 0 12 8.25m4.45-3.85c.33.25.4.72.15 1.05l-1.5 2a.75.75 0 1 1-1.2-.9l1.5-2a.75.75 0 0 1 1.05-.15m-5.98-.93c-.3.3-.3.77 0 1.06l1 1a.75.75 0 1 0 1.06-1.06l-1-1a.75.75 0 0 0-1.06 0M8.41 7.56c.1.4.52.64.92.53l1.36-.37a.75.75 0 1 0-.38-1.44l-1.37.36c-.4.1-.64.52-.53.92m8.34 3.58a.75.75 0 0 0 .72-.79l-.07-1.4a.75.75 0 1 0-1.5.06l.07 1.41c.02.42.37.74.78.72m2.2.41c.27.31.74.34 1.05.07l1.17-.97a.75.75 0 1 0-.99-1.13l-1.17.98a.75.75 0 0 0-.07 1.05M5.9 7.17a.75.75 0 0 0-.38 1l.59 1.28a.75.75 0 0 0 1.37-.62l-.59-1.28a.75.75 0 0 0-1-.38m1.04 3.73c.34.24.41.7.17 1.04l-.84 1.14a.75.75 0 0 1-1.21-.88l.83-1.14a.75.75 0 0 1 1.05-.16M3.56 8.19a.75.75 0 0 0-.7.79l.07 1.41a.75.75 0 0 0 1.5-.08L4.35 8.9a.75.75 0 0 0-.79-.71"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconDonut;
