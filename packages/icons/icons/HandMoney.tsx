import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHandMoney = forwardRef<SVGSVGElement, IconProps>(
  function IconHandMoney(
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
              d="M17.41 10.41C18 9.83 18 8.9 18 7s0-2.83-.59-3.41m0 6.82C16.83 11 15.9 11 14 11h-4c-1.89 0-2.83 0-3.41-.59M17.4 3.6C16.83 3 15.9 3 14 3h-4c-1.89 0-2.83 0-3.41.59m0 0C6 4.17 6 5.1 6 7s0 2.83.59 3.41m0 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M13 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18 6a3 3 0 0 1-3-3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18 8a3 3 0 0 0-3 3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M6 6a3 3 0 0 0 3-3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M6 8a3 3 0 0 1 3 3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
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
              d="M6.59 2.59c-.37.36-.5.87-.56 1.66 1.22-.02 2.2-1 2.22-2.22-.8.05-1.3.19-1.66.56"
              fill="currentColor"
            />
            <path
              d="M17.41 2.59c-.36-.37-.87-.5-1.66-.56.02 1.22 1 2.2 2.22 2.22-.05-.8-.19-1.3-.56-1.66"
              fill="currentColor"
            />
            <path
              d="M17.41 9.41c-.36.37-.87.5-1.66.56.02-1.22 1-2.2 2.22-2.22-.05.8-.19 1.3-.56 1.66"
              fill="currentColor"
            />
            <path
              d="M6.59 9.41c.36.37.87.5 1.66.56-.02-1.22-1-2.2-2.22-2.22.05.8.19 1.3.56 1.66"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6 5.75A3.75 3.75 0 0 0 9.75 2h4.5A3.75 3.75 0 0 0 18 5.75v.5A3.75 3.75 0 0 0 14.25 10h-4.5A3.75 3.75 0 0 0 6 6.25zM12 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
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
              d="M6.59 2.59c-.37.36-.5.87-.56 1.66 1.22-.02 2.2-1 2.22-2.22-.8.05-1.3.19-1.66.56"
              fill="currentColor"
            />
            <path
              d="M17.41 2.59c-.36-.37-.87-.5-1.66-.56.02 1.22 1 2.2 2.22 2.22-.05-.8-.19-1.3-.56-1.66"
              fill="currentColor"
            />
            <path
              d="M17.41 9.41c-.36.37-.87.5-1.66.56.02-1.22 1-2.2 2.22-2.22-.05.8-.19 1.3-.56 1.66"
              fill="currentColor"
            />
            <path
              d="M6.59 9.41c.36.37.87.5 1.66.56-.02-1.22-1-2.2-2.22-2.22.05.8.19 1.3.56 1.66"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6 5.75A3.75 3.75 0 0 0 9.75 2h4.5A3.75 3.75 0 0 0 18 5.75v.5A3.75 3.75 0 0 0 14.25 10h-4.5A3.75 3.75 0 0 0 6 6.25zM12 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconHandMoney;
