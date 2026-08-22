import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconChartLineDown = forwardRef<SVGSVGElement, IconProps>(
  function IconChartLineDown(
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
              d="M22 22H12c-4.71 0-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12V2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m19 15-3.12-3.93c-.48-.6-.71-.9-.99-1.05a1.5 1.5 0 0 0-1.35-.02c-.28.13-.54.42-1.04 1s-.75.87-1.04 1c-.43.21-.93.2-1.35-.02a4 4 0 0 1-1-1.05L6 7"
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
              d="M2.75 2a.75.75 0 0 0-1.5 0v10.06c0 2.3 0 4.11.19 5.53a5.7 5.7 0 0 0 1.5 3.48c.89.9 2.03 1.3 3.47 1.49 1.42.19 3.22.19 5.53.19H22a.75.75 0 0 0 0-1.5H12c-2.38 0-4.09 0-5.39-.18-1.27-.17-2.05-.5-2.62-1.06-.56-.57-.9-1.35-1.06-2.62-.18-1.3-.18-3.01-.18-5.39z"
              fill="currentColor"
            />
            <path
              d="M6.59 6.53a.75.75 0 1 0-1.18.94l3.14 3.94q.32.44.59.72.25.3.62.5c.63.34 1.38.36 2.03.05q.36-.2.64-.48l.62-.69.02-.02q.37-.44.56-.63c.14-.14.2-.17.23-.19q.35-.15.68.02.04 0 .22.2t.53.65l3.12 3.93a.75.75 0 1 0 1.18-.94l-3.14-3.94q-.33-.43-.58-.72-.27-.3-.62-.5a2.3 2.3 0 0 0-2.04-.05q-.37.2-.64.48l-.62.69-.02.02q-.36.44-.56.63a1 1 0 0 1-.23.19c-.21.1-.47.1-.68-.02a1 1 0 0 1-.22-.2q-.18-.2-.53-.65z"
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
              d="M2.75 2a.75.75 0 0 0-1.5 0v10.06c0 2.3 0 4.11.19 5.53a5.7 5.7 0 0 0 1.5 3.48c.89.9 2.03 1.3 3.47 1.49 1.42.19 3.22.19 5.53.19H22a.75.75 0 0 0 0-1.5H12c-2.38 0-4.09 0-5.39-.18-1.27-.17-2.05-.5-2.62-1.06-.56-.57-.9-1.35-1.06-2.62-.18-1.3-.18-3.01-.18-5.39z"
              fill="currentColor"
            />
            <path
              d="M6.59 6.53a.75.75 0 0 0-1.18.94l3.14 3.94q.32.44.59.72.25.3.62.5c.63.34 1.38.36 2.03.05q.36-.2.64-.48.27-.28.62-.69l.02-.02q.37-.44.56-.63c.14-.14.2-.17.23-.19q.35-.15.68.02.04 0 .22.2t.53.65l3.12 3.93a.75.75 0 0 0 1.18-.94l-3.14-3.94q-.33-.43-.58-.72-.27-.3-.62-.5a2.3 2.3 0 0 0-2.04-.05q-.37.2-.64.48l-.62.69-.02.02q-.36.44-.56.63a1 1 0 0 1-.23.19c-.21.1-.47.1-.68-.02a1 1 0 0 1-.22-.2q-.18-.2-.53-.65z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconChartLineDown;
