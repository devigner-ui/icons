import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconInfoCircle2 = forwardRef<SVGSVGElement, IconProps>(
  function IconInfoCircle2(
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
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10"
            />
            <path
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8v5"
              opacity={duotone ? "0.4" : "1"}
            />
            <path
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 16"
              opacity={duotone ? "0.4" : "1"}
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
              d="M12.67 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
              fill="currentColor"
            />
            <path
              d="M12.67 13.75c.41 0 .75-.34.75-.75V8a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v5c0 .41.34.75.75.75"
              fill="currentColor"
            />
            <path
              d="M13.59 15.62a1 1 0 0 0-.21-.33q-.15-.13-.33-.21a1 1 0 0 0-.76 0q-.18.07-.33.21-.13.15-.21.33a1 1 0 0 0-.08.38 1 1 0 0 0 .08.38q.07.19.21.33.15.13.33.21a1 1 0 0 0 .38.08 1 1 0 0 0 .38-.08q.18-.08.33-.21.13-.14.21-.33a1 1 0 0 0 .08-.38 1 1 0 0 0-.08-.38"
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
              d="M12.67 2c-5.51 0-10 4.49-10 10s4.49 10 10 10 10-4.49 10-10-4.49-10-10-10m-.75 6c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75zm1.67 8.38q-.08.19-.21.33-.15.13-.33.21a1 1 0 0 1-.38.08 1 1 0 0 1-.38-.08 1 1 0 0 1-.33-.21q-.13-.14-.21-.33a1 1 0 0 1-.08-.38 1 1 0 0 1 .08-.38q.07-.18.21-.33.15-.13.33-.21a1 1 0 0 1 .76 0q.18.07.33.21.13.15.21.33a1 1 0 0 1 .08.38 1 1 0 0 1-.08.38"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconInfoCircle2;
