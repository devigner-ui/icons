import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMessageEdit = forwardRef<SVGSVGElement, IconProps>(
  function IconMessageEdit(
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
              d="M16.67 2h-8q-6 0-6 6v13a1 1 0 0 0 1 1h13q6 0 6-6V8q0-6-6-6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="m13.58 7.84-5.19 5.19c-.2.2-.39.59-.43.87l-.28 1.98c-.1.72.4 1.22 1.12 1.12l1.98-.28c.28-.04.67-.23.87-.43l5.19-5.19c.89-.89 1.32-1.93 0-3.25-1.32-1.33-2.36-.91-3.26-.01"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.84 8.58a4.7 4.7 0 0 0 3.25 3.25"
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
              opacity={duotone ? "0.4" : "1"}
              d="M16.67 2h-8q-6 0-6 6v13a1 1 0 0 0 1 1h13q6 0 6-6V8q0-6-6-6"
              fill="currentColor"
            />
            <path
              d="M17.22 7.46c-1.26-1.26-2.48-1.29-3.77 0l-.79.79a.3.3 0 0 0-.07.26 5.2 5.2 0 0 0 3.66 3.59q.11 0 .19-.08l.78-.78q.96-.95.95-1.87 0-.96-.95-1.91"
              fill="currentColor"
            />
            <path
              d="M15.01 12.67a5 5 0 0 1-.95-.56 4 4 0 0 1-.48-.38 7 7 0 0 1-.67-.67l-.09-.12a5 5 0 0 1-.8-1.26l-.23-.56-3.77 3.77c-.25.25-.48.71-.53 1.05l-.29 2.08c-.07.44.06.85.33 1.13q.36.35.9.35l.23-.02 2.08-.29c.34-.05.8-.28 1.05-.53l3.77-3.77z"
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
              d="M16.67 2h-8q-6 0-6 6v13a1 1 0 0 0 1 1h13q6 0 6-6V8q0-6-6-6m-4.89 14.66c-.25.25-.71.48-1.05.53l-2.08.29-.23.02q-.54 0-.9-.35c-.28-.28-.4-.69-.33-1.13l.29-2.08c.05-.34.28-.81.53-1.05l3.77-3.77a6 6 0 0 0 1.03 1.82l.09.12q.33.39.67.67l.11.1.37.28q.2.15.41.27a7 7 0 0 0 1.09.51zm5.44-5.43-.78.78a.3.3 0 0 1-.19.08l-.08-.01a5.2 5.2 0 0 1-3.58-3.58.3.3 0 0 1 .07-.26l.79-.79c1.29-1.29 2.51-1.26 3.77 0q.96.95.95 1.9 0 .93-.95 1.88"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMessageEdit;
