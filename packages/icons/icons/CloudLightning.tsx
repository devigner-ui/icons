import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCloudLightning = forwardRef<SVGSVGElement, IconProps>(
  function IconCloudLightning(
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
            d="M9.23 18.21h1v2.33c0 .34.43.51.65.25L13.33 18c.3-.34.17-.62-.28-.62h-1v-2.33c0-.34-.43-.51-.65-.25l-2.45 2.79c-.3.34-.17.62.28.62Z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M12 3.03c-3.99-.34-8.34 3.11-6.38 8.58"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M16.61 19.05a5.3 5.3 0 0 0 3.62-1.39c3.27-2.86 1.52-8.6-2.79-9.14a7 7 0 0 0-1.48-3.45"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M7.28 12.02a4 4 0 0 0-1.71-.4c-4.66.33-4.65 7.11 0 7.44"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M15.82 8.94q.79-.4 1.66-.41"
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
              d="M16.61 19.05a5.3 5.3 0 0 0 3.62-1.39c3.27-2.86 1.52-8.6-2.79-9.14C15.9-.82 2.43 2.72 5.62 11.61"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.28 12.02a4 4 0 0 0-1.71-.4c-4.66.33-4.65 7.11 0 7.44"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.82 8.94q.79-.4 1.66-.41"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9.23 18.21h1v2.33c0 .34.43.51.65.25L13.33 18c.3-.34.17-.62-.28-.62h-1v-2.33c0-.34-.43-.51-.65-.25l-2.45 2.79c-.3.34-.17.62.28.62"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
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
              d="M21.74 11.74a5.5 5.5 0 0 0-4.04-3.87c-.56-2.5-2.1-4.29-4.28-4.97a6.9 6.9 0 0 0-6.87 1.79 6.3 6.3 0 0 0-1.44 6.11A4.1 4.1 0 0 0 2 14.86a4.1 4.1 0 0 0 3.97 4.18H8.5v-2.63c0-1.27.76-2.03 2.03-2.03h2.94c1.27 0 2.03.76 2.03 2.03v2.63h.85c1.42 0 2.78-.53 3.82-1.48a5.5 5.5 0 0 0 1.57-5.82"
              fill="currentColor"
            />
            <path
              d="M13.47 14.39h-2.94c-1.27 0-2.03.76-2.03 2.03v2.94c0 1.27.76 2.03 2.03 2.03h2.94c1.27 0 2.03-.76 2.03-2.03v-2.94c0-1.27-.76-2.03-2.03-2.03m.2 3.66L12 19.95l-.2.23c-.27.31-.5.23-.5-.19v-1.78h-.76c-.35 0-.44-.21-.21-.47l1.67-1.9.2-.23c.27-.31.5-.23.5.19v1.78h.76c.35-.01.44.21.21.47"
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
              d="M20.17 17.57q-.8.73-1.8 1.11a1 1 0 0 1-1.37-.94v-1.32a3.53 3.53 0 0 0-3.53-3.53h-2.94A3.53 3.53 0 0 0 7 16.42V18a1 1 0 0 1-1 1h-.45A4.1 4.1 0 0 1 2 14.86c0-1.68.98-3.54 3.11-4.06a6.3 6.3 0 0 1 1.43-6.11 6.9 6.9 0 0 1 6.87-1.79c2.19.67 3.73 2.47 4.28 4.97a5.5 5.5 0 0 1 4.05 3.87 5.5 5.5 0 0 1-1.57 5.83"
              fill="currentColor"
            />
            <path
              d="M13.47 14.39h-2.94c-1.27 0-2.03.76-2.03 2.03v2.94c0 1.27.76 2.03 2.03 2.03h2.94c1.27 0 2.03-.76 2.03-2.03v-2.94c0-1.27-.76-2.03-2.03-2.03m.2 3.66L12 19.95l-.2.23c-.27.31-.5.23-.5-.19v-1.78h-.76c-.35 0-.44-.21-.21-.47l1.67-1.9.2-.23c.27-.31.5-.23.5.19v1.78h.76c.35-.01.44.21.21.47"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCloudLightning;
