import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHashtagCircle = forwardRef<SVGSVGElement, IconProps>(
  function IconHashtagCircle(
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
              d="M11 7 8 17"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m16 7-3 10"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18 10H7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17 14H6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0"
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
              opacity={duotone ? "0.4" : "1"}
              d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.72 7.22a.75.75 0 0 0-1.44-.44l-.74 2.47H7a.75.75 0 1 0 0 1.5h2.1l-.76 2.5H6a.75.75 0 0 0 0 1.5h1.9l-.62 2.03a.75.75 0 0 0 1.44.44l.74-2.47h3.43l-.6 2.03a.75.75 0 0 0 1.43.44l.74-2.47H17a.75.75 0 1 0 0-1.5h-2.1l.76-2.5H18a.75.75 0 1 0 0-1.5h-1.9l.62-2.03a.75.75 0 0 0-1.44-.44l-.74 2.47h-3.43zm2.37 3.53-.75 2.5H9.91l.75-2.5z"
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
            <path d="m14.1 10.75-.76 2.5H9.91l.75-2.5z" fill="currentColor" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m-.78 4.28c.4.12.62.54.5.94l-.61 2.03h3.43l.74-2.47a.75.75 0 0 1 1.44.44l-.61 2.03H18a.75.75 0 0 1 0 1.5h-2.34l-.75 2.5H17a.75.75 0 0 1 0 1.5h-2.54l-.74 2.47a.75.75 0 0 1-1.44-.44l.61-2.03H9.46l-.74 2.47a.75.75 0 0 1-1.44-.44l.61-2.03H6a.75.75 0 0 1 0-1.5h2.34l.75-2.5H7a.75.75 0 0 1 0-1.5h2.54l.74-2.47c.12-.4.54-.62.94-.5"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconHashtagCircle;
