import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCodeSquare = forwardRef<SVGSVGElement, IconProps>(
  function IconCodeSquare(
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
              d="m15.5 9 .17.17c1.33 1.34 2 2 2 2.83s-.67 1.5-2 2.83l-.17.17"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M13.3 7.17 12 12l-1.3 4.83"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m8.5 9-.17.17c-1.33 1.34-2 2-2 2.83s.67 1.5 2 2.83l.17.17"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
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
              d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
              fill="currentColor"
            />
            <path
              d="M13.49 6.45c.4.1.64.51.53.91l-2.59 9.66a.75.75 0 0 1-1.45-.38l2.59-9.66c.1-.4.52-.64.92-.53"
              fill="currentColor"
            />
            <path
              d="M14.97 8.47c.3-.3.77-.3 1.06 0l.2.2q.97.95 1.54 1.65c.38.5.65 1.04.65 1.68s-.27 1.18-.65 1.68q-.57.7-1.53 1.64l-.21.21a.75.75 0 1 1-1.06-1.06l.17-.17c.68-.68 1.14-1.14 1.44-1.53.28-.37.34-.59.34-.77s-.06-.4-.34-.77c-.3-.39-.76-.85-1.44-1.53l-.17-.17a.75.75 0 0 1 0-1.06"
              fill="currentColor"
            />
            <path
              d="M7.97 8.47a.75.75 0 0 1 1.06 1.06l-.17.17c-.68.68-1.14 1.14-1.44 1.53-.28.37-.34.59-.34.77s.06.4.34.77c.3.39.76.85 1.44 1.53l.17.17a.75.75 0 0 1-1.06 1.06l-.2-.2a18 18 0 0 1-1.54-1.65A2.7 2.7 0 0 1 5.58 12c0-.64.27-1.18.65-1.68.37-.48.9-1 1.53-1.64z"
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
              d="M3.46 3.46C2 4.93 2 7.3 2 12s0 7.07 1.46 8.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46C22 19.07 22 16.7 22 12s0-7.07-1.46-8.54C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46M13.5 6.45c.4.1.64.51.53.91l-2.59 9.66a.75.75 0 0 1-1.45-.38l2.59-9.66c.1-.4.52-.64.92-.53m1.48 2.02c.3-.3.77-.3 1.06 0l.2.2q.97.95 1.54 1.65c.38.5.65 1.04.65 1.68s-.27 1.18-.65 1.68q-.57.7-1.53 1.64l-.21.21a.75.75 0 1 1-1.06-1.06l.17-.17c.68-.68 1.14-1.14 1.44-1.53.28-.37.34-.59.34-.77s-.06-.4-.34-.77c-.3-.39-.76-.85-1.44-1.53l-.17-.17a.75.75 0 0 1 0-1.06m-7 0a.75.75 0 0 1 1.06 1.06l-.17.17c-.68.68-1.14 1.14-1.44 1.53-.28.37-.34.59-.34.77s.06.4.34.77c.3.39.76.85 1.44 1.53l.17.17a.75.75 0 0 1-1.06 1.06l-.2-.2a18 18 0 0 1-1.54-1.65A2.7 2.7 0 0 1 5.58 12c0-.64.27-1.18.65-1.68.37-.48.9-1 1.53-1.64z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCodeSquare;
