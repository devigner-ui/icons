import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHighDefinition = forwardRef<SVGSVGElement, IconProps>(
  function IconHighDefinition(
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
              d="M6.25 8a.75.75 0 0 0-1.5 0zm-1.5 8a.75.75 0 0 0 1.5 0zm6.31-8a.75.75 0 0 0-1.5 0zm-1.5 8a.75.75 0 0 0 1.5 0zm3.91-.8V8.8h-1.5v6.4zm.22.05a.3.3 0 0 1-.2-.06c-.04-.03-.02-.03-.02.01h-1.5c0 .98.9 1.55 1.72 1.55zm0 1.5c2.93 0 5.56-2 5.56-4.75h-1.5c0 1.67-1.68 3.25-4.06 3.25zm0-8c2.38 0 4.06 1.58 4.06 3.25h1.5c0-2.75-2.63-4.75-5.56-4.75zm0-1.5c-.81 0-1.72.57-1.72 1.55h1.5q-.02.06.01.01.05-.05.2-.06zM4.75 8v4h1.5V8zm0 4v4h1.5v-4zm4.81-4v4h1.5V8zm0 4v4h1.5v-4zm-4.06.75h4.81v-1.5H5.5z"
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
              d="M12 22c-4.71 0-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12s0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22"
              fill="currentColor"
            />
            <path
              d="M5.5 7.25c.41 0 .75.34.75.75v3.25h3.31V8a.75.75 0 1 1 1.5 0v8a.75.75 0 0 1-1.5 0v-3.25H6.25V16a.75.75 0 0 1-1.5 0V8c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.69 7.25c-.81 0-1.72.57-1.72 1.55v6.4c0 .98.9 1.55 1.72 1.55 2.93 0 5.56-2 5.56-4.75s-2.63-4.75-5.56-4.75m-.2 1.56-.02.01v6.36h.01q.05.06.2.07c2.39 0 4.07-1.58 4.07-3.25s-1.68-3.25-4.06-3.25q-.15 0-.2.06"
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
              d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12m4.25-4a.75.75 0 0 0-1.5 0v8a.75.75 0 0 0 1.5 0v-3.25h3.31V16a.75.75 0 0 0 1.5 0V8a.75.75 0 0 0-1.5 0v3.25H6.25zm5.72.8c0-.98.9-1.55 1.72-1.55 2.93 0 5.56 2 5.56 4.75s-2.63 4.75-5.56 4.75c-.81 0-1.72-.57-1.72-1.55zm1.5.02q.05-.07.2-.07c2.39 0 4.07 1.58 4.07 3.25s-1.68 3.25-4.06 3.25a.3.3 0 0 1-.22-.07z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconHighDefinition;
