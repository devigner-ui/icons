import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconClapperboardOpenPlay = forwardRef<SVGSVGElement, IconProps>(
  function IconClapperboardOpenPlay(
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
            d="M4.3 10.65c-.48-1.8-.72-2.7-.52-3.49a3 3 0 0 1 .78-1.34c.57-.57 1.47-.81 3.28-1.3l7-1.87a8 8 0 0 1 1.3-.29 3 3 0 0 1 2.9 1.67c.12.26.21.6.4 1.27.05.23.08.34.09.44a1 1 0 0 1-.56.96q-.1.05-.42.13z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="m15 2.59-.64 5.35"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="m8.72 4.27-.64 5.35"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M14.3 16.15c0-.42-.4-.7-1.2-1.28-.8-.57-1.2-.86-1.5-.65s-.3.78-.3 1.93 0 1.72.3 1.93.7-.08 1.5-.65 1.2-.86 1.2-1.28Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M20.3 15.65c0 2.83 0 4.24-.88 5.12s-2.3.88-5.12.88h-4c-2.83 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12v-5h12c1.89 0 2.83 0 3.41.59.34.33.48.78.54 1.47"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
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
              d="M4.3 10.65h12c1.89 0 2.83 0 3.41.59.59.58.59 1.52.59 3.41v1c0 2.83 0 4.24-.88 5.12s-2.3.88-5.12.88h-4c-2.83 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M4.3 10.65c-.48-1.8-.72-2.7-.52-3.49a3 3 0 0 1 .78-1.34c.57-.57 1.47-.81 3.28-1.3l7-1.87a8 8 0 0 1 1.3-.29 3 3 0 0 1 2.9 1.67c.12.26.21.6.4 1.27.05.23.08.34.09.44a1 1 0 0 1-.56.96q-.1.05-.42.13z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m15 2.59-.64 5.35"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m8.72 4.27-.64 5.35"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M14.3 16.15c0-.42-.4-.7-1.2-1.28-.8-.57-1.2-.86-1.5-.65s-.3.78-.3 1.93 0 1.72.3 1.93.7-.08 1.5-.65 1.2-.86 1.2-1.28"
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
              opacity={duotone ? "0.4" : "1"}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.3 10.65h-12v5c0 2.83 0 4.24.88 5.12s2.3.88 5.12.88h4c2.83 0 4.24 0 5.12-.88s.88-2.3.88-5.12v-1c0-1.89 0-2.83-.59-3.41-.58-.59-1.51-.59-3.41-.59"
              fill="currentColor"
            />
            <path
              d="M14.3 16.15c0-.42-.4-.7-1.2-1.28-.8-.57-1.2-.86-1.5-.65s-.3.78-.3 1.93 0 1.72.3 1.93.7-.08 1.5-.65 1.2-.86 1.2-1.28"
              fill="currentColor"
            />
            <path
              d="m13.62 7.85.6-5.03L9.5 4.08l-.04.28-.6 5.07 4.71-1.27z"
              fill="currentColor"
            />
            <path
              d="M3.78 7.16c-.2.78.04 1.68.52 3.49l3-.8.04-.32.6-5.03-.1.03c-1.8.48-2.71.72-3.28 1.29a3 3 0 0 0-.78 1.34"
              fill="currentColor"
            />
            <path
              d="m18.55 6.83-3.4.92.6-5.07.05-.27q.2-.04.34-.05a3 3 0 0 1 2.9 1.67c.12.26.21.6.4 1.27.05.23.08.34.09.44a1 1 0 0 1-.56.96c-.09.04-.2.07-.42.13"
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
              d="m15.14 7.75 3.4-.92q.33-.08.43-.13a1 1 0 0 0 .56-.96c0-.1-.04-.21-.1-.44-.18-.67-.27-1-.4-1.27a3 3 0 0 0-3.3-1.6q.03.11.02.25z"
              fill="currentColor"
            />
            <path
              d="m9.45 4.09 4.77-1.27-.6 5.03q-.01.15.02.3L8.86 9.43l.6-5.07q.03-.14-.01-.27"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.3 10.65h-12v5c0 2.83 0 4.24.88 5.12s2.3.88 5.12.88h4c2.83 0 4.24 0 5.12-.88s.88-2.3.88-5.12v-1c0-1.89 0-2.83-.59-3.41-.58-.59-1.51-.59-3.41-.59m-3.2 4.22c.8.57 1.2.86 1.2 1.28s-.4.7-1.2 1.28c-.8.57-1.2.86-1.5.65s-.3-.78-.3-1.93 0-1.72.3-1.93.7.08 1.5.65"
              fill="currentColor"
            />
            <path
              d="M7.34 9.53q-.01.15.02.3l-3.06.82c-.48-1.8-.72-2.7-.52-3.49a3 3 0 0 1 .78-1.34c.57-.57 1.47-.81 3.28-1.3l.1-.02z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconClapperboardOpenPlay;
