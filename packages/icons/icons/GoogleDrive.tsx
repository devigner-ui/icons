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
            d="M5.47 8.74 1.41 15.7l3.18 5.29h14.82s3.18-5.45 3.18-5.37S15.18 3 15.18 3H8.83L7.67 4.99"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m8.82 3 10.59 18"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M15.18 3 4.59 21"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M1.5 15.71H22"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
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
              d="M15.18 3H8.83L1.42 15.71 4.6 21h14.82s3.18-5.45 3.18-5.37A1765 1765 0 0 1 15.18 3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="m8.82 3 10.59 18"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.18 3 4.59 21"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1.5 15.71H22"
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
              d="M24 0H0v24h24z"
              fill="none"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7.7 15.71 4.59 21l-3.18-5.29z"
              fill="currentColor"
            />
            <path d="m12 8.41-4.3 7.3H1.41L8.82 3z" fill="currentColor" />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M15.18 3 12 8.41 8.82 3z"
              fill="currentColor"
            />
            <path
              d="m22.59 15.63-.06.08H16.3L12 8.41 15.18 3s7.36 12.63 7.41 12.63"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22.53 15.71c-.42.66-3.12 5.29-3.12 5.29l-3.11-5.29z"
              fill="currentColor"
            />
            <path d="M19.41 21H4.59l3.11-5.29h8.6z" fill="currentColor" />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16.3 15.71H7.7l4.3-7.3z"
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
              d="m5.94 16.77-1.66 2.82c-.12.21-.43.21-.56 0l-1.69-2.82a.32.32 0 0 1 .28-.49h3.35c.25 0 .4.28.28.49"
              fill="currentColor"
            />
            <path
              d="m11.69 8.41-3.95 6.47a.5.5 0 0 1-.42.23H2.25c-.38 0-.62-.4-.43-.72L8.28 3.73c.19-.31.66-.32.85 0l2.56 4.21q.14.23 0 .47"
              fill="currentColor"
            />
            <path
              d="M13.72 14.49h-3.48a.27.27 0 0 1-.23-.4l1.74-2.95c.1-.17.35-.17.45 0l1.74 2.95c.11.18-.02.4-.22.4"
              fill="currentColor"
            />
            <path
              d="m13.66 3.4-1.45 2.47a.27.27 0 0 1-.46 0L10.3 3.4c-.1-.18.02-.4.23-.4h2.9c.21 0 .33.22.23.4"
              fill="currentColor"
            />
            <path
              d="M22.17 14.37c.2.33-.05.75-.43.75h-4.87a.5.5 0 0 1-.41-.23l-3.81-6.47a.5.5 0 0 1 0-.48l2.47-4.21a.47.47 0 0 1 .82 0c1.22 2.11 4.95 8.45 6.23 10.64"
              fill="currentColor"
            />
            <path
              d="m21.93 16.77-1.68 2.84a.33.33 0 0 1-.57-.01l-1.66-2.83a.33.33 0 0 1 .29-.5h3.33c.26.01.42.28.29.5"
              fill="currentColor"
            />
            <path
              d="M18.02 21H5.94a.46.46 0 0 1-.4-.7l2.33-3.96a.5.5 0 0 1 .4-.23h7.42q.26.01.4.23l2.33 3.96c.18.31-.04.7-.4.7"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconGoogleDrive;
