import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAlignRight = forwardRef<SVGSVGElement, IconProps>(
  function IconAlignRight(
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
              d="M21 2v20"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M17 7.5c0-.93 0-1.4-.2-1.75a1.5 1.5 0 0 0-.55-.55C15.9 5 15.43 5 14.5 5h-9c-.93 0-1.4 0-1.75.2a1.5 1.5 0 0 0-.55.55C3 6.1 3 6.57 3 7.5s0 1.4.2 1.75q.2.35.55.55c.35.2.82.2 1.75.2h9c.93 0 1.4 0 1.75-.2q.35-.2.55-.55c.2-.35.2-.82.2-1.75"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M17 16.5c0-.93 0-1.4-.2-1.75a1.5 1.5 0 0 0-.55-.55c-.35-.2-.82-.2-1.75-.2h-6c-.93 0-1.4 0-1.75.2a1.5 1.5 0 0 0-.55.55c-.2.35-.2.82-.2 1.75s0 1.4.2 1.75q.2.35.55.55c.35.2.82.2 1.75.2h6c.93 0 1.4 0 1.75-.2q.35-.2.55-.55c.2-.35.2-.82.2-1.75"
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
              d="M16.63 7.88c0-.94 0-1.4-.2-1.75a1.5 1.5 0 0 0-.55-.55c-.35-.2-.82-.2-1.76-.2h-9c-.93 0-1.4 0-1.74.2a1.5 1.5 0 0 0-.55.54c-.2.35-.2.82-.2 1.76 0 .93 0 1.4.2 1.75q.2.34.54.54c.35.2.82.2 1.76.2h9c.93 0 1.4 0 1.74-.2q.35-.2.55-.54c.2-.35.2-.82.2-1.76"
              fill="currentColor"
            />
            <path
              d="M16.63 16.88c0-.94 0-1.4-.2-1.75a1.5 1.5 0 0 0-.55-.55c-.35-.2-.82-.2-1.76-.2h-6c-.93 0-1.4 0-1.74.2a1.5 1.5 0 0 0-.55.54c-.2.35-.2.82-.2 1.76 0 .93 0 1.4.2 1.75q.2.34.54.54c.35.2.82.2 1.76.2h6c.93 0 1.4 0 1.74-.2q.35-.2.55-.55c.2-.34.2-.81.2-1.75"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.63 23.13a.75.75 0 0 1-.75-.75v-20a.75.75 0 0 1 1.5 0v20c0 .4-.34.75-.75.75"
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
              d="M20.63 1.63a.75.75 0 0 0-.75.75v20a.75.75 0 0 0 1.5 0v-20a.75.75 0 0 0-.75-.75"
              fill="currentColor"
            />
            <path
              d="M16.63 7.88c0-.94 0-1.4-.2-1.75a1.5 1.5 0 0 0-.55-.55c-.35-.2-.82-.2-1.76-.2h-9c-.93 0-1.4 0-1.74.2a1.5 1.5 0 0 0-.55.54c-.2.35-.2.82-.2 1.76 0 .93 0 1.4.2 1.75q.2.34.54.54c.35.2.82.2 1.76.2h9c.93 0 1.4 0 1.74-.2q.35-.2.55-.54c.2-.35.2-.82.2-1.76"
              fill="currentColor"
            />
            <path
              d="M16.63 16.88c0-.94 0-1.4-.2-1.75a1.5 1.5 0 0 0-.55-.55c-.35-.2-.82-.2-1.76-.2h-6c-.93 0-1.4 0-1.74.2a1.5 1.5 0 0 0-.55.54c-.2.35-.2.82-.2 1.76 0 .93 0 1.4.2 1.75q.2.34.54.54c.35.2.82.2 1.76.2h6c.93 0 1.4 0 1.74-.2q.35-.2.55-.55c.2-.34.2-.81.2-1.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconAlignRight;
