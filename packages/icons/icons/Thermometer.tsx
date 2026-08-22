import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconThermometer = forwardRef<SVGSVGElement, IconProps>(
  function IconThermometer(
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
              d="m17.1 10 1.3 1.3m-4.5 1.9 1.3 1.3m-4.51 1.9 1.3 1.3m-6.41 2.86.38-.39a2 2 0 0 1 1.65-.57l.8.09c.91.1 1.82-.22 2.47-.87l8.94-8.94a4.03 4.03 0 1 0-5.7-5.7l-8.94 8.94a3 3 0 0 0-.87 2.47l.1.8c.06.61-.15 1.22-.58 1.65l-.39.38a1.51 1.51 0 1 0 2.14 2.14"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m9 15 6.5-6.5"
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
              d="m5.96 20.17-.38.39a1.51 1.51 0 0 1-2.14-2.14l.39-.38c.43-.43.64-1.04.57-1.65l-.09-.8c-.1-.91.22-1.82.87-2.47l8.94-8.94a4.03 4.03 0 1 1 5.7 5.7l-8.94 8.94c-.65.65-1.56.97-2.47.87l-.8-.1c-.6-.06-1.22.15-1.65.58"
              fill="currentColor"
            />
            <path
              d="m12.52 17.18-1.06 1.06-1.3-1.3a.75.75 0 0 1 1.06-1.06z"
              fill="currentColor"
            />
            <path
              d="m15.73 13.97-1.06 1.06-1.3-1.3a.75.75 0 0 1 1.06-1.06z"
              fill="currentColor"
            />
            <path
              d="m18.93 10.77-1.06 1.06-1.3-1.3a.75.75 0 0 1 1.06-1.06z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.03 7.97c.3.3.3.77 0 1.06l-6.5 6.5a.75.75 0 1 1-1.06-1.06l6.5-6.5c.3-.3.77-.3 1.06 0"
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
              d="m5.96 20.17-.38.39a1.51 1.51 0 0 1-2.14-2.14l.39-.38c.43-.43.64-1.04.57-1.65l-.09-.8c-.1-.91.22-1.82.87-2.47l8.94-8.94a4.03 4.03 0 1 1 5.7 5.7l-.9.89-1.3-1.3a.75.75 0 1 0-1.05 1.06l1.3 1.3-2.14 2.14-1.3-1.3a.75.75 0 0 0-1.06 1.06l1.3 1.3-2.15 2.15-1.3-1.3a.75.75 0 1 0-1.06 1.06l1.3 1.3-.58.58c-.65.65-1.56.97-2.47.87l-.8-.1c-.6-.06-1.22.15-1.65.58M16.03 9.03a.75.75 0 0 0-1.06-1.06l-6.5 6.5a.75.75 0 0 0 1.06 1.06z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconThermometer;
