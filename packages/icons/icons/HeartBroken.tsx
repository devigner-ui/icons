import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHeartBroken = forwardRef<SVGSVGElement, IconProps>(
  function IconHeartBroken(
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
              d="M2 9.14C2 14 6.02 16.59 8.96 18.9 10 19.73 11 20.5 12 20.5s2-.77 3.04-1.59C17.98 16.6 22 14 22 9.14 22 4.27 16.5.83 12 5.5 7.5.83 2 4.27 2 9.14"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m12 5.5-1.5 3L14 11l-3 3.5 2 2-1 4"
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
              d="M15.04 18.91C17.98 16.6 22 14 22 9.14 22 4.27 16.5.83 12 5.5l-1.12 2.24c-.18.36-.27.54-.23.72s.21.3.55.54l1.91 1.37c.42.3.62.44.65.66s-.14.41-.47.8L11.6 13.8c-.28.33-.43.5-.42.7 0 .19.16.34.47.66l.95.94c.2.2.3.3.33.42.03.13 0 .26-.07.53L12 20.5c1 0 2-.77 3.04-1.59"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8.1 18.25C5.3 16.08 2 13.55 2 9.14 2 4.27 7.5.83 12 5.5l-1.12 2.24c-.18.36-.27.54-.23.72s.21.3.55.54l1.91 1.37c.42.3.62.44.65.66s-.14.41-.47.8L11.6 13.8c-.28.33-.43.5-.42.7 0 .19.16.34.47.66l.95.94c.2.2.3.3.33.42.03.13 0 .26-.07.53L12 20.5c-1 0-2-.77-3.04-1.59z"
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
              d="M8.1 18.25C5.3 16.08 2 13.55 2 9.14c0-4.6 4.92-7.94 9.26-4.33l-1.45 3.4c-.14.32-.03.7.25.9l2.84 2.02-2.47 2.88c-.25.3-.24.74.04 1.02l1.7 1.7-.91 3.64a9 9 0 0 1-2.3-1.46z"
              fill="currentColor"
            />
            <path
              d="M12.81 20.35a9 9 0 0 0 2.23-1.44l.85-.66C18.7 16.08 22 13.55 22 9.14c0-4.52-4.74-7.81-9.02-4.52l-1.55 3.62 3 2.15a.75.75 0 0 1 .14 1.1l-2.55 2.97 1.51 1.51c.19.19.26.46.2.71z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconHeartBroken;
