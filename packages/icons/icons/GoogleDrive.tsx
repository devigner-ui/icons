import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconGoogleDrive = forwardRef<SVGSVGElement, IconProps>(
  function IconGoogleDrive(
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
              d="M15.85 3H9.5L2.09 15.71 5.27 21h14.82s3.18-5.45 3.18-5.37A1765 1765 0 0 1 15.85 3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="m9.49 3 10.59 18"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.85 3 5.26 21"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.17 15.71h20.5"
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
              d="M24.67 0h-24v24h24z"
              fill="none"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8.37 15.71 5.26 21l-3.18-5.29z"
              fill="currentColor"
            />
            <path d="m12.67 8.41-4.3 7.3H2.08L9.49 3z" fill="currentColor" />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m15.85 3-3.18 5.41L9.49 3z"
              fill="currentColor"
            />
            <path
              d="m23.26 15.63-.06.08h-6.23l-4.3-7.3L15.85 3s7.36 12.63 7.41 12.63"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M23.2 15.71c-.42.66-3.12 5.29-3.12 5.29l-3.11-5.29z"
              fill="currentColor"
            />
            <path d="M20.08 21H5.26l3.11-5.29h8.6z" fill="currentColor" />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16.97 15.71h-8.6l4.3-7.3z"
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
              d="m6.61 16.77-1.66 2.82c-.12.21-.43.21-.56 0L2.7 16.77a.32.32 0 0 1 .28-.49h3.35c.25 0 .4.28.28.49"
              fill="currentColor"
            />
            <path
              d="m12.36 8.41-3.95 6.47a.5.5 0 0 1-.42.23H2.92c-.38 0-.62-.4-.43-.72L8.95 3.73c.19-.31.66-.32.85 0l2.56 4.21q.14.23 0 .47"
              fill="currentColor"
            />
            <path
              d="M14.39 14.49h-3.48a.27.27 0 0 1-.23-.4l1.74-2.95c.1-.17.35-.17.45 0l1.74 2.95c.11.18-.02.4-.22.4"
              fill="currentColor"
            />
            <path
              d="m14.33 3.4-1.45 2.47a.27.27 0 0 1-.46 0L10.97 3.4c-.1-.18.02-.4.23-.4h2.9c.21 0 .33.22.23.4"
              fill="currentColor"
            />
            <path
              d="M22.84 14.37c.2.33-.05.75-.43.75h-4.87a.5.5 0 0 1-.41-.23l-3.81-6.47a.5.5 0 0 1 0-.48l2.47-4.21a.47.47 0 0 1 .82 0c1.22 2.11 4.95 8.45 6.23 10.64"
              fill="currentColor"
            />
            <path
              d="m22.6 16.77-1.68 2.84a.33.33 0 0 1-.57-.01l-1.66-2.83a.33.33 0 0 1 .29-.5h3.33c.26.01.42.28.29.5"
              fill="currentColor"
            />
            <path
              d="M18.69 21H6.61a.46.46 0 0 1-.4-.7l2.33-3.96a.5.5 0 0 1 .4-.23h7.42q.26.01.4.23l2.33 3.96c.18.31-.04.7-.4.7"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconGoogleDrive;
