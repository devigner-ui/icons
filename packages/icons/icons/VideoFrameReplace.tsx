import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconVideoFrameReplace = forwardRef<SVGSVGElement, IconProps>(
  function IconVideoFrameReplace(
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
              d="M2 6c0-1.89 0-2.83.59-3.41C3.17 2 4.1 2 6 2h5c1.89 0 2.83 0 3.41.59C15 3.17 15 4.1 15 6s0 2.83-.59 3.41C13.83 10 12.9 10 11 10H6c-1.89 0-2.83 0-3.41-.59C2 8.83 2 7.9 2 6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M10 18c0-1.89 0-2.83.59-3.41C11.17 14 12.1 14 14 14h3c1.89 0 2.83 0 3.41.59.59.58.59 1.52.59 3.41s0 2.83-.59 3.41C19.83 22 18.9 22 17 22h-3c-1.89 0-2.83 0-3.41-.59C10 20.83 10 19.9 10 18"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M6 2.5V10m5-7.5V10M2.5 6H6m5 0h4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M13.5 14.5V22m4-7.5V22M11 18h2.5m4 0H21"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m22 10-1 1-1-1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M21 11v-1c0-.93 0-2.4-.15-2.77a2 2 0 0 0-1.08-1.08C19.4 6 18.93 6 18 6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m2 14 1-1 1 1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M3 13v1c0 .93 0 2.4.15 2.77a2 2 0 0 0 1.08 1.08C4.6 18 5.07 18 6 18"
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
              d="M5.25 2c-1.4.01-2.16.08-2.66.59-.5.5-.58 1.26-.59 2.66h3.25z"
              fill="currentColor"
            />
            <path
              d="M2 6.75c.01 1.4.08 2.16.59 2.66.5.5 1.26.58 2.66.59V6.75z"
              fill="currentColor"
            />
            <path d="M6.75 10h3.5V2h-3.5z" fill="currentColor" />
            <path
              d="M11.75 2v3.25H15c-.01-1.4-.08-2.16-.59-2.66-.5-.5-1.26-.58-2.66-.59"
              fill="currentColor"
            />
            <path
              d="M15 6.75h-3.25V10c1.4-.01 2.16-.08 2.66-.59.5-.5.58-1.26.59-2.66"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.47 12.47c.3-.3.77-.3 1.06 0l1 1a.75.75 0 0 1-.78 1.24l.06 1.52.04.25q.2.47.67.67c.08.04.2.07.44.08q.34.02 1.04.02a.75.75 0 0 1 0 1.5h-.03q-.66 0-1.12-.02a3 3 0 0 1-.9-.19 2.8 2.8 0 0 1-1.5-1.49c-.08-.2-.11-.46-.13-.66q-.04-.36-.05-.77l-.02-.91a.75.75 0 0 1-.78-1.24z"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M19.04 6.77 18 6.75a.75.75 0 0 1 0-1.5h.03q.66 0 1.12.02t.9.19c.68.28 1.21.81 1.5 1.49.08.2.11.46.13.66q.04.36.05.77l.02.91a.75.75 0 0 1 .78 1.24l-1 1c-.3.3-.77.3-1.06 0l-1-1a.75.75 0 0 1 .78-1.24l-.06-1.52-.04-.24q0-.01 0 0-.2-.48-.67-.68-.1-.06-.44-.08"
                fill="currentColor"
              />
            </g>
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M12.75 14c-1.09.04-1.73.15-2.16.59-.5.5-.58 1.26-.59 2.66h2.75z"
                fill="currentColor"
              />
              <path
                d="M10 18.75c.01 1.4.08 2.16.59 2.66.43.44 1.07.55 2.16.58v-3.24z"
                fill="currentColor"
              />
              <path d="M14.25 22h2.5v-8h-2.5z" fill="currentColor" />
              <path
                d="M18.25 14v3.25H21c-.01-1.4-.08-2.16-.59-2.66-.43-.44-1.07-.55-2.16-.58"
                fill="currentColor"
              />
              <path
                d="M21 18.75h-2.75v3.24c1.09-.03 1.73-.14 2.16-.58.5-.5.58-1.26.59-2.66"
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
              d="M5.25 2c-1.4.01-2.16.08-2.66.59-.5.5-.58 1.26-.59 2.66h3.25z"
              fill="currentColor"
            />
            <path
              d="M2 6.75c.01 1.4.08 2.16.59 2.66.5.5 1.26.58 2.66.59V6.75z"
              fill="currentColor"
            />
            <path d="M6.75 10h3.5V2h-3.5z" fill="currentColor" />
            <path
              d="M11.75 2v3.25H15c-.01-1.4-.08-2.16-.59-2.66-.5-.5-1.26-.58-2.66-.59"
              fill="currentColor"
            />
            <path
              d="M15 6.75h-3.25V10c1.4-.01 2.16-.08 2.66-.59.5-.5.58-1.26.59-2.66"
              fill="currentColor"
            />
            <path
              d="M12.75 14c-1.09.04-1.73.15-2.16.59-.5.5-.58 1.26-.59 2.66h2.75z"
              fill="currentColor"
            />
            <path
              d="M10 18.75c.01 1.4.08 2.16.59 2.66.43.44 1.07.55 2.16.58v-3.24z"
              fill="currentColor"
            />
            <path d="M14.25 22h2.5v-8h-2.5z" fill="currentColor" />
            <path
              d="M18.25 14v3.25H21c-.01-1.4-.08-2.16-.59-2.66-.43-.44-1.07-.55-2.16-.58"
              fill="currentColor"
            />
            <path
              d="M21 18.75h-2.75v3.24c1.09-.03 1.73-.14 2.16-.58.5-.5.58-1.26.59-2.66"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.04 6.77 18 6.75a.75.75 0 0 1 0-1.5h.03q.66 0 1.12.02t.9.19c.68.28 1.21.81 1.5 1.49.08.2.11.46.13.66q.04.36.05.77l.02.91a.75.75 0 0 1 .78 1.24l-1 1c-.3.3-.77.3-1.06 0l-1-1a.75.75 0 0 1 .78-1.24l-.06-1.52-.04-.24q0-.01 0 0-.2-.48-.67-.68-.1-.06-.44-.08m-16.57 5.7c.3-.3.77-.3 1.06 0l1 1a.75.75 0 0 1-.78 1.24l.06 1.52.04.25q.2.47.67.67c.08.04.2.07.44.08q.34.02 1.04.02a.75.75 0 0 1 0 1.5h-.03q-.66 0-1.12-.02a3 3 0 0 1-.9-.19 2.8 2.8 0 0 1-1.5-1.49c-.08-.2-.11-.46-.13-.66q-.04-.36-.05-.77l-.02-.91a.75.75 0 0 1-.78-1.24z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconVideoFrameReplace;
