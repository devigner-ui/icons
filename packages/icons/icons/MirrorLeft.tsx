import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMirrorLeft = forwardRef<SVGSVGElement, IconProps>(
  function IconMirrorLeft(
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
              d="M12 3h-1C7.23 3 5.34 3 4.17 4.17S3 7.23 3 11v2c0 3.77 0 5.66 1.17 6.83S7.23 21 11 21h1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M11 3h4c2.83 0 4.24 0 5.12.88S21 6.18 21 9v6c0 2.83 0 4.24-.88 5.12S17.82 21 15 21h-4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeDasharray="2.5 3"
            />
            <path
              d="M12 2v20"
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
              d="M3.25 12.75v-2c0-3.77 0-5.66 1.17-6.83 1.1-1.1 3.68-1.16 7.08-1.17a.75.75 0 0 1 1.5 0v18a.75.75 0 0 1-1.5 0c-3.4 0-5.99-.08-7.08-1.17-1.17-1.17-1.17-3.06-1.17-6.83"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.6 2.75c0 .41.33.75.74.75h2.11a.75.75 0 0 0 .02-1.5h-2.12a.75.75 0 0 0-.76.75m0 18c0 .41.33.75.74.75h2.13a.75.75 0 0 0-.02-1.5h-2.1a.75.75 0 0 0-.76.75M18.61 2.8c-.12.4.1.82.5.94q.46.15.72.42.27.25.42.73a.75.75 0 0 0 1.43-.45q-.22-.77-.79-1.34a3 3 0 0 0-1.34-.79.75.75 0 0 0-.94.5m0 17.9c.12.4.54.61.94.49q.78-.22 1.34-.79.56-.56.79-1.34a.75.75 0 1 0-1.43-.45q-.15.48-.42.73-.25.27-.73.42a.75.75 0 0 0-.49.94m2.62-13.9a.75.75 0 0 0-.74.75v2.56a.75.75 0 0 0 1.5 0V7.53a.75.75 0 0 0-.76-.74m0 9.9c.41.01.75-.32.76-.73v-2.58a.75.75 0 0 0-1.5 0v2.56c0 .42.33.76.74.76"
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
              d="M13.34 20.75c0-.41.34-.75.75-.75h2.11a.75.75 0 0 1 .02 1.5H14.1a.75.75 0 0 1-.76-.75m0-18c0-.41.34-.75.75-.75h2.13a.75.75 0 1 1-.02 1.5h-2.1a.75.75 0 0 1-.76-.75m5.03 17.95c-.12-.4.1-.82.5-.94q.46-.15.72-.42.27-.25.42-.73a.75.75 0 0 1 1.43.45q-.22.78-.79 1.34-.56.56-1.34.79a.75.75 0 0 1-.94-.5m0-17.9c.12-.4.54-.61.94-.49q.78.22 1.34.79.56.56.79 1.34a.75.75 0 1 1-1.43.45q-.15-.48-.42-.73-.25-.27-.73-.42a.75.75 0 0 1-.49-.94M21 16.7a.75.75 0 0 1-.74-.75V13.4a.75.75 0 0 1 1.5 0v2.58c0 .41-.35.74-.76.74m0-9.9c.41-.01.75.32.76.73v2.58a.75.75 0 1 1-1.5 0V7.55c0-.42.33-.76.74-.76"
              fill="currentColor"
            />
            <path
              d="M3 10.75v2c0 3.77 0 5.66 1.17 6.83 1.1 1.1 3.68 1.17 7.08 1.17a.75.75 0 0 0 1.5 0v-18a.75.75 0 0 0-1.5 0c-3.4 0-5.99.08-7.08 1.17C3 5.1 3 6.98 3 10.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMirrorLeft;
