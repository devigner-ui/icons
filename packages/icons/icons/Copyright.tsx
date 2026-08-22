import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCopyright = forwardRef<SVGSVGElement, IconProps>(
  function IconCopyright(
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
              d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M14 15.67q-.8.32-1.71.33C9.92 16 8 14.2 8 12s1.92-4 4.29-4q.91 0 1.71.33"
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
              d="M2 12a10 10 0 1 0 20 0 10 10 0 0 0-20 0"
              fill="currentColor"
            />
            <path
              d="M12.29 8.75c-2 0-3.54 1.5-3.54 3.25s1.53 3.25 3.54 3.25q.77 0 1.43-.28a.75.75 0 0 1 .56 1.4q-.92.37-2 .38c-2.73 0-5.03-2.08-5.03-4.75s2.3-4.75 5.04-4.75q1.06 0 2 .39a.75.75 0 0 1-.57 1.39 4 4 0 0 0-1.43-.28"
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
              d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20m.29-13.25c-2 0-3.54 1.5-3.54 3.25s1.53 3.25 3.54 3.25q.77 0 1.43-.28a.75.75 0 0 1 .56 1.4q-.92.37-2 .38c-2.73 0-5.03-2.08-5.03-4.75s2.3-4.75 5.04-4.75q1.06 0 2 .39a.75.75 0 0 1-.57 1.39 4 4 0 0 0-1.43-.28"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCopyright;
