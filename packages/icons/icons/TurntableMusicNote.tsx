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
            d="M12 22c-4.71 0-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12m20-2c-.03-3.41-.22-5.3-1.46-6.54C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46c-.97.98-1.3 2.35-1.4 4.54"
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
            cy="20"
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
            d="M9 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
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
              d="M2.67 2.96C1.5 4.43 1.5 6.8 1.5 11.5s0 7.07 1.17 8.54S5.73 21.5 9.5 21.5h3.38a4.25 4.25 0 0 1 3.62-6v-3.75a2.25 2.25 0 0 1 4.5 0c0 .33.2.6.5.7v-.95c0-4.71 0-7.07-1.17-8.54S17.27 1.5 13.5 1.5h-4c-3.77 0-5.66 0-6.83 1.46"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.75 11.5a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0m3.75-2.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.75 11c.41 0 .75.34.75.75 0 1.24 1 2.25 2.25 2.25a.75.75 0 0 1 0 1.5c-.84 0-1.62-.28-2.25-.75v5A2.75 2.75 0 1 1 18 17.3v-5.55c0-.41.34-.75.75-.75M18 19.75a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0"
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
              d="M18.75 11c.41 0 .75.34.75.75 0 1.24 1 2.25 2.25 2.25a.75.75 0 0 1 0 1.5c-.84 0-1.62-.28-2.25-.75v5A2.75 2.75 0 1 1 18 17.3v-5.55c0-.41.34-.75.75-.75M18 19.75a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0"
              fill="currentColor"
            />
            <path
              d="M11.5 9.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.5 11.5c0-4.71 0-7.07 1.17-8.54S5.73 1.5 9.5 1.5h4c3.77 0 5.66 0 6.83 1.46C21.5 4.43 21.5 6.8 21.5 11.5v.96a.75.75 0 0 1-.5-.71 2.25 2.25 0 0 0-4.5 0v3.76a4.25 4.25 0 0 0-3.62 5.99H9.5c-3.77 0-5.66 0-6.83-1.46C1.5 18.57 1.5 16.2 1.5 11.5m10-3.75a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconTurntableMusicNote;
