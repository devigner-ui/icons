import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTicket = forwardRef<SVGSVGElement, IconProps>(function IconTicket(
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
            d="M14 11a1 1 0 0 1 1-1 1 1 0 0 1 1 1v2a1 1 0 0 1-1 1 1 1 0 0 1-1-1z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m8.69 3.97 2.26.03c.72 0 1.99-.09 2.64.01.12.01.18.08.27.13.46.74-.17 2.64.3 3.39.49.78 1.78.51 1.86-.45.06-.73-.2-2.37.15-2.92.49-.29 1.31-.11 1.87-.05 2.56.26 3.63 1.31 3.88 3.88.05.44.21 1.24.02 1.68l-.13.15a9 9 0 0 0-1.09.66 2 2 0 0 0-.67 1.84 2 2 0 0 0 .93 1.38c.24.16.93.44.99.71.14.55-.01 1.25-.07 1.78-.18 1.57-.7 2.53-1.66 3.09m-3.39.72q-.36 0-.67-.12l-.18-.41.02-.02-.01-.47h.01c0-.57.13-1.99-.1-2.44-.37-.71-1.42-.7-1.79 0-.35.67.09 2.37-.24 3.29l-.41.18-.02-.02c-.91.04-1.83.01-2.75.01-1.22 0-2.44.02-3.67-.03-1.2-.05-2.56-.11-3.56-.86-.88-.65-1.22-1.69-1.36-2.74-.06-.44-.24-1.59-.06-2.03l.13-.15c.03.01.52-.3.59-.33.76-.44 1.3-1.18 1.18-2.1-.11-.91-.76-1.36-1.49-1.77-.12-.07-.32-.16-.4-.28-.24-.35.05-2.16.11-2.49q.13-.76.49-1.43c.38-.65.99-1.11 1.68-1.37q.38-.14.85-.23"
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
            opacity={duotone ? "0.4" : "1"}
            d="M14 11a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M16.02 18.98c0-.57.13-1.99-.1-2.44-.37-.71-1.42-.7-1.79 0-.35.67.09 2.37-.24 3.29l-.41.18-.02-.02c-.91.04-1.83.01-2.75.01-1.22 0-2.44.02-3.67-.03-1.2-.05-2.56-.11-3.56-.86-.88-.65-1.22-1.69-1.36-2.74-.06-.44-.24-1.59-.06-2.03l.13-.15c.03.01.52-.3.59-.33.76-.44 1.3-1.18 1.18-2.1-.11-.91-.76-1.36-1.49-1.77-.12-.07-.32-.16-.4-.28-.24-.35.05-2.16.11-2.49q.13-.76.49-1.43c.38-.65.99-1.11 1.68-1.37C6.02 3.8 9.15 4 10.95 4c.72 0 1.99-.09 2.64.01.12.01.18.08.27.13.46.74-.17 2.64.3 3.39.49.78 1.78.51 1.86-.45.06-.73-.2-2.37.15-2.92.49-.29 1.31-.11 1.87-.05 2.56.26 3.63 1.31 3.88 3.88.05.44.21 1.24.02 1.68l-.13.15a9 9 0 0 0-1.09.66 2 2 0 0 0-.67 1.84 2 2 0 0 0 .93 1.38c.24.16.93.44.99.71.14.55-.01 1.25-.07 1.78-.29 2.53-1.46 3.48-3.94 3.71-.53.05-1.26.21-1.78-.02l-.18-.41.02-.02-.01-.47z"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.01 17v2c0 .47 0 .7-.15.85s-.38.15-.85.15H10c-3.79 0-5.68 0-6.85-1.17-.8-.8-1.06-1.95-1.14-3.82-.01-.37-.02-.55.05-.68.07-.12.34-.28.9-.58a2 2 0 0 0 0-3.5c-.56-.3-.83-.46-.9-.58S2 9.36 2 8.99c.08-1.87.33-3.01 1.14-3.82C4.32 4 6.21 4 10 4h3.5c.28 0 .5.22.5.5l.01 2.5a1 1 0 0 0 1 1v2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v2a1 1 0 0 0-1 1"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.02 16a1 1 0 0 1 1 1v1.98c0 .48 0 .72.15.87.16.14.4.13.87.11 1.86-.07 3-.33 3.81-1.13.8-.8 1.06-1.95 1.14-3.82.02-.37.02-.55-.05-.68-.07-.12-.34-.28-.9-.58a2 2 0 0 1 0-3.5c.56-.3.84-.46.9-.58.07-.13.07-.31.05-.68-.08-1.87-.33-3.01-1.14-3.82-.88-.87-2.15-1.1-4.32-1.15a.5.5 0 0 0-.51.5V7a1 1 0 0 1-1 1v2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1z"
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
            d="m14 19 .01-2a1 1 0 0 1 2 0v1.98c0 .48 0 .72.16.87.16.14.4.13.87.11 1.86-.07 3-.33 3.81-1.13.8-.8 1.06-1.95 1.14-3.82.02-.37.02-.55-.05-.68-.07-.12-.34-.28-.9-.58a2 2 0 0 1 0-3.5c.56-.3.83-.46.9-.58s.06-.31.05-.68c-.08-1.87-.33-3.01-1.14-3.82-.88-.87-2.15-1.1-4.32-1.15a.5.5 0 0 0-.51.5V7a1 1 0 0 1-2 0L14 4.5a.5.5 0 0 0-.5-.5H10C6.2 4 4.32 4 3.15 5.17c-.8.8-1.06 1.95-1.14 3.82-.01.37-.02.56.05.68s.34.28.9.58a2 2 0 0 1 0 3.5c-.56.3-.83.46-.9.58-.07.13-.06.31-.05.68.08 1.87.33 3.01 1.14 3.82C4.32 20 6.21 20 10 20h3c.48 0 .71 0 .86-.15s.15-.38.15-.85m2.02-6v-2a1 1 0 0 0-2 0v2a1 1 0 0 0 2 0"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconTicket;
