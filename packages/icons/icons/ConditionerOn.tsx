import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconConditionerOn = forwardRef<SVGSVGElement, IconProps>(
  function IconConditionerOn(
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
              d="M2 7.57c0-2.41 0-3.62.65-4.44a3 3 0 0 1 .48-.48C3.95 2 5.16 2 7.57 2h8.86c2.41 0 3.62 0 4.44.65a3 3 0 0 1 .48.48c.65.82.65 2.03.65 4.44 0 3.22 0 4.83-.87 5.92a4 4 0 0 1-.64.64c-1.09.87-2.7.87-5.92.87H9.43c-3.22 0-4.83 0-5.92-.87a4 4 0 0 1-.64-.64C2 12.4 2 10.8 2 7.57"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m7 17.5-.3.46c-.4.58-.26 1.37.3 1.79s.7 1.2.3 1.79L7 22m5-4.5-.3.46c-.4.58-.26 1.37.3 1.79s.7 1.2.3 1.79L12 22m5-4.5-.3.46c-.4.58-.26 1.37.3 1.79s.7 1.2.3 1.79L17 22"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18 14.5c0-.46 0-.7-.04-.89a2 2 0 0 0-1.57-1.57c-.2-.04-.43-.04-.89-.04H9c-.93 0-1.4 0-1.77.15a2 2 0 0 0-1.08 1.08c-.12.3-.14.66-.15 1.27"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M6 8.5h12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M6 6h12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
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
              d="M6 2h12c1.89 0 2.83 0 3.41.59C22 3.17 22 4.1 22 6v3c0 2.83 0 4.24-.88 5.12-.53.53-1.26.74-2.37.83 0-.67-.02-1.4-.06-1.7a2.3 2.3 0 0 0-.6-1.34 2.2 2.2 0 0 0-1.34-.6q-.7-.08-1.7-.06h-6.1q-1-.02-1.7.06c-.49.07-.96.22-1.34.6s-.53.85-.6 1.34c-.04.3-.05 1.03-.06 1.7-1.11-.09-1.84-.3-2.37-.83C2 13.24 2 11.82 2 9V6c0-1.89 0-2.83.59-3.41C3.17 2 4.1 2 6 2m-.75 6.5c0-.41.34-.75.75-.75h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m0-2.5c0-.41.34-.75.75-.75h12a.75.75 0 0 1 0 1.5H6A.75.75 0 0 1 5.25 6"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18.75 14.95H5.25c0-.67.02-1.4.06-1.7.07-.49.22-.96.6-1.34s.85-.53 1.34-.6q.7-.08 1.7-.06h6.1q1-.02 1.7.06c.49.07.96.22 1.34.6s.53.85.6 1.34c.04.3.05 1.03.06 1.7"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.84 16.83c.37.18.52.64.33 1L7 18.2q-.07.16.04.27c.53.53.66 1.33.32 2l-.18.37a.75.75 0 0 1-1.34-.68L6 19.8a.2.2 0 0 0-.04-.27 1.7 1.7 0 0 1-.32-2l.18-.37a.75.75 0 0 1 1-.33"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.84 16.83c.37.18.52.64.33 1l-.18.37q-.07.16.04.27c.53.53.66 1.33.32 2l-.18.37a.75.75 0 1 1-1.34-.68l.18-.36a.2.2 0 0 0-.04-.27 1.7 1.7 0 0 1-.32-2l.18-.37a.75.75 0 0 1 1-.33"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.42 16.88c.34.23.43.7.2 1.04l-.3.46a.57.57 0 0 0 .13.77c.88.66 1.09 1.9.48 2.8l-.3.47a.75.75 0 1 1-1.25-.84l.3-.46a.57.57 0 0 0-.13-.77 2.07 2.07 0 0 1-.48-2.8l.3-.47a.75.75 0 0 1 1.05-.2"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.84 16.83c.37.18.52.64.33 1L7 18.2q-.07.16.04.27c.53.53.66 1.33.32 2l-.18.37a.75.75 0 0 1-1.34-.68L6 19.8a.2.2 0 0 0-.04-.27 1.7 1.7 0 0 1-.32-2l.18-.37a.75.75 0 0 1 1-.33"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.84 16.83c.37.18.52.64.33 1l-.18.37q-.07.16.04.27c.53.53.66 1.33.32 2l-.18.37a.75.75 0 1 1-1.34-.68l.18-.36a.2.2 0 0 0-.04-.27 1.7 1.7 0 0 1-.32-2l.18-.37a.75.75 0 0 1 1-.33"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.42 16.88c.34.23.43.7.2 1.04l-.3.46a.57.57 0 0 0 .13.77c.88.66 1.09 1.9.48 2.8l-.3.47a.75.75 0 1 1-1.25-.84l.3-.46a.57.57 0 0 0-.13-.77 2.07 2.07 0 0 1-.48-2.8l.3-.47a.75.75 0 0 1 1.05-.2"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6 2h12c1.89 0 2.83 0 3.41.59C22 3.17 22 4.1 22 6v3c0 2.83 0 4.24-.88 5.12-.53.53-1.26.74-2.37.83 0-.67-.02-1.4-.06-1.7a2.3 2.3 0 0 0-.6-1.34 2.2 2.2 0 0 0-1.34-.6q-.7-.08-1.7-.06h-6.1q-1-.02-1.7.06c-.49.07-.96.22-1.34.6s-.53.85-.6 1.34c-.04.3-.05 1.03-.06 1.7-1.11-.09-1.84-.3-2.37-.83C2 13.24 2 11.82 2 9V6c0-1.89 0-2.83.59-3.41C3.17 2 4.1 2 6 2m-.75 6.5c0-.41.34-.75.75-.75h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m0-2.5c0-.41.34-.75.75-.75h12a.75.75 0 0 1 0 1.5H6A.75.75 0 0 1 5.25 6"
              fill="currentColor"
            />
            <path
              d="M16 15H6.75c0-.65.02-1.33.05-1.55.04-.32.11-.42.17-.48s.16-.13.48-.17c.35-.05.82-.05 1.55-.05h6c.73 0 1.2 0 1.55.05.32.04.42.11.48.17s.13.16.17.48c.03.22.04.9.05 1.55z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconConditionerOn;
