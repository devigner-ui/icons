import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTextCross = forwardRef<SVGSVGElement, IconProps>(
  function IconTextCross(
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
              d="M12 3H8c-1.89 0-2.83 0-3.41.59C4 4.17 4 5.1 4 7v.95M12 3h4c1.89 0 2.83 0 3.41.59C20 4.17 20 5.1 20 7v.95M12 3v18m-5 0h10"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 12h16"
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
              d="M16.07 2c.88 0 1.65 0 2.26.08.65.1 1.28.29 1.8.8.5.5.7 1.14.79 1.8q.1.92.08 2.25v1.02a1 1 0 1 1-2 0V7c0-.97 0-1.6-.06-2.06-.06-.43-.16-.57-.23-.65-.08-.07-.21-.17-.65-.23C17.6 4 16.97 4 16 4h-3v16h4a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2h4V4H8c-.97 0-1.6 0-2.06.06-.44.06-.57.16-.65.23-.07.08-.17.22-.23.65C5 5.4 5 6.03 5 7v.95a1 1 0 1 1-2 0V6.93c0-.88 0-1.65.08-2.26.09-.65.29-1.28.8-1.8.5-.5 1.14-.7 1.8-.79C6.27 2 7.04 2 7.92 2z"
              fill="currentColor"
            />
            <path
              d="M4 11a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2z"
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
              d="M7.93 2h8.14c.88 0 1.65 0 2.26.08.65.1 1.28.29 1.8.8.5.5.7 1.14.79 1.8q.1.92.08 2.25v1.02a1 1 0 1 1-2 0V7c0-.97 0-1.6-.06-2.06-.06-.43-.16-.57-.23-.65-.08-.07-.21-.17-.65-.23C17.6 4 16.97 4 16 4h-3v5a1 1 0 1 1-2 0V4H8c-.97 0-1.6 0-2.06.06-.44.06-.57.16-.65.23-.07.08-.17.22-.23.65C5 5.4 5 6.03 5 7v.95a1 1 0 1 1-2 0V6.93c0-.88 0-1.65.08-2.26.09-.65.29-1.28.8-1.8.5-.5 1.14-.7 1.8-.79C6.27 2 7.04 2 7.92 2"
              fill="currentColor"
            />
            <path
              d="M12 14a1 1 0 0 1 1 1v5h4a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2h4v-5a1 1 0 0 1 1-1"
              fill="currentColor"
            />
            <path
              d="M4 11a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconTextCross;
