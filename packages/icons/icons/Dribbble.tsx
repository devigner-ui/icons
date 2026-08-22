import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconDribbble = forwardRef<SVGSVGElement, IconProps>(function IconDribbble(
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
            d="M12.67 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M19.17 4.79a13.4 13.4 0 0 1-12.83 6.69l-3.17-.29"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.17 19.37A13.4 13.4 0 0 1 19 12.68l3.17.29"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m8.3 3 3.18 3.95a23 23 0 0 1 4.44 9l1.21 4.99"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.55 20.92a.4.4 0 0 1-.21.39 9.9 9.9 0 0 1-9.56-1.24.34.34 0 0 1-.09-.45c.55-.98 2.7-4.13 7.45-5.89.18-.07.38.02.44.2a43 43 0 0 1 1.97 6.99"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.49 13.89a10 10 0 0 1-3.77 6.06.35.35 0 0 1-.56-.21 45 45 0 0 0-1.7-6.18.36.36 0 0 1 .29-.47c2.49-.3 4.67.18 5.49.4.17.06.28.23.25.4"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.26 11.82a24 24 0 0 0-6.28-.27q-.25.02-.37-.22l-.11-.27-.5-1.12c-.09-.18 0-.4.18-.48a14 14 0 0 0 4.97-3.47.35.35 0 0 1 .55.02 10 10 0 0 1 1.97 5.42c.01.25-.19.43-.41.39"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.11 4.79c-.52.63-1.98 2.13-4.75 3.23a.35.35 0 0 1-.44-.16 54 54 0 0 0-3.27-5.15.36.36 0 0 1 .23-.56q.87-.15 1.8-.15c2.42 0 4.65.86 6.38 2.3.15.12.17.34.05.49"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.69 8.84a38 38 0 0 1-8.36 1.1.35.35 0 0 1-.34-.44c.72-2.8 2.64-5.14 5.17-6.43a.35.35 0 0 1 .44.11 65 65 0 0 1 3.31 5.14c.11.2.01.46-.22.52"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.59 11.6c.09.19-.02.42-.22.49-4.43 1.43-7.08 4.98-7.88 6.2a.35.35 0 0 1-.56.03 9.3 9.3 0 0 1-2.26-6.09v-.18c0-.2.16-.36.36-.35 1.26.05 5.37-.12 9.64-1.35.16-.05.34.03.41.18q.27.53.51 1.07"
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
            d="M16.55 20.92a.4.4 0 0 1-.21.39 9.9 9.9 0 0 1-9.55-1.24.34.34 0 0 1-.09-.45c.55-.98 2.7-4.13 7.45-5.89.18-.07.38.02.44.2a44 44 0 0 1 1.96 6.99"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.49 13.89a10 10 0 0 1-3.77 6.06.35.35 0 0 1-.56-.21 45 45 0 0 0-1.7-6.18.36.36 0 0 1 .29-.47c2.49-.3 4.67.18 5.49.4.17.06.28.23.25.4"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.26 11.82a24 24 0 0 0-6.28-.27q-.25.02-.37-.22l-.11-.27-.5-1.12c-.09-.18 0-.4.18-.48a14 14 0 0 0 4.97-3.47.35.35 0 0 1 .55.02 10 10 0 0 1 1.97 5.42c.01.25-.19.43-.41.39"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.11 4.79c-.52.63-1.98 2.13-4.75 3.23a.35.35 0 0 1-.44-.16 54 54 0 0 0-3.27-5.15c-.15-.21-.03-.51.22-.55q.87-.15 1.81-.15c2.42 0 4.65.86 6.38 2.3.15.11.17.33.05.48"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.69 8.84a38 38 0 0 1-8.36 1.1.35.35 0 0 1-.34-.44c.72-2.8 2.64-5.14 5.17-6.43a.35.35 0 0 1 .44.11 65 65 0 0 1 3.31 5.14c.11.2.01.46-.22.52"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.59 11.6c.09.19-.02.42-.22.49-4.43 1.43-7.08 4.98-7.88 6.2a.35.35 0 0 1-.56.03 9.4 9.4 0 0 1-2.25-6.08v-.18c0-.2.16-.36.36-.35 1.26.05 5.37-.12 9.64-1.35.16-.05.34.03.41.18z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconDribbble;
