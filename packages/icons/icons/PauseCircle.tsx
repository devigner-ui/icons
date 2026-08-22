import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPauseCircle = forwardRef<SVGSVGElement, IconProps>(
  function IconPauseCircle(
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
            <circle
              opacity={duotone ? "0.4" : "1"}
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M8 9.5c0-.47 0-.7.08-.88a1 1 0 0 1 .54-.54C8.8 8 9.03 8 9.5 8s.7 0 .88.08q.38.17.54.54c.08.18.08.41.08.88v5c0 .47 0 .7-.08.88a1 1 0 0 1-.54.54c-.18.08-.41.08-.88.08s-.7 0-.88-.08a1 1 0 0 1-.54-.54C8 15.2 8 14.97 8 14.5z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M13 9.5c0-.47 0-.7.08-.88a1 1 0 0 1 .54-.54c.18-.08.41-.08.88-.08s.7 0 .88.08q.38.17.54.54c.08.18.08.41.08.88v5c0 .47 0 .7-.08.88a1 1 0 0 1-.54.54c-.18.08-.41.08-.88.08s-.7 0-.88-.08a1 1 0 0 1-.54-.54c-.08-.18-.08-.41-.08-.88z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
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
              d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0"
              fill="currentColor"
            />
            <path
              d="M8.08 8.62C8 8.8 8 9.03 8 9.5v5c0 .47 0 .7.08.88q.17.38.54.54c.18.08.41.08.88.08s.7 0 .88-.08a1 1 0 0 0 .54-.54c.08-.18.08-.41.08-.88v-5c0-.47 0-.7-.08-.88a1 1 0 0 0-.54-.54C10.2 8 9.97 8 9.5 8s-.7 0-.88.08a1 1 0 0 0-.54.54"
              fill="currentColor"
            />
            <path
              d="M13.08 8.62c-.08.18-.08.41-.08.88v5c0 .47 0 .7.08.88q.17.38.54.54c.18.08.41.08.88.08s.7 0 .88-.08a1 1 0 0 0 .54-.54c.08-.18.08-.41.08-.88v-5c0-.47 0-.7-.08-.88a1 1 0 0 0-.54-.54C15.2 8 14.97 8 14.5 8s-.7 0-.88.08a1 1 0 0 0-.54.54"
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
              d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20M8.08 8.62C8 8.8 8 9.03 8 9.5v5c0 .47 0 .7.08.88q.17.38.54.54c.18.08.41.08.88.08s.7 0 .88-.08a1 1 0 0 0 .54-.54c.08-.18.08-.41.08-.88v-5c0-.47 0-.7-.08-.88a1 1 0 0 0-.54-.54C10.2 8 9.97 8 9.5 8s-.7 0-.88.08a1 1 0 0 0-.54.54m5 0c-.08.18-.08.41-.08.88v5c0 .47 0 .7.08.88q.17.38.54.54c.18.08.41.08.88.08s.7 0 .88-.08a1 1 0 0 0 .54-.54c.08-.18.08-.41.08-.88v-5c0-.47 0-.7-.08-.88a1 1 0 0 0-.54-.54C15.2 8 14.97 8 14.5 8s-.7 0-.88.08a1 1 0 0 0-.54.54"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconPauseCircle;
