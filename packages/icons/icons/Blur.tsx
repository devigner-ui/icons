import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBlur = forwardRef<SVGSVGElement, IconProps>(function IconBlur(
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
            d="M13.28 2.21a1 1 0 0 0-1.22 0c-1.9 1.45-7.51 6.18-7.48 11.69a8.11 8.11 0 0 0 16.2.01c.01-5.43-5.61-10.24-7.5-11.7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M12.67 2v20"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m12.67 18.96 7.7-3.74"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m12.67 13.96 7.37-3.58"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m12.67 8.96 5.03-2.45"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
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
            d="M13.28 2.21a1 1 0 0 0-1.22 0c-1.9 1.45-7.51 6.18-7.48 11.69a8.11 8.11 0 0 0 16.2.01c.01-5.43-5.61-10.24-7.5-11.7"
            fill="currentColor"
          />
          <path
            d="M20.76 14.2a8 8 0 0 1-.27 1.79l-7.07 3.44v2.54a9 9 0 0 1-1.5 0V2.31l.13-.1a1 1 0 0 1 1.23 0l.14.11v5.44l3.78-1.84q.49.57.95 1.18l-.13.09-4.6 2.24v3.33l6.29-3.06.02-.01q.33.67.56 1.39l-6.87 3.35v3.33l6.62-3.22z"
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
            d="M14.14 7.41 16.6 6.2a.5.5 0 0 0 .15-.78c-.89-.98-1.79-1.8-2.51-2.42a.5.5 0 0 0-.82.38v3.58c0 .37.39.61.72.45"
            fill="currentColor"
          />
          <path
            d="M13.42 19.74v1.65c0 .3.27.55.57.5a8.1 8.1 0 0 0 6.09-4.74c.19-.42-.27-.84-.69-.64L13.7 19.3a.5.5 0 0 0-.28.44"
            fill="currentColor"
          />
          <path
            d="M11.92 3.36a.5.5 0 0 0-.82-.39C8.74 4.95 4.55 9.12 4.57 13.9a8.1 8.1 0 0 0 6.78 7.99c.3.05.57-.2.57-.5z"
            fill="currentColor"
          />
          <path
            d="m14.11 12.47 5.29-2.22c.27-.12.4-.43.27-.69a17 17 0 0 0-1.27-2.1.5.5 0 0 0-.62-.16l-4.09 1.99a.5.5 0 0 0-.28.45v2.27c.01.35.37.6.7.46"
            fill="currentColor"
          />
          <path
            d="M20.5 14.31a.5.5 0 0 0 .26-.4q0-.96-.22-1.89a.5.5 0 0 0-.68-.34l-6.14 2.62a.5.5 0 0 0-.3.46v2.2c0 .37.39.61.72.45l5.9-2.87z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconBlur;
