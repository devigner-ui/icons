import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHeartRemove = forwardRef<SVGSVGElement, IconProps>(
  function IconHeartRemove(
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

    /* Bold and Bulk cut the cross out of the disc; Bold also cuts the heart
       around the disc with an even gap. */
    const cut = useId();

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
            d="M22 16.53a4.8 4.8 0 1 1-1.31-3.29v.01A4.8 4.8 0 0 1 22 16.53Z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m15.94 15.27 2.53 2.53"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m18.47 15.27-2.53 2.53"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M7.56 2.43c1.81 0 3.43.88 4.44 2.23a5.55 5.55 0 0 1 10 3.36c0 1.97-.51 3.71-1.31 5.22a4.8 4.8 0 0 0-7.06 6.49q-.56.26-1.01.41c-.34.12-.9.12-1.24 0C8.48 19.15 2 15.02 2 8.02c0-1.55.62-2.95 1.63-3.96"
            strokeWidth={strokeWidth}
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
              d="M22 16.53a4.8 4.8 0 1 1-1.31-3.29v.01A4.8 4.8 0 0 1 22 16.53"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m15.94 15.27 2.53 2.53"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m18.47 15.27-2.53 2.53"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22 8.02c0 1.97-.51 3.71-1.31 5.22a4.8 4.8 0 0 0-7.06 6.49q-.56.26-1.01.41c-.34.12-.9.12-1.24 0C8.48 19.15 2 15.02 2 8.02a5.55 5.55 0 0 1 10-3.36 5.55 5.55 0 0 1 10 3.36"
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
              fill="currentColor"
              d="M22 8.69a11 11 0 0 1-1.32 5.21 4.8 4.8 0 0 0-7.05 6.5q-.56.26-1.01.41c-.34.12-.9.12-1.24 0C8.97 19.99 4.1 17 2.52 12A11 11 0 0 1 2 8.69a5.55 5.55 0 0 1 10-3.36 5.6 5.6 0 0 1 4.44-2.23C19.51 3.1 22 5.6 22 8.69"
              opacity={duotone ? "0.4" : "1"}
            />
            <mask id={`${cut}x`} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                <rect width="24" height="24" fill="white" />
                <path d="m15.94 15.27 2.53 2.53m0-2.53-2.53 2.53" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </mask>
            <path
              fill="currentColor"
              d="M17.2 10.98a5.55 5.55 0 1 0 0 11.1 5.55 5.55 0 0 0 0-11.1z"
              mask={`url(#${cut}x)`}
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
            <mask id={`${cut}x`} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                <rect width="24" height="24" fill="white" />
                <path d="m15.94 15.27 2.53 2.53m0-2.53-2.53 2.53" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </mask>
            <path
              fill="currentColor"
              d="M17.2 10.98a5.55 5.55 0 1 0 0 11.1 5.55 5.55 0 0 0 0-11.1z"
              mask={`url(#${cut}x)`}
            />
            <mask id={cut} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                <rect width="24" height="24" fill="white" />
                <circle cx="17.2" cy="16.53" r="6.3" fill="black" />
              </mask>
            <path
              fill="currentColor"
              d="M22 8.69a11 11 0 0 1-1.32 5.21 4.8 4.8 0 0 0-7.05 6.5q-.56.26-1.01.41c-.34.12-.9.12-1.24 0C8.97 19.99 4.1 17 2.52 12A11 11 0 0 1 2 8.69a5.55 5.55 0 0 1 10-3.36 5.6 5.6 0 0 1 4.44-2.23C19.51 3.1 22 5.6 22 8.69"
              mask={`url(#${cut})`}
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconHeartRemove;
