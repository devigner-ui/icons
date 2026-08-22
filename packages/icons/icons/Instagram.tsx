import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconInstagram = forwardRef<SVGSVGElement, IconProps>(
  function IconInstagram(
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
              d="M9.67 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12.67 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18.3 7h.02"
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
              d="M16.86 2H8.48C4.84 2 2.67 4.17 2.67 7.81v8.37c0 3.65 2.17 5.82 5.81 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2"
              fill="currentColor"
            />
            <path
              d="M12.67 15.88a3.88 3.88 0 1 0 0-7.76 3.88 3.88 0 0 0 0 7.76"
              fill="currentColor"
            />
            <path
              d="M17.67 7.5a1 1 0 0 1-.71-.29q-.14-.15-.21-.33a1 1 0 0 1-.08-.38 1 1 0 0 1 .08-.38q.07-.19.21-.33a1 1 0 0 1 1.09-.21l.18.09.15.12q.13.14.21.33a1 1 0 0 1 .08.38 1 1 0 0 1-.08.38q-.08.18-.21.33-.15.13-.33.21a1 1 0 0 1-.38.08"
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
              d="M16.86 2H8.48C4.84 2 2.67 4.17 2.67 7.81v8.37c0 3.65 2.17 5.82 5.81 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2m-4.19 13.88a3.88 3.88 0 1 1 0-7.77 3.88 3.88 0 0 1 0 7.77m5.92-9q-.08.18-.21.33-.15.13-.33.21a1 1 0 0 1-1.09-.21q-.14-.15-.21-.33a1 1 0 0 1-.08-.38 1 1 0 0 1 .08-.38q.07-.19.21-.33a1 1 0 0 1 1.09-.21l.18.09.15.12q.13.14.21.33a1 1 0 0 1 .08.38 1 1 0 0 1-.08.38"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconInstagram;
