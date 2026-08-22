import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHandPills = forwardRef<SVGSVGElement, IconProps>(
  function IconHandPills(
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
              d="M8.8 6.64a2.72 2.72 0 1 1 3.84-3.84l2.56 2.56a2.72 2.72 0 0 1-3.84 3.84z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M14 4s-.23 1.17-1.53 2.47S10 8 10 8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M4 21.39h2.26q1.53 0 3.02.3c1.74.36 3.57.4 5.33.12a9 9 0 0 0 4.61-2.06c.57-.53 1.17-1.4 1.6-2.08.35-.58.18-1.3-.4-1.73a1.9 1.9 0 0 0-2.22 0l-1.8 1.37a5.4 5.4 0 0 1-2.72 1.2m0 0-.11.02m.1-.01a1 1 0 0 0 .43-.24 1.5 1.5 0 0 0 .13-2.14 2 2 0 0 0-.45-.36c-2.8-1.67-7.15-.4-9.78 1.46m9.68 1.28h-.11m0 0q-.8.1-1.82.01"
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
              d="M6.26 21.39H6c-.94 0-1.41 0-1.7-.3-.3-.29-.3-.76-.3-1.7v-1.11c0-.52 0-.78.13-1.01.14-.23.34-.35.74-.58 2.64-1.54 6.4-2.41 8.9-.91q.27.15.46.36a1.5 1.5 0 0 1-.13 2.14 1 1 0 0 1-.42.24l.34-.05a5.4 5.4 0 0 0 2.38-1.16l1.8-1.37a1.9 1.9 0 0 1 2.22 0c.58.44.75 1.15.4 1.73-.43.68-1.03 1.55-1.6 2.08a9 9 0 0 1-4.61 2.06c-1.76.29-3.6.25-5.33-.11q-1.49-.3-3.02-.31"
              fill="currentColor"
            />
            <path
              d="M11.36 9.2a2.72 2.72 0 0 0 3.84-3.84l-.72-.72c-.3.6-.8 1.39-1.63 2.21a9 9 0 0 1-2.21 1.63z"
              fill="currentColor"
            />
            <path
              d="M12.64 2.8A2.72 2.72 0 0 0 8.8 6.64l1.08 1.09.25-.11c.52-.26 1.24-.7 2.02-1.47a8 8 0 0 0 1.58-2.27z"
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
              d="M6.26 21.39H6c-.94 0-1.41 0-1.7-.3-.3-.29-.3-.76-.3-1.7v-1.11c0-.52 0-.78.13-1.01.14-.23.34-.35.74-.58 2.64-1.54 6.4-2.41 8.9-.91q.27.15.46.36a1.5 1.5 0 0 1-.13 2.14 1 1 0 0 1-.42.24l.34-.05a5.4 5.4 0 0 0 2.38-1.16l1.8-1.37a1.9 1.9 0 0 1 2.22 0c.58.44.75 1.15.4 1.73-.43.68-1.03 1.55-1.6 2.08a9 9 0 0 1-4.61 2.06c-1.76.29-3.6.25-5.33-.11q-1.49-.3-3.02-.31"
              fill="currentColor"
            />
            <path
              d="M11.36 9.2a2.72 2.72 0 0 0 3.84-3.84l-.72-.72c-.3.6-.8 1.39-1.63 2.21a9 9 0 0 1-2.21 1.63z"
              fill="currentColor"
            />
            <path
              d="M12.64 2.8A2.72 2.72 0 0 0 8.8 6.64l1.08 1.09.25-.11c.52-.26 1.24-.7 2.02-1.47a8 8 0 0 0 1.58-2.27z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconHandPills;
