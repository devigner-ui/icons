import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const Icon3dRotate = forwardRef<SVGSVGElement, IconProps>(function Icon3dRotate(
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
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.67 15a7 7 0 0 1-7 7l1.05-1.75"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2.67 9a7 7 0 0 1 7-7L8.62 3.75"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.25 2.91A6.25 6.25 0 0 0 3.42 9a.75.75 0 1 1-1.5 0 7.74 7.74 0 0 1 7.75-7.75.75.75 0 0 1 .64 1.14L9.26 4.14a.75.75 0 0 1-1.28-.78zm14.42 11.34c.41 0 .75.34.75.75a7.74 7.74 0 0 1-7.75 7.75.75.75 0 0 1-.64-1.14l1.05-1.75a.75.75 0 1 1 1.28.78l-.27.45A6.25 6.25 0 0 0 21.92 15c0-.41.34-.75.75-.75"
            fill="currentColor"
          />
          <path
            d="m17.07 8.21-3.76-2.03c-.4-.21-.87-.21-1.27 0L8.28 8.21a.9.9 0 0 0-.44.77c0 .33.17.62.44.77l3.76 2.03q.3.16.64.16.33 0 .64-.16l3.76-2.03a.9.9 0 0 0 .44-.77.9.9 0 0 0-.45-.77"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m11.41 12.47-3.5-1.75a.87.87 0 0 0-1.25.77v3.31c0 .57.32 1.09.83 1.34l3.5 1.75a.9.9 0 0 0 .84-.04.9.9 0 0 0 .41-.73v-3.31c0-.57-.31-1.08-.83-1.34"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
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
            d="M15.67 22.75a.75.75 0 0 1-.64-1.14l1.05-1.75a.76.76 0 0 1 1.03-.26c.36.21.47.67.26 1.03l-.27.45a6.3 6.3 0 0 0 4.83-6.09c0-.41.34-.75.75-.75s.75.34.75.75a7.8 7.8 0 0 1-7.76 7.76"
            fill="currentColor"
          />
          <path
            d="M2.67 9.75A.76.76 0 0 1 1.92 9a7.76 7.76 0 0 1 7.75-7.75.75.75 0 0 1 .64 1.14L9.26 4.14a.75.75 0 0 1-1.03.25.75.75 0 0 1-.25-1.03l.27-.45A6.26 6.26 0 0 0 3.42 9c0 .41-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="m17.07 8.21-3.76-2.03c-.4-.21-.87-.21-1.27 0L8.27 8.21a.9.9 0 0 0-.44.76c0 .33.17.62.44.77l3.76 2.03q.3.16.64.16.33 0 .64-.16l3.76-2.03a.9.9 0 0 0 .44-.77.9.9 0 0 0-.44-.76"
            fill="currentColor"
          />
          <path
            d="m11.41 12.47-3.5-1.75a.9.9 0 0 0-.84.04.9.9 0 0 0-.4.73v3.31c0 .57.32 1.09.83 1.34l3.5 1.75a.9.9 0 0 0 .84-.04.9.9 0 0 0 .41-.73v-3.31a1.5 1.5 0 0 0-.84-1.34"
            fill="currentColor"
          />
          <path
            d="M18.26 10.76a.9.9 0 0 0-.84-.04l-3.5 1.75a1.5 1.5 0 0 0-.83 1.34v3.31q.01.47.41.73.22.13.45.13.2 0 .4-.09l3.5-1.75c.5-.26.82-.77.82-1.34v-3.31q-.01-.47-.4-.73"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default Icon3dRotate;
