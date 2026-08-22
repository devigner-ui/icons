import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBriefcase = forwardRef<SVGSVGElement, IconProps>(
  function IconBriefcase(
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
              d="M8.67 22h8c4.02 0 4.74-1.61 4.95-3.57l.75-8c.27-2.44-.43-4.43-4.7-4.43h-10C3.4 6 2.7 7.99 2.97 10.43l.75 8c.21 1.96.93 3.57 4.95 3.57"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8.67 6v-.8c0-1.77 0-3.2 3.2-3.2h1.6c3.2 0 3.2 1.43 3.2 3.2V6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M14.67 13v1.02c0 1.09-.01 1.98-2 1.98-1.98 0-2-.88-2-1.97V13c0-1 0-1 1-1h2c1 0 1 0 1 1"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22.32 11a16.5 16.5 0 0 1-7.65 3.02"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.29 11.27a16 16 0 0 0 7.38 2.76"
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
              d="M21.76 6.98q-1.26-1.41-4.33-1.41h-.24v-.04c0-1.68 0-3.76-3.76-3.76h-1.52c-3.76 0-3.76 2.09-3.76 3.76v.05h-.24c-2.07 0-3.48.47-4.33 1.41-.99 1.1-.96 2.58-.86 3.59l.01.07.1 1.05.05.04a15 15 0 0 0 1.47.89c1.71.94 3.59 1.57 5.5 1.88.09.94.5 2.04 2.69 2.04s2.62-1.09 2.69-2.06a17 17 0 0 0 5.79-2.08l.15-.09a13 13 0 0 0 1.36-.9l.04-.36.05-.47.02-.18c.08-1.01.06-2.39-.88-3.43m-8 6.85c0 1.06 0 1.22-1.23 1.22s-1.23-.19-1.23-1.21v-1.26h2.46zM9.58 5.57v-.04c0-1.7 0-2.33 2.33-2.33h1.52c2.33 0 2.33.64 2.33 2.33v.05z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m21.17 12.3-.15.09a17 17 0 0 1-5.79 2.08c-.08.96-.5 2.06-2.69 2.06s-2.61-1.09-2.69-2.04a17 17 0 0 1-7.02-2.81l.61 6.51c.21 1.99 1.03 4.04 5.43 4.04h7.62c4.4 0 5.22-2.05 5.43-4.05l.63-6.78-.05.05q-.64.47-1.33.85"
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
              d="M21.76 6.98q-1.26-1.41-4.33-1.41h-.24v-.04c0-1.68 0-3.76-3.76-3.76h-1.52c-3.76 0-3.76 2.09-3.76 3.76v.05h-.24c-2.07 0-3.48.47-4.33 1.41-.99 1.1-.96 2.58-.86 3.59l.01.07.08.81q.03.24.22.37a18 18 0 0 0 1.32.8c1.71.94 3.59 1.57 5.5 1.88.09.94.5 2.04 2.69 2.04s2.62-1.09 2.69-2.06a17 17 0 0 0 5.79-2.08l.15-.09q.6-.35 1.18-.77a.5.5 0 0 0 .2-.35l.02-.14.05-.47.02-.18c.08-1.01.06-2.39-.88-3.43m-8 6.85c0 1.06 0 1.22-1.23 1.22s-1.23-.19-1.23-1.21v-1.26h2.46zM9.58 5.57v-.04c0-1.7 0-2.33 2.33-2.33h1.52c2.33 0 2.33.64 2.33 2.33v.05z"
              fill="currentColor"
            />
            <path
              d="M21.54 13.73a.5.5 0 0 1 .73.5l-.36 3.96c-.21 2-1.03 4.04-5.43 4.04H8.86c-4.4 0-5.22-2.04-5.43-4.03l-.34-3.75a.5.5 0 0 1 .71-.5c1.14.51 3.25 1.43 4.55 1.77q.25.07.37.31c.6 1.3 1.92 1.99 3.82 1.99 1.88 0 3.21-.72 3.82-2.02q.12-.24.37-.31a35 35 0 0 0 4.81-1.96"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBriefcase;
