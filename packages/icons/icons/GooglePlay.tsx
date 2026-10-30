import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconGooglePlay = forwardRef<SVGSVGElement, IconProps>(
  function IconGooglePlay(
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
            d="m21.4 12.95-4.52 2.26-3.19-3.19 3.22-3.22 4.49 2.25c.79.39.79 1.51 0 1.9Z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M2 9.06V3.07c0-.8.83-1.31 1.55-.96L16.92 8.8l-3.22 3.22-9.58 9.58-.58.29A1.07 1.07 0 0 1 2 20.93v-7.36"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M16.89 15.21 4.12 21.6l9.58-9.58z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M13.7 12.02 4.09 2.41"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m16.92 15.24-.03-.03"
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
              d="m16.92 8.8-3.22 3.22-9.58 9.58-.58.29A1.07 1.07 0 0 1 2 20.93V3.07c0-.8.83-1.31 1.55-.96z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="m21.4 12.95-4.52 2.26-3.2-3.19 3.23-3.22 4.49 2.25c.79.39.79 1.51 0 1.9"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.89 15.21 4.12 21.6l9.58-9.58z"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.7 12.02 4.09 2.41"
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
              d="m21.4 12.95-4.51 2.26-3.19-3.19 3.22-3.22 4.48 2.25c.79.39.79 1.51 0 1.9"
              fill="currentColor"
            />
            <path d="m16.92 8.8-3.22 3.22-9.67-9.67z" fill="currentColor" />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M13.7 12.02 4.12 21.6l-.57.29A1.07 1.07 0 0 1 2 20.93V3.07c0-.8.83-1.31 1.55-.96l.48.24z"
              fill="currentColor"
            />
            <path d="M16.89 15.21 4.12 21.6l9.58-9.58z" fill="currentColor" />
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
              d="m21.4 13.15-2.78 1.39a.5.5 0 0 1-.58-.09l-1.87-1.87a.5.5 0 0 1 0-.71l1.9-1.9a.5.5 0 0 1 .58-.09l2.75 1.38c.79.38.79 1.5 0 1.89"
              fill="currentColor"
            />
            <path
              d="M16.3 8.69a.5.5 0 0 1 .13.8l-1.67 1.67-.71.71a.5.5 0 0 1-.71 0L6.2 4.73c-.4-.4.07-1.05.58-.8z"
              fill="currentColor"
            />
            <path
              d="M2 20.35V3.68a.5.5 0 0 1 .85-.36l8.77 8.51c.21.2.2.53-.01.73l-8.77 8.16a.5.5 0 0 1-.84-.37"
              fill="currentColor"
            />
            <path
              d="m16.27 15.72-9.39 4.7c-.51.25-.98-.4-.58-.8l7.05-7.05c.2-.2.51-.2.71 0l2.35 2.35c.23.24.16.65-.14.8"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconGooglePlay;
