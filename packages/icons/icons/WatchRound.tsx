import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconWatchRound = forwardRef<SVGSVGElement, IconProps>(
  function IconWatchRound(
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
              d="m17 6.5-.3-1.37c-.34-1.5-.5-2.25-1.05-2.69S14.33 2 12.79 2h-1.58c-1.54 0-2.3 0-2.86.44-.55.44-.71 1.2-1.05 2.7L7 6.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m17 17.5-.3 1.37c-.34 1.5-.5 2.25-1.05 2.7-.55.43-1.32.43-2.86.43h-1.58c-1.54 0-2.3 0-2.86-.44-.55-.44-.71-1.19-1.05-2.7L7 17.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M19.5 12a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 8.92V12l2 1.92"
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
              d="M12 18.98A6.99 6.99 0 1 0 5 12a7 7 0 0 0 7 6.98"
              fill="currentColor"
            />
            <path
              d="M11.2 2h1.6c1.53 0 2.3 0 2.85.44s.71 1.2 1.05 2.7L17 6.5l.16.78a7 7 0 0 0-10.32 0L7 6.5l.3-1.37c.34-1.5.5-2.25 1.05-2.69S9.67 2 11.21 2"
              fill="currentColor"
            />
            <path
              d="M17.16 16.72a7 7 0 0 1-10.32 0l.16.78.3 1.37c.34 1.5.5 2.25 1.05 2.7.55.43 1.32.43 2.86.43h1.58c1.54 0 2.3 0 2.86-.44.55-.44.71-1.19 1.05-2.7l.3-1.36z"
              fill="currentColor"
            />
            <path
              d="M12.7 9.14a.7.7 0 0 0-1.4 0V12q0 .3.21.5l1.87 1.8a.7.7 0 0 0 1-.03.7.7 0 0 0-.03-.98L12.7 11.7z"
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
              d="M12 18.98A6.99 6.99 0 1 0 5 12a7 7 0 0 0 7 6.98m0-10.54c.39 0 .7.31.7.7v2.56l1.65 1.59c.28.26.29.7.02.98a.7.7 0 0 1-.99.02l-1.87-1.79a.7.7 0 0 1-.21-.5V9.14c0-.39.31-.7.7-.7"
              fill="currentColor"
            />
            <path
              d="M9.86 2.07q.82-.09 2.1-.07h.09q1.26-.02 2.1.07c.58.08 1.1.26 1.53.68s.6.95.68 1.53l.05.6a8.4 8.4 0 0 0-8.82 0l.05-.6c.08-.58.25-1.1.68-1.53.42-.42.95-.6 1.54-.68"
              fill="currentColor"
            />
            <path
              d="M15.68 21.25c.43-.42.6-.95.68-1.53l.05-.6a8.4 8.4 0 0 1-8.82 0l.05.6c.08.58.25 1.1.68 1.53.42.42.95.6 1.54.68q.82.09 2.1.07h.09q1.26.02 2.1-.07a2.6 2.6 0 0 0 1.53-.68"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconWatchRound;
