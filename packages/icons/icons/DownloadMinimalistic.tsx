import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconDownloadMinimalistic = forwardRef<SVGSVGElement, IconProps>(
  function IconDownloadMinimalistic(
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
              d="M3 15c0 2.83 0 4.24.88 5.12S6.18 21 9 21h6c2.83 0 4.24 0 5.12-.88S21 17.82 21 15"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 3v13m0 0 4-4.37M12 16l-4-4.37"
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
              d="M3 14.25c.41 0 .75.34.75.75 0 1.44 0 2.44.1 3.2.1.73.28 1.11.56 1.4.28.27.66.45 1.4.55.75.1 1.75.1 3.19.1h6c1.44 0 2.44 0 3.2-.1.73-.1 1.11-.28 1.4-.56.27-.28.45-.66.55-1.4.1-.75.1-1.75.1-3.19a.75.75 0 0 1 1.5 0v.05c0 1.37 0 2.47-.12 3.34-.12.9-.38 1.66-.98 2.26s-1.36.86-2.26.98c-.87.12-1.97.12-3.34.12h-6.1c-1.37 0-2.47 0-3.34-.12a3.7 3.7 0 0 1-2.26-.98c-.6-.6-.86-1.36-.98-2.26-.12-.87-.12-1.97-.12-3.34V15c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 16.75q.33 0 .55-.24l4-4.38a.75.75 0 1 0-1.1-1.01l-2.7 2.95V3a.75.75 0 0 0-1.5 0v11.07l-2.7-2.95a.75.75 0 0 0-1.1 1.01l4 4.38q.22.23.55.24"
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
              d="M12.55 16.5a.75.75 0 0 1-1.1 0l-4-4.37a.75.75 0 0 1 1.1-1.01l2.7 2.95V3a.75.75 0 0 1 1.5 0v11.07l2.7-2.95a.75.75 0 1 1 1.1 1.01z"
              fill="currentColor"
            />
            <path
              d="M3.75 15a.75.75 0 0 0-1.5 0v.05c0 1.37 0 2.47.12 3.34.12.9.38 1.66.98 2.26s1.36.86 2.26.98c.87.12 1.97.12 3.34.12h6.1c1.37 0 2.47 0 3.34-.12.9-.12 1.66-.38 2.26-.98s.86-1.36.98-2.26c.12-.87.12-1.97.12-3.34V15a.75.75 0 0 0-1.5 0c0 1.44 0 2.44-.1 3.2-.1.73-.28 1.11-.56 1.4-.28.27-.66.45-1.4.55-.75.1-1.75.1-3.19.1H9c-1.44 0-2.44 0-3.2-.1-.73-.1-1.11-.28-1.4-.56-.27-.28-.45-.66-.55-1.4-.1-.75-.1-1.75-.1-3.19"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconDownloadMinimalistic;
