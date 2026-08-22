import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconWashingMachineMinimalistic = forwardRef<SVGSVGElement, IconProps>(
  function IconWashingMachineMinimalistic(
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
              d="M3 10c0-3.77 0-5.66 1.17-6.83S7.23 2 11 2h2c3.77 0 5.66 0 6.83 1.17S21 6.23 21 10v4c0 3.77 0 5.66-1.17 6.83S16.77 22 13 22h-2c-3.77 0-5.66 0-6.83-1.17S3 17.77 3 14z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M17 14a5 5 0 1 1-10 0 5 5 0 0 1 10 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M8 6h8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M7.23 14.36c.86.43 1.84 1.16 3.5 1.46 2.36.43 2.12-1.65 4.48-1.22.72.13 1.2.35 1.55.58"
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
              d="M3 10c0-3.77 0-5.66 1.17-6.83S7.23 2 11 2h2c3.77 0 5.66 0 6.83 1.17S21 6.23 21 10v4c0 3.77 0 5.66-1.17 6.83S16.77 22 13 22h-2c-3.77 0-5.66 0-6.83-1.17S3 17.77 3 14z"
              fill="currentColor"
            />
            <path
              d="M7.25 6c0-.41.34-.75.75-.75h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 6"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.71 14.65q.04-.32.04-.65a5.75 5.75 0 1 0-.1 1.11l.08-.45zm-9.6-.86-.34-.22a4.25 4.25 0 0 1 8.48.43l-.4-.06h-.02l-.48-.08a3.3 3.3 0 0 0-1.76.1c-.46.17-.8.44-1.06.64l-.02.02c-.28.2-.46.34-.68.42-.2.08-.5.13-.97.04a6 6 0 0 1-1.92-.77q-.37-.22-.7-.44z"
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
              d="m8.12 14.2-.35.23a4.25 4.25 0 0 0 8.48-.43l-.4.06h-.02l-.48.08q-1.04.18-1.76-.1a4 4 0 0 1-1.06-.64l-.02-.02a3 3 0 0 0-.68-.42 2 2 0 0 0-.97-.04 6 6 0 0 0-1.92.77l-.7.44z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 10c0-3.77 0-5.66 1.17-6.83S7.23 2 11 2h2c3.77 0 5.66 0 6.83 1.17S21 6.23 21 10v4c0 3.77 0 5.66-1.17 6.83S16.77 22 13 22h-2c-3.77 0-5.66 0-6.83-1.17S3 17.77 3 14zm14.75 4q0-.33-.04-.65l.02-.01-.09-.45a5.75 5.75 0 1 0 .11 1.11M8 5.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconWashingMachineMinimalistic;
