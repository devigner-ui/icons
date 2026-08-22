import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconLanguageCircle = forwardRef<SVGSVGElement, IconProps>(
  function IconLanguageCircle(
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
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M17.66 8.96H7.68"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.67 7.28v1.68"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.17 8.94c0 4.3-3.36 7.78-7.5 7.78"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.67 16.72c-1.8 0-3.4-.96-4.55-2.47"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              d="M12.67 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
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
              d="M12.67 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
              fill="currentColor"
            />
            <path
              d="M17.67 15.97a4.8 4.8 0 0 1-3.56-1.71 8.5 8.5 0 0 0 1.77-4.56h1.78c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75h-2.43l-.06-.01-.06.01h-1.69v-.93a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v.93H7.68a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h6.7a6.87 6.87 0 0 1-6.72 6.27.76.76 0 0 0-.75.75c0 .41.34.75.75.75 2.07 0 3.96-.8 5.41-2.11a6.3 6.3 0 0 0 4.6 2.11c.4 0 .74-.34.74-.75a.75.75 0 0 0-.74-.75"
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
              d="M12.67 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m5 15.47a6.2 6.2 0 0 1-4.59-2.11 8 8 0 0 1-5.4 2.11.76.76 0 0 1-.76-.75c0-.41.34-.75.75-.75a6.87 6.87 0 0 0 6.71-6.27h-6.7a.76.76 0 0 1-.75-.75c0-.41.34-.74.75-.74h4.24v-.93c0-.41.34-.75.75-.75s.75.34.75.75v.93h1.7l.05-.01.06.01h2.43c.41 0 .75.34.75.75s-.34.75-.75.75h-1.78a9 9 0 0 1-1.77 4.56 4.8 4.8 0 0 0 3.56 1.71c.41 0 .75.34.75.75s-.34.74-.75.74"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconLanguageCircle;
