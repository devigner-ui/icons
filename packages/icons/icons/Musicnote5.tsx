import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMusicnote5 = forwardRef<SVGSVGElement, IconProps>(
  function IconMusicnote5(
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
              d="M8.64 22a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12.64 18V4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m15.28 2.11 4.42 1.47a3 3 0 0 1 1.95 2.7v1.17c0 1.53-1.18 2.38-2.63 1.9L14.6 7.88a3 3 0 0 1-1.95-2.7V4c-.01-1.52 1.18-2.38 2.63-1.89"
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
              d="M19.93 2.87 15.51 1.4a2.8 2.8 0 0 0-2.53.3 2.8 2.8 0 0 0-1.08 2.31v3.77l6.88 2.29q.52.17 1.02.17.85 0 1.51-.47a2.8 2.8 0 0 0 1.08-2.31V6.28c0-1.43-1.1-2.96-2.46-3.41"
              fill="currentColor"
            />
            <path
              d="M13.39 8.27V18a4.75 4.75 0 1 1-1.5-3.45V7.77z"
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
              d="M22.39 6.28v1.17c0 .98-.39 1.82-1.08 2.31a2.5 2.5 0 0 1-1.51.47q-.5 0-1.03-.17l-5.38-1.79V18a4.75 4.75 0 1 1-1.5-3.45V4c0-.97.4-1.81 1.09-2.31.69-.49 1.61-.6 2.53-.3l4.42 1.48a3.8 3.8 0 0 1 2.46 3.41"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMusicnote5;
