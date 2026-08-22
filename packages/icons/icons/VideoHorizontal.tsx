import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconVideoHorizontal = forwardRef<SVGSVGElement, IconProps>(
  function IconVideoHorizontal(
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
              d="M22.67 15V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7h6c5 0 7-2 7-7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M3.19 17.11h18.96"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.19 7.11h18.96"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.64 17.11v4.35"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.67 17.11v4.86"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.64 17.11v4.41"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.64 2.11v4.35"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.67 2.11v4.86"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.67 7.03v11"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.64 2.11v4.41"
                stroke="currentColor"
                strokeWidth={strokeWidth}
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
              d="M22.67 7.81v8.38l-.01.17q0 .81-.17 1.5a4.9 4.9 0 0 1-4.1 3.99q-.7.15-1.5.15h-8.5a8 8 0 0 1-1.5-.16 4.9 4.9 0 0 1-4.04-3.98 6 6 0 0 1-.17-1.5l-.01-.17V7.81q0-.77.13-1.45a5 5 0 0 1 4.09-4.2Q7.59 2 8.39 2h8.51q.8 0 1.49.15a5 5 0 0 1 4.15 4.21q.13.68.13 1.45"
              fill="currentColor"
            />
            <path
              d="M13.42 7.86v8.5h9.24q0 .81-.17 1.5h-4.1v3.99q-.7.15-1.5.15v-4.14h-3.47V22h-1.5v-4.14H8.39V22a8 8 0 0 1-1.5-.16v-3.98H2.85a6 6 0 0 1-.17-1.5h9.24v-8.5H2.67v-.05q0-.77.13-1.45h4.11l-.02-.12V2.16Q7.59 2 8.39 2v4.24l-.03.12h3.56V2h1.5v4.36h3.47V2h.01q.8 0 1.49.15v4.18l-.01.03h4.16q.13.68.13 1.45v.05z"
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
            <path d="M11.92 7.86H2.67v8.33l.01.17h9.24z" fill="currentColor" />
            <path d="M8.36 6.36h3.56V2H8.39v4.24z" fill="currentColor" />
            <path
              d="M6.89 6.24V2.16a5 5 0 0 0-4.09 4.2h4.11z"
              fill="currentColor"
            />
            <path d="M16.89 2h-3.47v4.36h3.47z" fill="currentColor" />
            <path
              d="M18.38 6.36h4.16a5 5 0 0 0-4.15-4.21v4.18z"
              fill="currentColor"
            />
            <path
              d="M18.39 21.85a4.9 4.9 0 0 0 4.1-3.99h-4.1z"
              fill="currentColor"
            />
            <path d="M16.89 17.86h-3.47V22h3.47z" fill="currentColor" />
            <path
              d="M13.42 16.36h9.24l.01-.17V7.86h-9.25z"
              fill="currentColor"
            />
            <path d="M11.92 17.86H8.39V22h3.53z" fill="currentColor" />
            <path
              d="M2.85 17.86a4.9 4.9 0 0 0 4.04 3.98v-3.98z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconVideoHorizontal;
