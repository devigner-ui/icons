import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRam2 = forwardRef<SVGSVGElement, IconProps>(function IconRam2(
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
            d="M4.17 7v10c0 3 1.47 5 5 5h7c3.47 0 5-2 5-5v-1.17c0-.53-.21-1.04-.59-1.41l-.83-.83a2 2 0 0 1-.59-1.41V10a1 1 0 0 1 1-1 1 1 0 0 0 1-1V7c0-3-1.53-5-5-5h-7C5.64 2 4.17 4 4.17 7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.66 21.97 8.65 19a2 2 0 0 1 2-2h4.01a2 2 0 0 1 2 1.99l.03 2.99"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m9.61 4.95.05-2.89"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m12.61 4.95.05-2.89"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m15.61 4.92.05-2.88"
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
            d="M19.17 10v2.17a2 2 0 0 0 .59 1.42l.82.82a2 2 0 0 1 .59 1.42V17c0 3-1.53 5-5 5h-7c-3.53 0-5-2-5-5V7c0-2.92 1.4-4.9 4.74-4.99L9.17 2h7l.24.01c3.3.08 4.76 2.06 4.76 4.99v1a1 1 0 0 1-1 1 1 1 0 0 0-1 1"
            fill="currentColor"
          />
          <path
            d="m10.41 2-.05 2.96a.75.75 0 0 1-.75.74H9.6a.75.75 0 0 1-.74-.77l.05-2.92.26-.01z"
            fill="currentColor"
          />
          <path
            d="m13.41 2-.05 2.95a.75.75 0 0 1-.75.73h-.01a.75.75 0 0 1-.74-.76L11.91 2z"
            fill="currentColor"
          />
          <path
            d="m16.41 2.01-.05 2.88a.75.75 0 0 1-.75.74h-.01a.75.75 0 0 1-.74-.76L14.91 2h1.26z"
            fill="currentColor"
          />
          <path
            d="m16.69 21.98-.51.02h-7q-.27 0-.51-.02L8.65 19a2 2 0 0 1 2-2h4.01a2 2 0 0 1 2 1.99z"
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
            d="M16.68 20.97a1 1 0 0 1-1 1.01H9.66a1 1 0 0 1-1-1L8.65 19a2 2 0 0 1 2-2h4.01a2 2 0 0 1 2 1.99z"
            fill="currentColor"
          />
          <path
            d="M19.17 10v2.17a2 2 0 0 0 .59 1.42l.82.82a2 2 0 0 1 .59 1.42V17c0 2.3-.9 4-2.9 4.67-.3.1-.6-.14-.6-.46v-2.23a3 3 0 0 0-3-2.98h-4.01a3 3 0 0 0-3 3v2.22c0 .32-.3.56-.6.46-2-.66-2.89-2.37-2.89-4.68V7c0-2.4.95-4.17 3.15-4.76.3-.09.58.16.57.47L7.86 4.9c-.01.47.16.92.48 1.26a1.77 1.77 0 0 0 2.55-.02.3.3 0 0 1 .45-.01q.5.52 1.27.55c.51 0 .98-.23 1.3-.59.1-.12.32-.13.43-.01q.5.52 1.27.55c.96 0 1.73-.75 1.75-1.72l.04-2.22c0-.3.28-.54.57-.46 2.2.59 3.2 2.36 3.2 4.77v1a1 1 0 0 1-1 1 1 1 0 0 0-1 1"
            fill="currentColor"
          />
          <path
            d="M9.9 2c.28 0 .5.23.5.51l-.04 2.45a.75.75 0 0 1-.75.74H9.6a.75.75 0 0 1-.74-.77V2.51c0-.28.22-.5.5-.5z"
            fill="currentColor"
          />
          <path
            d="M12.9 2c.28 0 .5.23.5.5l-.04 2.45a.75.75 0 0 1-.75.73h-.01a.75.75 0 0 1-.74-.76V2.5c0-.28.22-.5.5-.5z"
            fill="currentColor"
          />
          <path
            d="M15.9 2c.28 0 .5.24.5.52l-.04 2.37a.75.75 0 0 1-.75.74h-.01a.75.75 0 0 1-.74-.76V2.5c0-.27.23-.5.5-.5z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconRam2;
