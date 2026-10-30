import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBucketSquare = forwardRef<SVGSVGElement, IconProps>(
  function IconBucketSquare(
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
            d="M8.94 16.93 6.1 14.1q-1.41-1.42 0-2.83l4.72-4.72 5.19 5.19c.26.26.26.68 0 .94l-4.25 4.25q-1.42 1.41-2.83 0Z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m9.88 5.6.95.94"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m5.44 12.64 10.69-.47"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M17.3 14.81s-1.31 1.42-1.31 2.29c0 .72.59 1.31 1.31 1.31s1.31-.59 1.31-1.31c-.01-.87-1.31-2.29-1.31-2.29Z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M2 12.97V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"
            strokeWidth={strokeWidth}
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
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M8.93 16.93 6.12 14.1q-1.41-1.42 0-2.83l4.72-4.72 5.19 5.19c.26.26.26.68 0 .94l-4.25 4.25q-1.42 1.41-2.83 0"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m9.88 5.6.95.94"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m5.43 12.64 10.7-.47"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.3 14.81s-1.31 1.42-1.31 2.29c0 .72.59 1.31 1.31 1.31s1.31-.59 1.31-1.31c-.01-.87-1.31-2.29-1.31-2.29"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              d="M22 15V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7"
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
              d="M16.19 2H7.82C4.18 2 2.01 4.17 2.01 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2"
              fill="currentColor"
            />
            <path
              d="M15.66 11.93a.6.6 0 0 0-.17-.39l-4.7-4.7-.55-.55a.5.5 0 0 0-.68 0 .5.5 0 0 0 0 .68l.55.55-3.6 3.6q-.62.62-.64 1.24-.02.66.64 1.33l2.57 2.57q1.3 1.28 2.57 0l3.85-3.85a.7.7 0 0 0 .16-.48"
              fill="currentColor"
            />
            <path
              d="M16.96 14.19c-.16-.18-.47-.18-.64 0-.2.21-1.19 1.33-1.19 2.17a1.5 1.5 0 1 0 3 0c.01-.84-.97-1.95-1.17-2.17"
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
              d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2M9.06 16.25 6.5 13.68q-.66-.66-.64-1.33.02-.63.64-1.24l3.6-3.6-.56-.55a.5.5 0 0 1 0-.68.5.5 0 0 1 .68 0l.55.55 4.7 4.7q.16.16.17.39a.6.6 0 0 1-.17.47l-3.85 3.85q-1.27 1.29-2.56.01m7.58 1.61a1.5 1.5 0 0 1-1.5-1.5c0-.84.99-1.95 1.19-2.17.16-.18.47-.18.64 0 .2.21 1.19 1.33 1.19 2.17-.02.83-.69 1.5-1.52 1.5"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBucketSquare;
