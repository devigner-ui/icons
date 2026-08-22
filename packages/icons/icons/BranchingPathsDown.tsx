import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBranchingPathsDown = forwardRef<SVGSVGElement, IconProps>(
  function IconBranchingPathsDown(
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
              d="M12.75 6.5a.75.75 0 0 0-1.5 0zm5.25 10 .53.53c.3-.3.3-.77 0-1.06zm-2.03.97a.75.75 0 0 0 1.06 1.06zm1.06-3a.75.75 0 1 0-1.06 1.06zM11.25 6.5v6h1.5v-6zM16 17.25h2v-1.5h-2zm1.47-1.28-1.5 1.5 1.06 1.06 1.5-1.5zm1.06 0-1.5-1.5-1.06 1.06 1.5 1.5zm-7.28-3.47A4.75 4.75 0 0 0 16 17.25v-1.5a3.25 3.25 0 0 1-3.25-3.25z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12.75 6.5a.75.75 0 0 0-1.5 0zM6 16.5l-.53-.53c-.3.3-.3.77 0 1.06zm.97 2.03a.75.75 0 1 0 1.06-1.06zm1.06-3a.75.75 0 0 0-1.06-1.06zm3.22-9.03v6h1.5v-6zM8 15.75H6v1.5h2zm-2.53 1.28 1.5 1.5 1.06-1.06-1.5-1.5zm1.06 0 1.5-1.5-1.06-1.06-1.5 1.5zm4.72-4.53c0 1.8-1.46 3.25-3.25 3.25v1.5a4.75 4.75 0 0 0 4.75-4.75z"
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
              d="M12.75 6.5a.75.75 0 0 0-1.5 0v6c0 1.8-1.46 3.25-3.25 3.25h-.19l.22-.22a.75.75 0 0 0-1.06-1.06l-1.5 1.5c-.3.3-.3.77 0 1.06l1.5 1.5a.75.75 0 1 0 1.06-1.06l-.22-.22H8c1.68 0 3.16-.87 4-2.19a4.8 4.8 0 0 0 4 2.19h.19l-.22.22a.75.75 0 0 0 1.06 1.06l1.5-1.5c.3-.3.3-.77 0-1.06l-1.5-1.5a.75.75 0 1 0-1.06 1.06l.22.22H16a3.25 3.25 0 0 1-3.25-3.25z"
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
              d="M3.46 3.46C2 4.93 2 7.3 2 12s0 7.07 1.46 8.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46C22 19.07 22 16.7 22 12s0-7.07-1.46-8.54C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46M12 5.75c.41 0 .75.34.75.75v6c0 1.8 1.46 3.25 3.25 3.25h.19l-.22-.22a.75.75 0 0 1 1.06-1.06l1.5 1.5c.3.3.3.77 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l.22-.22H16a4.8 4.8 0 0 1-4-2.19 4.8 4.8 0 0 1-4 2.19h-.19l.22.22a.75.75 0 0 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06l1.5-1.5a.75.75 0 1 1 1.06 1.06l-.22.22H8c1.8 0 3.25-1.45 3.25-3.25v-6c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBranchingPathsDown;
