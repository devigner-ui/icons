import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconWiFiRouterRound = forwardRef<SVGSVGElement, IconProps>(
  function IconWiFiRouterRound(
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
              d="M2 15a5 5 0 0 1 5-5h10a5 5 0 1 1 0 10H7a5 5 0 0 1-5-5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18.33 22.34a.75.75 0 1 0 1.34-.68zm-1-2 1 2 1.34-.68-1-2z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M5.67 22.34a.75.75 0 0 1-1.34-.68zm1-2-1 2-1.34-.68 1-2z"
              fill="currentColor"
            />
            <path
              d="M8.5 15a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 15h6.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M21.58 5.4a5.5 5.5 0 0 0-10.16 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M19.38 6.66a3 3 0 0 0-5.76 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path d="M17.5 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0" fill="currentColor" />
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
              d="M7 14a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 14.75a5 5 0 0 1 5-5h10a5 5 0 1 1 0 10H7a5 5 0 0 1-5-5m2.75 0a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0M12 14a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m5.47 19.51-1.11 1.85a.75.75 0 1 0 1.28.78l1.43-2.39H7a5 5 0 0 1-1.53-.24"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m16.93 19.75 1.43 2.39a.75.75 0 0 0 1.28-.78l-1.1-1.85a5 5 0 0 1-1.54.24z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.5 3.5a4.75 4.75 0 0 0-4.4 2.93.75.75 0 1 1-1.38-.57 6.25 6.25 0 0 1 11.56 0 .75.75 0 0 1-1.39.57A4.8 4.8 0 0 0 16.5 3.5"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.5 6c-1.02 0-1.89.68-2.16 1.62a.75.75 0 0 1-1.44-.42 3.75 3.75 0 0 1 7.2 0 .75.75 0 1 1-1.44.42A2.25 2.25 0 0 0 16.5 6"
              fill="currentColor"
            />
            <path
              d="M17.5 7.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
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
              d="M16.5 3.5a4.75 4.75 0 0 0-4.4 2.93.75.75 0 1 1-1.38-.57 6.25 6.25 0 0 1 11.56 0 .75.75 0 0 1-1.39.57A4.8 4.8 0 0 0 16.5 3.5"
              fill="currentColor"
            />
            <path
              d="M16.5 6c-1.02 0-1.89.68-2.16 1.62a.75.75 0 0 1-1.44-.42 3.75 3.75 0 0 1 7.2 0 .75.75 0 1 1-1.44.42A2.25 2.25 0 0 0 16.5 6"
              fill="currentColor"
            />
            <path
              d="M16.5 8.75a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
              fill="currentColor"
            />
            <path
              d="M7 14a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 14.75a5 5 0 0 1 5-5h10a5 5 0 0 1 1.53 9.76l1.11 1.85a.75.75 0 0 1-1.28.78l-1.43-2.39H7.07l-1.43 2.39a.75.75 0 1 1-1.28-.78l1.1-1.85A5 5 0 0 1 2 14.75m2.75 0a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0M12 14a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconWiFiRouterRound;
