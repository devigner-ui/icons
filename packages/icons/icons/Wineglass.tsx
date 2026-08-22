import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconWineglass = forwardRef<SVGSVGElement, IconProps>(
  function IconWineglass(
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
              d="M15.75 21.75a.75.75 0 0 0 0-1.5zm-7.5-1.5a.75.75 0 1 0 0 1.5zm7.5 0H12v1.5h3.75zm-3.75 0H8.25v1.5H12zM6.9 3.75h10.2v-1.5H6.9zm11.35 1.14V8h1.5V4.9zM5.75 8V4.9h-1.5V8zM12 14.25A6.25 6.25 0 0 1 5.75 8h-1.5A7.75 7.75 0 0 0 12 15.75zM18.25 8c0 3.45-2.8 6.25-6.25 6.25v1.5A7.75 7.75 0 0 0 19.75 8zm-1.14-4.25c.63 0 1.14.51 1.14 1.14h1.5a2.64 2.64 0 0 0-2.64-2.64zM6.89 2.25a2.64 2.64 0 0 0-2.64 2.64h1.5c0-.63.51-1.14 1.14-1.14z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12.75 15.29a.75.75 0 0 0-1.5 0zM11.25 21a.75.75 0 0 0 1.5 0zm0-5.71V21h1.5v-5.71z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M5.5 9S7.58 8.09 9 8c2.47-.15 3.53 2.15 6 2 1.42-.09 3.5-1 3.5-1"
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
              d="M5 4.9C5 3.84 5.85 3 6.9 3h10.2c1.05 0 1.9.85 1.9 1.9V8A7 7 0 0 1 5 8z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.25 20.25h-3a.75.75 0 1 0 0 1.5h7.5a.75.75 0 0 0 0-1.5z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 15a7 7 0 0 0 6.92-5.97c-.4.16-2.33.89-3.69.96-1.33.08-2.28-.46-3.23-.99s-1.9-1.07-3.23-1a15 15 0 0 0-3.7.97A7 7 0 0 0 12 15"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12.75 14.96a7 7 0 0 1-1.5 0v5.29h1.5z"
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
              d="M5 4.9C5 3.84 5.85 3 6.9 3h10.2c1.05 0 1.9.85 1.9 1.9v3.35q-.16 0-.28.05l-.02.01-.33.13-.9.3c-.75.24-1.62.47-2.28.5-1.09.07-1.86-.35-2.82-.9l-.05-.02c-.93-.52-2.05-1.15-3.6-1.06-.86.05-1.87.32-2.63.56L5 8.2z"
              fill="currentColor"
            />
            <path
              d="M5.21 9.72a7 7 0 0 0 6.04 5.24v5.29H8a.75.75 0 1 0 0 1.5h8a.75.75 0 0 0 0-1.5h-3.25v-5.29a7 7 0 0 0 5.99-5.06q-.34.13-.83.28c-.76.24-1.77.51-2.64.56-1.54.09-2.66-.54-3.6-1.06l-.04-.03c-.96-.54-1.73-.96-2.82-.9-.66.04-1.53.27-2.27.5a21 21 0 0 0-1.24.44z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconWineglass;
