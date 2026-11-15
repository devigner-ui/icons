import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiSwap = forwardRef<SVGSVGElement, IconProps>(function IconAiSwap(
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
            d="M15.7 13.5h3.1c1.22 0 2.2.99 2.2 2.2v3.1a2.2 2.2 0 0 1-2.2 2.2h-3.1a2.2 2.2 0 0 1-2.2-2.2v-3.1c0-1.21.99-2.2 2.2-2.2zM4.57 10.4A2.2 2.2 0 0 1 3 8.3V5.2C3 3.99 3.99 3 5.2 3h3.1c1.22 0 2.2.99 2.2 2.2v3.1a2.2 2.2 0 0 1-2.2 2.2H6.96"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.5 6.75H17c1.7 0 3 1.3 3 3v1m1.47-1.63L20 10.75l-1.47-1.63m-8.03 8.13H7c-1.7 0-3-1.3-3-3v-1m-1.47 1.63L4 13.26l1.47 1.63"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.75 5.05c.15 1.12.58 1.55 1.7 1.7-1.12.15-1.55.58-1.7 1.7-.15-1.12-.58-1.55-1.7-1.7 1.12-.15 1.55-.58 1.7-1.7Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
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
            d="M5.2 3h3.1c1.21 0 2.2.98 2.2 2.2v3.1a2.2 2.2 0 0 1-2.2 2.2H5.2A2.2 2.2 0 0 1 3 8.3V5.2C3 3.98 3.98 3 5.2 3Zm10.5 10.5h3.1c1.21 0 2.2.98 2.2 2.2v3.1a2.2 2.2 0 0 1-2.2 2.2h-3.1a2.2 2.2 0 0 1-2.2-2.2v-3.1c0-1.21.98-2.2 2.2-2.2Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.5 6.75H17c1.7 0 3 1.3 3 3v1m1.47-1.63L20 10.75l-1.47-1.63m-8.03 8.13H7c-1.7 0-3-1.3-3-3v-1m-1.47 1.63L4 13.26l1.47 1.63"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.75 5.05c.15 1.12.58 1.55 1.7 1.7-1.12.15-1.55.58-1.7 1.7-.15-1.12-.58-1.55-1.7-1.7 1.12-.15 1.55-.58 1.7-1.7Z"
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
            d="M5.2 2.25h3.1c.76.03 1.6.37 2.09.86.49.5.83 1.33.86 2.09v3.1c-.03.76-.37 1.6-.86 2.09-.5.49-1.33.83-2.09.86H5.2a3.3 3.3 0 0 1-2.09-.86 3.3 3.3 0 0 1-.86-2.09V5.2c.03-.76.37-1.6.86-2.09.5-.49 1.33-.83 2.09-.86zm10.5 10.5h3.1c.76.03 1.6.37 2.09.86.49.5.83 1.33.86 2.09v3.1c-.03.76-.37 1.6-.86 2.09-.5.49-1.33.83-2.09.86h-3.1a3.3 3.3 0 0 1-2.09-.86 3.3 3.3 0 0 1-.86-2.09v-3.1c.03-.76.37-1.6.86-2.09.5-.49 1.33-.83 2.09-.86z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M13.5 6h2.4c.6 0 1.22-.04 1.8.06a3.7 3.7 0 0 1 2.96 2.84l.25-.29a.75.75 0 1 1 1.12 1l-1.46 1.63-.04.04a.75.75 0 0 1-.85.15l-.2-.15-.04-.04-1.47-1.62a.75.75 0 0 1 .88-1.18 2.2 2.2 0 0 0-1.4-.9c-.5-.1-1.04-.04-1.55-.04h-2.4a.75.75 0 0 1 0-1.5zm-3 12H8.1c-.6 0-1.22.04-1.8-.06a3.7 3.7 0 0 1-2.96-2.84l-.25.29a.75.75 0 1 1-1.12-1l1.47-1.63q0-.03.03-.04a.75.75 0 0 1 .85-.15 1 1 0 0 1 .24.19l1.47 1.62a.75.75 0 0 1-.88 1.18c.33.47.83.8 1.4.9.5.1 1.04.04 1.55.04h2.4a.75.75 0 0 1 0 1.5z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M7.15 4.65c.08.63.2.97.47 1.23s.6.4 1.23.47a.4.4 0 0 1 0 .8c-.63.08-.97.2-1.23.47s-.4.6-.47 1.23a.4.4 0 0 1-.8 0c-.08-.63-.2-.97-.47-1.23s-.6-.4-1.23-.47a.4.4 0 0 1 0-.8c.63-.08.97-.2 1.23-.47s.4-.6.47-1.23a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
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
            d="M5.2 2.25h3.1c.76.03 1.6.37 2.09.86.49.5.83 1.33.86 2.09v3.1c-.03.76-.37 1.6-.86 2.09-.5.49-1.33.83-2.09.86H5.2a3.3 3.3 0 0 1-2.09-.86 3.3 3.3 0 0 1-.86-2.09V5.2c.03-.76.37-1.6.86-2.09.5-.49 1.33-.83 2.09-.86zm10.5 10.5h3.1c.76.03 1.6.37 2.09.86.49.5.83 1.33.86 2.09v3.1c-.03.76-.37 1.6-.86 2.09-.5.49-1.33.83-2.09.86h-3.1a3.3 3.3 0 0 1-2.09-.86 3.3 3.3 0 0 1-.86-2.09v-3.1c.03-.76.37-1.6.86-2.09.5-.49 1.33-.83 2.09-.86zM13.5 6h2.4c.6 0 1.22-.04 1.8.06a3.7 3.7 0 0 1 2.96 2.84l.25-.29a.75.75 0 1 1 1.12 1l-1.46 1.63-.04.04a.75.75 0 0 1-.85.15l-.2-.15-.04-.04-1.47-1.62a.75.75 0 0 1 .88-1.18 2.2 2.2 0 0 0-1.4-.9c-.5-.1-1.04-.04-1.55-.04h-2.4a.75.75 0 0 1 0-1.5zm-3 12H8.1c-.6 0-1.22.04-1.8-.06a3.7 3.7 0 0 1-2.96-2.84l-.25.29a.75.75 0 1 1-1.12-1l1.47-1.63q0-.03.03-.04a.75.75 0 0 1 .85-.15 1 1 0 0 1 .24.19l1.47 1.62a.75.75 0 0 1-.88 1.18c.33.47.83.8 1.4.9.5.1 1.04.04 1.55.04h2.4a.75.75 0 0 1 0 1.5zM6.75 4.3a.4.4 0 0 0-.4.35c-.08.63-.2.97-.47 1.23s-.6.4-1.23.47a.4.4 0 0 0 0 .8c.63.08.97.2 1.23.47s.4.6.47 1.23a.4.4 0 0 0 .8 0c.08-.63.2-.97.47-1.23s.6-.4 1.23-.47a.4.4 0 0 0 0-.8c-.63-.08-.97-.2-1.23-.47s-.4-.6-.47-1.23a.4.4 0 0 0-.4-.35z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiSwap;
