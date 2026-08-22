import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconGemini = forwardRef<SVGSVGElement, IconProps>(function IconGemini(
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
            d="M2.67 2a19.5 19.5 0 0 0 20 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.67 22a19.5 19.5 0 0 1 20 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m5.97 3.58.13.24A17.6 17.6 0 0 1 6 20.41"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19.34 20.41a17.7 17.7 0 0 1-.1-16.59l.13-.24"
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
            d="m19.9 4.18.13-.24a.8.8 0 0 0-.09-.85.7.7 0 0 0-.83-.21 18.8 18.8 0 0 1-12.88 0 .8.8 0 0 0-.83.21.8.8 0 0 0-.09.85l.13.23a16.8 16.8 0 0 1-.1 15.88.8.8 0 0 0 .09.85c.2.24.53.32.82.21a18.7 18.7 0 0 1 12.83 0q.12.05.26.05.33 0 .57-.26c.2-.24.24-.57.09-.85a16.8 16.8 0 0 1-.1-15.87"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19.37 4.33a.7.7 0 0 1-.7-.49.75.75 0 0 1 .44-.96q1.62-.6 3.18-1.52a.76.76 0 0 1 1.03.26c.21.36.09.82-.26 1.03a21 21 0 0 1-3.42 1.64z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m5.97 4.33-.26-.05a21 21 0 0 1-3.42-1.64.75.75 0 0 1-.26-1.03.75.75 0 0 1 1.03-.26q1.55.92 3.18 1.52c.39.14.59.58.44.96a.8.8 0 0 1-.71.5"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.67 22.75a1 1 0 0 1-.38-.11 19 19 0 0 0-3.2-1.53.75.75 0 1 1 .51-1.41q1.79.65 3.46 1.65c.36.21.47.67.26 1.03a.8.8 0 0 1-.65.37"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2.67 22.75a.7.7 0 0 1-.64-.37.75.75 0 0 1 .26-1.03 20 20 0 0 1 3.46-1.65.75.75 0 1 1 .51 1.41q-1.66.6-3.2 1.53a1 1 0 0 1-.39.11"
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
            d="m19.9 4.18.13-.24a.8.8 0 0 0-.09-.85.7.7 0 0 0-.83-.21 18.8 18.8 0 0 1-12.88 0 .7.7 0 0 0-.83.21.8.8 0 0 0-.09.85l.13.23a16.8 16.8 0 0 1-.1 15.88.8.8 0 0 0 .09.85c.2.24.53.32.82.21a18.7 18.7 0 0 1 12.83 0q.12.05.26.05.33 0 .57-.26c.2-.24.24-.57.09-.85a16.8 16.8 0 0 1-.1-15.87"
            fill="currentColor"
          />
          <path
            d="M19.37 4.33a.7.7 0 0 1-.7-.49.75.75 0 0 1 .44-.96q1.62-.6 3.18-1.52a.76.76 0 0 1 1.03.26c.21.36.09.82-.26 1.03a21 21 0 0 1-3.42 1.64z"
            fill="currentColor"
          />
          <path
            d="m5.97 4.33-.26-.05a20 20 0 0 1-3.42-1.64.73.73 0 0 1-.26-1.02.75.75 0 0 1 1.03-.26q1.55.92 3.18 1.52a.75.75 0 0 1-.27 1.45"
            fill="currentColor"
          />
          <path
            d="M22.67 22.75a1 1 0 0 1-.38-.11 19 19 0 0 0-3.2-1.53.75.75 0 1 1 .51-1.41q1.79.65 3.46 1.65c.36.21.47.67.26 1.03a.8.8 0 0 1-.65.37"
            fill="currentColor"
          />
          <path
            d="M2.67 22.75a.7.7 0 0 1-.64-.37.75.75 0 0 1 .26-1.03 20 20 0 0 1 3.46-1.65.75.75 0 1 1 .51 1.41q-1.66.6-3.2 1.53a1 1 0 0 1-.39.11"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconGemini;
