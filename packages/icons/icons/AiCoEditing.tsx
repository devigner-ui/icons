import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiCoEditing = forwardRef<SVGSVGElement, IconProps>(function IconAiCoEditing(
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
            d="M2.5 19.5c0-2.5 1.8-4.5 4-4.5s4 2 4 4.5M15 9a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0zm-1.5 10.5c0-2.5 1.8-4.5 4-4.5s4 2 4 4.5M7.64 6.77A2.5 2.5 0 0 0 4 9a2.5 2.5 0 1 0 4.98-.34"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 2.4c.23 1.72.88 2.37 2.6 2.6-1.72.23-2.37.88-2.6 2.6-.23-1.72-.88-2.37-2.6-2.6 1.72-.23 2.37-.88 2.6-2.6Z"
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
            d="M4 9a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0zM2.5 19.5c0-2.5 1.8-4.5 4-4.5s4 2 4 4.5M15 9a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0zm-1.5 10.5c0-2.5 1.8-4.5 4-4.5s4 2 4 4.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 2.4c.23 1.72.88 2.37 2.6 2.6-1.72.23-2.37.88-2.6 2.6-.23-1.72-.88-2.37-2.6-2.6 1.72-.23 2.37-.88 2.6-2.6Z"
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
            d="M6.5 5.75c.84 0 1.75.4 2.3.95s.95 1.46.95 2.3-.4 1.75-.95 2.3-1.46.95-2.3.95-1.75-.4-2.3-.95A3.5 3.5 0 0 1 3.25 9c0-.84.4-1.75.95-2.3a3.5 3.5 0 0 1 2.3-.95zM1.75 19.5a6 6 0 0 1 1.37-3.69 4.7 4.7 0 0 1 3.38-1.56c1.27 0 2.57.65 3.39 1.56.8.91 1.33 2.3 1.36 3.69 0 .41-.34.75-.75.75h-8a.75.75 0 0 1-.75-.75zM17.5 5.75c.84 0 1.75.4 2.3.95s.95 1.46.95 2.3-.4 1.75-.95 2.3-1.46.95-2.3.95-1.75-.4-2.3-.95a3.5 3.5 0 0 1-.95-2.3c0-.84.4-1.75.95-2.3a3.5 3.5 0 0 1 2.3-.95zM12.75 19.5a6 6 0 0 1 1.37-3.69 4.7 4.7 0 0 1 3.38-1.56c1.27 0 2.57.65 3.39 1.56.8.91 1.33 2.3 1.36 3.69 0 .41-.34.75-.75.75h-8a.75.75 0 0 1-.75-.75z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M12.4 2c.12.93.33 1.47.73 1.87s.94.61 1.87.73a.4.4 0 0 1 0 .8c-.93.12-1.47.32-1.87.73s-.61.94-.73 1.87a.4.4 0 0 1-.8 0c-.12-.93-.33-1.47-.73-1.87S9.93 5.52 9 5.4a.4.4 0 0 1 0-.8c.93-.12 1.47-.32 1.87-.73s.61-.94.73-1.87a.4.4 0 0 1 .8 0z"
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
            d="M6.5 5.75c.84 0 1.75.4 2.3.95s.95 1.46.95 2.3-.4 1.75-.95 2.3-1.46.95-2.3.95-1.75-.4-2.3-.95A3.5 3.5 0 0 1 3.25 9c0-.84.4-1.75.95-2.3a3.5 3.5 0 0 1 2.3-.95zM1.75 19.5a6 6 0 0 1 1.37-3.69 4.7 4.7 0 0 1 3.38-1.56c1.27 0 2.57.65 3.39 1.56.8.91 1.33 2.3 1.36 3.69 0 .41-.34.75-.75.75h-8a.75.75 0 0 1-.75-.75zM17.5 5.75c.84 0 1.75.4 2.3.95s.95 1.46.95 2.3-.4 1.75-.95 2.3-1.46.95-2.3.95-1.75-.4-2.3-.95a3.5 3.5 0 0 1-.95-2.3c0-.84.4-1.75.95-2.3a3.5 3.5 0 0 1 2.3-.95zM12.75 19.5a6 6 0 0 1 1.37-3.69 4.7 4.7 0 0 1 3.38-1.56c1.27 0 2.57.65 3.39 1.56.8.91 1.33 2.3 1.36 3.69 0 .41-.34.75-.75.75h-8a.75.75 0 0 1-.75-.75z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M12.4 2c.12.93.33 1.47.73 1.87s.94.61 1.87.73a.4.4 0 0 1 0 .8c-.93.12-1.47.32-1.87.73s-.61.94-.73 1.87a.4.4 0 0 1-.8 0c-.12-.93-.33-1.47-.73-1.87S9.93 5.52 9 5.4a.4.4 0 0 1 0-.8c.93-.12 1.47-.32 1.87-.73s.61-.94.73-1.87a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiCoEditing;
