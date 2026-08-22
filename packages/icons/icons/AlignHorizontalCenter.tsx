import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAlignHorizontalCenter = forwardRef<SVGSVGElement, IconProps>(
  function IconAlignHorizontalCenter(
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
              opacity={duotone ? "0.4" : "1"}
              d="M12 2v3m0 17v-3m0-5v-4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M5 7.5c0-.93 0-1.4.2-1.75q.2-.35.55-.55C6.1 5 6.57 5 7.5 5h9c.93 0 1.4 0 1.75.2q.35.2.55.55c.2.35.2.82.2 1.75s0 1.4-.2 1.75a1.5 1.5 0 0 1-.55.55c-.35.2-.82.2-1.75.2h-9c-.93 0-1.4 0-1.75-.2a1.5 1.5 0 0 1-.55-.55C5 8.9 5 8.43 5 7.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M7 16.5c0-.93 0-1.4.2-1.75q.2-.35.55-.55c.35-.2.82-.2 1.75-.2h5c.93 0 1.4 0 1.75.2q.35.2.55.55c.2.35.2.82.2 1.75s0 1.4-.2 1.75a1.5 1.5 0 0 1-.55.55c-.35.2-.82.2-1.75.2h-5c-.93 0-1.4 0-1.75-.2a1.5 1.5 0 0 1-.55-.55C7 17.9 7 17.43 7 16.5"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.5 14h-5c-.93 0-1.4 0-1.75.2a1.5 1.5 0 0 0-.55.55c-.2.35-.2.82-.2 1.75s0 1.4.2 1.75q.2.35.55.55c.35.2.82.2 1.75.2h5c.93 0 1.4 0 1.75-.2q.35-.2.55-.55c.2-.35.2-.82.2-1.75s0-1.4-.2-1.75a1.5 1.5 0 0 0-.55-.55c-.35-.2-.82-.2-1.75-.2"
              fill="currentColor"
            />
            <path
              d="M19 7.5c0-.93 0-1.4-.2-1.75a1.5 1.5 0 0 0-.55-.55C17.9 5 17.43 5 16.5 5h-9c-.93 0-1.4 0-1.75.2a1.5 1.5 0 0 0-.55.55C5 6.1 5 6.57 5 7.5s0 1.4.2 1.75q.2.35.55.55c.35.2.82.2 1.75.2h9c.93 0 1.4 0 1.75-.2q.35-.2.55-.55c.2-.35.2-.82.2-1.75"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path d="M12.75 5V2a.75.75 0 0 0-1.5 0v3z" fill="currentColor" />
              <path d="M11.25 10v4h1.5v-4z" fill="currentColor" />
              <path
                d="M11.25 19v3a.75.75 0 0 0 1.5 0v-3z"
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
              d="M19 7.5c0-.93 0-1.4-.2-1.75a1.5 1.5 0 0 0-.55-.55C17.9 5 17.43 5 16.5 5h-3.75V2a.75.75 0 0 0-1.5 0v3H7.5c-.93 0-1.4 0-1.75.2a1.5 1.5 0 0 0-.55.55C5 6.1 5 6.57 5 7.5s0 1.4.2 1.75q.2.35.55.55c.35.2.82.2 1.75.2h3.75v4H9.5c-.93 0-1.4 0-1.75.2a1.5 1.5 0 0 0-.55.55c-.2.35-.2.82-.2 1.75s0 1.4.2 1.75q.2.35.55.55c.35.2.82.2 1.75.2h1.75v3a.75.75 0 0 0 1.5 0v-3h1.75c.93 0 1.4 0 1.75-.2q.35-.2.55-.55c.2-.35.2-.82.2-1.75s0-1.4-.2-1.75a1.5 1.5 0 0 0-.55-.55c-.35-.2-.82-.2-1.75-.2h-1.75v-4h3.75c.93 0 1.4 0 1.75-.2q.35-.2.55-.55c.2-.35.2-.82.2-1.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconAlignHorizontalCenter;
