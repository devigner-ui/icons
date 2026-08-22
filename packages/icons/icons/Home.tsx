import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHome = forwardRef<SVGSVGElement, IconProps>(function IconHome(
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
            d="M22 22H2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="m2 11 8.13-6.5a3 3 0 0 1 3.74 0L22 11"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.5 5.5v-2c0-.28.22-.5.5-.5h2.5c.28 0 .5.22.5.5v5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M4 22V9.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M20 22V9.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15 22v-5c0-1.41 0-2.12-.44-2.56S13.41 14 12 14s-2.12 0-2.56.44S9 15.59 9 17v5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14 9.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="m21.53 11.59-.78-.63v10.29H22a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5h1.25V10.96l-.78.63a.75.75 0 0 1-.94-1.18l8.13-6.5a3.75 3.75 0 0 1 4.68 0l8.13 6.5a.75.75 0 1 1-.94 1.18M12 6.75a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5m1.75 6.56q-.7-.08-1.7-.06h-.1q-1-.01-1.7.06c-.49.07-.96.22-1.34.6s-.53.85-.6 1.34a14 14 0 0 0-.06 1.7v4.3h7.5v-4.42q.02-.93-.06-1.58a2.3 2.3 0 0 0-.6-1.34 2.2 2.2 0 0 0-1.34-.6"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.75 9.5a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.75 9.5a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0"
              fill="currentColor"
            />
          </g>
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.05 13.25q1-.02 1.7.06c.49.07.96.22 1.34.6s.53.85.6 1.34q.07.65.06 1.58v4.42h-7.5v-4.3q-.02-1 .06-1.7c.07-.49.22-.96.6-1.34s.85-.53 1.34-.6q.7-.07 1.7-.06z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16 3h2.5c.28 0 .5.22.5.5v4.14l-3.5-2.8V3.5c0-.28.22-.5.5-.5"
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
            d="M18.5 3H16a.5.5 0 0 0-.5.5v.06l3.5 2.8V3.5a.5.5 0 0 0-.5-.5"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.75 9.5a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m20.75 10.96.78.63a.75.75 0 0 0 .94-1.18l-8.13-6.5a3.75 3.75 0 0 0-4.68 0l-8.13 6.5a.75.75 0 0 0 .94 1.18l.78-.63v10.29H2a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5h-1.25zM9.25 9.5a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0m2.8 3.75q1-.02 1.7.06c.49.07.96.22 1.34.6s.53.85.6 1.34q.07.65.06 1.58v4.42h-1.5V17c0-.73 0-1.2-.05-1.55-.04-.32-.11-.42-.17-.48s-.16-.13-.48-.17c-.35-.05-.82-.05-1.55-.05s-1.2 0-1.55.05c-.32.04-.42.11-.48.17s-.13.16-.17.48c-.05.35-.05.82-.05 1.55v4.25h-1.5v-4.3q-.02-1 .06-1.7c.07-.49.22-.96.6-1.34s.85-.53 1.34-.6q.7-.07 1.7-.06z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.75 9.5a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconHome;
