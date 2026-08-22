import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPlain2 = forwardRef<SVGSVGElement, IconProps>(function IconPlain2(
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
            d="m17.5 18.49 3.13-9.4c1.25-3.74 1.87-5.61.88-6.6s-2.86-.37-6.6.88L5.57 6.48c-2.08.7-3.12 1.04-3.43 1.8a2 2 0 0 0-.14.57c-.06.82.72 1.6 2.27 3.15l.28.28c.26.26.39.39.48.53q.3.42.31.94c.01.17-.02.35-.07.7-.2 1.31-.3 1.96-.18 2.47.23 1 1 1.78 2 2.02.5.13 1.16.04 2.46-.14l.07-.01c.37-.05.56-.07.73-.06q.49.03.9.3c.15.1.28.23.54.5l.25.24c1.51 1.51 2.27 2.27 3.07 2.23q.33-.02.64-.15c.73-.33 1.07-1.34 1.75-3.36"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6 18 21 3"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.8 18.2 21.5 2.5c-.99-.99-2.86-.37-6.6.88l-9.33 3.1c-2.08.7-3.12 1.04-3.43 1.8a2 2 0 0 0-.14.57c-.06.82.72 1.6 2.27 3.15l.28.28c.26.26.39.39.48.53q.3.42.31.94c.01.17-.02.35-.07.7-.2 1.31-.3 1.96-.18 2.47q.19.75.7 1.28"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m17.5 18.49 3.13-9.4c1.25-3.74 1.87-5.61.88-6.6L5.8 18.2q.52.55 1.3.74c.5.13 1.15.04 2.45-.14h.07c.37-.06.56-.08.73-.07q.49.03.9.3c.15.1.28.23.54.5l.25.24c1.51 1.51 2.27 2.27 3.07 2.23q.33-.02.64-.15c.73-.32 1.07-1.34 1.75-3.36"
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
            d="m17.5 18.49 3.13-9.4c.79-2.37 1.33-3.99 1.37-5.11.01-.38-.42-.5-.68-.24L6.86 18.2c-.23.24-.18.63.14.72l.1.02c.5.13 1.15.04 2.45-.14l.07-.01c.37-.05.56-.07.73-.06q.49.03.9.3c.15.1.28.23.54.5l.25.24c1.51 1.51 2.27 2.27 3.07 2.23q.33-.02.64-.15c.73-.33 1.07-1.34 1.75-3.36"
            fill="currentColor"
          />
          <path
            d="M14.9 3.37 5.58 6.48c-2.08.7-3.12 1.04-3.43 1.8a2 2 0 0 0-.14.57c-.06.82.72 1.6 2.27 3.15l.28.28c.26.26.39.39.48.53q.3.42.31.94c.01.17-.02.35-.07.7-.2 1.31-.3 1.96-.18 2.47l.01.05c.09.32.49.38.72.15L20.26 2.68c.26-.26.14-.7-.24-.68-1.12.04-2.74.58-5.11 1.37"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconPlain2;
