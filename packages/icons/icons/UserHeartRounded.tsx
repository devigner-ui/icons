import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconUserHeartRounded = forwardRef<SVGSVGElement, IconProps>(
  function IconUserHeartRounded(
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
            <circle
              cx="10"
              cy="6.00049"
              r="4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <ellipse
              opacity={duotone ? "0.4" : "1"}
              cx="10"
              cy="17.0005"
              rx="7"
              ry="4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="m19 8.7-.52.53c.3.28.75.28 1.04 0zm.96 3.67-.45-.6zm-1.47-.6c-.42-.32-.88-.7-1.23-1.1-.37-.43-.51-.76-.51-.97h-1.5c0 .77.44 1.45.87 1.95.46.52 1.02.98 1.48 1.32zM16.75 9.7c0-.58.26-.83.5-.91s.7-.06 1.23.44l1.04-1.08c-.83-.79-1.86-1.1-2.77-.78-.94.33-1.5 1.23-1.5 2.33zm3.65 3.27c.46-.34 1.02-.8 1.48-1.32.43-.5.87-1.18.87-1.95h-1.5q.02.32-.5.97c-.36.4-.82.78-1.24 1.1zm2.35-3.27c0-1.1-.56-2-1.5-2.33-.9-.32-1.94 0-2.77.78l1.04 1.08c.52-.5.99-.53 1.24-.44.23.08.49.33.49.9zm-5.15 3.27c.37.27.78.6 1.4.6v-1.5l-.1-.02-.41-.29zm1.91-1.2-.42.28q-.07.04-.09.03v1.5c.62 0 1.03-.34 1.4-.6z"
              fill="currentColor"
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
            <circle cx="12" cy="6.00049" r="4" fill="currentColor" />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18.1 15.03q-.63-.04-1.6-.03c-1.65 0-2.47 0-2.99.51-.51.52-.51 1.34-.51 2.99 0 1.17 0 1.92.18 2.44Q12.61 21 12 21c-3.87 0-7-1.79-7-4s3.13-4 7-4c2.61 0 4.9.82 6.1 2.03"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.51 21.49c.52.51 1.34.51 2.99.51s2.47 0 2.99-.51c.51-.51.51-1.34.51-2.99s0-2.47-.51-2.99c-.52-.5-1.34-.5-2.99-.5s-2.47 0-2.99.5c-.51.52-.51 1.34-.51 2.99s0 2.48.51 2.99m2.02-1.51c-.7-.5-1.53-1.1-1.53-2.12 0-1.13 1.38-1.93 2.5-.84 1.13-1.1 2.5-.29 2.5.84 0 1.02-.82 1.61-1.53 2.12l-.21.15c-.26.2-.51.37-.76.37s-.5-.18-.76-.37z"
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
            <circle cx="10" cy="6.00049" r="4" fill="currentColor" />
            <ellipse cx="10" cy="17.0005" rx="7" ry="4" fill="currentColor" />
            <path
              d="M16 9.7c0 .98 1.16 2.02 2.04 2.67.42.3.63.46.96.46s.54-.16.96-.46c.88-.65 2.04-1.69 2.04-2.67 0-1.68-1.65-2.3-3-1-1.35-1.3-3-.68-3 1"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconUserHeartRounded;
