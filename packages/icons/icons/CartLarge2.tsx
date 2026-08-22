import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCartLarge2 = forwardRef<SVGSVGElement, IconProps>(
  function IconCartLarge2(
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
              d="m2 3 .26.09c1.32.44 1.98.66 2.36 1.18C5 4.8 5 5.5 5 6.88V9.5c0 2.83 0 4.24.88 5.12s2.3.88 5.12.88h8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M5 6h11.45c2.06 0 3.08 0 3.53.67.44.68.04 1.62-.77 3.51l-.43 1c-.38.88-.57 1.33-.94 1.57-.38.25-.86.25-1.82.25H5"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.29 2.76c.13-.39.55-.6.95-.47l.26.09.04.01q.95.3 1.57.58c.45.2.83.46 1.12.86s.41.85.47 1.34q.06.68.05 1.67V9.5c0 1.44 0 2.44.1 3.2.1.73.28 1.11.56 1.4.28.27.66.45 1.4.55.75.1 1.75.1 3.19.1h7a.75.75 0 0 1 0 1.5h-7.05c-1.37 0-2.47 0-3.34-.12a3.7 3.7 0 0 1-2.26-.98c-.6-.6-.86-1.36-.98-2.26-.12-.86-.12-1.97-.12-3.33V6.88c0-.71 0-1.18-.04-1.54-.04-.34-.1-.5-.2-.63a1.3 1.3 0 0 0-.53-.38c-.33-.15-.78-.3-1.45-.53l-.27-.09a.75.75 0 0 1-.47-.95"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M5.75 6v3.5A27 27 0 0 0 5.9 13h10.12c.96 0 1.44 0 1.82-.25.37-.24.56-.69.94-1.57l.43-1c.8-1.89 1.21-2.83.77-3.5C19.53 6 18.5 6 16.45 6z"
              fill="currentColor"
            />
            <path
              d="M7.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
              fill="currentColor"
            />
            <path
              d="M18 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"
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
              d="M2.24 2.29a.75.75 0 1 0-.48 1.42l.27.09c.67.23 1.12.38 1.45.53.31.14.45.26.53.38.1.12.16.29.2.63.04.36.04.83.04 1.54v2.68c0 1.36 0 2.47.12 3.33.12.9.38 1.66.98 2.26s1.36.86 2.26.98c.87.12 1.97.12 3.34.12H18a.75.75 0 1 0 0-1.5h-7c-1.44 0-2.44 0-3.2-.1-.73-.1-1.11-.28-1.4-.56-.23-.23-.4-.55-.5-1.09h10.12c.96 0 1.44 0 1.82-.25.37-.24.56-.69.94-1.57l.43-1c.8-1.89 1.21-2.83.77-3.5C19.53 6 18.5 6 16.45 6H5.75l-.05-.83a3 3 0 0 0-.47-1.34c-.29-.4-.67-.65-1.12-.86q-.62-.28-1.57-.58z"
              fill="currentColor"
            />
            <path
              d="M7.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
              fill="currentColor"
            />
            <path
              d="M16.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCartLarge2;
