import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMirrorRight = forwardRef<SVGSVGElement, IconProps>(
  function IconMirrorRight(
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
              d="M12 21h1c3.77 0 5.66 0 6.83-1.17S21 16.77 21 13v-2c0-3.77 0-5.66-1.17-6.83S16.77 3 13 3h-1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M13 21H9c-2.83 0-4.24 0-5.12-.88S3 17.82 3 15V9c0-2.83 0-4.24.88-5.12S6.18 3 9 3h4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeDasharray="2.5 3"
            />
            <path
              d="M12 22V2"
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
              d="M22 12.75v-2c0-3.77 0-5.66-1.17-6.83-1.1-1.1-3.68-1.16-7.08-1.17a.75.75 0 0 0-1.5 0v18a.75.75 0 0 0 1.5 0c3.4 0 5.99-.08 7.08-1.17C22 18.4 22 16.52 22 12.75"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.66 2.75c0 .41-.34.75-.75.75H8.8A.75.75 0 0 1 8.78 2h2.12c.42 0 .76.34.76.75m0 18c0 .41-.34.75-.75.75H8.78A.75.75 0 0 1 8.8 20h2.1c.42 0 .76.34.76.75M6.63 2.8c.12.4-.1.82-.5.94q-.47.15-.72.42-.27.25-.42.73a.75.75 0 0 1-1.43-.45q.22-.77.79-1.34.57-.56 1.34-.79c.4-.12.82.1.94.5m0 17.9a.75.75 0 0 1-.94.49q-.78-.22-1.34-.79a3 3 0 0 1-.79-1.34.75.75 0 1 1 1.43-.45q.15.48.42.73.25.27.73.42c.4.12.61.54.49.94M4 6.8c.41 0 .75.33.74.75v2.56a.75.75 0 0 1-1.5 0V7.53c0-.41.35-.74.76-.74m0 9.9a.75.75 0 0 1-.76-.73v-2.58a.75.75 0 0 1 1.5 0v2.56c0 .42-.33.76-.74.76"
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
              d="M11.66 2.75c0 .41-.34.75-.75.75H8.8A.75.75 0 0 1 8.78 2h2.12c.42 0 .76.34.76.75m0 18c0 .41-.34.75-.75.75H8.78A.75.75 0 0 1 8.8 20h2.1c.42 0 .76.34.76.75M6.63 2.8c.12.4-.1.82-.5.94q-.47.15-.72.42-.27.25-.42.73a.75.75 0 0 1-1.43-.45q.22-.77.79-1.34.57-.56 1.34-.79c.4-.12.82.1.94.5m0 17.9a.75.75 0 0 1-.94.49q-.78-.22-1.34-.79a3 3 0 0 1-.79-1.34.75.75 0 1 1 1.43-.45q.15.48.42.73.25.27.73.42c.4.12.61.54.49.94M4 6.8c.41 0 .75.33.74.75v2.56a.75.75 0 0 1-1.5 0V7.53c0-.41.35-.74.76-.74m0 9.9a.75.75 0 0 1-.76-.73v-2.58a.75.75 0 0 1 1.5 0v2.56c0 .42-.33.76-.74.76"
              fill="currentColor"
            />
            <path
              d="M22 12.75v-2c0-3.77 0-5.66-1.17-6.83-1.1-1.1-3.68-1.16-7.08-1.17a.75.75 0 0 0-1.5 0v18a.75.75 0 0 0 1.5 0c3.4 0 5.99-.08 7.08-1.17C22 18.4 22 16.52 22 12.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMirrorRight;
