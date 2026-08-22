import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconGraphNew = forwardRef<SVGSVGElement, IconProps>(function IconGraphNew(
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
            d="M22 10.5V12c0 4.71 0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12s0-7.07 1.46-8.54C4.93 2 7.3 2 12 2h1.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="m7 14 1.8-2.16c.7-.85 1.06-1.28 1.53-1.28s.83.43 1.54 1.28l.26.32c.71.85 1.07 1.28 1.54 1.28s.82-.43 1.53-1.28L17 10"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <circle
            cx="19"
            cy="5"
            r="3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
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
            d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
            fill="currentColor"
          />
          <path
            d="M17.58 10.48a.75.75 0 0 0-1.16-.96l-1.8 2.16q-.53.64-.78.88l-.16.12h-.02l-.17-.12a10 10 0 0 1-.78-.88l-.3-.35q-.48-.61-.9-1c-.3-.28-.68-.52-1.18-.52s-.88.24-1.18.52q-.4.39-.9 1l-1.83 2.19a.75.75 0 0 0 1.16.96l1.8-2.16q.52-.64.78-.88l.16-.12h.02q.04 0 .17.12c.19.17.41.44.78.88l.3.35q.48.61.9 1c.3.28.68.52 1.18.52s.88-.24 1.18-.52q.4-.39.9-1z"
            fill="currentColor"
          />
          <path d="M22 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0" fill="currentColor" />
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
          <path d="M22 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0" fill="currentColor" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.61 2.04Q14.1 1.99 12 2C7.29 2 4.93 2 3.46 3.46 2 4.93 2 7.3 2 12s0 7.07 1.46 8.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46C22 19.07 22 16.7 22 12q.01-2.09-.04-3.61a4.5 4.5 0 0 1-6.35-6.35m1.87 7.38c.32.27.36.74.1 1.06l-1.83 2.2q-.5.6-.9 1c-.3.27-.68.5-1.18.5s-.88-.23-1.18-.5q-.42-.4-.9-1l-.3-.36a10 10 0 0 0-.78-.88l-.17-.12h-.01l-.17.12c-.19.17-.42.44-.79.88l-1.8 2.16a.75.75 0 0 1-1.15-.96l1.83-2.2q.5-.6.9-1c.3-.27.68-.5 1.18-.5s.88.23 1.18.5q.42.4.9 1l.3.36c.37.44.6.71.78.88q.13.11.17.12h.02l.16-.12c.19-.17.42-.44.79-.88l1.8-2.16a.75.75 0 0 1 1.05-.1"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconGraphNew;
