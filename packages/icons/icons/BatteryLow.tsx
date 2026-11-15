import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBatteryLow = forwardRef<SVGSVGElement, IconProps>(
  function IconBatteryLow(
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

    /* Bold cuts the bars out of the body; Bulk trims the terminal to the
       body's edge so the solid terminal meets the dimmed body without a gap. */
    const cut = useId();

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
            d="M7 9s.5.9.5 3-.5 3-.5 3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M20 10c.94 0 1.41 0 1.7.3.3.29.3.76.3 1.7s0 1.41-.3 1.7c-.29.3-.76.3-1.7.3z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M2 12c0-3.77 0-5.66 1.17-6.83S6.23 4 10 4h1.5c3.77 0 5.66 0 6.83 1.17S19.5 8.23 19.5 12s0 5.66-1.17 6.83S15.27 20 11.5 20H10c-3.77 0-5.66 0-6.83-1.17-.65-.65-.94-1.53-1.07-2.83"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
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
              d="M2 12c0-3.77 0-5.66 1.17-6.83S6.23 4 10 4h1.5c3.77 0 5.66 0 6.83 1.17S19.5 8.23 19.5 12s0 5.66-1.17 6.83S15.27 20 11.5 20H10c-3.77 0-5.66 0-6.83-1.17S2 15.77 2 12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7 9s.5.9.5 3-.5 3-.5 3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M20 10c.94 0 1.41 0 1.7.3.3.29.3.76.3 1.7s0 1.41-.3 1.7c-.29.3-.76.3-1.7.3z"
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
              d="M1.25 12c0-4.12 0-6.19 1.28-7.47S5.88 3.25 10 3.25h1.5c4.12 0 6.19 0 7.47 1.28s1.28 3.35 1.28 7.47 0 6.19-1.28 7.47-3.35 1.28-7.47 1.28H10c-4.12 0-6.19 0-7.47-1.28S1.25 16.12 1.25 12z"
              fill="currentColor"
            />
            <mask id={cut} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
              <rect width="24" height="24" fill="white" />
              <path d="M1.25 12c0-4.12 0-6.19 1.28-7.47S5.88 3.25 10 3.25h1.5c4.12 0 6.19 0 7.47 1.28s1.28 3.35 1.28 7.47 0 6.19-1.28 7.47-3.35 1.28-7.47 1.28H10c-4.12 0-6.19 0-7.47-1.28S1.25 16.12 1.25 12z" fill="black" />
            </mask>
            <path
              d="M19.5 9.25h.75c1.05 0 1.69 0 2.09.41.41.4.41 1.04.41 2.34s0 1.94-.41 2.34c-.4.41-1.04.41-2.09.41h-.75z"
              mask={`url(#${cut})`}
              fill="currentColor"
            />
            <path
              d="M7 9s.5.9.5 3-.5 3-.5 3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
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
            <mask id={cut} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
              <rect width="24" height="24" fill="white" />
              <path d="M7 9s.5.9.5 3-.5 3-.5 3" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </mask>
            <path
              d="M1.25 12c0-4.12 0-6.19 1.28-7.47S5.88 3.25 10 3.25h1.5c4.12 0 6.19 0 7.47 1.28s1.28 3.35 1.28 7.47 0 6.19-1.28 7.47-3.35 1.28-7.47 1.28H10c-4.12 0-6.19 0-7.47-1.28S1.25 16.12 1.25 12z"
              mask={`url(#${cut})`}
              fill="currentColor"
            />
            <path
              d="M19.5 9.25h.75c1.05 0 1.69 0 2.09.41.41.4.41 1.04.41 2.34s0 1.94-.41 2.34c-.4.41-1.04.41-2.09.41h-.75z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBatteryLow;
