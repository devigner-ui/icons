import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRouting = forwardRef<SVGSVGElement, IconProps>(function IconRouting(
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
            d="M8 4.25a.75.75 0 0 0 0 1.5zm12 14H7.5v1.5H20zm-12.5-5.5h9v-1.5h-9zm9-8.5H8v1.5h8.5zm4.25 4.25c0-2.35-1.9-4.25-4.25-4.25v1.5a2.75 2.75 0 0 1 2.75 2.75zm-4.25 4.25c2.35 0 4.25-1.9 4.25-4.25h-1.5a2.75 2.75 0 0 1-2.75 2.75zM4.75 15.5a2.75 2.75 0 0 1 2.75-2.75v-1.5a4.25 4.25 0 0 0-4.25 4.25zm2.75 2.75a2.75 2.75 0 0 1-2.75-2.75h-1.5c0 2.35 1.9 4.25 4.25 4.25z"
            fill="currentColor"
          />
          <path
            d="m18 17 2 2-2 2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="6"
            cy="5.00024"
            r="2"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.47 16.47c.3-.3.77-.3 1.06 0l2 2c.3.3.3.77 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06L18.94 19l-1.47-1.47a.75.75 0 0 1 0-1.06"
            fill="currentColor"
          />
          <path d="M8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0" fill="currentColor" />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.85 5.75a2 2 0 0 0 0-1.5h8.65a4.25 4.25 0 0 1 0 8.5h-9a2.75 2.75 0 0 0 0 5.5h10.69l.75.75-.75.75H7.5a4.25 4.25 0 1 1 0-8.5h9a2.75 2.75 0 1 0 0-5.5z"
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
            d="M16.5 4.25a4.25 4.25 0 0 1 0 8.5h-9a2.75 2.75 0 0 0 0 5.5h10.69l-.72-.72a.75.75 0 0 1 1.06-1.06l2 2c.3.3.3.77 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l.72-.72H7.5a4.25 4.25 0 1 1 0-8.5h9a2.75 2.75 0 1 0 0-5.5H7.85a2 2 0 1 1 0-1.5z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconRouting;
