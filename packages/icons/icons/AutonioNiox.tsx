import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAutonioNiox = forwardRef<SVGSVGElement, IconProps>(
  function IconAutonioNiox(
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
              d="M12.67 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m12.67 5.86-2.57 4.28h5.14z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m9.24 11.86-2.57 4.28h5.14z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m16.1 11.86-2.57 4.28h5.14z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
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
              d="M24.67 0h-24v24h24z"
              fill="none"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12.67 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
              fill="currentColor"
            />
            <path
              d="m12.46 6.21-2.13 3.55c-.1.17.02.38.21.38h4.26c.19 0 .31-.21.21-.38l-2.13-3.55a.24.24 0 0 0-.42 0"
              fill="currentColor"
            />
            <path
              d="M9.03 12.21 6.9 15.76c-.1.17.02.38.21.38h4.26c.19 0 .31-.21.21-.38l-2.13-3.55a.24.24 0 0 0-.42 0"
              fill="currentColor"
            />
            <path
              d="m15.88 12.21-2.13 3.55c-.1.17.02.38.21.38h4.26c.19 0 .31-.21.21-.38l-2.13-3.55c-.08-.16-.32-.16-.42 0"
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
              d="M12.67 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m-1.3 14.14H7.11a.25.25 0 0 1-.21-.38l2.13-3.55c.1-.16.33-.16.43 0l2.13 3.55c.1.17-.02.38-.22.38m-.83-6a.25.25 0 0 1-.21-.38l2.13-3.55c.1-.16.33-.16.43 0l2.13 3.55c.1.17-.02.38-.21.38zm7.69 6h-4.26a.25.25 0 0 1-.21-.38l2.13-3.55c.1-.16.33-.16.43 0l2.13 3.55c.09.17-.03.38-.22.38"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconAutonioNiox;
