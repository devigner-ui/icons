import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconDumbbellSmall = forwardRef<SVGSVGElement, IconProps>(
  function IconDumbbellSmall(
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
              d="M15.5 9v6c0 .47 0 .7.05.89.14.52.54.92 1.06 1.06.2.05.43.05.89.05s.7 0 .89-.05a1.5 1.5 0 0 0 1.06-1.06c.05-.2.05-.42.05-.89V9c0-.46 0-.7-.05-.89a1.5 1.5 0 0 0-1.06-1.06C18.19 7 17.96 7 17.5 7s-.7 0-.89.05a1.5 1.5 0 0 0-1.06 1.06c-.05.2-.05.43-.05.89"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M4.5 9v6c0 .47 0 .7.05.89.14.52.54.92 1.06 1.06.2.05.43.05.89.05s.7 0 .89-.05a1.5 1.5 0 0 0 1.06-1.06c.05-.2.05-.42.05-.89V9c0-.46 0-.7-.05-.89a1.5 1.5 0 0 0-1.06-1.06C7.19 7 6.96 7 6.5 7s-.7 0-.89.05a1.5 1.5 0 0 0-1.06 1.06c-.05.2-.05.43-.05.89"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M5 10H4a2 2 0 1 0 0 4h1m4-2h6m4 2h1a2 2 0 1 0 0-4h-1"
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
              d="M19 15V9c0-.46 0-.7-.05-.89a1.5 1.5 0 0 0-1.06-1.06C17.69 7 17.46 7 17 7s-.7 0-.89.05a1.5 1.5 0 0 0-1.06 1.06c-.05.2-.05.43-.05.89v6c0 .47 0 .7.05.89.14.52.54.92 1.06 1.06.2.05.43.05.89.05s.7 0 .89-.05a1.5 1.5 0 0 0 1.06-1.06c.05-.2.05-.42.05-.89"
              fill="currentColor"
            />
            <path
              d="M5 9v6c0 .47 0 .7.05.89.14.52.54.92 1.06 1.06.2.05.43.05.89.05s.7 0 .89-.05a1.5 1.5 0 0 0 1.06-1.06c.05-.2.05-.42.05-.89V9c0-.46 0-.7-.05-.89a1.5 1.5 0 0 0-1.06-1.06C7.69 7 7.46 7 7 7s-.7 0-.89.05a1.5 1.5 0 0 0-1.06 1.06C5 8.31 5 8.54 5 9"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path d="M15 12.75H9v-1.5h6z" fill="currentColor" />
            </g>
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M3.5 12A2 2 0 0 1 5 10.06v3.88A2 2 0 0 1 3.5 12"
                fill="currentColor"
              />
              <path
                d="M20.5 12a2 2 0 0 1-1.5 1.94v-3.88A2 2 0 0 1 20.5 12"
                fill="currentColor"
              />
            </g>
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
              d="M2 12a2 2 0 0 1 1.5-1.94v3.88A2 2 0 0 1 2 12"
              fill="currentColor"
            />
            <path
              d="M22 12a2 2 0 0 1-1.5 1.94v-3.88A2 2 0 0 1 22 12"
              fill="currentColor"
            />
            <path
              d="M19 9v6c0 .47 0 .7-.05.89a1.5 1.5 0 0 1-1.06 1.06c-.2.05-.43.05-.89.05s-.7 0-.89-.05a1.5 1.5 0 0 1-1.06-1.06c-.05-.2-.05-.42-.05-.89v-2.25H9V15c0 .47 0 .7-.05.89a1.5 1.5 0 0 1-1.06 1.06c-.2.05-.43.05-.89.05s-.7 0-.89-.05a1.5 1.5 0 0 1-1.06-1.06C5 15.69 5 15.47 5 15V9c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06C6.31 7 6.54 7 7 7s.7 0 .89.05c.52.14.92.54 1.06 1.06.05.2.05.43.05.89v2.25h6V9c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.2-.05.43-.05.89-.05s.7 0 .89.05c.52.14.92.54 1.06 1.06.05.2.05.43.05.89"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconDumbbellSmall;
