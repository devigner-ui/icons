import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMaximizeCircle = forwardRef<SVGSVGElement, IconProps>(
  function IconMaximizeCircle(
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
            d="M17 3h4v4"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m15 9 6-6"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M7 21H3v-4"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m9 15-6 6"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M7.64 3A10 10 0 0 0 2.2 14"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M14.02 2.2Q13.04 2 12 2"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M9.98 21.8q.98.2 2.02.2a10 10 0 0 0 9.8-12"
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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.25 3c0-.41.34-.75.75-.75h4c.41 0 .75.34.75.75v4a.75.75 0 0 1-1.5 0V3.75H17a.75.75 0 0 1-.75-.75"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.53 2.47c.3.3.3.77 0 1.06l-6 6a.75.75 0 0 1-1.06-1.06l6-6c.3-.3.77-.3 1.06 0"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 16.25c.41 0 .75.34.75.75v3.25H7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75v-4c0-.41.34-.75.75-.75"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.53 14.47c.3.3.3.77 0 1.06l-6 6a.75.75 0 0 1-1.06-1.06l6-6c.3-.3.77-.3 1.06 0"
                fill="currentColor"
              />
            </g>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.25 12A10.75 10.75 0 0 1 14.17 1.46a.75.75 0 0 1-.3 1.48A9.25 9.25 0 0 0 2.93 13.86a.75.75 0 0 1-1.47.29A11 11 0 0 1 1.25 12"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.65 9.26c.4-.08.8.19.88.6q.21 1.03.22 2.14A10.75 10.75 0 0 1 9.83 22.54a.75.75 0 1 1 .3-1.48q.9.2 1.87.19a9.25 9.25 0 0 0 9.06-11.1c-.08-.4.19-.8.6-.89"
              fill="currentColor"
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
              d="M21.69 2.71a.8.8 0 0 0-.7-.47h-4a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h2.19l-4.72 4.72a.75.75 0 0 0 0 1.06q.23.22.53.22t.53-.22l4.72-4.72V7c0 .41.34.75.75.75s.75-.34.75-.75V3a1 1 0 0 0-.05-.29"
              fill="currentColor"
            />
            <path
              d="m8.47 14.47-4.72 4.72V17a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v4q0 .15.06.29a.8.8 0 0 0 .7.47h4c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75H4.82l4.72-4.72a.75.75 0 0 0 0-1.06.77.77 0 0 0-1.07-.01"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2.2 14.75a.75.75 0 0 1-.73-.6q-.21-1.06-.22-2.15A10.76 10.76 0 0 1 14.17 1.47c.41.08.67.48.59.88a.76.76 0 0 1-.88.59A9.26 9.26 0 0 0 2.95 13.85c.08.41-.18.8-.59.88z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 22.75q-1.1 0-2.17-.22a.75.75 0 0 1-.59-.88.76.76 0 0 1 .88-.59q.92.19 1.87.19a9.26 9.26 0 0 0 9.07-11.1.74.74 0 0 1 .59-.88c.41-.08.8.18.88.59q.21 1.05.21 2.14A10.74 10.74 0 0 1 12 22.75"
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
              d="M21.69 2.71a.8.8 0 0 0-.41-.41 1 1 0 0 0-.28-.05h-4a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h2.19l-4.72 4.72a.75.75 0 0 0 0 1.06q.23.22.53.22t.53-.22l4.72-4.72V7c0 .41.34.75.75.75s.75-.34.75-.75V3q0-.15-.06-.29"
              fill="currentColor"
            />
            <path
              d="m8.47 14.47-4.72 4.72V17a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v4q0 .15.06.29.12.28.41.41.13.05.28.05h4c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75H4.81l4.72-4.72a.75.75 0 0 0 0-1.06.75.75 0 0 0-1.06 0"
              fill="currentColor"
            />
            <path
              d="M2.2 14.75a.75.75 0 0 1-.73-.6q-.22-1.06-.22-2.15A10.76 10.76 0 0 1 14.17 1.47c.41.08.67.48.59.88a.76.76 0 0 1-.88.59A9.26 9.26 0 0 0 2.94 13.85c.08.41-.18.8-.59.88z"
              fill="currentColor"
            />
            <path
              d="M12 22.75q-1.1 0-2.17-.22a.75.75 0 0 1-.59-.88.76.76 0 0 1 .88-.59q.92.19 1.87.19a9.26 9.26 0 0 0 9.07-11.1.74.74 0 0 1 .59-.88c.41-.08.8.18.88.59q.21 1.05.21 2.14A10.74 10.74 0 0 1 12 22.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMaximizeCircle;
