import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconWirelessCharge = forwardRef<SVGSVGElement, IconProps>(
  function IconWirelessCharge(
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
              d="M12.06 18A7.85 7.85 0 0 0 20 10.06 8.16 8.16 0 0 0 11.94 2 7.85 7.85 0 0 0 4 9.94 8.16 8.16 0 0 0 12.06 18"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12.86 7 10 10h4l-2.86 3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M11.25 22a.75.75 0 0 0 1.5 0zm-.13-1.08-.29.7zm-.54-.54-.7.29zm2.84 0 .7.29zm-.54.54.29.7zm-1.63.08v1h1.5v-1zm1.5-3v1.5h1.5V18zm-1.5 1.5V18h-1.5v1.5zm.75.75h-.5l-.1-.02-.57 1.39q.3.1.57.12l.6.01zm-2.25-.75.01.6q0 .27.12.57l1.39-.57-.01-.1-.01-.5zm1.65.73a.3.3 0 0 1-.13-.13l-1.39.57q.29.66.95.95zm1.35-.73v.5l-.02.1 1.39.57q.1-.3.12-.57l.01-.6zM12 21.75l.6-.01q.27 0 .57-.12l-.57-1.39-.1.01-.5.01zm.73-1.65a.3.3 0 0 1-.13.13l.57 1.39q.66-.29.95-.95z"
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
            <path
              d="m11.12 20.92.13.04V22a.75.75 0 0 0 1.5 0v-1.04q.08 0 .13-.04a1 1 0 0 0 .54-.54c.08-.18.08-.41.08-.88v-.6a9 9 0 0 1-3-.05v.65c0 .47 0 .7.08.88q.17.38.54.54"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M21 10.07A8.83 8.83 0 0 1 12.07 19 9.2 9.2 0 0 1 3 9.93 8.83 8.83 0 0 1 11.93 1 9.2 9.2 0 0 1 21 10.07"
              fill="currentColor"
            />
            <path
              d="M13.37 6.46c.3.28.32.76.03 1.06l-1.65 1.73H14a.75.75 0 0 1 .54 1.27l-2.85 3a.75.75 0 0 1-1.09-1.04l1.65-1.73H10a.75.75 0 0 1-.54-1.27l2.85-3a.75.75 0 0 1 1.06-.02"
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
              d="M12.06 18A7.85 7.85 0 0 0 20 10.06 8.16 8.16 0 0 0 11.94 2 7.85 7.85 0 0 0 4 9.94 8.16 8.16 0 0 0 12.06 18m1.31-11.54c.3.28.32.76.03 1.06l-1.65 1.73H14a.75.75 0 0 1 .54 1.27l-2.85 3a.75.75 0 0 1-1.1-1.04l1.66-1.73H10a.75.75 0 0 1-.54-1.27l2.85-3a.75.75 0 0 1 1.06-.02"
              fill="currentColor"
            />
            <path
              d="m11.12 20.92.13.04V22a.75.75 0 0 0 1.5 0v-1.04q.08 0 .13-.04a1 1 0 0 0 .54-.54c.08-.18.08-.41.08-.88v-.6a9 9 0 0 1-3-.05v.65c0 .47 0 .7.08.88q.17.38.54.54"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconWirelessCharge;
