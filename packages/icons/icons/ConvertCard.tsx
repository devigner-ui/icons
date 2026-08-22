import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconConvertCard = forwardRef<SVGSVGElement, IconProps>(
  function IconConvertCard(
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
              d="M12.67 5.56h10"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.89 2h5.56c1.78 0 2.22.44 2.22 2.2v4.11c0 1.76-.44 2.2-2.22 2.2h-5.56c-1.78 0-2.22-.44-2.22-2.2V4.2c0-1.76.44-2.2 2.22-2.2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.67 17.06h10"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.89 13.5h5.56c1.78 0 2.22.44 2.22 2.2v4.11c0 1.76-.44 2.2-2.22 2.2H4.89c-1.78 0-2.22-.44-2.22-2.2V15.7c0-1.76.44-2.2 2.22-2.2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22.67 15a7 7 0 0 1-7 7l1.05-1.75"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2.67 9a7 7 0 0 1 7-7L8.62 3.75"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22.67 14.25c.41 0 .75.34.75.75a7.74 7.74 0 0 1-7.75 7.75.75.75 0 0 1-.64-1.14l1.05-1.75a.75.75 0 1 1 1.28.78l-.27.45A6.25 6.25 0 0 0 21.92 15c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.25 2.91A6.25 6.25 0 0 0 3.42 9a.75.75 0 1 1-1.5 0 7.74 7.74 0 0 1 7.75-7.75.75.75 0 0 1 .64 1.14L9.26 4.14a.75.75 0 0 1-1.28-.78z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12.67 15.7v.61h-10v-.61c0-1.76.44-2.2 2.22-2.2h5.56c1.78 0 2.22.44 2.22 2.2"
              fill="currentColor"
            />
            <path
              d="M2.67 16.31v3.49c0 1.76.44 2.2 2.22 2.2h5.56c1.78 0 2.22-.44 2.22-2.2v-3.49z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22.67 4.2v.61h-10V4.2c0-1.76.44-2.2 2.22-2.2h5.56c1.78 0 2.22.44 2.22 2.2"
              fill="currentColor"
            />
            <path
              d="M12.67 4.81V8.3c0 1.76.44 2.2 2.22 2.2h5.56c1.78 0 2.22-.44 2.22-2.2V4.81z"
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
              d="M22.67 15a7 7 0 0 1-7 7l1.05-1.75"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.67 9a7 7 0 0 1 7-7L8.62 3.75"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22.67 4.2v.11a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V4.2c0-1.76.44-2.2 2.22-2.2h5.56c1.78 0 2.22.44 2.22 2.2"
              fill="currentColor"
            />
            <path
              d="M13.17 5.81a.5.5 0 0 0-.5.5V8.3c0 1.76.44 2.2 2.22 2.2h5.56c1.78 0 2.22-.44 2.22-2.2V6.31a.5.5 0 0 0-.5-.5z"
              fill="currentColor"
            />
            <path
              d="M12.67 15.7v.11a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-.11c0-1.76.44-2.2 2.22-2.2h5.56c1.78 0 2.22.44 2.22 2.2"
              fill="currentColor"
            />
            <path
              d="M3.17 17.31a.5.5 0 0 0-.5.5v1.99c0 1.76.44 2.2 2.22 2.2h5.56c1.78 0 2.22-.44 2.22-2.2v-1.99a.5.5 0 0 0-.5-.5z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconConvertCard;
