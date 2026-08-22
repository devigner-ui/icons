import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCameraAdd = forwardRef<SVGSVGElement, IconProps>(
  function IconCameraAdd(
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
              d="M15 13H9"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M12 10v6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9.78 21h4.44c3.12 0 4.68 0 5.8-.74q.73-.47 1.23-1.2c.75-1.1.75-2.63.75-5.7 0-3.06 0-4.6-.75-5.7a4 4 0 0 0-1.23-1.2c-.72-.47-1.62-.64-3-.7a1.4 1.4 0 0 1-1.35-1.12A2.06 2.06 0 0 0 13.63 3h-3.26c-1 0-1.84.68-2.04 1.64a1.4 1.4 0 0 1-1.35 1.12c-1.38.06-2.28.23-3 .7q-.73.49-1.23 1.2C2 8.77 2 10.3 2 13.37s0 4.6.75 5.7q.49.73 1.23 1.2c1.12.74 2.68.74 5.8.74"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M19 10h-1"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.78 21h4.44c3.12 0 4.68 0 5.8-.74q.73-.47 1.23-1.2c.75-1.1.75-2.63.75-5.7 0-3.06 0-4.6-.75-5.7a4 4 0 0 0-1.23-1.2c-.72-.47-1.62-.64-3-.7a1.4 1.4 0 0 1-1.35-1.12A2.06 2.06 0 0 0 13.63 3h-3.26c-1 0-1.84.68-2.04 1.64a1.4 1.4 0 0 1-1.35 1.12c-1.38.06-2.28.23-3 .7q-.73.49-1.23 1.2C2 8.77 2 10.3 2 13.37s0 4.6.75 5.7q.49.73 1.23 1.2c1.12.74 2.68.74 5.8.74M16 13a4 4 0 1 1-8 0 4 4 0 0 1 8 0m2-3.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16 13a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-3.25-2a.75.75 0 0 0-1.5 0v1.25H10a.75.75 0 0 0 0 1.5h1.25V15a.75.75 0 0 0 1.5 0v-1.25H14a.75.75 0 0 0 0-1.5h-1.25z"
              fill="currentColor"
            />
            <path
              d="M18 9.25a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5z"
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
              d="M12 10.25c.41 0 .75.34.75.75v1.25H14a.75.75 0 0 1 0 1.5h-1.25V15a.75.75 0 0 1-1.5 0v-1.25H10a.75.75 0 0 1 0-1.5h1.25V11c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.78 21h4.44c3.12 0 4.68 0 5.8-.74q.73-.47 1.23-1.2c.75-1.1.75-2.63.75-5.7 0-3.06 0-4.6-.75-5.7a4 4 0 0 0-1.23-1.2c-.72-.47-1.62-.64-3-.7a1.4 1.4 0 0 1-1.35-1.12A2.06 2.06 0 0 0 13.63 3h-3.26c-1 0-1.84.68-2.04 1.64a1.4 1.4 0 0 1-1.35 1.12c-1.38.06-2.28.23-3 .7q-.73.49-1.23 1.2C2 8.77 2 10.3 2 13.37s0 4.6.75 5.7q.49.73 1.23 1.2c1.12.74 2.68.74 5.8.74M16 13a4 4 0 1 1-8 0 4 4 0 0 1 8 0m2-3.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCameraAdd;
