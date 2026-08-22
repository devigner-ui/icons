import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSpedometerMiddle = forwardRef<SVGSVGElement, IconProps>(
  function IconSpedometerMiddle(
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
              d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m19 19-1.5-1.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m19 5-1.5 1.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m5 19 1.5-1.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m5 5 1.5 1.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2 12h2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M20 12h2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 4V2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M15 12a3 3 0 0 1-6 0c0-.63.43-1.5.97-2.35.8-1.25 1.2-1.88 2.03-1.88s1.22.63 2.03 1.88c.54.85.97 1.72.97 2.35"
              stroke="currentColor"
              strokeWidth={strokeWidth}
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
              d="M9.02 13.02a3 3 0 0 0 6.02 0c0-.64-.44-1.51-.98-2.35-.8-1.26-1.2-1.9-2.03-1.9s-1.23.64-2.04 1.9a5 5 0 0 0-.97 2.35"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0"
              fill="currentColor"
            />
            <path
              d="M4.42 5.48q.5-.57 1.06-1.06l.05.05 1.5 1.5a.75.75 0 0 1-1.06 1.06l-1.5-1.5z"
              fill="currentColor"
            />
            <path
              d="M2.03 12.75a10 10 0 0 1 0-1.5H4a.75.75 0 0 1 0 1.5z"
              fill="currentColor"
            />
            <path
              d="M5.48 19.58q-.57-.5-1.06-1.06l.05-.05 1.5-1.5a.75.75 0 0 1 1.06 1.06l-1.5 1.5z"
              fill="currentColor"
            />
            <path
              d="M19.58 18.52q-.5.57-1.06 1.06l-.05-.05-1.5-1.5a.75.75 0 0 1 1.06-1.06l1.5 1.5z"
              fill="currentColor"
            />
            <path
              d="M21.97 11.25a10 10 0 0 1 0 1.5H20a.75.75 0 0 1 0-1.5z"
              fill="currentColor"
            />
            <path
              d="M18.52 4.42q.57.5 1.06 1.06l-.05.05-1.5 1.5a.75.75 0 1 1-1.06-1.06l1.5-1.5z"
              fill="currentColor"
            />
            <path
              d="M12.75 2.03V4a.75.75 0 0 1-1.5 0V2.03a10 10 0 0 1 1.5 0"
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
              d="M12.75 3.98a.75.75 0 0 1-1.5 0V2a10 10 0 0 0-5.79 2.4l1.56 1.55A.75.75 0 1 1 5.95 7L4.4 5.46A10 10 0 0 0 2 11.24h1.98a.75.75 0 1 1 0 1.5H2a10 10 0 0 0 2.4 5.78l1.55-1.56a.75.75 0 0 1 1.07 1.07l-1.56 1.55a10 10 0 0 0 13.08 0l-1.56-1.55a.75.75 0 1 1 1.07-1.07l1.55 1.56a10 10 0 0 0 2.4-5.78h-1.98a.75.75 0 1 1 0-1.5H22a10 10 0 0 0-2.4-5.78L18.05 7a.75.75 0 0 1-1.07-1.06l1.56-1.56A10 10 0 0 0 12.75 2zm-.72 12.04a3 3 0 0 1-3.01-3c0-.64.43-1.51.97-2.35.81-1.26 1.21-1.9 2.04-1.9.82 0 1.22.64 2.03 1.9.54.84.98 1.71.98 2.35a3 3 0 0 1-3.01 3"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSpedometerMiddle;
