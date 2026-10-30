import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMailEdit = forwardRef<SVGSVGElement, IconProps>(function IconMailEdit(
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
            d="M2 8.25c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v3"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M12 20.25H7c-3 0-5-1.5-5-5v-3.03"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m17 8.75-3.13 2.5a3.2 3.2 0 0 1-3.75 0L7 8.75"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m19.2 14.52-3.53 3.54c-.14.14-.27.4-.3.59l-.2 1.35c-.06.49.28.83.77.76l1.35-.19c.19-.03.46-.16.59-.3l3.54-3.54c.6-.61.9-1.32 0-2.22-.9-.89-1.6-.6-2.21.01Z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M18.7 15.03a3.2 3.2 0 0 0 2.22 2.22"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
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
          <path
            d="M12 20.25H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m17 8.75-3.13 2.5a3.2 3.2 0 0 1-3.75 0L7 8.75"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="m19.21 14.52-3.54 3.54c-.14.14-.27.4-.3.59L15.18 20c-.07.49.27.83.76.76l1.35-.19c.19-.03.46-.16.59-.3l3.54-3.54c.61-.61.9-1.32 0-2.22-.89-.89-1.6-.6-2.21.01"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.7 15.03a3.2 3.2 0 0 0 2.22 2.22"
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
            opacity={duotone ? "0.4" : "1"}
            d="M6.52 2h10c3 0 5 1.5 5 5v3.14a1 1 0 0 1-1.42.9 6.5 6.5 0 0 0-9.02 6.86 1 1 0 0 1-.99 1.11H6.52c-3 0-5-1.5-5-5v-7c0-3.51 2-5.01 5-5.01"
            fill="currentColor"
          />
          <path
            d="M11.52 10.87c-.84 0-1.69-.26-2.34-.79l-3.13-2.5a.75.75 0 0 1 .93-1.17l3.13 2.5c.76.61 2.05.61 2.81 0l3.13-2.5a.74.74 0 0 1 1.05.12c.26.32.21.8-.12 1.05l-3.13 2.5c-.64.53-1.49.79-2.33.79"
            fill="currentColor"
          />
          <path
            d="M17.52 12a5 5 0 1 0 0 10 5 5 0 0 0 0-10m2.05 4.55-.37.36-2.17 2.18a1 1 0 0 1-.43.21l-.98.14c-.35.05-.6-.2-.55-.55l.14-.98a1 1 0 0 1 .21-.43l2.18-2.17.36-.37q.36-.38.79-.4.36-.02.81.4c.66.66.45 1.17.01 1.61"
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
            d="M16.52 2h-10c-3 0-5 1.5-5 5v7c0 3.5 2 5 5 5h3.57a1 1 0 0 0 .99-1.11 6.54 6.54 0 0 1 9.02-6.86 1 1 0 0 0 1.42-.9V7c0-3.5-2-5-5-5m.47 5.59-3.13 2.5c-.66.53-1.5.79-2.34.79s-1.69-.26-2.34-.79l-3.13-2.5a.77.77 0 0 1-.12-1.06.75.75 0 0 1 1.05-.12l3.13 2.5c.76.61 2.05.61 2.81 0l3.13-2.5a.74.74 0 0 1 1.05.12c.26.33.21.8-.11 1.06"
            fill="currentColor"
          />
          <path
            d="M17.52 12a5 5 0 1 0 0 10 5 5 0 0 0 0-10m2.05 4.55-.37.36-2.18 2.19a1 1 0 0 1-.43.21l-.98.14c-.35.05-.6-.2-.55-.55l.14-.98a1 1 0 0 1 .21-.43l2.18-2.17.36-.37q.36-.38.79-.4.36-.02.81.4c.67.65.46 1.16.02 1.6"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconMailEdit;
