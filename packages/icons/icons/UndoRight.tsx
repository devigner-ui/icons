import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconUndoRight = forwardRef<SVGSVGElement, IconProps>(
  function IconUndoRight(
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
              d="m17 4 3 3-3 3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M20 7H9c-1.87 0-2.8 0-3.5.4a3 3 0 0 0-1.1 1.1C4 9.2 4 10.13 4 12s0 2.8.4 3.5a3 3 0 0 0 1.1 1.1c.7.4 1.63.4 3.5.4h7"
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
              d="M16.47 3.47c-.3.3-.3.77 0 1.06L18.94 7l-2.47 2.47a.75.75 0 1 0 1.06 1.06l3-3c.3-.3.3-.77 0-1.06l-3-3a.75.75 0 0 0-1.06 0"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m18.94 7-.75-.75H8.96q-1.34-.01-2.22.05c-.6.06-1.13.17-1.62.45q-.87.5-1.37 1.37a4 4 0 0 0-.45 1.62q-.06.88-.05 2.22v.08q-.01 1.34.05 2.22c.06.6.17 1.13.45 1.62q.5.87 1.38 1.37c.48.28 1 .4 1.61.45q.88.06 2.22.05H16a.75.75 0 0 0 0-1.5H9c-.95 0-1.61 0-2.12-.05-.5-.04-.79-.13-1-.25q-.53-.3-.83-.82c-.12-.22-.2-.5-.25-1-.05-.52-.05-1.18-.05-2.13s0-1.61.05-2.12c.04-.5.13-.79.25-1q.3-.53.83-.83c.21-.12.5-.2 1-.25.51-.05 1.17-.05 2.12-.05h9.19z"
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
              d="M16.47 3.47c.3-.3.77-.3 1.06 0l3 3c.3.3.3.77 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H9c-.95 0-1.61 0-2.12.05-.5.04-.79.13-1 .25q-.53.3-.83.82c-.12.22-.2.5-.25 1-.05.52-.05 1.18-.05 2.13s0 1.61.05 2.12c.04.5.13.79.25 1q.3.53.83.83c.21.12.5.2 1 .25.51.05 1.17.05 2.12.05h7a.75.75 0 0 1 0 1.5H8.96q-1.34.01-2.22-.05a4 4 0 0 1-1.62-.45 4 4 0 0 1-1.37-1.37 4 4 0 0 1-.45-1.62q-.06-.89-.05-2.22v-.08q-.01-1.34.05-2.22c.06-.6.17-1.13.45-1.62q.5-.87 1.38-1.37c.48-.28 1-.4 1.61-.45q.88-.06 2.22-.05h9.23l-1.72-1.72a.75.75 0 0 1 0-1.06"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconUndoRight;
