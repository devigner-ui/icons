import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRecordCircle2 = forwardRef<SVGSVGElement, IconProps>(
  function IconRecordCircle2(
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
              d="M18.5 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M10.5 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M8 14.5h8"
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
              d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.75 12q.02.97.51 1.75h-2.52q.5-.76.51-1.75A3.25 3.25 0 1 0 8 15.25h8A3.25 3.25 0 1 0 12.75 12m1.5 0a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0m-4.5 0a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0"
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
              d="M14.25 12a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0"
              fill="currentColor"
            />
            <path
              d="M8 13.75a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20m1.26-8.25q-.5-.76-.51-1.75A3.25 3.25 0 1 1 16 15.25H8a3.25 3.25 0 1 1 2.74-1.5z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconRecordCircle2;
