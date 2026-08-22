import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSecurityUser = forwardRef<SVGSVGElement, IconProps>(
  function IconSecurityUser(
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
              d="M11.16 2.23 6.17 4.1a3.5 3.5 0 0 0-2.09 3.02v7.43c0 1.18.78 2.73 1.73 3.44l4.3 3.21a4.55 4.55 0 0 0 5.14 0l4.3-3.21a5 5 0 0 0 1.73-3.44V7.12c0-1.23-.94-2.59-2.09-3.02L14.2 2.23a5 5 0 0 0-3.04 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12.67 10.92h-.13a1.76 1.76 0 1 1 .13 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10.68 13.72c-.96.64-.96 1.69 0 2.33 1.09.73 2.88.73 3.97 0 .96-.64.96-1.69 0-2.33a3.9 3.9 0 0 0-3.97 0"
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
              d="M11.16 2.23 6.17 4.1a3.5 3.5 0 0 0-2.09 3.02v7.43c0 1.18.78 2.73 1.73 3.44l4.3 3.21a4.55 4.55 0 0 0 5.14 0l4.3-3.21a5 5 0 0 0 1.73-3.44V7.12c0-1.23-.94-2.59-2.09-3.02L14.2 2.23a5 5 0 0 0-3.04 0"
              fill="currentColor"
            />
            <path
              d="M12.57 11.3h.1a2.13 2.13 0 0 0-.08-4.27c-1.18 0-2.14.96-2.14 2.14a2.16 2.16 0 0 0 2.12 2.13"
              fill="currentColor"
            />
            <path
              d="M14.86 13.41a4.3 4.3 0 0 0-4.39 0c-.56.38-.89.92-.89 1.48 0 .57.32 1.09.89 1.47.61.4 1.4.61 2.19.61s1.59-.2 2.19-.61c.56-.38.89-.92.89-1.48.01-.57-.31-1.09-.88-1.47"
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
              d="m19.17 4.11-4.99-1.87a5 5 0 0 0-3.02 0L6.17 4.11a3.5 3.5 0 0 0-2.09 3.01v7.43c0 1.18.78 2.73 1.73 3.44l4.3 3.21a4.55 4.55 0 0 0 5.14 0l4.3-3.21a5 5 0 0 0 1.73-3.44V7.12a3.5 3.5 0 0 0-2.11-3.01M12.6 7.03c1.18 0 2.14.96 2.14 2.14 0 1.16-.91 2.09-2.06 2.13h-.1a2.13 2.13 0 0 1-2.1-2.13 2.13 2.13 0 0 1 2.12-2.14m2.26 9.33c-.61.4-1.4.61-2.19.61s-1.59-.2-2.19-.61c-.57-.38-.88-.9-.89-1.47 0-.56.32-1.1.89-1.48 1.21-.8 3.18-.8 4.39 0 .57.38.89.9.89 1.47-.01.56-.33 1.1-.9 1.48"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSecurityUser;
