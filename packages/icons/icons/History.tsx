import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHistory = forwardRef<SVGSVGElement, IconProps>(function IconHistory(
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
            d="M12 8v4l2.5 2.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m5.6 5.6-.53-.53zM4.34 6.87h-.75c0 .42.33.75.74.75zm2.54.76a.75.75 0 1 0 0-1.5zm-1.8-3.3a.75.75 0 1 0-1.5 0zm-1.25 6.46a.75.75 0 1 0-1.49-.2zm15.03-5.65a9.75 9.75 0 0 0-13.79-.07l1.06 1.06a8.25 8.25 0 0 1 11.67.07zM5.14 18.86a9.75 9.75 0 0 0 13.79.07l-1.06-1.06A8.25 8.25 0 0 1 6.2 17.8zm13.79.07a9.75 9.75 0 0 0-.07-13.8L17.8 6.2a8.25 8.25 0 0 1 .07 11.67zM5.07 5.07 3.81 6.34 4.87 7.4l1.26-1.27zm-.74 2.55 2.55.01v-1.5H4.35zm.76-.75-.01-2.55h-1.5v2.55zm-2.75 3.71a9.8 9.8 0 0 0 2.8 8.28L6.2 17.8a8.3 8.3 0 0 1-2.37-7.01z"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.08 5.07a9.75 9.75 0 0 1 13.78.07 9.75 9.75 0 0 1 .07 13.79 9.75 9.75 0 0 1-13.8-.07 9.8 9.8 0 0 1-2.79-8.28.75.75 0 1 1 1.49.2A8.3 8.3 0 0 0 6.2 17.8a8.25 8.25 0 0 0 11.67.07A8.25 8.25 0 0 0 17.8 6.2a8.25 8.25 0 0 0-11.66-.07h.75a.75.75 0 1 1-.01 1.5H4.33a.75.75 0 0 1-.74-.76l-.01-2.54a.75.75 0 1 1 1.5 0z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 7.25c.41 0 .75.34.75.75v3.69l2.28 2.28a.75.75 0 1 1-1.06 1.06l-2.43-2.43a1 1 0 0 1-.29-.7V8c0-.41.34-.75.75-.75"
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
            d="M5.08 5.07a9.75 9.75 0 0 1 13.78.07 9.75 9.75 0 0 1 .07 13.79 9.75 9.75 0 0 1-13.8-.07 9.8 9.8 0 0 1-2.79-8.28.75.75 0 1 1 1.49.2A8.3 8.3 0 0 0 6.2 17.8a8.25 8.25 0 0 0 11.67.07A8.25 8.25 0 0 0 17.8 6.2a8.25 8.25 0 0 0-11.66-.07h.75a.75.75 0 1 1-.01 1.5H4.33a.75.75 0 0 1-.74-.76l-.01-2.54a.75.75 0 1 1 1.5 0zM12 7.25c.41 0 .75.34.75.75v3.69l2.28 2.28a.75.75 0 1 1-1.06 1.06l-2.72-2.72V8c0-.41.34-.75.75-.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconHistory;
