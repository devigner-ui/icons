import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconDriveRefresh = forwardRef<SVGSVGElement, IconProps>(
  function IconDriveRefresh(
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
            d="M6 6.25v2"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M22 12V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h3"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M10 6.25v2"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M6 16v2"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M10 16v2"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M14 7.25h4"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M2 12h16"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M21.56 20.33a3.2 3.2 0 0 1-2.81 1.62c-1.8 0-2.9-1.8-2.9-1.8m.08-3.06a3.2 3.2 0 0 1 2.82-1.63 4 4 0 0 1 3.25 1.8m0-2.01v2h-2m-2.14 2.89h-2V22"
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
              opacity={duotone ? "0.4" : "1"}
              d="M6 6.25v2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 12V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10 6.25v2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M6 16v2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10 16v2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M14 7.25h4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 12h20"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.56 20.33a3.2 3.2 0 0 1-2.81 1.62c-1.79 0-2.89-1.8-2.89-1.8m.07-3.06a3.2 3.2 0 0 1 2.82-1.63 4 4 0 0 1 3.25 1.8m0-2.01v2h-2m-2.14 2.89h-2V22"
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
              d="M21.52 7.31v1.7a1 1 0 0 1-1.5.87 7.45 7.45 0 0 0-9.69 2.37A7.5 7.5 0 0 0 9.9 20a1 1 0 0 1-.87 1.5h-1.7a5.8 5.8 0 0 1-5.81-5.81V7.31A5.8 5.8 0 0 1 7.33 1.5h8.38a5.8 5.8 0 0 1 5.81 5.81"
              fill="currentColor"
            />
            <path
              d="M11.7 10.75q-.78.65-1.37 1.5H1.52v-1.5z"
              fill="currentColor"
            />
            <path
              d="M5.52 8.5a.76.76 0 0 1-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M9.52 8.5a.76.76 0 0 1-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M5.52 18.25a.76.76 0 0 1-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M17.52 7.5h-4a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M16.52 10.5a6 6 0 1 0 0 12.01 6 6 0 0 0 0-12.01m2.93 7.2a3.15 3.15 0 0 1-4.79 1.35v.14a.57.57 0 1 1-1.14 0v-1.44c0-.31.25-.57.57-.57h1.44c.31 0 .57.25.57.57 0 .29-.21.51-.49.55.76.37 1.73.25 2.34-.36a2 2 0 0 0 .44-.67.57.57 0 0 1 .74-.31c.3.11.44.45.32.74m.07-2.44c0 .31-.25.57-.57.57h-1.44a.57.57 0 0 1-.57-.57c0-.29.21-.51.49-.55a2.1 2.1 0 0 0-2.35.36q-.25.25-.4.57a.56.56 0 1 1-1.02-.48q.24-.5.62-.89a3.14 3.14 0 0 1 4.1-.31v-.13c0-.31.25-.57.57-.57s.57.24.57.56z"
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
              d="M9.45 12.25H2.52a1 1 0 0 0-1 1v2.44a5.8 5.8 0 0 0 5.81 5.81h1.7A1 1 0 0 0 9.9 20a7.5 7.5 0 0 1-.01-7.02.5.5 0 0 0-.44-.73M6.27 17.5c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75z"
              fill="currentColor"
            />
            <path
              d="M15.71 1.5H7.33a5.8 5.8 0 0 0-5.81 5.81v2.44a1 1 0 0 0 1 1h8.84a1 1 0 0 0 .61-.22 7.5 7.5 0 0 1 8.05-.65 1 1 0 0 0 1.5-.87v-1.7a5.8 5.8 0 0 0-5.81-5.81M6.27 7.75c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75zm4 0c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75zm7.25-.25h-4a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M16.52 10.5a6 6 0 1 0 0 12.01 6 6 0 0 0 0-12.01m2.93 7.2a3.15 3.15 0 0 1-4.79 1.35v.14c0 .31-.25.57-.57.57a.6.6 0 0 1-.57-.58v-1.44c0-.31.25-.57.57-.57h1.44c.31 0 .57.25.57.57 0 .29-.21.51-.49.55.76.37 1.73.25 2.34-.36a2 2 0 0 0 .44-.67.57.57 0 0 1 1.06.44m.07-2.44c0 .31-.25.57-.57.57h-1.44a.57.57 0 0 1-.57-.57c0-.29.21-.51.49-.55a2.1 2.1 0 0 0-2.35.36q-.25.25-.4.57a.56.56 0 1 1-1.02-.48q.24-.5.62-.89a3.14 3.14 0 0 1 4.1-.31v-.13c0-.31.25-.57.57-.57s.57.24.57.56z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconDriveRefresh;
