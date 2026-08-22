import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBomb2 = forwardRef<SVGSVGElement, IconProps>(function IconBomb2(
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
            cx="9.5"
            cy="14.5005"
            r="7.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10 16h2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14 12.5c0 .83-.45 1.5-1 1.5s-1-.67-1-1.5.45-1.5 1-1.5 1 .67 1 1.5"
            fill="currentColor"
          />
          <ellipse
            opacity={duotone ? "0.4" : "1"}
            cx="9"
            cy="12.5005"
            rx="1"
            ry="1.5"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m17 7-2 2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M17.98 2.35a.56.56 0 0 1 1.04 0l.65 1.66q.1.23.32.32l1.66.65c.47.19.47.85 0 1.04l-1.66.65a.6.6 0 0 0-.32.32l-.65 1.66a.56.56 0 0 1-1.04 0l-.65-1.66a.6.6 0 0 0-.32-.32l-1.66-.65a.56.56 0 0 1 0-1.04l1.66-.65a.6.6 0 0 0 .32-.32z"
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
            d="M9.5 22a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15"
            fill="currentColor"
          />
          <path
            d="M17.98 2.35a.56.56 0 0 1 1.04 0l.65 1.66q.1.23.32.32l1.66.65c.47.19.47.85 0 1.04l-1.66.65a.6.6 0 0 0-.32.32l-.65 1.66a.56.56 0 0 1-1.04 0l-.65-1.66a.6.6 0 0 0-.32-.32l-1.66-.65a.56.56 0 0 1 0-1.04l1.66-.65a.6.6 0 0 0 .32-.32z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.48 6.46 14.25 8.7q.57.48 1.06 1.06l2.23-2.23-.21-.53a.6.6 0 0 0-.32-.32z"
            fill="currentColor"
          />
          <path
            d="M12 16.75a.75.75 0 0 0 0-1.5h-2a.75.75 0 0 0 0 1.5z"
            fill="currentColor"
          />
          <path
            d="M14 12.5c0 .83-.45 1.5-1 1.5s-1-.67-1-1.5.45-1.5 1-1.5 1 .67 1 1.5"
            fill="currentColor"
          />
          <path
            d="M9 14c.55 0 1-.67 1-1.5S9.55 11 9 11s-1 .67-1 1.5.45 1.5 1 1.5"
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
            d="M17.98 2.35a.56.56 0 0 1 1.04 0l.65 1.66q.1.23.32.32l1.66.65c.47.19.47.85 0 1.04l-1.66.65a.6.6 0 0 0-.32.32l-.65 1.66a.56.56 0 0 1-1.04 0l-.65-1.66a.6.6 0 0 0-.32-.32l-1.66-.65a.56.56 0 0 1 0-1.04l1.66-.65a.6.6 0 0 0 .32-.32z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17 14.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0m-5 2.25a.75.75 0 0 0 0-1.5h-2a.75.75 0 0 0 0 1.5zm2-4.25c0 .83-.45 1.5-1 1.5s-1-.67-1-1.5.45-1.5 1-1.5 1 .67 1 1.5M9 14c.55 0 1-.67 1-1.5S9.55 11 9 11s-1 .67-1 1.5.45 1.5 1 1.5"
            fill="currentColor"
          />
          <path
            d="m16.77 8.3-.75.74a9 9 0 0 0-1.06-1.06l.75-.75.76.3z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconBomb2;
