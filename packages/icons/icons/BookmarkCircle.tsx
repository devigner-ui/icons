import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBookmarkCircle = forwardRef<SVGSVGElement, IconProps>(
  function IconBookmarkCircle(
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
              d="M16 14.05v-2.5c0-2.14 0-3.22-.59-3.88C14.83 7 13.9 7 12 7s-2.83 0-3.41.67C8 8.33 8 9.4 8 11.55v2.5c0 1.54 0 2.32.33 2.66q.23.24.56.29c.44.05.95-.46 1.97-1.48.46-.45.68-.67.94-.73a1 1 0 0 1 .4 0c.26.06.48.28.94.73 1.02 1.02 1.53 1.53 1.97 1.48q.32-.04.56-.3c.33-.33.33-1.1.33-2.65"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0"
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
              d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
              fill="currentColor"
            />
            <path
              d="M16 14.05v-2.5c0-2.15 0-3.22-.59-3.88C14.83 7 13.9 7 12 7s-2.83 0-3.41.67C8 8.33 8 9.4 8 11.55v2.5c0 1.54 0 2.32.33 2.66q.23.24.56.29c.44.05.95-.46 1.97-1.48.46-.45.68-.67.94-.73a1 1 0 0 1 .4 0c.26.06.48.28.94.73 1.02 1.02 1.53 1.53 1.97 1.48q.32-.05.56-.3c.33-.33.33-1.1.33-2.65"
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
              d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20m4-7.95v-2.5c0-2.15 0-3.22-.59-3.88C14.83 7 13.9 7 12 7s-2.83 0-3.41.67C8 8.33 8 9.4 8 11.55v2.5c0 1.54 0 2.32.33 2.66q.23.24.56.29c.44.05.95-.46 1.97-1.48.46-.45.68-.67.94-.73a1 1 0 0 1 .4 0c.26.06.48.28.94.73 1.02 1.02 1.53 1.53 1.97 1.48q.32-.05.56-.3c.33-.33.33-1.1.33-2.65"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBookmarkCircle;
