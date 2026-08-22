import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconWalletMoney = forwardRef<SVGSVGElement, IconProps>(
  function IconWalletMoney(
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
              d="M6 9h4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.83 10h-2.6C16.45 10 15 11.34 15 13s1.45 3 3.23 3H21c.54-.03.97-.43 1-.93l.01-.15v-3.98c-.04-.5-.47-.9-1-.94z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <circle
              opacity={duotone ? "0.4" : "1"}
              cx="18"
              cy="13.0005"
              r="1"
              fill="currentColor"
            />
            <path
              d="M20.97 10c-.08-1.87-.33-3.02-1.14-3.83C18.66 5 16.77 5 13 5h-3C6.23 5 4.34 5 3.17 6.17S2 9.23 2 13s0 5.66 1.17 6.83S6.23 21 10 21h3c3.77 0 5.66 0 6.83-1.17.8-.8 1.06-1.96 1.14-3.83"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m6 5 3.74-2.48c1.05-.7 2.47-.7 3.52 0L17 5"
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
              d="M4.9 9.61c0-.4.32-.72.71-.72h3.86a.73.73 0 0 1 0 1.46H5.61a.73.73 0 0 1-.72-.74"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.19 10H18.2c-2.26 0-4.2 1.74-4.2 4s1.94 4 4.21 4h2.98a1.9 1.9 0 0 0 1.8-1.74l.01-.2v-4.32A1.9 1.9 0 0 0 21.19 10m-3.22 5.07c.59 0 1.06-.48 1.06-1.07s-.47-1.07-1.06-1.07a1.07 1.07 0 0 0 0 2.14"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M21.14 10c0-1.18-.04-2.45-.8-3.35l-.23-.26a4.7 4.7 0 0 0-2.87-1.24C16.1 5 14.64 5 12.8 5h-2.12c-1.83 0-3.29 0-4.43.15A4.7 4.7 0 0 0 3.4 6.4a4.7 4.7 0 0 0-1.24 2.87C2 10.4 2 11.86 2 13.7v.12c0 1.83 0 3.29.15 4.43A4.7 4.7 0 0 0 3.4 21.1c.75.75 1.7 1.08 2.87 1.24 1.14.15 2.6.15 4.43.15h2.12c1.83 0 3.29 0 4.43-.15a4.7 4.7 0 0 0 2.87-1.24q.3-.3.52-.66c.46-.72.5-1.6.5-2.45h-2.92C15.94 18 14 16.26 14 14s1.94-4 4.21-4z"
              fill="currentColor"
            />
            <path
              d="M10.1 2.57 8 4 6.27 5.15C7.4 5 8.86 5 10.69 5h2.12c1.83 0 3.29 0 4.43.15q.34.04.66.12L16 4l-2.11-1.43a3.4 3.4 0 0 0-3.79 0"
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
              d="M20.41 9.86H17.8c-2 0-3.7 1.58-3.7 3.64s1.7 3.64 3.7 3.64h2.61A1.7 1.7 0 0 0 22 15.56v-4.12a1.7 1.7 0 0 0-1.59-1.58m-2.82 4.61c.51 0 .93-.43.93-.97a.95.95 0 0 0-.93-.97.95.95 0 0 0-.93.97c0 .54.41.97.93.97"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.23 18.6c.15 0 .26.13.22.27-.2.7-.5 1.28-1 1.78a4.5 4.5 0 0 1-2.76 1.2c-1.1.15-2.5.15-4.27.15h-2.04c-1.77 0-3.17 0-4.27-.15a4.5 4.5 0 0 1-2.77-1.2 4.6 4.6 0 0 1-1.2-2.79C2 16.76 2 15.34 2 13.56v-.11c0-1.79 0-3.2.15-4.31a4.6 4.6 0 0 1 1.2-2.79 4.5 4.5 0 0 1 2.76-1.2C7.2 5 8.6 5 10.38 5h2.04c1.77 0 3.17 0 4.27.15 1.13.15 2.04.47 2.76 1.2.5.5.8 1.09 1 1.78a.2.2 0 0 1-.22.27H17.8a5.1 5.1 0 0 0-5.14 5.1c0 2.92 2.4 5.1 5.14 5.1zM5.61 8.89a.73.73 0 0 0 0 1.46h3.86c.4 0 .72-.33.72-.74s-.32-.72-.72-.72z"
              fill="currentColor"
            />
            <path
              d="m7.78 4.02 1.96-1.44a3 3 0 0 1 3.52 0l1.97 1.45Q14 4 12.48 4h-2.17q-1.38 0-2.53.02"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconWalletMoney;
