import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMedalStar = forwardRef<SVGSVGElement, IconProps>(
  function IconMedalStar(
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
              d="M19.67 9a6.97 6.97 0 0 1-8.05 6.91A6.99 6.99 0 0 1 12.67 2a7 7 0 0 1 7 7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m21.92 18.47-1.65.39a1 1 0 0 0-.74.74l-.35 1.47a1 1 0 0 1-1.74.41L12.67 16 7.9 21.49a1 1 0 0 1-1.74-.41l-.35-1.47a1 1 0 0 0-.74-.74l-1.65-.39a1 1 0 0 1-.48-1.68l3.9-3.9a7 7 0 0 0 6.88 3.02 7 7 0 0 0 4.78-3.02l3.9 3.9a1 1 0 0 1-.48 1.67"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m13.25 5.98.59 1.18c.08.16.29.32.48.35l1.07.18c.68.11.84.61.35 1.1l-.83.83a.7.7 0 0 0-.17.61l.24 1.03c.19.81-.24 1.13-.96.7l-1-.59a.7.7 0 0 0-.66 0l-1 .59c-.72.42-1.15.11-.96-.7l.24-1.03a.8.8 0 0 0-.17-.61l-.83-.83c-.49-.49-.33-.98.35-1.1l1.07-.18a.7.7 0 0 0 .47-.35l.59-1.18c.29-.64.81-.64 1.13 0"
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
              d="M19.67 9a6.97 6.97 0 0 1-8.05 6.91A6.99 6.99 0 0 1 12.67 2a7 7 0 0 1 7 7"
              fill="currentColor"
            />
            <path
              d="m21.92 18.47-1.65.39a1 1 0 0 0-.74.74l-.35 1.47a1 1 0 0 1-1.74.41L12.67 16 7.9 21.49a1 1 0 0 1-1.74-.41l-.35-1.47a1 1 0 0 0-.74-.74l-1.65-.39a1 1 0 0 1-.48-1.68l3.9-3.9a7 7 0 0 0 6.88 3.02 7 7 0 0 0 4.78-3.02l3.9 3.9a1 1 0 0 1-.48 1.67"
              fill="currentColor"
            />
            <path
              d="m13.25 5.98.59 1.18c.08.16.29.32.48.35l1.07.18c.68.11.84.61.35 1.1l-.83.83a.7.7 0 0 0-.17.61l.24 1.03c.19.81-.24 1.13-.96.7l-1-.59a.7.7 0 0 0-.66 0l-1 .59c-.72.42-1.15.11-.96-.7l.24-1.03a.8.8 0 0 0-.17-.61l-.83-.83c-.49-.49-.33-.98.35-1.1l1.07-.18a.7.7 0 0 0 .47-.35l.59-1.18c.29-.64.81-.64 1.13 0"
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
              d="m21.92 18.47-1.65.39a1 1 0 0 0-.74.74l-.35 1.47a1 1 0 0 1-1.74.42l-2.99-3.44a.5.5 0 0 1 .25-.81 8.5 8.5 0 0 0 4.53-2.83.5.5 0 0 1 .74-.05l2.22 2.22c.76.76.49 1.71-.27 1.89"
              fill="currentColor"
            />
            <path
              d="m3.37 18.47 1.65.39c.37.09.66.37.74.74l.35 1.47a1 1 0 0 0 1.74.42l2.99-3.44a.5.5 0 0 0-.25-.81 8.5 8.5 0 0 1-4.53-2.83.5.5 0 0 0-.74-.05L3.1 16.58c-.76.76-.49 1.71.27 1.89"
              fill="currentColor"
            />
            <path
              d="M12.67 2a7 7 0 1 0-.01 13.99A7 7 0 0 0 12.67 2m3.06 6.78-.83.83a.7.7 0 0 0-.17.61l.24 1.03c.19.81-.24 1.13-.96.7l-1-.59a.7.7 0 0 0-.66 0l-1 .59c-.72.42-1.15.11-.96-.7l.24-1.03a.8.8 0 0 0-.17-.61l-.85-.83c-.49-.49-.33-.98.35-1.09l1.07-.18a.7.7 0 0 0 .47-.35l.59-1.18c.32-.64.84-.64 1.16 0l.59 1.18c.08.16.29.32.48.35l1.07.18c.67.11.83.6.34 1.09"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMedalStar;
