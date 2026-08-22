import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconGamepadNoCharge = forwardRef<SVGSVGElement, IconProps>(
  function IconGamepadNoCharge(
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
              d="M16.4 17.25c.19.58.96 1.75 2.57 1.75q.8-.02 1.4-.32c1.27-.6 1.6-2.17 1.62-3.58.12-7-1.52-10.1-3.9-10.94A4 4 0 0 0 16.9 4h-.6a4.2 4.2 0 0 0-2.45.78l-.5.35a2.3 2.3 0 0 1-2.67 0l-.5-.35A4.2 4.2 0 0 0 7.71 4H7.1q-.6-.02-1.2.16C3.54 5.01 1.9 8.1 2 15.1c.03 1.41.36 2.97 1.63 3.58q.6.31 1.4.32a2.7 2.7 0 0 0 2.57-1.75"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m14 17-4 4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m10 17 4 4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7.5 9v3M6 10.5h3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M19 10.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0"
                fill="currentColor"
              />
              <path
                d="M16 10.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0"
                fill="currentColor"
              />
              <path
                d="M16.75 8a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5"
                fill="currentColor"
              />
              <path
                d="M16.75 11a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5"
                fill="currentColor"
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
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="m10.16 4.78.5.35a2.3 2.3 0 0 0 2.67 0l.5-.35c.72-.5 1.58-.78 2.45-.78h.62q.6-.02 1.2.16c2.37.85 4.01 3.94 3.9 10.94-.03 1.41-.36 2.97-1.63 3.58q-.6.31-1.4.32c-.63 0-1.14-.18-1.53-.44s-.77-.61-1.13-.96a6 6 0 0 0-1.42-1.14 4 4 0 0 0-1.9-.46H11q-1 0-1.89.46c-.53.28-.98.7-1.42 1.14-.36.35-.72.7-1.13.96s-.9.44-1.53.44q-.8-.02-1.4-.32c-1.27-.6-1.6-2.17-1.62-3.58C1.89 8.1 3.53 5 5.9 4.16q.58-.18 1.2-.16h.6c.88 0 1.74.27 2.45.78"
                fill="currentColor"
              />
            </g>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.47 17.47c.3-.3.77-.3 1.06 0l.47.47.47-.47a.75.75 0 1 1 1.06 1.06l-.47.47.47.47a.75.75 0 1 1-1.06 1.06l-.47-.47-.47.47a.75.75 0 1 1-1.06-1.06l.47-.47-.47-.47a.75.75 0 0 1 0-1.06"
              fill="currentColor"
            />
            <path
              d="M16.75 8a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5"
              fill="currentColor"
            />
            <path
              d="M7.5 8.25c.41 0 .75.34.75.75v.75H9a.75.75 0 0 1 0 1.5h-.75V12a.75.75 0 0 1-1.5 0v-.75H6a.75.75 0 0 1 0-1.5h.75V9c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
            <path
              d="M19 10.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0"
              fill="currentColor"
            />
            <path
              d="M15.25 11a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5"
              fill="currentColor"
            />
            <path
              d="M17.5 11.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0"
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
              d="M10.47 17.47c.3-.3.77-.3 1.06 0l.47.47.47-.47a.75.75 0 0 1 1.06 1.06l-.47.47.47.47a.75.75 0 1 1-1.06 1.06l-.47-.47-.47.47a.75.75 0 0 1-1.06-1.06l.47-.47-.47-.47a.75.75 0 0 1 0-1.06"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="m10.67 5.13-.5-.35A4.2 4.2 0 0 0 7.71 4H7.1q-.6-.02-1.2.16C3.54 5.01 1.9 8.1 2 15.1c.03 1.41.36 2.97 1.63 3.58q.6.31 1.4.32c.63 0 1.14-.18 1.53-.44s.77-.61 1.13-.96c.44-.43.89-.86 1.42-1.14a4 4 0 0 1 1.9-.46H13q1 0 1.89.46c.53.28.98.7 1.42 1.14.36.35.72.7 1.13.96s.9.44 1.53.44q.8-.02 1.4-.32c1.27-.6 1.6-2.17 1.62-3.58.12-7-1.52-10.1-3.9-10.94A4 4 0 0 0 16.9 4h-.6a4.2 4.2 0 0 0-2.45.78l-.5.35a2.3 2.3 0 0 1-2.67 0M16.75 8a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m-9.25.25c.41 0 .75.34.75.75v.75H9a.75.75 0 0 1 0 1.5h-.75V12a.75.75 0 0 1-1.5 0v-.75H6a.75.75 0 0 1 0-1.5h.75V9c0-.41.34-.75.75-.75m11.5 2a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m-3.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m2.25.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconGamepadNoCharge;
