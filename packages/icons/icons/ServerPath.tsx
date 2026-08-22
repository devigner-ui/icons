import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconServerPath = forwardRef<SVGSVGElement, IconProps>(
  function IconServerPath(
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
              d="M22 19h-8M2 19h8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 17v-3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <circle
              cx="12"
              cy="19.0001"
              r="2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M2 11a3 3 0 0 1 3-3h14a3 3 0 1 1 0 6H5a3 3 0 0 1-3-3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M2 5a3 3 0 0 1 3-3h14a3 3 0 1 1 0 6H5a3 3 0 0 1-3-3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M13 5h6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M13 11h6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <circle
              opacity={duotone ? "0.4" : "1"}
              cx="6"
              cy="5.00012"
              r="1"
              fill="currentColor"
            />
            <circle
              opacity={duotone ? "0.4" : "1"}
              cx="6"
              cy="11.0001"
              r="1"
              fill="currentColor"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.3 13.74h7.21c1.54 0 2.8-1.2 2.8-2.69a2.74 2.74 0 0 0-2.8-2.68c1.54 0 2.8-1.2 2.8-2.69A2.74 2.74 0 0 0 18.5 3h-13C3.96 3 2.7 4.2 2.7 5.68a2.74 2.74 0 0 0 2.8 2.69c-1.54 0-2.8 1.2-2.8 2.68a2.74 2.74 0 0 0 2.8 2.69zM12.93 5c-.39 0-.7.3-.7.67s.31.68.7.68h5.58c.39 0 .7-.3.7-.68a.7.7 0 0 0-.7-.67zm0 5.37c-.39 0-.7.3-.7.67s.31.67.7.67h5.58c.39 0 .7-.3.7-.67a.7.7 0 0 0-.7-.67zm-5.58-4.7c0 .5-.42.9-.93.9a.9.9 0 0 1-.93-.9.9.9 0 0 1 .93-.89c.51 0 .93.4.93.9m0 5.37c0 .5-.42.9-.93.9a.9.9 0 0 1-.93-.9c0-.5.41-.9.93-.9.51 0 .93.4.93.9"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22 18.21a.7.7 0 0 0-.7-.67h-7.57c-.2-.45-.57-.8-1.03-.99v-2.81h-1.4v2.81c-.46.18-.84.54-1.03.99H2.7c-.39 0-.7.3-.7.67s.31.67.7.67h7.57c.28.66.95 1.12 1.73 1.12s1.45-.46 1.73-1.12h7.57c.39 0 .7-.3.7-.67"
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
              d="M22 18.21a.7.7 0 0 0-.7-.67h-7.57c-.2-.45-.57-.8-1.03-.99v-2.81h5.81c1.54 0 2.8-1.2 2.8-2.69a2.74 2.74 0 0 0-2.8-2.68c1.54 0 2.8-1.2 2.8-2.69A2.74 2.74 0 0 0 18.5 3h-13C3.96 3 2.7 4.2 2.7 5.68a2.74 2.74 0 0 0 2.8 2.69c-1.54 0-2.8 1.2-2.8 2.68a2.74 2.74 0 0 0 2.8 2.69h5.81v2.81c-.46.18-.84.54-1.03.99H2.7c-.39 0-.7.3-.7.67s.31.67.7.67h7.57c.28.66.95 1.12 1.73 1.12s1.45-.46 1.73-1.12h7.57c.39 0 .7-.3.7-.67M12.23 5.68c0-.37.31-.67.7-.67h5.58c.39 0 .7.3.7.67s-.31.68-.7.68h-5.58c-.39 0-.7-.3-.7-.68m0 5.37c0-.37.31-.67.7-.67h5.58c.39 0 .7.3.7.67s-.31.67-.7.67h-5.58c-.39 0-.7-.3-.7-.67M6.42 6.58c.51 0 .93-.4.93-.9a.9.9 0 0 0-.93-.89.9.9 0 0 0-.93.9c0 .49.41.89.93.89m0 5.37c.51 0 .93-.4.93-.9s-.42-.9-.93-.9c-.52 0-.93.4-.93.9s.41.9.93.9"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconServerPath;
