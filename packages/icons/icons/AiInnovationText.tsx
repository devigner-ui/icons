import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiInnovationText = forwardRef<SVGSVGElement, IconProps>(function IconAiInnovationText(
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
            d="M14.55 17.5h.25v-1.2c0-.9.4-1.8 1.1-2.4a6.5 6.5 0 1 0-7.8 0c.7.6 1.1 1.5 1.1 2.4v1.2h2.95"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.5 20.5h5m-5.06-8.6V9.38a1.68 1.68 0 0 1 3.36 0v2.52m-3.36-1.76h3.36m1.76-2.44v4.2"
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
            d="M9.2 17.5h5.6v-1.2c0-.9.4-1.8 1.1-2.4a6.5 6.5 0 1 0-7.8 0c.7.6 1.1 1.5 1.1 2.4Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.5 20.5h5m-5.06-8.6V9.38a1.68 1.68 0 0 1 3.36 0v2.52m-3.36-1.76h3.36m1.76-2.44v4.2"
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
            d="M8.45 16.3a2 2 0 0 0-.8-1.8 7.6 7.6 0 0 1-2.57-3.64 7.4 7.4 0 0 1 .04-4.45 7.4 7.4 0 0 1 2.64-3.6A7.4 7.4 0 0 1 12 1.46c1.52 0 3.07.53 4.24 1.37a7.4 7.4 0 0 1 2.64 3.59c.48 1.44.47 3.08.04 4.45a7.4 7.4 0 0 1-2.53 3.61q-.9.7-.84 1.83v1.2c0 .42-.34.75-.75.75H9.2a.75.75 0 0 1-.75-.75z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M8.69 11.9V9.98c0-.68 0-1.32.39-1.91a2.45 2.45 0 0 1 4.25.3c.24.52.22 1.06.22 1.61v1.92a.75.75 0 0 1-1.5 0v-1.01h-1.86v1a.75.75 0 0 1-1.5 0zm3.32-2.78c-.23-.78-1.32-.9-1.7-.18q-.11.2-.12.45h1.87q0-.15-.05-.27zm2.55-2.17c.42 0 .75.34.75.75v4.2a.75.75 0 0 1-1.5 0V7.7c0-.41.34-.75.75-.75zM8.75 20.5c0-.41.34-.75.75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75z"
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
            d="M8.45 16.3a2 2 0 0 0-.8-1.8 7.6 7.6 0 0 1-2.57-3.64 7.4 7.4 0 0 1 .04-4.45 7.4 7.4 0 0 1 2.64-3.6A7.4 7.4 0 0 1 12 1.46c1.52 0 3.07.53 4.24 1.37a7.4 7.4 0 0 1 2.64 3.59c.48 1.44.47 3.08.04 4.45a7.4 7.4 0 0 1-2.53 3.61q-.9.7-.84 1.83v1.2c0 .42-.34.75-.75.75H9.2a.75.75 0 0 1-.75-.75zm.3 4.2c0-.41.34-.75.75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75zm.69-7.85c.41 0 .75-.34.75-.75v-1.01h1.86v1a.75.75 0 0 0 1.5 0v-1.9c0-.55.02-1.1-.22-1.61a2.45 2.45 0 0 0-4.25-.3c-.39.6-.39 1.23-.39 1.91v1.92c0 .41.34.75.75.75zm2.62-3.26h-1.88q.02-.25.12-.46c.4-.7 1.48-.6 1.71.19q.04.12.05.27zM13.8 7.7v4.2a.75.75 0 0 0 1.5 0V7.7a.75.75 0 0 0-1.5 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiInnovationText;
