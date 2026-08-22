import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBucketCircle = forwardRef<SVGSVGElement, IconProps>(
  function IconBucketCircle(
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
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="m10.08 15.95-2.39-2.39q-1.2-1.2 0-2.39l3.99-3.99 4.39 4.39c.22.22.22.58 0 .8l-3.59 3.59q-1.2 1.19-2.4-.01"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m10.88 6.38.8.8"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m7.13 12.33 9.03-.39"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.14 14.17s-1.1 1.2-1.1 1.93c0 .61.5 1.1 1.1 1.1s1.1-.5 1.1-1.1c.01-.74-1.1-1.93-1.1-1.93"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              d="M12.67 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
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
              d="M12.67 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
              fill="currentColor"
            />
            <path
              d="M16.33 11.93a.6.6 0 0 0-.17-.39l-4.7-4.7-.55-.55a.5.5 0 0 0-.68 0 .5.5 0 0 0 0 .68l.55.55-3.6 3.6q-.62.62-.64 1.24-.02.66.64 1.32l2.57 2.57q1.3 1.28 2.57 0l3.85-3.85a.7.7 0 0 0 .16-.47"
              fill="currentColor"
            />
            <path
              d="M17.63 14.19c-.16-.18-.47-.18-.64 0-.2.21-1.19 1.33-1.19 2.17a1.5 1.5 0 1 0 3 0c.01-.84-.97-1.95-1.17-2.17"
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
              d="M12.67 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m-.37 14.25q-1.28 1.28-2.57 0l-2.56-2.57q-.66-.66-.64-1.33.02-.63.64-1.24l3.6-3.6-.56-.55a.5.5 0 0 1 0-.68.5.5 0 0 1 .68 0l.55.55 4.7 4.7q.16.16.17.39a.6.6 0 0 1-.17.47zm5.01 1.61a1.5 1.5 0 0 1-1.5-1.5c0-.84.99-1.95 1.19-2.17.16-.18.47-.18.64 0 .2.21 1.19 1.33 1.19 2.17-.02.83-.69 1.5-1.52 1.5"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBucketCircle;
