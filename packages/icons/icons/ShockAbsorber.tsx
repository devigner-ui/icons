import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconShockAbsorber = forwardRef<SVGSVGElement, IconProps>(
  function IconShockAbsorber(
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
              d="M14 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M6 4c0-.94 0-1.41.3-1.7C6.58 2 7.05 2 8 2h8c.94 0 1.41 0 1.7.3.3.29.3.76.3 1.7s0 1.41-.3 1.7c-.29.3-.76.3-1.7.3H8c-.94 0-1.41 0-1.7-.3C6 5.42 6 4.95 6 4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M8.5 16.5c0-.83.67-1.5 1.5-1.5h4a1.5 1.5 0 0 1 0 3h-4a1.5 1.5 0 0 1-1.5-1.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M14 15.5v-10"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10 15.5V6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="m8 8 8 2m-8 1.5 8 2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M20 11.5h2m-18 0H2m17.07 2.8.7.7m-14.84-.7-.7.7m14.84-6.3.7-.7m-14.84.7-.7-.7"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14 20a2 2 0 1 1-3.32-1.5h-.43a1.75 1.75 0 0 1-1-3.19V6H8c-.94 0-1.41 0-1.7-.3C6 5.42 6 4.95 6 4s0-1.41.3-1.7C6.58 2 7.05 2 8 2h8c.94 0 1.41 0 1.7.3.3.29.3.76.3 1.7s0 1.41-.3 1.7c-.29.3-.76.3-1.7.3h-1.25v9.31a1.75 1.75 0 0 1-1 3.19h-.43A2 2 0 0 1 14 20m-.75-14h-2.5v9h2.5z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.27 7.82c.1-.4.51-.65.91-.55l8 2a.75.75 0 0 1-.36 1.46l-8-2a.75.75 0 0 1-.55-.91m0 3.5c.1-.4.51-.65.91-.55l8 2a.75.75 0 0 1-.36 1.46l-8-2a.75.75 0 0 1-.55-.91"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.31 7.47c.3.3.29.77 0 1.06l-.71.7a.75.75 0 1 1-1.06-1.06l.71-.7c.3-.3.77-.3 1.06 0m-16.62 0c.29-.3.76-.3 1.06 0l.7.7A.75.75 0 1 1 4.4 9.23l-.7-.7a.75.75 0 0 1-.01-1.06M22 12.25h-2a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 0 1.5M1.25 11.5c0-.41.34-.75.75-.75h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m4.21 2.27c.3.3.3.77 0 1.06l-.71.7a.75.75 0 1 1-1.06-1.06l.71-.7c.3-.3.77-.3 1.06 0m13.08 0c.29-.3.76-.3 1.06 0l.7.7a.75.75 0 1 1-1.05 1.06l-.7-.7a.75.75 0 0 1-.01-1.06"
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
              d="M14 20a2 2 0 1 1-3.32-1.5h-.43a1.75 1.75 0 0 1-1-3.19V6H8c-.94 0-1.41 0-1.7-.3C6 5.42 6 4.95 6 4s0-1.41.3-1.7C6.58 2 7.05 2 8 2h8c.94 0 1.41 0 1.7.3.3.29.3.76.3 1.7s0 1.41-.3 1.7c-.29.3-.76.3-1.7.3h-1.25v9.31a1.75 1.75 0 0 1-1 3.19h-.43A2 2 0 0 1 14 20m-.75-14h-2.5v9h2.5z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.27 7.82c.1-.4.51-.65.91-.55l8 2a.75.75 0 0 1-.36 1.46l-8-2a.75.75 0 0 1-.55-.91m0 3.5c.1-.4.51-.65.91-.55l8 2a.75.75 0 0 1-.36 1.46l-8-2a.75.75 0 0 1-.55-.91"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.31 7.47c.3.3.29.77 0 1.06l-.71.7a.75.75 0 1 1-1.06-1.06l.71-.7c.3-.3.77-.3 1.06 0m-16.62 0c.29-.3.76-.3 1.06 0l.7.7A.75.75 0 1 1 4.4 9.23l-.7-.7a.75.75 0 0 1-.01-1.06M22 12.25h-2a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 0 1.5M1.25 11.5c0-.41.34-.75.75-.75h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m4.21 2.27c.3.3.3.77 0 1.06l-.71.7a.75.75 0 1 1-1.06-1.06l.71-.7c.3-.3.77-.3 1.06 0m13.08 0c.29-.3.76-.3 1.06 0l.7.7a.75.75 0 1 1-1.05 1.06l-.7-.7a.75.75 0 0 1-.01-1.06"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconShockAbsorber;
