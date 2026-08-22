import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAlignBottom = forwardRef<SVGSVGElement, IconProps>(
  function IconAlignBottom(
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
              d="M2 21h20"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M7.5 17c-.93 0-1.4 0-1.75-.2a1.5 1.5 0 0 1-.55-.55C5 15.9 5 15.43 5 14.5v-9c0-.93 0-1.4.2-1.75q.2-.35.55-.55C6.1 3 6.57 3 7.5 3s1.4 0 1.75.2q.35.2.55.55c.2.35.2.82.2 1.75v9c0 .93 0 1.4-.2 1.75a1.5 1.5 0 0 1-.55.55c-.35.2-.82.2-1.75.2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M16.5 17c-.93 0-1.4 0-1.75-.2a1.5 1.5 0 0 1-.55-.55c-.2-.35-.2-.82-.2-1.75v-6c0-.93 0-1.4.2-1.75q.2-.35.55-.55c.35-.2.82-.2 1.75-.2s1.4 0 1.75.2q.35.2.55.55c.2.35.2.82.2 1.75v6c0 .93 0 1.4-.2 1.75a1.5 1.5 0 0 1-.55.55c-.35.2-.82.2-1.75.2"
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
              d="M7.5 17c-.93 0-1.4 0-1.75-.2a1.5 1.5 0 0 1-.55-.55C5 15.9 5 15.43 5 14.5v-9c0-.93 0-1.4.2-1.75q.2-.35.55-.55C6.1 3 6.57 3 7.5 3s1.4 0 1.75.2q.35.2.55.55c.2.35.2.82.2 1.75v9c0 .93 0 1.4-.2 1.75a1.5 1.5 0 0 1-.55.55c-.35.2-.82.2-1.75.2"
              fill="currentColor"
            />
            <path
              d="M16.5 17c-.93 0-1.4 0-1.75-.2a1.5 1.5 0 0 1-.55-.55c-.2-.35-.2-.82-.2-1.75v-6c0-.93 0-1.4.2-1.75q.2-.35.55-.55c.35-.2.82-.2 1.75-.2s1.4 0 1.75.2q.35.2.55.55c.2.35.2.82.2 1.75v6c0 .93 0 1.4-.2 1.75a1.5 1.5 0 0 1-.55.55c-.35.2-.82.2-1.75.2"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.25 21c0-.41.34-.75.75-.75h20a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75"
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
              d="M1.25 21c0-.41.34-.75.75-.75h20a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
            <path
              d="M7.5 17c-.93 0-1.4 0-1.75-.2a1.5 1.5 0 0 1-.55-.55C5 15.9 5 15.43 5 14.5v-9c0-.93 0-1.4.2-1.75q.2-.35.55-.55C6.1 3 6.57 3 7.5 3s1.4 0 1.75.2q.35.2.55.55c.2.35.2.82.2 1.75v9c0 .93 0 1.4-.2 1.75a1.5 1.5 0 0 1-.55.55c-.35.2-.82.2-1.75.2"
              fill="currentColor"
            />
            <path
              d="M16.5 17c-.93 0-1.4 0-1.75-.2a1.5 1.5 0 0 1-.55-.55c-.2-.35-.2-.82-.2-1.75v-6c0-.93 0-1.4.2-1.75q.2-.35.55-.55c.35-.2.82-.2 1.75-.2s1.4 0 1.75.2q.35.2.55.55c.2.35.2.82.2 1.75v6c0 .93 0 1.4-.2 1.75a1.5 1.5 0 0 1-.55.55c-.35.2-.82.2-1.75.2"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconAlignBottom;
