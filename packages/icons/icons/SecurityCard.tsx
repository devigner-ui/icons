import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSecurityCard = forwardRef<SVGSVGElement, IconProps>(
  function IconSecurityCard(
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
              d="M12.41 17.75h5.92l-.27.23-4.27 3.2a4.6 4.6 0 0 1-5.13 0l-4.28-3.2a4.8 4.8 0 0 1-1.71-3.42V7.15c0-1.22.93-2.57 2.07-3l4.98-1.87a5 5 0 0 1 3 0l4.97 1.87a3.6 3.6 0 0 1 2.01 2.38h-7.3l-.61.01c-1.85.11-2.33.78-2.33 2.89v5.43c.01 2.3.6 2.89 2.95 2.89"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.47 11.22h13.2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22.67 9.42v5.55c-.02 2.22-.63 2.77-2.94 2.77h-7.32c-2.35 0-2.94-.59-2.94-2.9V9.41c0-2.1.48-2.77 2.33-2.89l.61-.01h7.32c2.35.01 2.94.59 2.94 2.91"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.99 15.26h1.33"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.42 15.26h3.27"
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
              d="m10.09 2.16-5.5 2.06a3.2 3.2 0 0 0-1.91 2.76v8.1c0 .81.53 1.88 1.18 2.36l5.5 4.11c.97.73 2.56.73 3.53 0l5.5-4.11a3.3 3.3 0 0 0 1.18-2.36v-8.1c0-1.12-.86-2.37-1.91-2.76l-5.5-2.06a3.5 3.5 0 0 0-2.07 0"
              fill="currentColor"
            />
            <path
              d="M19.93 6.76h-6.85l-.57.01c-1.72.1-2.18.73-2.18 2.69v.39c0 .41.34.75.75.75h10.84c.41 0 .75-.34.75-.75v-.39c0-2.16-.55-2.7-2.74-2.7"
              fill="currentColor"
            />
            <path
              d="M11.09 11.7a.75.75 0 0 0-.75.75v2.09c0 2.16.55 2.71 2.74 2.71h6.85c2.15 0 2.72-.52 2.74-2.59v-2.21a.75.75 0 0 0-.75-.75zm2.85 3.77h-1.25a.54.54 0 0 1-.54-.54c0-.3.24-.54.54-.54h1.25c.3 0 .54.24.54.54s-.24.54-.54.54m4.05 0H15.5a.54.54 0 0 1-.54-.54c0-.3.24-.54.54-.54h2.49c.3 0 .54.24.54.54.01.3-.24.54-.54.54"
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
              d="M14.16 13.38h-2.49c-.3 0-.54.24-.54.54s.24.54.54.54h2.5c.3 0 .53-.24.53-.54s-.24-.54-.54-.54"
              fill="currentColor"
            />
            <path
              d="M10.11 13.38H8.86c-.3 0-.54.24-.54.54s.24.54.54.54h1.25c.3 0 .54-.24.54-.54s-.24-.54-.54-.54"
              fill="currentColor"
            />
            <path
              d="m19.21 4.22-5.5-2.06a3.5 3.5 0 0 0-2.07 0l-5.5 2.06a3.2 3.2 0 0 0-1.92 2.77v8.1c0 .81.53 1.88 1.18 2.36l5.5 4.11c.97.73 2.56.73 3.53 0l5.5-4.11a3.3 3.3 0 0 0 1.18-2.36v-8.1a3.2 3.2 0 0 0-1.9-2.77m-.37 9.43c-.02 2.07-.59 2.59-2.74 2.59H9.25c-2.19 0-2.74-.54-2.74-2.71V11.2c0-.28.22-.5.5-.5h11.33c.28 0 .5.22.5.5zm0-4.54a.5.5 0 0 1-.5.5H7.01a.5.5 0 0 1-.5-.5v-.64c0-1.96.46-2.59 2.17-2.7l.57-.01h6.85c2.2 0 2.74.54 2.74 2.71z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSecurityCard;
