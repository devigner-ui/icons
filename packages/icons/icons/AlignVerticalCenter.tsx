import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAlignVerticalCenter = forwardRef<SVGSVGElement, IconProps>(
  function IconAlignVerticalCenter(
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
              d="M2 12h3m17 0h-3m-5 0h-4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M7.5 5c-.93 0-1.4 0-1.75.2a1.5 1.5 0 0 0-.55.55C5 6.1 5 6.57 5 7.5v9c0 .93 0 1.4.2 1.75q.2.35.55.55c.35.2.82.2 1.75.2s1.4 0 1.75-.2q.35-.2.55-.55c.2-.35.2-.82.2-1.75v-9c0-.93 0-1.4-.2-1.75a1.5 1.5 0 0 0-.55-.55C8.9 5 8.43 5 7.5 5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M16.5 7c-.93 0-1.4 0-1.75.2a1.5 1.5 0 0 0-.55.55c-.2.35-.2.82-.2 1.75v5c0 .93 0 1.4.2 1.75q.2.35.55.55c.35.2.82.2 1.75.2s1.4 0 1.75-.2q.35-.2.55-.55c.2-.35.2-.82.2-1.75v-5c0-.93 0-1.4-.2-1.75a1.5 1.5 0 0 0-.55-.55C17.9 7 17.43 7 16.5 7"
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
              d="M14 9.5v5c0 .93 0 1.4.2 1.75q.2.35.55.55c.35.2.82.2 1.75.2s1.4 0 1.75-.2q.35-.2.55-.55c.2-.35.2-.82.2-1.75v-5c0-.93 0-1.4-.2-1.75a1.5 1.5 0 0 0-.55-.55C17.9 7 17.43 7 16.5 7s-1.4 0-1.75.2a1.5 1.5 0 0 0-.55.55c-.2.35-.2.82-.2 1.75"
              fill="currentColor"
            />
            <path
              d="M7.5 5c-.93 0-1.4 0-1.75.2a1.5 1.5 0 0 0-.55.55C5 6.1 5 6.57 5 7.5v9c0 .93 0 1.4.2 1.75q.2.35.55.55c.35.2.82.2 1.75.2s1.4 0 1.75-.2q.35-.2.55-.55c.2-.35.2-.82.2-1.75v-9c0-.93 0-1.4-.2-1.75a1.5 1.5 0 0 0-.55-.55C8.9 5 8.43 5 7.5 5"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path d="M5 11.25H2a.75.75 0 0 0 0 1.5h3z" fill="currentColor" />
              <path d="M10 12.75h4v-1.5h-4z" fill="currentColor" />
              <path
                d="M19 12.75h3a.75.75 0 0 0 0-1.5h-3z"
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
              d="M7.5 5c-.93 0-1.4 0-1.75.2a1.5 1.5 0 0 0-.55.55C5 6.1 5 6.57 5 7.5v3.75H2a.75.75 0 0 0 0 1.5h3v3.75c0 .93 0 1.4.2 1.75q.2.35.55.55c.35.2.82.2 1.75.2s1.4 0 1.75-.2q.35-.2.55-.55c.2-.35.2-.82.2-1.75v-3.75h4v1.75c0 .93 0 1.4.2 1.75q.2.35.55.55c.35.2.82.2 1.75.2s1.4 0 1.75-.2q.35-.2.55-.55c.2-.35.2-.82.2-1.75v-1.75h3a.75.75 0 0 0 0-1.5h-3V9.5c0-.93 0-1.4-.2-1.75a1.5 1.5 0 0 0-.55-.55C17.9 7 17.43 7 16.5 7s-1.4 0-1.75.2a1.5 1.5 0 0 0-.55.55c-.2.35-.2.82-.2 1.75v1.75h-4V7.5c0-.93 0-1.4-.2-1.75a1.5 1.5 0 0 0-.55-.55C8.9 5 8.43 5 7.5 5"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconAlignVerticalCenter;
