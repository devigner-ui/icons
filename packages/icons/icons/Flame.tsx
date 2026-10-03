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
            d="M7.37 8a28 28 0 0 0 2.59-4.62c.26-.65 1.06-.96 1.61-.53C14.94 5.4 20 10.38 20 15q-.02 1.76-.53 3m-14-7C4.6 12.45 4 13.81 4 15c0 3.1 2.25 5.3 4.08 6.37.42.24.83-.26.61-.7a8 8 0 0 1-.96-3.17c0-1.37 1.05-2.47 1.8-3.18.19-.18.49-.18.65.03.31.38.62.86.93 1.25.18.23.51.2.67-.04.99-1.52 1.22-3.46 1.27-4.9.02-.44.53-.66.82-.33 1.29 1.42 2.93 3.72 2.93 5.67 0 1.82-1.02 3.75-1.9 5.01-.26.37.03.88.46.74a7 7 0 0 0 1.6-.74"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
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
            d="M15.36 21.75C17.38 21.12 20 19.25 20 15c0-4.62-5.06-9.59-8.43-12.15-.55-.43-1.35-.12-1.61.53C8.3 7.5 4 11.85 4 15c0 3.1 2.25 5.3 4.08 6.37"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.36 21.75c-.43.14-.72-.37-.46-.74.88-1.26 1.9-3.2 1.9-5 0-1.96-1.64-4.26-2.93-5.68-.3-.33-.8-.11-.82.32-.05 1.45-.28 3.4-1.27 4.91a.4.4 0 0 1-.67.04c-.31-.4-.62-.87-.93-1.25-.16-.2-.46-.21-.66-.03-.74.7-1.79 1.8-1.79 3.18 0 .99.47 2.22.96 3.17.22.44-.19.95-.6.7"
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
            d="M20 15c0 4.26-2.62 6.12-4.64 6.75a.4.4 0 0 1-.23.01c-.3-.07-.44-.45-.23-.75.88-1.26 1.9-3.2 1.9-5 0-1.96-1.64-4.26-2.93-5.68-.3-.33-.8-.11-.82.32-.05 1.45-.28 3.4-1.27 4.91a.4.4 0 0 1-.67.04c-.31-.4-.62-.87-.93-1.25-.16-.2-.46-.21-.66-.03-.74.7-1.79 1.8-1.79 3.18 0 .93.36 1.9.77 2.69.2.39-.1.85-.48.77l-.12-.05c-1.8-.93-3.9-2.83-3.9-5.9C4 11.84 8.31 7.5 9.96 3.37c.26-.65 1.06-.96 1.61-.53C14.94 5.4 20 10.38 20 15"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.73 17.5c0 .93.36 1.9.77 2.69.2.39-.1.85-.48.77.48.54 3.66.96 7.1.8-.28-.07-.43-.45-.22-.75.88-1.26 1.9-3.2 1.9-5 0-1.96-1.64-4.26-2.93-5.68-.3-.33-.8-.11-.82.32-.05 1.45-.28 3.4-1.27 4.91a.4.4 0 0 1-.67.04c-.31-.4-.62-.87-.93-1.25-.16-.2-.46-.21-.66-.03-.74.7-1.79 1.8-1.79 3.18"
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
            d="M20 15c0 4.26-2.62 6.12-4.64 6.75-.43.14-.72-.37-.46-.74.88-1.26 1.9-3.2 1.9-5 0-1.96-1.64-4.26-2.93-5.68-.3-.33-.8-.11-.82.32-.05 1.45-.28 3.4-1.27 4.91a.4.4 0 0 1-.67.04c-.31-.4-.62-.87-.93-1.25-.16-.2-.46-.21-.66-.03-.74.7-1.79 1.8-1.79 3.18 0 .93.36 1.9.77 2.69.22.43-.17.95-.6.72-1.79-.93-3.9-2.83-3.9-5.9C4 11.84 8.31 7.5 9.96 3.37c.26-.65 1.06-.96 1.61-.53C14.94 5.4 20 10.38 20 15"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconFlame;
