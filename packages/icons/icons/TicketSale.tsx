import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTicketSale = forwardRef<SVGSVGElement, IconProps>(
  function IconTicketSale(
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
              opacity={duotone ? "0.4" : "1"}
              d="M14 4h-4C6.2 4 4.32 4 3.15 5.17c-.8.8-1.06 1.95-1.14 3.82-.01.37-.02.56.05.68s.34.28.9.58a2 2 0 0 1 0 3.5c-.56.3-.83.46-.9.58-.07.13-.06.31-.05.68.08 1.87.33 3.01 1.14 3.82C4.32 20 6.21 20 10 20h4c3.79 0 5.68 0 6.85-1.17.8-.8 1.06-1.95 1.14-3.82.02-.37.02-.55-.05-.68-.07-.12-.34-.28-.9-.58a2 2 0 0 1 0-3.5c.56-.3.83-.46.9-.58s.06-.31.05-.68c-.08-1.87-.33-3.01-1.14-3.82C19.68 4 17.79 4 14 4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="m9 15 6-6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M15.5 14.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
              fill="currentColor"
            />
            <path
              d="M10.5 9.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
              fill="currentColor"
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
              d="M14 4h-4C6.2 4 4.32 4 3.15 5.17c-.8.8-1.06 1.95-1.14 3.82-.01.37-.02.56.05.68s.34.28.9.58a2 2 0 0 1 0 3.5c-.56.3-.83.46-.9.58-.07.13-.06.31-.05.68.08 1.87.33 3.01 1.14 3.82C4.32 20 6.21 20 10 20h4c3.79 0 5.68 0 6.85-1.17.8-.8 1.06-1.95 1.14-3.82.02-.37.02-.55-.05-.68-.07-.12-.34-.28-.9-.58a2 2 0 0 1 0-3.5c.56-.3.83-.46.9-.58s.06-.31.05-.68c-.08-1.87-.33-3.01-1.14-3.82C19.68 4 17.79 4 14 4"
              fill="currentColor"
            />
            <path
              d="M15.55 8.47c.3.3.3.77 0 1.06l-6.02 6c-.3.3-.77.3-1.06 0a.75.75 0 0 1 0-1.06l6.01-6c.3-.3.77-.3 1.07 0"
              fill="currentColor"
            />
            <path
              d="M14.51 15.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
              fill="currentColor"
            />
            <path
              d="M9.5 10.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
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
              d="M10 4h4c3.79 0 5.68 0 6.85 1.17.8.8 1.06 1.95 1.14 3.82.02.37.02.56-.05.68s-.34.28-.9.58a2 2 0 0 0 0 3.5c.56.3.83.46.9.58.07.13.06.31.05.68-.08 1.87-.33 3.01-1.14 3.82C19.68 20 17.79 20 14 20h-4c-3.79 0-5.68 0-6.85-1.17-.8-.8-1.06-1.95-1.14-3.82-.01-.37-.02-.55.05-.68.07-.12.34-.28.9-.58a2 2 0 0 0 0-3.5c-.56-.3-.83-.46-.9-.58S2 9.36 2 8.99c.08-1.87.33-3.01 1.14-3.82C4.32 4 6.21 4 10 4m5.55 4.47c.3.3.3.77 0 1.06l-6.02 6c-.3.3-.77.3-1.06 0a.75.75 0 0 1 0-1.06l6.01-6c.3-.3.77-.3 1.07 0M14.5 15.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-5-5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconTicketSale;
