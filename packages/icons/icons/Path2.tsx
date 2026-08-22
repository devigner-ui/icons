import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPath2 = forwardRef<SVGSVGElement, IconProps>(function IconPath2(
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
          <g clipPath="url(#clip0_12_78682)">
            <path
              d="M10.54 22h4.29c1.62 0 2.69-1.16 2.37-2.57l-.69-3.08H8.87l-.69 3.08c-.31 1.33.83 2.57 2.36 2.57"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m16.5 16.35 2.94-2.61c1.64-1.46 1.7-2.48.4-4.13l-5.18-6.58c-1.1-1.38-2.87-1.38-3.97 0L5.5 9.61c-1.3 1.65-1.3 2.72.4 4.13l2.95 2.61"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12.68 2.67v4.3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath>
              <rect
                width="24"
                height="24"
                fill="none"
                transform="translate(0.669922)"
              />
            </clipPath>
          </defs>
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
            d="M14.82 22h-4.28c-1.53 0-2.67-1.24-2.38-2.57l.7-3.08h7.64l.7 3.08c.32 1.41-.75 2.57-2.38 2.57"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m19.44 13.74-2.94 2.61H8.86l-2.94-2.61c-1.71-1.4-1.71-2.48-.41-4.13l5.19-6.57a3 3 0 0 1 1.23-.92 2.3 2.3 0 0 1 1.5 0q.68.24 1.23.92l5.19 6.57c1.3 1.65 1.24 2.67-.41 4.13"
            fill="currentColor"
          />
          <path
            d="M13.43 2.12v4.85c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V2.12a2.3 2.3 0 0 1 1.5 0"
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
            d="M14.82 22H10.5c-1.54 0-2.68-1.25-2.38-2.58l.52-2.32a1 1 0 0 1 .98-.78h6.09a1 1 0 0 1 .98.78l.52 2.31c.32 1.43-.75 2.59-2.39 2.59"
            fill="currentColor"
          />
          <path
            d="m19.49 13.69-1.07.94c-.37.32-.84.5-1.32.5H8.26c-.49 0-.97-.18-1.33-.51l-1.05-.94c-1.72-1.41-1.73-2.49-.41-4.15l5.23-6.61.11-.14c.44-.52 1.13-.08 1.13.6v3.48c-.01.43.33.77.75.76.42.01.75-.33.76-.76V3.39c0-.69.68-1.12 1.13-.61l.11.13 5.21 6.62c1.3 1.66 1.25 2.69-.41 4.16"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconPath2;
