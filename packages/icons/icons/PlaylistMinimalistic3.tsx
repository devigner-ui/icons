import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPlaylistMinimalistic3 = forwardRef<SVGSVGElement, IconProps>(
  function IconPlaylistMinimalistic3(
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
              d="M20 4H3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8 14H3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 9H3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M16 17.43A2.54 2.54 0 0 1 13.5 20a2.54 2.54 0 0 1-2.5-2.57 2.54 2.54 0 0 1 2.5-2.57c1.38 0 2.5 1.15 2.5 2.57m0 0V11"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="m18.68 8.12-1.76.84c-.34.16-.51.24-.64.37a1 1 0 0 0-.22.36c-.06.16-.06.35-.06.73 0 .88 0 1.32.2 1.58a1 1 0 0 0 .62.4c.32.05.71-.14 1.5-.52l1.76-.84c.34-.16.51-.24.64-.37a1 1 0 0 0 .22-.36c.06-.16.06-.35.06-.73 0-.88 0-1.32-.2-1.58a1 1 0 0 0-.62-.4c-.32-.05-.71.14-1.5.52"
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
              d="M2.25 4c0-.41.34-.75.75-.75h17a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 4m0 5c0-.41.34-.75.75-.75h9a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 9m0 5c0-.41.34-.75.75-.75h5a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
            <path
              d="M19.34 7c.28-.1.62-.2.97-.13q.7.13 1.1.7c.22.29.28.62.31.92q.04.44.03 1.05v.11c0 .3 0 .63-.1.92q-.14.36-.4.62c-.22.23-.5.37-.78.5l-.07.03-1.78.86q-.56.27-.96.43c-.27.1-.58.18-.91.13v4.29a3.3 3.3 0 0 1-3.25 3.32 3.3 3.3 0 0 1-3.25-3.32 3.3 3.3 0 0 1 3.25-3.32q.99.01 1.75.52v-4.28c0-.3 0-.62.1-.92q.14-.35.4-.62c.22-.23.5-.37.78-.5l.07-.03 1.78-.85q.56-.28.96-.44"
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
              d="M2.25 4c0-.41.34-.75.75-.75h17a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 4m0 5c0-.41.34-.75.75-.75h9a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 9m0 5c0-.41.34-.75.75-.75h5a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
            <path
              d="M19.34 7c.28-.11.62-.2.97-.13q.7.13 1.1.7c.22.29.28.62.31.92q.04.44.03 1.05v.11c0 .3 0 .63-.1.92q-.14.36-.4.62c-.22.23-.5.37-.78.5l-.07.03-1.78.86q-.56.27-.96.43c-.27.1-.58.18-.91.13v4.29a3.3 3.3 0 0 1-3.25 3.32 3.3 3.3 0 0 1-3.25-3.32 3.3 3.3 0 0 1 3.25-3.32q.99.01 1.75.52v-4.28c0-.3 0-.62.1-.92q.14-.36.4-.62c.22-.23.5-.37.78-.5l.07-.03 1.78-.85q.56-.28.96-.44"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconPlaylistMinimalistic3;
