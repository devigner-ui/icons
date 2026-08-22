import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAugmentedReality = forwardRef<SVGSVGElement, IconProps>(
  function IconAugmentedReality(
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
              opacity={duotone ? "0.4" : "1"}
              d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M14 8v-.75a.75.75 0 0 0-.75.75zm-.75 8a.75.75 0 0 0 1.5 0zM8.5 8l.72-.22a.75.75 0 0 0-1.44 0zm-1.62 5.2-.72-.22zm-1.6 2.58a.75.75 0 0 0 1.44.44zm5 .44a.75.75 0 0 0 1.44-.44zM14 12h-.75v.75H14zm3.36 4.4a.75.75 0 1 0 1.28-.8zM7.78 7.78l-1.62 5.2 1.43.44 1.63-5.2zm-1.62 5.2-.88 2.8 1.44.44.87-2.8zm1.62-4.76 1.63 5.2 1.43-.44-1.62-5.2zm1.63 5.2.87 2.8 1.44-.44-.88-2.8zm-2.53.53h3.25v-1.5H6.87zM14 8.75h2v-1.5h-2zm.75 3.25V8h-1.5v4zm2.5-2c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 18.75 10zM16 8.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 16 7.25zM13.25 8v8h1.5V8zM16 11.25h-.5v1.5h.5zm-.5 0H14v1.5h1.5zm-.64 1.15 2.5 4 1.28-.8-2.5-4z"
              fill="currentColor"
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
              d="M3.46 20.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46C22 19.07 22 16.7 22 12s0-7.07-1.46-8.54C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46C2 4.93 2 7.3 2 12s0 7.07 1.46 8.54"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14 7.25a.75.75 0 0 0-.75.75v8a.75.75 0 0 0 1.5 0v-3.25h.33l2.28 3.65a.75.75 0 1 0 1.28-.8l-1.86-2.96A2.75 2.75 0 0 0 16 7.25zm.75 1.5v2.5H16a1.25 1.25 0 1 0 0-2.5z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.22 7.78a.75.75 0 0 0-1.44 0l-2.5 8a.75.75 0 0 0 1.44.44l.7-2.27h2.15l.71 2.27a.75.75 0 0 0 1.44-.44zM7.9 12.45h1.2l-.6-1.94z"
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
              d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12m7.22-4.22a.75.75 0 0 0-1.44 0l-2.5 8a.75.75 0 0 0 1.44.44l.7-2.27h2.15l.71 2.27a.75.75 0 0 0 1.44-.44zM7.9 12.45h1.2l-.6-1.94zM13.25 8c0-.41.34-.75.75-.75h2a2.75 2.75 0 0 1 .78 5.39l1.86 2.96a.75.75 0 1 1-1.28.8l-2.28-3.65h-.33V16a.75.75 0 0 1-1.5 0zm1.5 3.25v-2.5H16a1.25 1.25 0 1 1 0 2.5z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconAugmentedReality;
