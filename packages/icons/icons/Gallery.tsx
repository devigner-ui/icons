import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconGallery = forwardRef<SVGSVGElement, IconProps>(function IconGallery(
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
            d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <circle
            opacity={duotone ? "0.4" : "1"}
            cx="16"
            cy="8"
            r="2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m2 12.5 1.75-1.53a2.3 2.3 0 0 1 3.14.1l4.3 4.3a2 2 0 0 0 2.56.21l.3-.2a3 3 0 0 1 3.73.22L21 18.5"
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
          <path d="M18 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0" fill="currentColor" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.94 1.25h.12c2.3 0 4.11 0 5.53.19 1.44.2 2.58.6 3.48 1.5.9.89 1.3 2.03 1.49 3.47.19 1.42.19 3.22.19 5.53v.1c0 1.9 0 3.46-.1 4.73a8 8 0 0 1-.8 3.24q-.31.58-.78 1.06a5.7 5.7 0 0 1-3.48 1.49c-1.42.19-3.22.19-5.53.19h-.12c-2.3 0-4.11 0-5.53-.19a5.7 5.7 0 0 1-3.48-1.5 5.4 5.4 0 0 1-1.42-3c-.21-1.2-.25-2.7-.26-4.56v-1.56c0-2.3 0-4.11.19-5.53a5.7 5.7 0 0 1 1.5-3.48A5.7 5.7 0 0 1 6.4 1.44c1.42-.19 3.22-.19 5.53-.19M6.61 2.93c-1.27.17-2.05.5-2.62 1.06-.56.57-.9 1.35-1.06 2.62-.18 1.3-.18 3.01-.18 5.39v1.5a27 27 0 0 0 .24 4.3c.18 1.03.5 1.7 1 2.2.57.57 1.35.9 2.62 1.07 1.3.18 3.01.18 5.39.18s4.09 0 5.39-.18c1.27-.17 2.05-.5 2.62-1.06a3 3 0 0 0 .52-.71c.33-.62.52-1.44.62-2.65.1-1.2.1-2.7.1-4.65 0-2.38 0-4.09-.18-5.39-.17-1.27-.5-2.05-1.06-2.62-.57-.56-1.35-.9-2.62-1.06-1.3-.18-3.01-.18-5.39-.18s-4.09 0-5.39.18"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m20.6 19.15-2.82-2.55a3 3 0 0 0-3.74-.23l-.3.21a2 2 0 0 1-2.56-.22L6.9 12.07a2.3 2.3 0 0 0-3.14-.1l-1 .87v.65c.01 1.88.05 3.25.24 4.3.18 1.04.5 1.7 1 2.22.57.56 1.35.9 2.62 1.06 1.3.18 3.01.18 5.39.18s4.09 0 5.39-.18c1.27-.17 2.05-.5 2.62-1.06a3 3 0 0 0 .6-.86"
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
          <path d="M18 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0" fill="currentColor" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.94 1.25h.12c2.3 0 4.11 0 5.53.19 1.44.2 2.58.6 3.48 1.5.9.89 1.3 2.03 1.49 3.47.19 1.42.19 3.22.19 5.53v.1c0 1.9 0 3.46-.1 4.73a8 8 0 0 1-.8 3.24q-.31.58-.78 1.06a5.7 5.7 0 0 1-3.48 1.49c-1.42.19-3.22.19-5.53.19h-.12c-2.3 0-4.11 0-5.53-.19a5.7 5.7 0 0 1-3.48-1.5 5.4 5.4 0 0 1-1.42-3c-.21-1.2-.25-2.7-.26-4.56v-1.56c0-2.3 0-4.11.19-5.53a5.7 5.7 0 0 1 1.5-3.48A5.7 5.7 0 0 1 6.4 1.44c1.42-.19 3.22-.19 5.53-.19M6.61 2.93c-1.27.17-2.05.5-2.62 1.06-.56.57-.9 1.35-1.06 2.62-.18 1.3-.18 3.01-.18 5.39v.84l1-.87a2.3 2.3 0 0 1 3.14.1l4.3 4.3a2 2 0 0 0 2.56.21l.3-.2a3 3 0 0 1 3.73.22l2.83 2.55c.28-.6.45-1.39.54-2.5.1-1.2.1-2.7.1-4.65 0-2.38 0-4.09-.18-5.39-.17-1.27-.5-2.05-1.06-2.62-.57-.56-1.35-.9-2.62-1.06-1.3-.18-3.01-.18-5.39-.18s-4.09 0-5.39.18"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconGallery;
