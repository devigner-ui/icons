import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPaperclip4 = forwardRef<SVGSVGElement, IconProps>(
  function IconPaperclip4(
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
              d="m13 12.15-2.47 2.47a3.5 3.5 0 1 0 4.95 4.95l3.9-3.89a7 7 0 0 0-9.9-9.9l-4.25 4.24a6 6 0 0 0 0 8.49"
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
              d="M16.86 2H8.48c-3.64 0-5.8 2.17-5.8 5.81v8.37c0 3.65 2.16 5.82 5.8 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2"
              fill="currentColor"
            />
            <path
              d="M12.87 17.66a2.75 2.75 0 0 1-1.94-4.69l1.41-1.41a.75.75 0 0 1 1.06 0c.3.29.3.77 0 1.06L12 14.03a1.25 1.25 0 1 0 1.76 1.77l2.22-2.22a3.24 3.24 0 0 0 0-4.6 3.33 3.33 0 0 0-4.6 0L8.96 11.4a2.7 2.7 0 0 0 0 3.79c.3.29.3.77 0 1.06a.75.75 0 0 1-1.06 0 4.2 4.2 0 0 1 0-5.91l2.42-2.42c.9-.9 2.1-1.39 3.36-1.39a4.7 4.7 0 0 1 4.75 4.75c0 1.27-.49 2.46-1.39 3.36l-2.22 2.22c-.54.53-1.24.8-1.95.8"
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
              d="M16.86 2H8.48c-3.64 0-5.8 2.17-5.8 5.81v8.37c0 3.65 2.16 5.82 5.8 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2m.18 12.63-2.22 2.22a2.75 2.75 0 0 1-3.88-3.89l1.41-1.41a.75.75 0 0 1 1.06 0c.3.29.3.77 0 1.06l-1.4 1.41a1.25 1.25 0 1 0 1.76 1.77L16 13.57a3.24 3.24 0 0 0 0-4.6 3.33 3.33 0 0 0-4.6 0L8.96 11.4a2.7 2.7 0 0 0 0 3.79c.3.29.3.77 0 1.06a.75.75 0 0 1-1.06 0 4.2 4.2 0 0 1 0-5.91l2.42-2.42c.9-.9 2.1-1.39 3.36-1.39a4.7 4.7 0 0 1 4.75 4.75c0 1.27-.49 2.46-1.39 3.35"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconPaperclip4;
