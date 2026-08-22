import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSimcard2 = forwardRef<SVGSVGElement, IconProps>(function IconSimcard2(
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
            d="M16.67 12.69v5.39c0 2.34-1.56 3.89-3.89 3.89H6.56c-2.33 0-3.89-1.55-3.89-3.89v-7.77c0-2.34 1.56-3.89 3.89-3.89h3.83a4 4 0 0 1 2.75 1.14l2.39 2.38a4 4 0 0 1 1.14 2.75"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.67 8.25v5.39c0 2.33-1.56 3.89-3.89 3.89h-2.11v-4.84a4 4 0 0 0-1.14-2.75l-2.39-2.38a4 4 0 0 0-2.75-1.14H8.67v-.56c0-2.33 1.56-3.89 3.89-3.89h3.83a4 4 0 0 1 2.75 1.14l2.39 2.39a4 4 0 0 1 1.14 2.75"
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
            d="M16.67 12.69v5.39c0 2.34-1.56 3.89-3.89 3.89H6.56c-2.33 0-3.89-1.55-3.89-3.89v-7.77c0-2.34 1.56-3.89 3.89-3.89h3.83a4 4 0 0 1 2.75 1.14l2.39 2.38a4 4 0 0 1 1.14 2.75"
            fill="currentColor"
          />
          <path
            d="M22.67 8.25v5.39c0 2.33-1.56 3.89-3.89 3.89h-2.11v-4.84a4 4 0 0 0-1.14-2.75l-2.39-2.38a4 4 0 0 0-2.75-1.14H8.67v-.56c0-2.33 1.56-3.89 3.89-3.89h3.83a4 4 0 0 1 2.75 1.14l2.39 2.39a4 4 0 0 1 1.14 2.75"
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
            d="M16.67 12.69v5.39c0 2.34-1.56 3.89-3.89 3.89H6.56c-2.33 0-3.89-1.55-3.89-3.89v-7.77c0-2.34 1.56-3.89 3.89-3.89h3.83a4 4 0 0 1 2.75 1.14l2.39 2.38a4 4 0 0 1 1.14 2.75"
            fill="currentColor"
          />
          <path
            d="M22.67 8.25v5.39c0 2.33-1.56 3.89-3.9 3.89h-1.1v-4.84c0-1.29-.52-2.55-1.43-3.46l-2.39-2.38a5 5 0 0 0-3.46-1.43h-1.7c.18-2.08 1.69-3.45 3.87-3.45h3.83a4 4 0 0 1 2.75 1.14l2.39 2.39a4 4 0 0 1 1.14 2.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconSimcard2;
