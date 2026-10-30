import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconDonutBitten = forwardRef<SVGSVGElement, IconProps>(
  function IconDonutBitten(
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
            d="M9.12 11.16Q9 11.56 9 12a3 3 0 1 0 2.64-2.98"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.5 7 16 5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m19 7 1-1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m12 5-1-1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m10.5 7-1.37.37"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 5 6 4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m6.8 9.14-.6-1.28"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.62 18.86c-.97-1.52.56-3.37 2.19-3.37 1.1 0 1.08.57 1.87.96l-.01-.15c.08-1.08 1.02-2 2.14-1.91q.3.03.57.17l.25.16c.02-.01-.01-.08.02-.08a10 10 0 0 0-1.88-8.93A10.04 10.04 0 0 0 2.6 8.57a10.05 10.05 0 0 0 5.09 12.46c1.07.51 3.63 1.26 4.76.91 0 0-.08-.13-.07-.14-.61-1.51.7-2.84 2.24-2.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 13s2.2 2 4 2c1.21 0 2.6-.9 3.39-1.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 15.5c-.5-.5-1.53-.86-2-1.28"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m16.65 8.98.07 1.4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.68 10.09 19 11.56"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m5.66 12.64.84-1.14"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.68 10.35 3.6 8.94"
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
            <circle
              cx="12"
              cy="12.0001"
              r="3"
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
              d="M14.62 18.86c-.97-1.52.56-3.37 2.19-3.37 1.1 0 1.08.57 1.87.96l-.01-.15c.08-1.08 1.02-2 2.14-1.91q.3.03.57.17l.25.16c.02-.01-.01-.08.02-.08a10 10 0 0 0-1.88-8.93A10.04 10.04 0 0 0 2.6 8.57a10.05 10.05 0 0 0 5.09 12.46c1.07.51 3.63 1.26 4.76.91 0 0-.08-.13-.07-.14-.61-1.51.7-2.84 2.24-2.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2 13s2.2 2 4 2c1.21 0 2.6-.9 3.39-1.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16 15.5c-.5-.5-1.53-.86-2-1.28"
              stroke="currentColor"
              strokeWidth={strokeWidth}
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
              d="m19.53 5.42-.06.05-1 1a.75.75 0 1 0 1.06 1.06l.9-.9q-.4-.64-.9-1.21"
              fill="currentColor"
            />
            <path
              d="m5.42 4.47.05.06 1 1a.75.75 0 1 0 1.06-1.06l-.9-.9q-.64.4-1.21.9"
              fill="currentColor"
            />
            <path
              d="M10.47 4.53a.75.75 0 1 1 1.06-1.06l1 1a.75.75 0 1 1-1.06 1.06z"
              fill="currentColor"
            />
            <path
              d="M16.6 5.45a.75.75 0 0 0-1.2-.9l-1.5 2a.75.75 0 1 0 1.2.9z"
              fill="currentColor"
            />
            <path
              d="M8.4 7.56c.12.4.53.64.93.53l1.36-.37a.75.75 0 1 0-.38-1.44l-1.37.36c-.4.1-.64.52-.53.92"
              fill="currentColor"
            />
            <path
              d="M17.47 10.35a.75.75 0 0 1-1.5.07l-.07-1.4a.75.75 0 0 1 1.5-.08z"
              fill="currentColor"
            />
            <path
              d="M18.44 12.06c.27.3.74.34 1.06.07l1.67-1.48a.75.75 0 0 0-.99-1.13L18.5 11a.75.75 0 0 0-.06 1.06"
              fill="currentColor"
            />
            <path
              d="M5.52 8.17a.75.75 0 1 1 1.37-.62l.58 1.28a.75.75 0 1 1-1.36.62z"
              fill="currentColor"
            />
            <path
              d="M6.94 10.9c.34.24.41.7.16 1.04l-.83 1.14a.75.75 0 1 1-1.21-.88l.83-1.14a.75.75 0 0 1 1.05-.16"
              fill="currentColor"
            />
            <path
              d="M2.86 8.98a.75.75 0 1 1 1.5-.08l.07 1.4a.75.75 0 1 1-1.5.1z"
              fill="currentColor"
            />
            <path
              d="M6 15c1.21 0 2.6-.9 3.39-1.5a3 3 0 0 0 4.62.73c.47.41 1.08.77 1.8.77.84 0 1.26-.5 1.68-1 .43-.5.85-1 1.7-1 1.07 0 1.92.81 2.4 1.4l.09.14-.05.18c-.54-.46-1.44-.45-2.15.07-.6.45-.9 1.14-.8 1.73l-.1.1-.33-.45c-.62-.83-1.93-.9-2.93-.16s-1.32 2.01-.7 2.85l.18.25-.18.18a1.9 1.9 0 0 0-1.68.34c-.8.59-.93 1.7-.45 2.36L12 22a10 10 0 0 1-9.95-8.95C2.4 13.35 4.37 15 6 15"
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
              d="M12.28 21.55a1.8 1.8 0 0 1 .66-1.92c.5-.37 1.08-.48 1.58-.37a.2.2 0 0 0 .18-.05.2.2 0 0 0 .01-.23l-.09-.12c-.61-.83-.3-2.1.68-2.84l-.47-.31-.18-.12-.64-.42a3.7 3.7 0 0 1-4.77-.63c-.4.22-.89.44-1.38.63-.8.31-1.73.58-2.53.58a6.4 6.4 0 0 1-2.92-.9 10 10 0 0 0 9.6 7.15c.2 0 .33-.24.27-.45"
              fill="currentColor"
            />
            <path
              d="M9.75 12a2.25 2.25 0 1 1 3.69 1.73l-.01.01q-.61.5-1.43.51c-1.24 0-2.25-1-2.25-2.25"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.48 14.8c.7-.53 1.6-.54 2.15-.08a10 10 0 0 0-1.2-8.1l-.9.91a.75.75 0 1 1-1.06-1.06l1-1 .06-.05a10 10 0 0 0-12.9-1.85l.9.9a.75.75 0 1 1-1.06 1.06l-1-1-.05-.06a10 10 0 0 0-3.38 8.37q.32.25.78.52c.82.48 1.75.89 2.51.89.52 0 1.25-.19 1.99-.48q.64-.25 1.14-.52a3.74 3.74 0 1 1 6.65.85l.37.24.17.11a10 10 0 0 1 1.42 1.06c.47.06.9.28 1.18.66l.28.37q.06.07.12.01l.03-.07c-.08-.59.21-1.25.8-1.68M16.45 4.4c.33.25.4.72.15 1.05l-1.5 2a.75.75 0 1 1-1.2-.9l1.5-2a.75.75 0 0 1 1.05-.15m-5.98-.93c-.3.3-.3.77 0 1.06l1 1a.75.75 0 1 0 1.06-1.06l-1-1a.75.75 0 0 0-1.06 0M8.41 7.56c.1.4.52.64.92.53l1.36-.37a.75.75 0 0 0-.38-1.44l-1.37.36c-.4.1-.64.52-.53.92M5.9 7.17a.75.75 0 0 0-.38 1l.59 1.28a.75.75 0 0 0 1.37-.62l-.59-1.28a.75.75 0 0 0-1-.38m10.85 3.97a.75.75 0 0 0 .72-.79l-.07-1.4a.75.75 0 0 0-1.5.06l.07 1.41c.02.42.37.74.78.72m1.69.92c.27.3.74.34 1.06.07l1.67-1.48a.75.75 0 0 0-.99-1.13L18.5 11a.75.75 0 0 0-.06 1.06m-11.5-1.17c.34.25.41.72.17 1.05l-.84 1.14a.75.75 0 0 1-1.21-.88l.83-1.14a.75.75 0 0 1 1.05-.17M3.56 8.2a.75.75 0 0 0-.7.79l.07 1.41a.75.75 0 0 0 1.5-.08L4.35 8.9a.75.75 0 0 0-.79-.71"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconDonutBitten;
