import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconKeyMinimalisticSquare = forwardRef<SVGSVGElement, IconProps>(
  function IconKeyMinimalisticSquare(
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
              d="m16.65 7.35.53-.53zm0 6.51.53.53zm-7.89-1.41-.53-.53zM6.3 14.92l.53.53zm2.79 2.8-.53-.54zm2.47-2.48-.53-.53zm-5.54.49-.75.08zm.15 1.39-.74.08zm.72.72-.08.75zm1.4.15.08-.74zm-1.93-.48.53-.53zm.14.14-.53.53zm2.45-5.9-.73.2zm3.3 3.31-.18.73zm-2.97.14a.75.75 0 0 0-1.06 1.06zm3.65-4.12a.6.6 0 0 1 0-.83L11.86 9.2a2.1 2.1 0 0 0 0 2.95zm.83 0a.6.6 0 0 1-.83 0l-1.06 1.06a2.1 2.1 0 0 0 2.95 0zm0-.83a.6.6 0 0 1 0 .83l1.06 1.06a2.1 2.1 0 0 0 0-2.95zM14.8 9.2a2.1 2.1 0 0 0-2.95 0l1.06 1.06a.6.6 0 0 1 .83 0zm1.31-1.31a3.85 3.85 0 0 1 0 5.45l1.06 1.06a5.35 5.35 0 0 0 0-7.57zm1.06-1.06a5.35 5.35 0 0 0-7.57 0l1.06 1.06a3.85 3.85 0 0 1 5.45 0zm-8.95 5.1L5.75 14.4l1.06 1.06 2.47-2.47zm1.38 6.32.83-.83-1.06-1.06-.83.83zm.83-.83 1.64-1.64-1.06-1.06-1.64 1.64zm-5.18-1.6.16 1.4 1.49-.17-.16-1.4zm1.54 2.78 1.39.15.17-1.5-1.4-.15zm-.98-.55.14.14 1.06-1.06-.14-.14zm1.14-.95.06.03-1.06 1.06q.34.35.84.4zm-1.54.11q.05.5.4.84l1.06-1.06.03.06zm3.13-.02a.2.2 0 0 1-.2.07l-.16 1.49c.52.06 1.05-.13 1.42-.5zm-2.8-2.79c-.36.37-.55.9-.49 1.42l1.5-.17q-.03-.11.06-.19zm3.91-2.82a3.9 3.9 0 0 1 1.01-3.7L9.61 6.83a5.4 5.4 0 0 0-1.4 5.12zm6.46 1.76c-1 1-2.4 1.34-3.69 1l-.37 1.46a5.4 5.4 0 0 0 5.12-1.4zm-4.04 2.44-.03.02.38-1.45a1.5 1.5 0 0 0-1.4.37zm-2.79-2.8c.4-.39.5-.94.37-1.4l-1.45.37v.01-.01l.02-.02zm1.14 3.38L9.27 15.2 8.2 16.26l1.17 1.16z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2 12c0-4.7 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
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
              d="M3.46 3.46C2 4.93 2 7.3 2 12s0 7.07 1.46 8.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46C22 19.07 22 16.7 22 12s0-7.07-1.46-8.54C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.65 13.86a4.6 4.6 0 1 0-7.71-2.1c.06.24 0 .5-.18.69L6.3 14.92a1 1 0 0 0-.28.8l.15 1.4q.03.23.19.4l.14.13q.15.16.4.19l1.38.15c.3.04.6-.07.81-.28l.3-.3-1.17-1.15a.75.75 0 1 1 1.06-1.06l1.16 1.15 1.12-1.11a.7.7 0 0 1 .7-.18 4.6 4.6 0 0 0 4.4-1.2M12.4 9.72a1.33 1.33 0 1 1 1.89 1.89 1.33 1.33 0 0 1-1.89-1.89"
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
              d="M12.39 9.72a1.33 1.33 0 1 1 1.89 1.89 1.33 1.33 0 0 1-1.89-1.89"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.46 3.46C2 4.93 2 7.3 2 12s0 7.07 1.46 8.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46C22 19.07 22 16.7 22 12s0-7.07-1.46-8.54C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46m13.2 3.89a4.6 4.6 0 0 1-4.41 7.71.7.7 0 0 0-.7.18l-1.11 1.11-1.17-1.15a.75.75 0 1 0-1.06 1.06l1.17 1.15-.3.3a1 1 0 0 1-.8.28l-1.4-.15a.7.7 0 0 1-.4-.19l-.13-.14a.7.7 0 0 1-.19-.39l-.15-1.4a1 1 0 0 1 .28-.8l2.47-2.47a.7.7 0 0 0 .18-.7 4.6 4.6 0 0 1 7.71-4.4"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconKeyMinimalisticSquare;
