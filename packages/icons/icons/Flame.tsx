import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconFlame = forwardRef<SVGSVGElement, IconProps>(function IconFlame(
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
            d="M15.36 21.5C17.38 20.87 20 19 20 14.75c0-4.62-5.06-9.59-8.43-12.15-.55-.43-1.35-.12-1.61.53a29 29 0 0 1-2.63 4.68M6.02 9.83C4.89 11.63 4 13.31 4 14.75c0 3.1 2.25 5.3 4.08 6.37"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.36 21.5c-.43.14-.72-.37-.46-.74.88-1.26 1.9-3.2 1.9-5 0-1.96-1.64-4.26-2.93-5.68-.3-.33-.8-.11-.82.32-.05 1.45-.28 3.4-1.27 4.91a.4.4 0 0 1-.67.04c-.31-.4-.62-.87-.93-1.25-.16-.2-.46-.21-.66-.03-.74.7-1.79 1.8-1.79 3.18 0 .99.47 2.22.96 3.17.22.44-.19.95-.6.7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
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
            d="M15.36 21.5C17.38 20.87 20 19 20 14.75c0-4.62-5.06-9.59-8.43-12.15-.55-.43-1.35-.12-1.61.53C8.3 7.25 4 11.6 4 14.75c0 3.1 2.25 5.3 4.08 6.37"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.36 21.5c-.43.14-.72-.37-.46-.74.88-1.26 1.9-3.2 1.9-5 0-1.96-1.64-4.26-2.93-5.68-.3-.33-.8-.11-.82.32-.05 1.45-.28 3.4-1.27 4.91a.4.4 0 0 1-.67.04c-.31-.4-.62-.87-.93-1.25-.16-.2-.46-.21-.66-.03-.74.7-1.79 1.8-1.79 3.18 0 .99.47 2.22.96 3.17.22.44-.19.95-.6.7"
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
            d="M20 14.8c0 4.26-2.62 6.12-4.64 6.75a.4.4 0 0 1-.23.01c-.3-.07-.44-.45-.23-.75.88-1.26 1.9-3.2 1.9-5 0-1.96-1.64-4.26-2.93-5.68-.3-.33-.8-.11-.82.32-.05 1.45-.28 3.4-1.27 4.91a.4.4 0 0 1-.67.04c-.31-.4-.62-.87-.93-1.25-.16-.2-.46-.21-.66-.03-.74.7-1.79 1.8-1.79 3.18 0 .93.36 1.9.77 2.69.2.39-.1.85-.48.77l-.12-.05c-1.8-.93-3.9-2.83-3.9-5.9C4 11.64 8.31 7.3 9.96 3.17c.26-.65 1.06-.96 1.61-.53C14.94 5.2 20 10.18 20 14.8"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.73 17.3c0 .93.36 1.9.77 2.69.2.39-.1.85-.48.77.48.54 3.66.96 7.1.8-.28-.07-.43-.45-.22-.75.88-1.26 1.9-3.2 1.9-5 0-1.96-1.64-4.26-2.93-5.68-.3-.33-.8-.11-.82.32-.05 1.45-.28 3.4-1.27 4.91a.4.4 0 0 1-.67.04c-.31-.4-.62-.87-.93-1.25-.16-.2-.46-.21-.66-.03-.74.7-1.79 1.8-1.79 3.18"
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
            d="M20 14.8c0 4.26-2.62 6.12-4.64 6.75-.43.14-.72-.37-.46-.74.88-1.26 1.9-3.2 1.9-5 0-1.96-1.64-4.26-2.93-5.68-.3-.33-.8-.11-.82.32-.05 1.45-.28 3.4-1.27 4.91a.4.4 0 0 1-.67.04c-.31-.4-.62-.87-.93-1.25-.16-.2-.46-.21-.66-.03-.74.7-1.79 1.8-1.79 3.18 0 .93.36 1.9.77 2.69.22.43-.17.95-.6.72-1.79-.93-3.9-2.83-3.9-5.9C4 11.64 8.31 7.3 9.96 3.17c.26-.65 1.06-.96 1.61-.53C14.94 5.2 20 10.18 20 14.8"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconFlame;
