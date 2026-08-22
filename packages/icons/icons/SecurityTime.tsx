import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSecurityTime = forwardRef<SVGSVGElement, IconProps>(
  function IconSecurityTime(
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
              d="M12.67 15.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12.92 10.25v.93c0 .35-.18.68-.49.86l-.76.46"
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
              d="m11.63 2.11-5.5 2.06a3.2 3.2 0 0 0-1.91 2.77v8.1c0 .81.53 1.88 1.18 2.36l5.5 4.11c.97.73 2.56.73 3.53 0l5.5-4.11a3.3 3.3 0 0 0 1.18-2.36v-8.1c0-1.12-.86-2.37-1.91-2.76l-5.5-2.06a3.4 3.4 0 0 0-2.07-.01"
              fill="currentColor"
            />
            <path
              d="M12.67 16.25a4.75 4.75 0 1 1 0-9.5 4.75 4.75 0 0 1 0 9.5m0-8a3.26 3.26 0 0 0 0 6.5 3.26 3.26 0 0 0 0-6.5"
              fill="currentColor"
            />
            <path
              d="M11.67 13.25a.75.75 0 0 1-.38-1.39l.76-.46a.3.3 0 0 0 .12-.21v-.93c0-.41.34-.75.75-.75s.75.33.75.74v.93c0 .61-.33 1.19-.85 1.5l-.77.46a1 1 0 0 1-.38.11"
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
              d="M12.67 8.25a3.26 3.26 0 0 0 0 6.5 3.26 3.26 0 0 0 0-6.5m1 2.93c0 .61-.33 1.19-.85 1.5l-.77.46a.75.75 0 0 1-1.03-.25.75.75 0 0 1 .26-1.03l.76-.46a.3.3 0 0 0 .12-.21v-.93a.76.76 0 0 1 1.51-.01z"
              fill="currentColor"
            />
            <path
              d="m19.21 4.17-5.5-2.06a3.5 3.5 0 0 0-2.07 0l-5.5 2.06a3.2 3.2 0 0 0-1.92 2.77v8.1c0 .81.53 1.88 1.18 2.36l5.5 4.11c.97.73 2.56.73 3.53 0l5.5-4.11a3.3 3.3 0 0 0 1.18-2.36v-8.1a3.2 3.2 0 0 0-1.9-2.77m-6.54 12.08a4.75 4.75 0 1 1 0-9.5 4.75 4.75 0 0 1 0 9.5"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSecurityTime;
