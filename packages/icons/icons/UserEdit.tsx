import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconUserEdit = forwardRef<SVGSVGElement, IconProps>(function IconUserEdit(
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
            d="M12.67 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m19.88 15.74-3.54 3.54c-.14.14-.27.4-.3.59l-.19 1.35c-.07.49.27.83.76.76l1.35-.19c.19-.03.46-.16.59-.3l3.54-3.54c.61-.61.9-1.32 0-2.22-.89-.89-1.6-.6-2.21.01"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.37 16.25a3.2 3.2 0 0 0 2.22 2.22"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M4.08 22c0-3.87 3.85-7 8.59-7q1.57 0 2.97.43"
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
            d="M12.67 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.67 14.5c-5.01 0-9.09 3.36-9.09 7.5 0 .28.22.5.5.5h17.18a.5.5 0 0 0 .5-.5c0-4.14-4.08-7.5-9.09-7.5"
            fill="currentColor"
          />
          <path
            d="M22.1 14.74c-.9-.9-1.61-.61-2.22 0l-3.54 3.54c-.14.14-.27.4-.3.59l-.19 1.35c-.07.49.27.83.76.76l1.35-.19c.19-.03.46-.16.59-.3l3.54-3.54c.62-.6.91-1.31.01-2.21"
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
            d="M12.67 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10m2.17 4.51-2.7 2.7c-.1.1-.31.2-.45.23l-1.03.14c-.38.05-.64-.21-.58-.58l.15-1.03a1 1 0 0 1 .23-.45l2.7-2.7c.46-.46 1.01-.68 1.69 0s.45 1.23-.01 1.69"
            fill="currentColor"
          />
          <path
            d="M12.67 14c-5.01 0-9.09 3.36-9.09 7.5 0 .28.22.5.5.5h17.18a.5.5 0 0 0 .5-.5c0-4.14-4.08-7.5-9.09-7.5"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconUserEdit;
