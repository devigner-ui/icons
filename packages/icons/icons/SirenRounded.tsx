import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSirenRounded = forwardRef<SVGSVGElement, IconProps>(
  function IconSirenRounded(
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
              d="M20 22v-6a8 8 0 1 0-16 0v6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M14.29 11.5a4 4 0 0 1 2.21 2.21"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M2 22h20"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M12 2v3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m21 6-1.5 1.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m3 6 1.5 1.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M13.5 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 19v3"
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
              d="M4 16v5.25h16V16a8 8 0 1 0-16 0"
              fill="currentColor"
            />
            <path
              d="M12.75 2a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0z"
              fill="currentColor"
            />
            <path
              d="M21.53 5.47c.3.3.3.77 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l1.5-1.5c.3-.3.77-.3 1.06 0"
              fill="currentColor"
            />
            <path
              d="M3.53 5.47a.75.75 0 1 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.06-1.06z"
              fill="currentColor"
            />
            <path
              d="M14.57 10.8a.75.75 0 0 0-.56 1.4 3.3 3.3 0 0 1 1.8 1.8.75.75 0 0 0 1.38-.57 4.8 4.8 0 0 0-2.62-2.62"
              fill="currentColor"
            />
            <path
              d="M12.75 18.8a1.5 1.5 0 1 0-1.5 0v2.45h1.5z"
              fill="currentColor"
            />
            <path
              d="M4 21.25H2a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5z"
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
              d="M12.75 2a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 21.25h2V16a8 8 0 1 1 16 0v5.25h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5m10.75-2.45a1.5 1.5 0 1 0-1.5 0v2.45h1.5zm.85-7.58a.74.74 0 0 1 .97-.41 4.8 4.8 0 0 1 2.63 2.62.75.75 0 0 1-1.4.56 3.3 3.3 0 0 0-1.8-1.8.75.75 0 0 1-.4-.97"
              fill="currentColor"
            />
            <path
              d="M21.53 5.47c.3.3.3.77 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l1.5-1.5c.3-.3.77-.3 1.06 0"
              fill="currentColor"
            />
            <path
              d="M3.53 5.47a.75.75 0 1 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.06-1.06z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSirenRounded;
