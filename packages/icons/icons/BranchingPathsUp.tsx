import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBranchingPathsUp = forwardRef<SVGSVGElement, IconProps>(
  function IconBranchingPathsUp(
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
              opacity={duotone ? "0.4" : "1"}
              d="M11.25 18a.75.75 0 1 0 1.5 0zM18 8l.53.53c.3-.3.3-.77 0-1.06zm-.97-2.03a.75.75 0 1 0-1.06 1.06zm-1.06 3a.75.75 0 0 0 1.06 1.06zM12.75 18v-6h-1.5v6zM16 8.75h2v-1.5h-2zm2.53-1.28-1.5-1.5-1.06 1.06 1.5 1.5zm-1.06 0-1.5 1.5 1.06 1.06 1.5-1.5zM12.75 12c0-1.8 1.46-3.25 3.25-3.25v-1.5A4.75 4.75 0 0 0 11.25 12z"
              fill="currentColor"
            />
            <path
              d="M11.25 18a.75.75 0 1 0 1.5 0zM6 8l-.53-.53c-.3.3-.3.77 0 1.06zm2.03-.97a.75.75 0 0 0-1.06-1.06zm-1.06 3a.75.75 0 1 0 1.06-1.06zM12.75 18v-6h-1.5v6zM8 7.25H6v1.5h2zM6.53 8.53l1.5-1.5-1.06-1.06-1.5 1.5zm-1.06 0 1.5 1.5 1.06-1.06-1.5-1.5zM12.75 12A4.75 4.75 0 0 0 8 7.25v1.5c1.8 0 3.25 1.46 3.25 3.25z"
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
              d="M3.46 3.46C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12s0-7.07 1.46-8.54"
              fill="currentColor"
            />
            <path
              d="M12.75 17.5a.75.75 0 1 1-1.5 0v-6c0-1.8-1.46-3.25-3.25-3.25h-.19l.22.22a.75.75 0 0 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06l1.5-1.5a.75.75 0 0 1 1.06 1.06l-.22.22H8c1.68 0 3.16.87 4 2.19a4.8 4.8 0 0 1 4-2.19h.19l-.22-.22a.75.75 0 0 1 1.06-1.06l1.5 1.5c.3.3.3.77 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l.22-.22H16a3.25 3.25 0 0 0-3.25 3.25z"
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
              d="M3.46 3.46C2 4.93 2 7.3 2 12s0 7.07 1.46 8.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46C22 19.07 22 16.7 22 12s0-7.07-1.46-8.54C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46m4.57 2.51c.3.3.3.77 0 1.06l-.22.22H8c1.68 0 3.16.87 4 2.19a4.8 4.8 0 0 1 4-2.19h.19l-.22-.22a.75.75 0 0 1 1.06-1.06l1.5 1.5c.3.3.3.77 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l.22-.22H16A3.25 3.25 0 0 0 12.75 12v6a.75.75 0 1 1-1.5 0v-6c0-1.8-1.46-3.25-3.25-3.25h-.19l.22.22a.75.75 0 0 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06l1.5-1.5c.3-.3.77-.3 1.06 0"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBranchingPathsUp;
