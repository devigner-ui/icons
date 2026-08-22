import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconIPhone = forwardRef<SVGSVGElement, IconProps>(function IconIPhone(
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
            d="M4 10c0-3.77 0-5.66 1.17-6.83S8.23 2 12 2s5.66 0 6.83 1.17S20 6.23 20 10v4c0 3.77 0 5.66-1.17 6.83S15.77 22 12 22s-5.66 0-6.83-1.17S4 17.77 4 14z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15 19H9"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m16.75 2.38-.09.12c-.75 1.14-1.13 1.7-1.68 2.05l-.34.18C14.04 5 13.36 5 12 5s-2.04 0-2.64-.27l-.34-.18c-.55-.34-.93-.91-1.68-2.05l-.09-.12"
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
            opacity={duotone ? "0.4" : "1"}
            d="M20 9.8v4.07c0 3.83 0 5.75-1.17 6.94S15.77 22 12 22s-5.66 0-6.83-1.2C4 19.63 4 17.7 4 13.88V9.8c0-3.83 0-5.75 1.17-6.94q.56-.56 1.39-.82c.35-.1.73.05.94.35l.15.24c.64.97.86 1.3 1.37 1.63l.34.19c.6.27 1.28.27 2.64.27s2.04 0 2.64-.27q.17-.08.34-.2c.51-.31.73-.65 1.37-1.62l.15-.24c.2-.3.56-.46.91-.36q.86.26 1.42.83C20 4.06 20 5.96 20 9.8"
            fill="currentColor"
          />
          <path
            d="M8.25 18.98c0-.41.34-.75.75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75"
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
            d="M20 9.8v4.07c0 3.83 0 5.75-1.17 6.94S15.77 22 12 22s-5.66 0-6.83-1.2C4 19.63 4 17.7 4 13.88V9.8c0-3.83 0-5.75 1.17-6.94q.56-.56 1.39-.82c.35-.1.73.05.94.35l.15.24c.64.97.86 1.3 1.37 1.63l.34.19c.6.27 1.28.27 2.64.27s2.04 0 2.64-.27q.17-.08.34-.2c.51-.31.73-.65 1.37-1.62l.15-.24c.2-.3.56-.46.91-.36q.86.26 1.42.83C20 4.06 20 5.96 20 9.8M9 18.23a.75.75 0 0 0-.75.75c0 .42.34.76.75.76h6c.41 0 .75-.34.75-.76a.75.75 0 0 0-.75-.75z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconIPhone;
