import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMapArrowDown = forwardRef<SVGSVGElement, IconProps>(
  function IconMapArrowDown(
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
              d="M12 5.53q-.38 0-.73-.19L5.37 2.2c-1.4-.74-2.87.81-2.2 2.3l7.36 16.52c.3.66.88.99 1.47.99"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 5.53q.38 0 .73-.19l5.9-3.15c1.4-.74 2.87.81 2.2 2.3l-7.36 16.52c-.3.66-.88.99-1.47.99"
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
              d="M8.04 14.14a.5.5 0 0 1-.68-.24l-4.2-9.4c-.66-1.5.82-3.05 2.2-2.3l5.91 3.14c.46.25 1 .25 1.46 0l5.9-3.15c1.39-.74 2.87.81 2.2 2.3l-1.57 3.53a2 2 0 0 1-.93.98z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8.6 15.53a.5.5 0 0 0-.22.65l2.15 4.83a1.59 1.59 0 0 0 2.94 0l3.97-8.9a.5.5 0 0 0-.68-.65z"
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
              d="M3.16 4.5 10.53 21a1.59 1.59 0 0 0 2.94 0l7.37-16.5c.66-1.5-.82-3.05-2.2-2.3l-5.91 3.14c-.46.25-1 .25-1.46 0L5.37 2.2c-1.4-.74-2.87.81-2.2 2.3"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMapArrowDown;
