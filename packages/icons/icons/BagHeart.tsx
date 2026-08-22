import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBagHeart = forwardRef<SVGSVGElement, IconProps>(function IconBagHeart(
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
            d="M3.74 20.56C4.94 22 7.17 22 11.64 22h.72c4.47 0 6.7 0 7.9-1.45m-16.52 0c-1.2-1.44-.79-3.63.04-8.02.58-3.12.87-4.69 1.99-5.6m14.49 13.63c1.2-1.45.79-3.64-.04-8.03-.58-3.12-.87-4.69-1.99-5.6m0-.01C17.13 6 15.53 6 12.36 6h-.72c-3.18 0-4.76 0-5.87.92m0 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m12 12.2-.52.53c.3.28.75.28 1.04 0zm-.96 3.67-.44.6zm1.92 0-.45-.6zm-.96.46v.75zm-.51-1.07c-.42-.3-.88-.69-1.23-1.1-.37-.42-.51-.75-.51-.96h-1.5c0 .77.44 1.45.87 1.95a9 9 0 0 0 1.48 1.32zM9.75 13.2c0-.58.26-.83.5-.91s.7-.06 1.23.44l1.04-1.08c-.83-.79-1.86-1.1-2.77-.78-.94.33-1.5 1.23-1.5 2.33zm3.65 3.27c.46-.34 1.02-.8 1.48-1.32.43-.5.87-1.18.87-1.95h-1.5q.02.32-.5.97c-.36.4-.82.78-1.24 1.1zm2.35-3.27c0-1.1-.56-2-1.5-2.33-.9-.32-1.94 0-2.77.78l1.04 1.08c.52-.5.99-.53 1.24-.44.23.08.49.33.49.9zm-5.15 3.27c.37.27.78.6 1.4.6v-1.5l-.1-.02-.41-.29zm1.91-1.2-.42.28q-.07.04-.09.03v1.5c.62 0 1.03-.34 1.4-.6z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9 6V5a3 3 0 1 1 6 0v1"
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
            d="M4.08 10.9c.44-2.35.66-3.52 1.5-4.2C6.4 6 7.6 6 9.97 6h4.04c2.38 0 3.57 0 4.4.7.84.68 1.06 1.85 1.5 4.2l.75 4c.62 3.29.92 4.93.02 6.02S18.12 22 14.77 22H9.23c-3.35 0-5.02 0-5.92-1.08-.9-1.09-.6-2.73.02-6.03z"
            fill="currentColor"
          />
          <path
            d="M9.75 5a2.25 2.25 0 0 1 4.5 0v1q.85 0 1.5.02V5a3.75 3.75 0 1 0-7.5 0v1.02Q8.9 6 9.75 6z"
            fill="currentColor"
          />
          <path
            d="M11.04 15.87C10.16 15.22 9 14.18 9 13.2c0-1.68 1.65-2.3 3-1 1.35-1.3 3-.68 3 1 0 .98-1.16 2.02-2.04 2.67-.42.3-.63.46-.96.46s-.54-.16-.96-.46"
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
            d="M8.25 6.02V5a3.75 3.75 0 1 1 7.5 0v1.02c1.29.03 2.07.17 2.68.67.83.7 1.05 1.86 1.49 4.2l.75 4c.61 3.3.92 4.94.02 6.03S18.12 22 14.77 22H9.23c-3.35 0-5.02 0-5.92-1.08-.9-1.09-.6-2.73.02-6.03l.75-4c.44-2.34.66-3.5 1.5-4.2.6-.5 1.38-.64 2.67-.67M9.75 5a2.25 2.25 0 0 1 4.5 0v1h-4.5zM9 13.2c0 .98 1.16 2.02 2.04 2.67.42.3.63.46.96.46s.54-.16.96-.46c.88-.65 2.04-1.69 2.04-2.67 0-1.68-1.65-2.3-3-1-1.35-1.3-3-.68-3 1"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconBagHeart;
