import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconStar = forwardRef<SVGSVGElement, IconProps>(function IconStar(
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
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m13.73 3.51 1.76 3.52c.24.49.88.96 1.42 1.05l3.19.53c2.04.34 2.52 1.82 1.05 3.28l-2.48 2.48a2.2 2.2 0 0 0-.52 1.81l.71 3.07c.56 2.43-.73 3.37-2.88 2.1l-2.99-1.77a2.2 2.2 0 0 0-1.98 0l-2.99 1.77c-2.14 1.27-3.44.32-2.88-2.1l.71-3.07c.13-.58-.1-1.39-.52-1.81l-2.48-2.48c-1.46-1.46-.99-2.94 1.05-3.28l3.19-.53A2.2 2.2 0 0 0 8.5 7.03l1.76-3.52c.96-1.91 2.52-1.91 3.47 0"
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
            fill="currentColor"
            d="m13.73 3.51 1.76 3.52c.24.49.88.96 1.42 1.05l3.19.53c2.04.34 2.52 1.82 1.05 3.28l-2.48 2.48a2.2 2.2 0 0 0-.52 1.81l.71 3.07c.56 2.43-.73 3.37-2.88 2.1l-2.99-1.77a2.2 2.2 0 0 0-1.98 0l-2.99 1.77c-2.14 1.27-3.44.32-2.88-2.1l.71-3.07c.13-.58-.1-1.39-.52-1.81l-2.48-2.48c-1.46-1.46-.99-2.94 1.05-3.28l3.19-.53A2.2 2.2 0 0 0 8.5 7.03l1.76-3.52c.96-1.91 2.52-1.91 3.47 0"
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
            fill="currentColor"
            d="m13.73 3.51 1.76 3.52c.24.49.88.96 1.42 1.05l3.19.53c2.04.34 2.52 1.82 1.05 3.28l-2.48 2.48a2.2 2.2 0 0 0-.52 1.81l.71 3.07c.56 2.43-.73 3.37-2.88 2.1l-2.99-1.77a2.2 2.2 0 0 0-1.98 0l-2.99 1.77c-2.14 1.27-3.44.32-2.88-2.1l.71-3.07c.13-.58-.1-1.39-.52-1.81l-2.48-2.48c-1.46-1.46-.99-2.94 1.05-3.28l3.19-.53A2.2 2.2 0 0 0 8.5 7.03l1.76-3.52c.96-1.91 2.52-1.91 3.47 0"
          />
        </svg>
      )}
    </>
  );
});

export default IconStar;
