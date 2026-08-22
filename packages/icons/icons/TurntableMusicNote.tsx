import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTurntableMusicNote = forwardRef<SVGSVGElement, IconProps>(
  function IconTurntableMusicNote(
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
              d="M12 22c-4.71 0-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12s0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46c1.24 1.25 1.43 3.13 1.45 6.54"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M19 20v-8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <circle
              cx="17"
              cy="20.0001"
              r="2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M22 15a3 3 0 0 1-3-3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0"
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
              opacity={duotone ? "0.4" : "1"}
              d="M3.17 3.46C2 4.93 2 7.3 2 12s0 7.07 1.17 8.54S6.23 22 10 22h3.38A4.25 4.25 0 0 1 17 16v-3.75a2.25 2.25 0 0 1 4.5 0c0 .33.2.6.5.7V12c0-4.71 0-7.07-1.17-8.54S17.77 2 14 2h-4C6.23 2 4.34 2 3.17 3.46"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.25 12a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0M12 9.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.25 11.5c.41 0 .75.34.75.75 0 1.24 1 2.25 2.25 2.25a.75.75 0 0 1 0 1.5c-.84 0-1.62-.28-2.25-.75v5a2.75 2.75 0 1 1-1.5-2.45v-5.55c0-.41.34-.75.75-.75m-.75 8.75a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0"
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
              d="M19.25 11.5c.41 0 .75.34.75.75 0 1.24 1 2.25 2.25 2.25a.75.75 0 0 1 0 1.5c-.84 0-1.62-.28-2.25-.75v5a2.75 2.75 0 1 1-1.5-2.45v-5.55c0-.41.34-.75.75-.75m-.75 8.75a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0"
              fill="currentColor"
            />
            <path
              d="M12 9.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 12c0-4.71 0-7.07 1.17-8.54S6.23 2 10 2h4c3.77 0 5.66 0 6.83 1.46C22 4.93 22 7.3 22 12v.96a.75.75 0 0 1-.5-.71 2.25 2.25 0 0 0-4.5 0v3.76A4.25 4.25 0 0 0 13.38 22H10c-3.77 0-5.66 0-6.83-1.46C2 19.07 2 16.7 2 12m10-3.75a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconTurntableMusicNote;
