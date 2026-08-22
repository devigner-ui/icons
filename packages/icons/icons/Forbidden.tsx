import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconForbidden = forwardRef<SVGSVGElement, IconProps>(
  function IconForbidden(
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
              d="m18.5 5.5-13 13"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M22 10.85v2.3c0 1.23 0 1.84-.23 2.4-.23.54-.66.98-1.53 1.84l-2.85 2.85c-.86.87-1.3 1.3-1.85 1.53s-1.16.23-2.39.23h-2.3c-1.23 0-1.84 0-2.4-.23-.54-.23-.98-.66-1.84-1.53L3.76 17.4c-.87-.86-1.3-1.3-1.53-1.85S2 14.38 2 13.15v-2.3c0-1.23 0-1.84.23-2.4.23-.54.66-.98 1.53-1.84L6.6 3.76c.86-.87 1.3-1.3 1.85-1.53S9.62 2 10.85 2h2.3c1.23 0 1.84 0 2.4.23.54.23.98.66 1.84 1.53l2.85 2.85c.87.86 1.3 1.3 1.53 1.85s.23 1.16.23 2.39"
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
              opacity={duotone ? "0.4" : "1"}
              d="m3.76 17.4 1.42 1.42 1.43 1.42c.86.87 1.3 1.3 1.85 1.53s1.16.23 2.39.23h2.3c1.23 0 1.84 0 2.4-.23.54-.23.98-.66 1.84-1.53l2.85-2.85c.87-.86 1.3-1.3 1.53-1.85s.23-1.16.23-2.39v-2.3c0-1.23 0-1.84-.23-2.4-.23-.54-.66-.98-1.53-1.84l-1.42-1.43-1.43-1.42c-.86-.87-1.3-1.3-1.85-1.53S14.38 2 13.15 2h-2.3C9.62 2 9 2 8.45 2.23s-.98.66-1.84 1.53L3.76 6.6c-.87.86-1.3 1.3-1.53 1.85S2 9.62 2 10.85v2.3c0 1.23 0 1.84.23 2.4.23.54.66.98 1.53 1.84"
              fill="currentColor"
            />
            <path d="M18.82 5.18 5.18 18.82" strokeWidth={strokeWidth} />
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
              d="M22 13.15v-2.3c0-1.23 0-1.84-.23-2.4-.23-.54-.66-.98-1.53-1.84l-.9-.9L5.72 19.35l.9.9c.86.86 1.3 1.3 1.85 1.52.55.23 1.16.23 2.39.23h2.3c1.23 0 1.84 0 2.4-.23.54-.23.98-.66 1.84-1.53l2.85-2.85c.87-.86 1.3-1.3 1.53-1.85s.23-1.16.23-2.39"
              fill="currentColor"
            />
            <path
              d="m4.65 18.29-.9-.9c-.86-.86-1.3-1.3-1.52-1.85C2 15 2 14.38 2 13.15v-2.3c0-1.23 0-1.84.23-2.4.23-.54.66-.98 1.53-1.84L6.6 3.76c.86-.87 1.3-1.3 1.85-1.53S9.62 2 10.85 2h2.3c1.23 0 1.84 0 2.4.23.54.23.98.66 1.84 1.53l.9.9z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconForbidden;
