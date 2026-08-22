import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconActivity = forwardRef<SVGSVGElement, IconProps>(function IconActivity(
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
            d="M9.67 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m8 14.49 2.38-3.09a1 1 0 0 1 1.41-.18l1.83 1.44c.44.34 1.07.26 1.41-.17l2.31-2.98"
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
            d="M16.86 2H8.48C4.84 2 2.67 4.17 2.67 7.81v8.37c0 3.65 2.17 5.82 5.81 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2"
            fill="currentColor"
          />
          <path
            d="M8 15.24a.7.7 0 0 1-.46-.16.75.75 0 0 1-.14-1.05l2.38-3.09a1.76 1.76 0 0 1 2.47-.31l1.83 1.44q.11.08.19.05.07.01.17-.1l2.31-2.98a.74.74 0 0 1 1.05-.13c.33.25.39.72.13 1.05l-2.31 2.98q-.45.57-1.17.66-.72.08-1.3-.36l-1.83-1.44a.2.2 0 0 0-.19-.05q-.07-.01-.17.1l-2.38 3.09q-.21.3-.58.3"
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
            d="M16.86 2H8.48C4.84 2 2.67 4.17 2.67 7.81v8.37c0 3.65 2.17 5.82 5.81 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2m1.07 7.96-2.31 2.98q-.45.57-1.17.66-.73.08-1.3-.36l-1.83-1.44a.2.2 0 0 0-.19-.05q-.07-.01-.17.1l-2.38 3.09a.8.8 0 0 1-.59.29.7.7 0 0 1-.46-.16.75.75 0 0 1-.14-1.05l2.38-3.09a1.76 1.76 0 0 1 2.47-.31l1.83 1.44q.11.08.19.05.07.01.17-.1l2.31-2.98a.74.74 0 0 1 1.05-.13c.33.27.39.74.14 1.06"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconActivity;
