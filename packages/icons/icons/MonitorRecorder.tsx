import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMonitorRecorder = forwardRef<SVGSVGElement, IconProps>(
  function IconMonitorRecorder(
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
            d="M2 6.44C2 2.89 2.89 2 6.44 2H8"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M22 11.89v.89c0 3.56-.89 4.44-4.44 4.44H6.44c-3.55 0-4.44-.89-4.44-4.44v-1.99"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M12 17.22V22"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M2 13h20"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M7.5 22h9"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M17.86 9.37H13.1c-1.38 0-1.84-.92-1.84-1.84V4.01c0-1.1.9-2 2-2h4.6c1.02 0 1.84.82 1.84 1.84v3.68c0 1.02-.82 1.84-1.84 1.84Z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m20.9 7.92-1.2-.85V4.31l1.2-.85c.6-.41 1.1-.16 1.1.57v3.33c0 .73-.5.98-1.1.56Z"
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
              d="M22 11.89v.89c0 3.56-.89 4.44-4.44 4.44H6.44c-3.55 0-4.44-.89-4.44-4.44V6.44C2 2.89 2.89 2 6.44 2H8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 17.22V22"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2 13h20"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.5 22h9"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.86 9.37H13.1c-1.38 0-1.84-.92-1.84-1.84V4.01c0-1.1.9-2 2-2h4.6c1.02 0 1.84.82 1.84 1.84v3.68c0 1.02-.82 1.84-1.84 1.84"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m20.91 7.92-1.21-.85V4.31l1.21-.85c.6-.41 1.09-.16 1.09.57v3.33c0 .73-.49.98-1.09.56"
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
              opacity={duotone ? "0.4" : "1"}
              d="M20.49 7.69v6.18H1.52V7.69A4.2 4.2 0 0 1 5.71 3.5H16.3a4.2 4.2 0 0 1 4.19 4.19"
              fill="currentColor"
            />
            <path
              d="M1.52 13.87v.19a4.2 4.2 0 0 0 4.19 4.19h3.6a1 1 0 0 1 1 1v.82a1 1 0 0 1-1 1H7.05a.7.7 0 0 0-.71.71c0 .39.32.71.71.71h7.93c.39 0 .71-.32.71-.71a.7.7 0 0 0-.71-.71h-2.25a1 1 0 0 1-1-1v-.82a1 1 0 0 1 1-1h3.57a4.2 4.2 0 0 0 4.19-4.19v-.19z"
              fill="currentColor"
            />
            <path
              d="m21.51 2.86-1.13.79v-.42a1.7 1.7 0 0 0-1.71-1.71h-4.28a1.86 1.86 0 0 0-1.87 1.86v3.28c0 .86.43 1.71 1.71 1.71h4.43a1.7 1.7 0 0 0 1.71-1.71v-.43l1.13.79c.57.39 1.02.15 1.02-.53v-3.1c0-.68-.45-.91-1.01-.53"
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
              d="M20.49 10.87v3.19a4.2 4.2 0 0 1-4.2 4.2h-3.56a1 1 0 0 0-1 1v.82a1 1 0 0 0 1 1h2.26a.7.7 0 0 1 .71.71c0 .39-.32.71-.71.71H7.05a.7.7 0 0 1-.71-.71c0-.4.32-.71.71-.71h2.26a1 1 0 0 0 1-1v-.82a1 1 0 0 0-1-1h-3.6a4.2 4.2 0 0 1-4.19-4.2V7.69A4.2 4.2 0 0 1 5.71 3.5h4.31a1 1 0 0 1 1 1v2.15c0 1.93 1.29 3.22 3.21 3.22h5.26a1 1 0 0 1 1 1"
              fill="currentColor"
            />
            <path
              d="m21.51 2.86-1.13.79v-.42a1.7 1.7 0 0 0-1.71-1.71h-4.28a1.86 1.86 0 0 0-1.87 1.86v3.28c0 .86.43 1.71 1.71 1.71h4.43a1.7 1.7 0 0 0 1.71-1.71v-.43l1.13.79c.57.39 1.02.15 1.02-.53v-3.1c0-.68-.45-.91-1.01-.53"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMonitorRecorder;
