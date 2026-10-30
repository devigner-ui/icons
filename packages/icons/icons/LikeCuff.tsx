import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconLikeCuff = forwardRef<SVGSVGElement, IconProps>(
  function IconLikeCuff(
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
            d="M21.48 11.95c.5-1.4-.4-2.6-1.9-2.6h-4a1 1 0 0 1-1-1.2l.5-3.2c.2-.9-.4-1.9-1.3-2.2a2 2 0 0 0-2.2.7l-4.1 6.1"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m7.48 18.35 3.1 2.4c.4.4 1.3.6 1.9.6h3.8c1.2 0 2.5-.9 2.8-2.1l1.14-3.47"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M2.38 18.35v-9.8c0-1.4.6-1.9 2-1.9h1c1.4 0 2 .5 2 1.9v9.8c0 1.4-.6 1.9-2 1.9h-1c-1.4 0-2-.5-2-1.9Z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
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
              opacity={duotone ? "0.4" : "1"}
              d="m7.48 18.35 3.1 2.4c.4.4 1.3.6 1.9.6h3.8c1.2 0 2.5-.9 2.8-2.1l2.4-7.3c.5-1.4-.4-2.6-1.9-2.6h-4a1 1 0 0 1-1-1.2l.5-3.2c.2-.9-.4-1.9-1.3-2.2a2 2 0 0 0-2.2.7l-4.1 6.1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
            />
            <path
              d="M2.38 18.35v-9.8c0-1.4.6-1.9 2-1.9h1c1.4 0 2 .5 2 1.9v9.8c0 1.4-.6 1.9-2 1.9h-1c-1.4 0-2-.5-2-1.9"
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
              opacity={duotone ? "0.4" : "1"}
              d="M21.65 10.04a2.2 2.2 0 0 0-1.87-.88h-4.1a1 1 0 0 1-.69-.31q-.27-.32-.21-.77l.51-3.28a2.16 2.16 0 0 0-1.41-2.41 2.2 2.2 0 0 0-2.41.77L7.26 9.43l-.12.2v8.84l.15.15 3.17 2.45c.42.42 1.37.65 2.04.65h3.9c1.34 0 2.69-1.01 2.99-2.24l2.46-7.49a2.1 2.1 0 0 0-.2-1.95"
              fill="currentColor"
            />
            <path
              d="M5.21 6.39H4.18C2.63 6.39 2 6.99 2 8.47v10.05c0 1.48.63 2.08 2.18 2.08h1.03c1.55 0 2.18-.6 2.18-2.08V8.46c0-1.47-.63-2.07-2.18-2.07"
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
              d="M8.39 18.5V8.34q0-.61.34-1.12l2.73-4.06a2.2 2.2 0 0 1 2.41-.77 2.2 2.2 0 0 1 1.42 2.41l-.52 3.27a1 1 0 0 0 .21.78 1 1 0 0 0 .69.31h4.11c.79 0 1.47.32 1.87.88a2.1 2.1 0 0 1 .2 1.95l-2.46 7.49a3.2 3.2 0 0 1-3 2.25h-3.9c-.67 0-1.61-.23-2.04-.66l-1.28-.99a2 2 0 0 1-.78-1.58"
              fill="currentColor"
            />
            <path
              d="M5.21 6.39H4.18C2.63 6.39 2 6.99 2 8.47v10.05c0 1.48.63 2.08 2.18 2.08h1.03c1.55 0 2.18-.6 2.18-2.08V8.46c0-1.47-.63-2.07-2.18-2.07"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconLikeCuff;
