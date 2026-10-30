import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMessagesRound = forwardRef<SVGSVGElement, IconProps>(
  function IconMessagesRound(
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
            d="M13.17 2c-4.88 0-8.83 3.69-8.83 8.24q0 .39.04.76a5.7 5.7 0 0 1 3.12-.91c3.04 0 5.5 2.3 5.5 5.14 0 1.19-.44 2.29-1.18 3.16q.66.09 1.35.09l4.19 2.49a1 1 0 0 0 1.5-.98l-.39-3.16A8 8 0 0 0 22 10.24c0-3.07-1.8-5.75-4.48-7.17"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M4.38 11a5.7 5.7 0 0 1 3.12-.91c3.04 0 5.5 2.3 5.5 5.14 0 1.19-.44 2.29-1.18 3.16a5.6 5.6 0 0 1-4.32 1.97l-2.61 1.55c-.44.27-1-.1-.94-.61l.25-1.97a5 5 0 0 1-2.12-4.97"
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
              opacity={duotone ? "0.4" : "1"}
              d="m18.47 16.83.39 3.16a1 1 0 0 1-1.5.98l-4.19-2.49q-.69 0-1.35-.09A5 5 0 0 0 13 15.23c0-2.84-2.46-5.14-5.5-5.14-1.16 0-2.23.33-3.12.91q-.04-.37-.04-.76C4.34 5.69 8.29 2 13.17 2S22 5.69 22 10.24c0 2.7-1.39 5.09-3.53 6.59"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13 15.23c0 1.19-.44 2.29-1.18 3.16a5.6 5.6 0 0 1-4.32 1.97l-2.61 1.55c-.44.27-1-.1-.94-.61l.25-1.97a5 5 0 0 1-2.2-4.1c0-1.76.94-3.31 2.38-4.23a5.7 5.7 0 0 1 3.12-.91c3.04 0 5.5 2.3 5.5 5.14"
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
              d="m18.47 16.83.39 3.16a1 1 0 0 1-1.5.98l-4.19-2.49q-.69 0-1.35-.09A5 5 0 0 0 13 15.23c0-2.84-2.46-5.14-5.5-5.14-1.16 0-2.23.33-3.12.91q-.04-.37-.04-.76C4.34 5.69 8.29 2 13.17 2S22 5.69 22 10.24c0 2.7-1.39 5.09-3.53 6.59"
              fill="currentColor"
            />
            <path
              d="M13 15.23c0 1.19-.44 2.29-1.18 3.16a5.6 5.6 0 0 1-4.32 1.97l-2.61 1.55c-.44.27-1-.1-.94-.61l.25-1.97a5 5 0 0 1-2.2-4.1c0-1.76.94-3.31 2.38-4.23a5.7 5.7 0 0 1 3.12-.91c3.04 0 5.5 2.3 5.5 5.14"
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
              d="m18.47 16.83.39 3.16a1 1 0 0 1-1.5.98l-3.46-2.06c-.24-.14-.3-.44-.17-.68.5-.92.77-1.96.77-3 0-3.66-3.14-6.64-7-6.64a7 7 0 0 0-2.28.36.5.5 0 0 1-.64-.6C5.49 4.71 8.99 2 13.17 2 18.05 2 22 5.69 22 10.24c0 2.7-1.39 5.09-3.53 6.59"
              fill="currentColor"
            />
            <path
              d="M13 15.23c0 1.19-.44 2.29-1.18 3.16a5.6 5.6 0 0 1-4.32 1.97l-2.61 1.55c-.44.27-1-.1-.94-.61l.25-1.97a5 5 0 0 1-2.2-4.1c0-1.76.94-3.31 2.38-4.23a5.7 5.7 0 0 1 3.12-.91c3.04 0 5.5 2.3 5.5 5.14"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMessagesRound;
