import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconEmptyWalletTick = forwardRef<SVGSVGElement, IconProps>(
  function IconEmptyWalletTick(
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
        {variant === "Broken" ? (
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
            d="M22.81 13.47v2.06c0 .55-.44 1-1 1.02h-1.96c-1.08 0-2.07-.79-2.16-1.87a2 2 0 0 1 .6-1.63 2 2 0 0 1 1.44-.6h2.08c.56.02 1 .47 1 1.02Z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M7.25 11.5h7"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M9.25 18.5a4 4 0 0 1-1.37 3 3.97 3.97 0 0 1-6.05-.94 3.97 3.97 0 0 1 3.42-6.06 4 4 0 0 1 4 4Z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m3.69 18.5.99.99 2.13-1.97"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M14.25 21.5H7.88q.47-.4.79-.94.57-.92.58-2.06a4 4 0 0 0-6.5-3.12v-4.37a3.77 3.77 0 0 1 3.76-3.76h11.48a3.77 3.77 0 0 1 3.76 3.76v1.44h-2.02a2 2 0 0 0-1.44.6 2 2 0 0 0-.6 1.63c.09 1.08 1.08 1.87 2.16 1.87h1.9v1.19a3.77 3.77 0 0 1-3.76 3.76"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M12.53 1.67a1.9 1.9 0 0 1 2.57 1.78v3.8"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M2.75 11.91V7.34c0-1.19.73-2.25 1.84-2.67l3.97-1.5"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
        </svg>
      ) : !fill ? (
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
              d="M18.26 13.05a2 2 0 0 0-.6 1.63c.09 1.08 1.08 1.87 2.16 1.87h1.9v1.19a3.77 3.77 0 0 1-3.76 3.76H7.85q.47-.4.79-.94.57-.92.58-2.06a4 4 0 0 0-6.5-3.12v-4.37a3.77 3.77 0 0 1 3.76-3.76h11.48a3.77 3.77 0 0 1 3.76 3.76v1.44H19.7a2 2 0 0 0-1.44.6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2.72 11.91V7.34c0-1.19.73-2.25 1.84-2.67l7.94-3a1.9 1.9 0 0 1 2.57 1.78v3.8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22.78 13.47v2.06c0 .55-.44 1-1 1.02h-1.96c-1.08 0-2.07-.79-2.16-1.87a2 2 0 0 1 .6-1.63 2 2 0 0 1 1.44-.6h2.08c.56.02 1 .47 1 1.02"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7.22 11.5h7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.22 18.5a4 4 0 0 1-1.37 3 3.97 3.97 0 0 1-6.05-.94 3.97 3.97 0 0 1 3.42-6.06 4 4 0 0 1 4 4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m3.66 18.5.99.99 2.13-1.97"
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
              d="M5.22 14.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8m2.07 3.57-2.13 1.97a.8.8 0 0 1-.51.2.7.7 0 0 1-.53-.22l-.99-.99a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l.48.48 1.6-1.48a.76.76 0 0 1 1.06.04c.28.3.26.78-.04 1.06"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M19.7 12.45h2.02v-1.44a3.77 3.77 0 0 0-3.76-3.76H6.48a3.77 3.77 0 0 0-3.76 3.76v4.37a4 4 0 0 1 5.13 6.12h10.11a3.77 3.77 0 0 0 3.76-3.76v-1.19h-1.9c-1.08 0-2.07-.79-2.16-1.87a2 2 0 0 1 .6-1.63 2 2 0 0 1 1.44-.6"
              fill="currentColor"
            />
            <path
              d="M15.07 3.45v3.8H6.48a3.77 3.77 0 0 0-3.76 3.76V7.34c0-1.19.73-2.25 1.84-2.67l7.94-3a1.9 1.9 0 0 1 2.57 1.78"
              fill="currentColor"
            />
            <path
              d="M22.78 13.47v2.06c0 .55-.44 1-1 1.02h-1.96c-1.08 0-2.07-.79-2.16-1.87a2 2 0 0 1 .6-1.63 2 2 0 0 1 1.44-.6h2.08c.56.02 1 .47 1 1.02"
              fill="currentColor"
            />
            <path
              d="M14.22 12.25h-7a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h7c.41 0 .75.34.75.75s-.34.75-.75.75"
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
              d="M5.67 14.5a4 4 0 1 0 .01 8 4 4 0 0 0 0-8m2.07 3.57-2.13 1.97a1 1 0 0 1-.5.2.7.7 0 0 1-.54-.22l-.99-.99a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l.48.48 1.6-1.48a.76.76 0 0 1 1.06.04c.28.3.26.78-.04 1.06"
              fill="currentColor"
            />
            <path
              d="M15.52 3.45v3.8h-1.5v-3.8c0-.27-.24-.4-.4-.4l-.15.03-7.93 2.99c-.53.2-.87.7-.87 1.27v.67a3.7 3.7 0 0 0-1.5 3V7.34c0-1.19.73-2.25 1.84-2.67l7.94-3q.33-.12.67-.12c1 0 1.9.81 1.9 1.9"
              fill="currentColor"
            />
            <path
              d="M22.17 14v1a.5.5 0 0 1-.49.5h-1.46c-.53 0-1-.39-1.05-.91a1 1 0 0 1 1-1.09h1.5c.3.01.5.23.5.5"
              fill="currentColor"
            />
            <path
              d="M20.15 12.45h1.02a1 1 0 0 0 1-1v-.44a3.77 3.77 0 0 0-3.76-3.76H6.93a3.74 3.74 0 0 0-3.76 3.76v1.78c0 .38.4.62.76.5a5.5 5.5 0 0 1 7.24 5.21 6 6 0 0 1-.49 2.21c-.16.36.1.79.48.79h7.25a3.77 3.77 0 0 0 3.76-3.76v-.19a1 1 0 0 0-1-1h-.87c-.96 0-1.88-.59-2.13-1.52-.2-.76.04-1.5.54-1.98a2 2 0 0 1 1.44-.6m-5.48-.2h-5a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconEmptyWalletTick;
