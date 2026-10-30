import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMoneySend = forwardRef<SVGSVGElement, IconProps>(
  function IconMoneySend(
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
            d="M9.5 13.75c0 .97.75 1.75 1.67 1.75h1.88c.8 0 1.45-.68 1.45-1.53 0-.91-.4-1.24-.99-1.45l-3.01-1.05c-.59-.21-.99-.53-.99-1.45 0-.84.65-1.53 1.45-1.53h1.88c.92 0 1.67.78 1.67 1.75"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M12 7.5v9"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M12 2a10 10 0 0 0-4.4 18.98"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M22 12a10 10 0 0 1-10 10"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M22 6V2h-4"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m17 7 5-5"
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
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M9.5 13.75c0 .97.75 1.75 1.67 1.75h1.88c.8 0 1.45-.68 1.45-1.53 0-.91-.4-1.24-.99-1.45l-3.01-1.05c-.59-.21-.99-.53-.99-1.45 0-.84.65-1.53 1.45-1.53h1.88c.92 0 1.67.78 1.67 1.75"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 7.5v9"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              d="M22 12A10 10 0 1 1 12 2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 6V2h-4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m17 7 5-5"
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
              d="M16.67 8.15a.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06l2.05-2.05a10 10 0 1 0 1.06 1.06L17.2 7.93a.7.7 0 0 1-.53.22"
              fill="currentColor"
            />
            <path
              d="m13.42 12.22-1-.35V9.65h.08c.51 0 .92.45.92 1 0 .41.34.75.75.75s.75-.34.75-.75c0-1.38-1.08-2.5-2.42-2.5h-.08V7.9a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v.25h-.3a2.24 2.24 0 0 0-2.2 2.28c0 1.46.85 1.93 1.5 2.16l1 .35v2.22h-.08c-.51 0-.92-.45-.92-1a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75c0 1.38 1.08 2.5 2.42 2.5h.08v.25c0 .41.34.75.75.75s.75-.34.75-.75v-.25h.3c1.21 0 2.2-1.02 2.2-2.28 0-1.47-.85-1.94-1.5-2.16m-3.01-1.06c-.34-.12-.49-.19-.49-.74 0-.43.32-.78.7-.78h.3v1.69zm2.31 3.99h-.3v-1.69l.51.18c.34.12.49.19.49.74 0 .42-.32.77-.7.77"
              fill="currentColor"
            />
            <path
              d="M22.36 2.11a.8.8 0 0 0-.7-.47h-4a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h2.19l-1.67 1.67q.57.5 1.06 1.06l1.67-1.67v2.2c0 .41.34.75.75.75s.75-.34.75-.75v-4a1 1 0 0 0-.05-.29"
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
              d="M9.87 10.43c0 .54.15.62.5.74l.5.18v-1.7h-.3c-.38 0-.7.35-.7.78"
              fill="currentColor"
            />
            <path
              d="M12.37 15.15h.3c.4 0 .7-.35.7-.78 0-.54-.15-.62-.49-.74l-.5-.18z"
              fill="currentColor"
            />
            <path
              d="m19.2 5.88-2.05 2.05a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06l2.05-2.05a10 10 0 1 0 1.06 1.06m-5.83 6.34c.64.23 1.5.69 1.5 2.16 0 1.25-.99 2.28-2.2 2.28h-.3v.25c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-.25h-.08a2.47 2.47 0 0 1-2.42-2.5c0-.42.34-.76.75-.76s.75.34.75.75c0 .55.41 1 .92 1h.08v-2.22l-1-.35c-.64-.23-1.5-.69-1.5-2.16 0-1.25 1-2.28 2.2-2.28h.3V7.9c0-.41.34-.75.75-.75s.75.34.75.75v.25h.08a2.47 2.47 0 0 1 2.42 2.5c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75c0-.55-.4-1-.92-1h-.08v2.22z"
              fill="currentColor"
            />
            <path
              d="M22.31 2.11a.8.8 0 0 0-.4-.41 1 1 0 0 0-.29-.05h-4a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h2.2l-1.68 1.67q.57.5 1.06 1.06l1.67-1.67V6.4c0 .41.34.75.75.75s.75-.34.75-.75v-4q0-.15-.06-.29"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMoneySend;
