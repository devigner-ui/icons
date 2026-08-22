import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconConfoundedCircle = forwardRef<SVGSVGElement, IconProps>(
  function IconConfoundedCircle(
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
            <circle
              opacity={duotone ? "0.4" : "1"}
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="m8 12 2-1.5L8 9"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m16 12-2-1.5L16 9"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m15 16-1-1-1 1-1-1-1 1-1-1-1 1"
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
              d="M7.55 9.6a.75.75 0 0 1 .9-1.2l2 1.5a.75.75 0 0 1 0 1.2l-2 1.5a.75.75 0 1 1-.9-1.2l1.2-.9z"
              fill="currentColor"
            />
            <path
              d="M16.6 8.55c.25.33.18.8-.15 1.05l-1.2.9 1.2.9a.75.75 0 1 1-.9 1.2l-2-1.5a.75.75 0 0 1 0-1.2l2-1.5a.75.75 0 0 1 1.05.15"
              fill="currentColor"
            />
            <path
              d="M15.53 16.53c-.3.3-.77.3-1.06 0l-.47-.47c-.56.53-1.44.53-2 0-.56.53-1.44.53-2 0l-.47.47a.75.75 0 1 1-1.06-1.06l.5-.5a1.46 1.46 0 0 1 2.03-.03 1.46 1.46 0 0 1 2 0 1.46 1.46 0 0 1 2.03.03l.5.5c.3.3.3.77 0 1.06"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
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
              d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20M7.55 9.6a.75.75 0 0 1 .9-1.2l2 1.5a.75.75 0 0 1 0 1.2l-2 1.5a.75.75 0 1 1-.9-1.2l1.2-.9zm9.05-1.05c.25.33.18.8-.15 1.05l-1.2.9 1.2.9a.75.75 0 1 1-.9 1.2l-2-1.5a.75.75 0 0 1 0-1.2l2-1.5a.75.75 0 0 1 1.05.15m-1.07 7.98c-.3.3-.77.3-1.06 0l-.47-.47c-.56.53-1.44.53-2 0-.56.53-1.44.53-2 0l-.47.47a.75.75 0 1 1-1.06-1.06l.5-.5a1.46 1.46 0 0 1 2.03-.03 1.46 1.46 0 0 1 2 0 1.46 1.46 0 0 1 2.03.03l.5.5c.3.3.3.77 0 1.06"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconConfoundedCircle;
