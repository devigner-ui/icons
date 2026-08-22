import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconDocumentCopy = forwardRef<SVGSVGElement, IconProps>(
  function IconDocumentCopy(
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
              d="M17.67 13.4v3c0 4-1.6 5.6-5.6 5.6h-3.8c-4 0-5.6-1.6-5.6-5.6v-3.8c0-4 1.6-5.6 5.6-5.6h3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.67 13.4h-3.2c-2.4 0-3.2-.8-3.2-3.2V7z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7.67 5a3 3 0 0 1 3-3h6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22.67 8v6.19A2.8 2.8 0 0 1 19.86 17"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22.67 8h-3c-2.25 0-3-.75-3-3V2z"
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
              opacity={duotone ? "0.4" : "1"}
              d="M16.17 13.15H14a3.23 3.23 0 0 1-3.23-3.23V7.75a.75.75 0 0 0-.75-.75H6.85c-2.31 0-4.18 1.5-4.18 4.18v6.64C2.67 20.5 4.54 22 6.85 22h5.89c2.31 0 4.18-1.5 4.18-4.18V13.9a.75.75 0 0 0-.75-.75"
              fill="currentColor"
            />
            <path
              d="M18.49 2H12.6c-2.26 0-4.09 1.44-4.17 4.01L8.6 6h5.89c2.31 0 4.18 1.5 4.18 4.18v6.65l-.01.16c2.23-.07 4.01-1.55 4.01-4.16V6.18C22.67 3.5 20.8 2 18.49 2"
              fill="currentColor"
            />
            <path
              d="M12.65 7.15c-.31-.31-.84-.1-.84.33v2.62c0 1.1.93 2 2.07 2l2.55.01c.43 0 .65-.5.35-.8z"
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
              d="M16.17 13.15H14a3.23 3.23 0 0 1-3.23-3.23V7.75a.75.75 0 0 0-.75-.75H6.85c-2.31 0-4.18 1.5-4.18 4.18v6.64C2.67 20.5 4.54 22 6.85 22h5.89c2.31 0 4.18-1.5 4.18-4.18V13.9a.75.75 0 0 0-.75-.75"
              fill="currentColor"
            />
            <path
              d="M18.49 2H12.6c-2.26 0-4.09 1.44-4.17 4.01L8.6 6h5.89c2.31 0 4.18 1.5 4.18 4.18v6.65l-.01.16c2.23-.07 4.01-1.55 4.01-4.16V6.18C22.67 3.5 20.8 2 18.49 2"
              fill="currentColor"
            />
            <path
              d="M12.65 7.15c-.31-.31-.84-.1-.84.33v2.62c0 1.1.93 2 2.07 2l2.55.01c.43 0 .65-.5.35-.8z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconDocumentCopy;
