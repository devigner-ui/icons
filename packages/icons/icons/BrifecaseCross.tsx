import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBrifecaseCross = forwardRef<SVGSVGElement, IconProps>(
  function IconBrifecaseCross(
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
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="m13.74 15.31-2.12-2.11"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m13.72 13.22-2.12 2.12"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              d="M8.67 22h8c4.02 0 4.74-1.61 4.95-3.57l.75-8c.27-2.44-.43-4.43-4.7-4.43h-10C3.4 6 2.7 7.99 2.97 10.43l.75 8c.21 1.96.93 3.57 4.95 3.57"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8.67 6v-.8c0-1.77 0-3.2 3.2-3.2h1.6c3.2 0 3.2 1.43 3.2 3.2V6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M12.67 18.2a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22.32 11a16 16 0 0 1-5.64 2.64"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.29 11.27a16 16 0 0 0 5.38 2.41"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
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
              d="m14.27 14.51-.53-.53.5-.5a.75.75 0 0 0 0-1.06.75.75 0 0 0-1.06 0l-.5.5-.53-.53a.75.75 0 0 0-1.06 0 .75.75 0 0 0 0 1.06l.53.53-.55.55a.75.75 0 0 0 0 1.06q.24.22.53.22t.53-.22l.55-.55.53.53q.24.22.53.22t.53-.22a.75.75 0 0 0 0-1.06"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m22.52 11.41-.62 6.78c-.21 2-1.03 4.04-5.43 4.04H8.85c-4.4 0-5.22-2.04-5.42-4.03l-.61-6.51.04.03q.5.33 1.03.64l.44.25a17 17 0 0 0 5.12 1.8 3.25 3.25 0 0 0 6.45-.06v-.01a16 16 0 0 0 5.26-2.04q.69-.38 1.32-.84z"
              fill="currentColor"
            />
            <path
              d="M21.76 6.98c-.85-.94-2.26-1.41-4.33-1.41h-.24v-.04c0-1.68 0-3.76-3.76-3.76h-1.52c-3.76 0-3.76 2.08-3.76 3.76v.04h-.24q-3.09 0-4.33 1.41c-.99 1.11-.96 2.58-.86 3.59l.01.07.09 1.05.05.03q.5.34 1.03.64l.44.25q1.7.93 3.58 1.45a4.75 4.75 0 0 0 9.5-.06v-.04q1.9-.57 3.6-1.57l.15-.09q.69-.38 1.32-.84l.04-.05.04-.36.05-.47.02-.18c.08-1 .06-2.38-.88-3.42M9.58 5.53c0-1.7 0-2.34 2.33-2.34h1.52c2.33 0 2.33.64 2.33 2.34v.04H9.58zm3.09 11.72a3.25 3.25 0 1 1 3.23-2.91v.01a3.26 3.26 0 0 1-3.23 2.9"
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
              d="m14.27 14.51-.53-.53.5-.5a.75.75 0 0 0 0-1.06.75.75 0 0 0-1.06 0l-.5.5-.53-.53a.75.75 0 0 0-1.06 0 .75.75 0 0 0 0 1.06l.53.53-.55.55a.75.75 0 0 0 0 1.06q.24.22.53.22t.53-.22l.55-.55.53.53q.24.22.53.22t.53-.22a.75.75 0 0 0 0-1.06"
              fill="currentColor"
            />
            <path
              d="M21.76 6.98c-.85-.94-2.26-1.41-4.33-1.41h-.24v-.04c0-1.68 0-3.76-3.76-3.76h-1.52c-3.76 0-3.76 2.08-3.76 3.76v.04h-.24q-3.09 0-4.33 1.41c-.99 1.11-.96 2.58-.86 3.59l.01.07.07.8q.03.25.23.38.43.3.87.54l.44.25q1.7.93 3.58 1.45a4.75 4.75 0 0 0 9.5-.06v-.04q1.9-.57 3.6-1.57l.15-.09c.4-.21.8-.5 1.18-.76a.5.5 0 0 0 .2-.35l.02-.14.05-.47.02-.18c.08-1 .06-2.38-.88-3.42M9.58 5.53c0-1.7 0-2.34 2.33-2.34h1.52c2.33 0 2.33.64 2.33 2.34v.04H9.58zm3.09 11.72a3.25 3.25 0 1 1 3.23-2.91v.01a3.26 3.26 0 0 1-3.23 2.9"
              fill="currentColor"
            />
            <path
              d="M21.71 13.73c.25-.14.57.06.55.35l-.36 3.88c-.2 2-1.03 4.04-5.43 4.04H8.85c-4.4 0-5.22-2.04-5.42-4.03l-.34-3.7c-.03-.29.28-.48.53-.35q1.18.65 2.42 1.11a1 1 0 0 1 .62.7 6.25 6.25 0 0 0 12.05-.14 1 1 0 0 1 .61-.7q1.26-.51 2.4-1.16"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBrifecaseCross;
