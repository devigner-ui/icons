import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTrophyStarRounded = forwardRef<SVGSVGElement, IconProps>(
  function IconTrophyStarRounded(
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
              opacity={duotone ? "0.4" : "1"}
              d="M12.82 16.5v2.1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.82 22h10v-1a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
            />
            <path
              d="M6.82 22h12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.67 16a7 7 0 0 1-7-7V6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v3a7 7 0 0 1-7 7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M6.14 11.65a5 5 0 0 1-1.93-1.2c-.9-1-1.5-2.2-1.5-3.6s1.1-2.5 2.5-2.5h.65q-.3.7-.3 1.5v3q.01 1.5.58 2.8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M19.2 11.65a5 5 0 0 0 1.93-1.2c.9-1 1.5-2.2 1.5-3.6s-1.1-2.5-2.5-2.5h-.65q.3.7.3 1.5v3q-.01 1.5-.58 2.8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
              d="m13.4 5.7.24.49c.12.24.42.46.68.51l.33.05c.97.17 1.2.89.5 1.6l-.3.3c-.2.2-.3.6-.24.87l.04.18c.26 1.18-.36 1.64-1.39 1.02l-.22-.13a1 1 0 0 0-.96 0l-.22.13c-1.04.63-1.66.16-1.39-1.02l.04-.18a1.1 1.1 0 0 0-.24-.87l-.3-.3c-.7-.71-.47-1.43.5-1.6l.33-.05c.25-.04.56-.27.68-.51l.24-.49c.46-.93 1.22-.93 1.68 0"
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
              d="M18.67 20.5h-1v-.25a2 2 0 0 0-2-2h-2.25v-2.29a6 6 0 0 1-1.5 0v2.29H9.67a2 2 0 0 0-2 2v.25h-1a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h12c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M6.19 11.64a5 5 0 0 1-1.7-1.12 5.5 5.5 0 0 1-1.54-3.7 2.54 2.54 0 0 1 2.57-2.57h.56A4 4 0 0 0 5.67 6v3q0 1.42.52 2.64"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22.39 6.82c0 1.44-.61 2.67-1.54 3.7a5 5 0 0 1-1.7 1.12q.52-1.22.52-2.64V6q-.01-.95-.41-1.75h.56a2.54 2.54 0 0 1 2.57 2.57"
              fill="currentColor"
            />
            <path
              d="M15.67 2h-6a4 4 0 0 0-4 4v3a7 7 0 1 0 14 0V6a4 4 0 0 0-4-4m-.16 6.45-.62.76a1 1 0 0 0-.16.48l.06.98c.04.6-.39.91-.95.69l-.91-.36a1 1 0 0 0-.52 0l-.91.36c-.56.22-.99-.09-.95-.69l.06-.98a1 1 0 0 0-.16-.48l-.62-.76c-.39-.46-.22-.97.36-1.12l.95-.24a1 1 0 0 0 .41-.31l.53-.82c.33-.51.85-.51 1.18 0l.53.82a1 1 0 0 0 .41.31l.95.24c.58.15.75.66.36 1.12"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m15.51 8.45-.62.76a1 1 0 0 0-.16.48l.06.98c.04.6-.39.91-.95.69l-.91-.36a1 1 0 0 0-.52 0l-.91.36c-.56.22-.99-.09-.95-.69l.06-.98a1 1 0 0 0-.16-.48l-.62-.76c-.39-.46-.22-.97.36-1.12l.95-.24a1 1 0 0 0 .41-.31l.53-.82c.33-.51.85-.51 1.18 0l.53.82a1 1 0 0 0 .41.31l.95.24c.58.15.75.66.36 1.12"
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
              d="M11.92 18.25H9.67a2 2 0 0 0-2 2v.25h-1a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h12c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75h-1v-.25a2 2 0 0 0-2-2h-2.25v-2.29a6 6 0 0 1-1.5 0z"
              fill="currentColor"
            />
            <path
              d="M19.15 11.64a5 5 0 0 0 1.7-1.12 5.5 5.5 0 0 0 1.54-3.7 2.54 2.54 0 0 0-2.57-2.57h-.56A4 4 0 0 0 15.67 2h-6a4 4 0 0 0-3.59 2.25h-.56a2.54 2.54 0 0 0-2.57 2.57c0 1.44.61 2.67 1.54 3.7a5 5 0 0 0 1.7 1.12 6.98 6.98 0 0 0 12.96 0m-3.64-3.19-.62.76a1 1 0 0 0-.16.48l.06.98c.04.6-.39.91-.95.69l-.91-.36a1 1 0 0 0-.52 0l-.91.36c-.56.22-.99-.09-.95-.69l.06-.98a1 1 0 0 0-.16-.48l-.62-.76c-.39-.46-.22-.97.36-1.12l.95-.24a1 1 0 0 0 .41-.31l.53-.82c.33-.51.85-.51 1.18 0l.53.82a1 1 0 0 0 .41.31l.95.24c.58.15.75.66.36 1.12"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconTrophyStarRounded;
