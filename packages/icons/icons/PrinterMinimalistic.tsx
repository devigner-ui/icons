import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPrinterMinimalistic = forwardRef<SVGSVGElement, IconProps>(
  function IconPrinterMinimalistic(
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
              d="M6 17.98c-1.55-.04-2.48-.22-3.12-.86C2 16.24 2 14.82 2 12s0-4.24.88-5.12S5.18 6 8 6h8c2.83 0 4.24 0 5.12.88S22 9.18 22 12s0 4.24-.88 5.12c-.64.64-1.57.82-3.12.86"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M18 12v4c0 2.83 0 4.24-.88 5.12S14.82 22 12 22s-4.24 0-5.12-.88S6 18.82 6 16v-4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M17.98 6c-.04-1.55-.22-2.48-.86-3.12C16.24 2 14.82 2 12 2s-4.24 0-5.12.88c-.64.64-.82 1.57-.86 3.12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M19.5 12.44A18 18 0 0 0 12 11c-3.41 0-5.87.71-7.5 1.44"
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
              d="M17.12 21.12c.88-.88.88-2.3.88-5.12v-3.34c-1.48-.5-3.46-.91-6-.91s-4.52.4-6 .9V16c0 2.83 0 4.24.88 5.12S9.18 22 12 22s4.24 0 5.12-.88"
              fill="currentColor"
            />
            <path
              d="M17.12 2.88C16.24 2 14.82 2 12 2s-4.24 0-5.12.88c-.5.5-.71 1.15-.8 2.13L7.92 5h8.14l1.85.01c-.09-.98-.3-1.64-.8-2.13"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16 6H8c-2.83 0-4.24 0-5.12.88S2 9.18 2 12s0 4.24.88 5.12c.5.5 1.15.71 2.13.8L5 16.08v-3.03l-.2.09a.75.75 0 0 1-.6-1.37c1.71-.77 4.28-1.51 7.8-1.51s6.09.74 7.8 1.5a.75.75 0 1 1-.6 1.38l-.2-.09v3.03l-.01 1.86c.98-.1 1.64-.32 2.13-.8.88-.89.88-2.3.88-5.13s0-4.24-.88-5.12S18.82 6 16 6"
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
              d="M17.12 21.12c.88-.88.88-2.3.88-5.12v-3.34c-1.48-.5-3.46-.91-6-.91s-4.52.4-6 .9V16c0 2.83 0 4.24.88 5.12S9.18 22 12 22s4.24 0 5.12-.88"
              fill="currentColor"
            />
            <path
              d="M16 6H8c-2.83 0-4.24 0-5.12.88S2 9.18 2 12s0 4.24.88 5.12c.5.5 1.15.71 2.13.8L5 16.08v-3.03l-.2.09a.75.75 0 0 1-.6-1.37c1.71-.77 4.28-1.51 7.8-1.51s6.09.74 7.8 1.5a.75.75 0 1 1-.6 1.38l-.2-.09v3.03l-.01 1.86c.98-.1 1.64-.32 2.13-.8.88-.89.88-2.3.88-5.13s0-4.24-.88-5.12S18.82 6 16 6"
              fill="currentColor"
            />
            <path
              d="M17.12 2.88C16.24 2 14.82 2 12 2s-4.24 0-5.12.88c-.5.5-.71 1.15-.8 2.13L7.92 5h8.14l1.85.01c-.09-.98-.3-1.64-.8-2.13"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconPrinterMinimalistic;
