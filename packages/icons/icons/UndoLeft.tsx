import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconUndoLeft = forwardRef<SVGSVGElement, IconProps>(function IconUndoLeft(
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
            d="M7 4 4 7l3 3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M4 7h11c1.87 0 2.8 0 3.5.4a3 3 0 0 1 1.1 1.1c.4.7.4 1.63.4 3.5s0 2.8-.4 3.5a3 3 0 0 1-1.1 1.1c-.7.4-1.63.4-3.5.4H8"
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
            d="M7.53 3.47c.3.3.3.77 0 1.06L5.06 7l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3c.3-.3.77-.3 1.06 0"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m5.06 7 .75-.75h9.23q1.34-.01 2.22.05c.6.06 1.13.17 1.61.45q.88.5 1.38 1.37c.28.49.4 1.02.45 1.62q.06.88.05 2.22v.08q.01 1.34-.05 2.22c-.06.6-.17 1.13-.45 1.62q-.5.87-1.37 1.37a4 4 0 0 1-1.62.45q-.89.06-2.22.05H8a.75.75 0 0 1 0-1.5h7c.95 0 1.61 0 2.12-.05.5-.04.79-.13 1-.25q.53-.3.83-.82c.12-.22.2-.5.25-1 .05-.52.05-1.18.05-2.13s0-1.61-.05-2.12c-.04-.5-.13-.79-.25-1q-.3-.53-.82-.83c-.22-.12-.5-.2-1-.25-.52-.05-1.18-.05-2.13-.05H5.81z"
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
            d="M7.53 3.47c.3.3.3.77 0 1.06L5.81 6.25h9.23q1.34-.01 2.22.05c.6.06 1.13.17 1.61.45q.88.5 1.38 1.37c.28.49.4 1.02.45 1.62q.06.88.05 2.22v.08q.01 1.34-.05 2.22c-.06.6-.17 1.13-.45 1.62q-.5.87-1.37 1.37a4 4 0 0 1-1.62.45q-.89.06-2.22.05H8a.75.75 0 0 1 0-1.5h7c.95 0 1.61 0 2.12-.05.5-.04.79-.13 1-.25q.53-.3.83-.82c.12-.22.2-.5.25-1 .05-.52.05-1.18.05-2.13s0-1.61-.05-2.12c-.04-.5-.13-.79-.25-1q-.3-.53-.82-.83c-.22-.12-.5-.2-1-.25-.52-.05-1.18-.05-2.13-.05H5.81l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3c.3-.3.77-.3 1.06 0"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconUndoLeft;
