import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSmartphone = forwardRef<SVGSVGElement, IconProps>(
  function IconSmartphone(
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
              d="M4 10c0-3.77 0-5.66 1.17-6.83S8.23 2 12 2s5.66 0 6.83 1.17S20 6.23 20 10v4c0 3.77 0 5.66-1.17 6.83S15.77 22 12 22s-5.66 0-6.83-1.17S4 17.77 4 14z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M15 19H9"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
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
              d="M12.05 2c1.68 0 3.01 0 4.05.14 1.08.15 1.94.46 2.63 1.15.68.7.99 1.58 1.13 2.67.14 1.06.14 2.42.14 4.13v3.82c0 1.71 0 3.07-.14 4.13a4.4 4.4 0 0 1-1.13 2.67c-.69.7-1.55 1-2.63 1.15-1.04.14-2.37.14-4.05.14h-.1c-1.68 0-3.01 0-4.05-.14a4.3 4.3 0 0 1-2.63-1.15 4.4 4.4 0 0 1-1.13-2.67C4 16.98 4 15.62 4 13.9v-3.8c0-1.71 0-3.07.14-4.13A4.4 4.4 0 0 1 5.27 3.3c.69-.7 1.55-1 2.63-1.15C8.94 2 10.27 2 11.95 2z"
              fill="currentColor"
            />
            <path
              d="M8.57 18.51c0-.38.3-.7.69-.7h5.48a.7.7 0 0 1 .69.7c0 .39-.3.7-.69.7H9.26a.7.7 0 0 1-.69-.7"
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
              d="M12.05 2h-.1c-1.68 0-3.01 0-4.05.14A4.3 4.3 0 0 0 5.27 3.3c-.68.7-.99 1.58-1.13 2.67C4 7.02 4 8.38 4 10.1v3.82c0 1.71 0 3.07.14 4.13a4.4 4.4 0 0 0 1.13 2.67c.69.7 1.55 1 2.63 1.15 1.04.14 2.37.14 4.05.14h.1c1.68 0 3.01 0 4.05-.14a4.3 4.3 0 0 0 2.63-1.15c.68-.7.99-1.58 1.13-2.67.14-1.06.14-2.42.14-4.13V10.1c0-1.71 0-3.07-.14-4.13a4.4 4.4 0 0 0-1.13-2.67c-.69-.7-1.55-1-2.63-1.15C15.06 2 13.73 2 12.05 2M8.57 18.51c0-.38.3-.7.69-.7h5.48a.7.7 0 0 1 .69.7c0 .39-.3.7-.69.7H9.26a.7.7 0 0 1-.69-.7"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSmartphone;
