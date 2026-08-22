import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const Icon3dSquare = forwardRef<SVGSVGElement, IconProps>(function Icon3dSquare(
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
            d="M9.67 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m7.37 9.26 5.3 3.07 5.26-3.05"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.67 17.77v-5.45"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m11.43 6.29-3.2 1.78a2.8 2.8 0 0 0-1.32 2.24v3.39c0 .83.6 1.84 1.32 2.24l3.2 1.78c.68.38 1.8.38 2.5 0l3.2-1.78a2.8 2.8 0 0 0 1.31-2.24v-3.4c0-.83-.59-1.84-1.32-2.24l-3.2-1.78a2.8 2.8 0 0 0-2.49.01"
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
            d="M16.86 2.33H8.49c-3.64 0-5.81 2.17-5.81 5.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V8.15c0-3.64-2.17-5.82-5.81-5.82"
            fill="currentColor"
          />
          <path
            d="m17.07 8.21-3.76-2.03c-.4-.21-.87-.21-1.27 0L8.28 8.21a.9.9 0 0 0-.44.77c0 .33.17.62.44.77l3.76 2.03q.3.16.64.16t.64-.16l3.76-2.03a.9.9 0 0 0 .44-.77.9.9 0 0 0-.45-.77"
            fill="currentColor"
          />
          <path
            d="m11.41 12.47-3.5-1.75a.87.87 0 0 0-1.25.77v3.31c0 .57.32 1.09.83 1.34l3.5 1.75a.9.9 0 0 0 .84-.04.9.9 0 0 0 .41-.73v-3.31c0-.57-.31-1.08-.83-1.34"
            fill="currentColor"
          />
          <path
            d="M18.26 10.76a.9.9 0 0 0-.84-.04l-3.5 1.75a1.5 1.5 0 0 0-.83 1.34v3.31q.01.47.41.73.21.13.45.13.2 0 .39-.09l3.5-1.75c.51-.26.83-.77.83-1.34v-3.31q-.01-.47-.41-.73"
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
            d="M16.86 2.33H8.48c-3.64 0-5.8 2.18-5.8 5.82v8.37c0 3.64 2.16 5.81 5.8 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V8.15c.01-3.64-2.16-5.82-5.8-5.82m-4.62 14.79c0 .3-.15.57-.4.73a1 1 0 0 1-.46.13 1 1 0 0 1-.39-.09l-3.5-1.75a1.5 1.5 0 0 1-.82-1.34v-3.31q.01-.47.41-.73a.9.9 0 0 1 .84-.04l3.5 1.75c.51.26.83.77.83 1.34zm-.2-5.35L8.26 9.74a.9.9 0 0 1-.44-.77c0-.32.17-.62.44-.77l3.76-2.03c.4-.21.87-.21 1.27 0l3.76 2.03c.27.15.44.44.44.77s-.17.62-.44.77l-3.76 2.03a1.3 1.3 0 0 1-1.27 0m6.63 3.03c0 .57-.32 1.09-.83 1.34l-3.5 1.75a.9.9 0 0 1-.84-.04.9.9 0 0 1-.4-.73v-3.31c0-.57.31-1.09.82-1.34l3.5-1.75a.87.87 0 0 1 1.25.77z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default Icon3dSquare;
