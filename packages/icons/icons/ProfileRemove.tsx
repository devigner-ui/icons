import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconProfileRemove = forwardRef<SVGSVGElement, IconProps>(
  function IconProfileRemove(
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
              d="M20.17 19h-4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12.82 10.87h-.33a4.44 4.44 0 1 1 .33 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.66 21.81a9 9 0 0 1-5.01-1.38c-2.42-1.62-2.42-4.26 0-5.87 2.75-1.84 7.26-1.84 10.01 0"
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
              d="M12.67 2a4.75 4.75 0 0 0-.12 9.49h.29A4.74 4.74 0 0 0 12.67 2"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M17.75 14.16c-2.79-1.86-7.34-1.86-10.15 0-1.27.84-1.97 1.99-1.97 3.22s.7 2.37 1.96 3.21A9 9 0 0 0 12.67 22c1.84 0 3.68-.47 5.08-1.41 1.26-.85 1.96-1.99 1.96-3.23-.01-1.22-.7-2.37-1.96-3.2"
              fill="currentColor"
            />
            <path
              d="M14.5 18.07h-3.65a.7.7 0 0 1 0-1.38h3.65a.7.7 0 0 1 .69.69.7.7 0 0 1-.69.69"
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
              d="M12.67 2a4.75 4.75 0 0 0-.12 9.49h.29A4.74 4.74 0 0 0 12.67 2"
              fill="currentColor"
            />
            <path
              d="M17.75 14.16c-2.79-1.86-7.34-1.86-10.15 0-1.27.84-1.97 1.99-1.97 3.22s.7 2.37 1.96 3.21A9 9 0 0 0 12.67 22c1.84 0 3.68-.47 5.08-1.41 1.26-.85 1.96-1.99 1.96-3.23-.01-1.22-.7-2.37-1.96-3.2m-3.25 3.91h-3.65a.7.7 0 0 1 0-1.38h3.65a.7.7 0 0 1 0 1.38"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconProfileRemove;
