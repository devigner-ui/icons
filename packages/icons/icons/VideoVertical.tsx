import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconVideoVertical = forwardRef<SVGSVGElement, IconProps>(
  function IconVideoVertical(
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
              d="M9.67 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M7.56 2.52v18.96"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.56 2.52v18.96"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.56 6.97H3.2"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.56 12H2.7"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.56 16.97H3.15"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22.56 6.97H18.2"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22.56 12H17.7"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.64 12h-11"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22.56 16.97h-4.41"
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
              d="M8.48 2h8.38l.17.01q.81 0 1.5.17a4.9 4.9 0 0 1 3.99 4.1q.15.7.15 1.5v8.5a8 8 0 0 1-.16 1.5 4.9 4.9 0 0 1-3.98 4.04q-.69.17-1.5.17l-.17.01H8.48q-.77 0-1.45-.13a5 5 0 0 1-4.2-4.09 7 7 0 0 1-.16-1.5V7.77q0-.8.15-1.49a5 5 0 0 1 4.21-4.15Q7.71 2 8.48 2"
              fill="currentColor"
            />
            <path
              d="M8.53 11.25h8.5V2.01q.81 0 1.5.17v4.1h3.99q.15.7.15 1.5h-4.14v3.47h4.14v1.5h-4.14v3.53h4.14a8 8 0 0 1-.16 1.5h-3.98v4.04q-.69.17-1.5.17v-9.24h-8.5V22h-.05q-.77 0-1.45-.13v-4.11l-.12.02H2.83a7 7 0 0 1-.16-1.5h4.24l.12.03v-3.56H2.67v-1.5h4.36V7.78H2.67v-.01q0-.8.15-1.49H7l.03.01V2.13Q7.71 2 8.48 2h.05z"
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
            <path d="M7.03 7.78H2.67v3.47h4.36z" fill="currentColor" />
            <path
              d="M7.03 6.29V2.13a5 5 0 0 0-4.21 4.15H7z"
              fill="currentColor"
            />
            <path d="M7.03 16.31v-3.56H2.67v3.53h4.24z" fill="currentColor" />
            <path
              d="M22.52 6.28a4.9 4.9 0 0 0-3.99-4.1v4.1z"
              fill="currentColor"
            />
            <path
              d="M17.03 11.25V2.01L16.86 2H8.53v9.25z"
              fill="currentColor"
            />
            <path d="M22.67 12.75h-4.14v3.53h4.14z" fill="currentColor" />
            <path
              d="M18.53 21.82a4.9 4.9 0 0 0 3.98-4.04h-3.98z"
              fill="currentColor"
            />
            <path
              d="M6.91 17.78H2.83a5 5 0 0 0 4.2 4.09v-4.11z"
              fill="currentColor"
            />
            <path d="M22.67 7.78h-4.14v3.47h4.14z" fill="currentColor" />
            <path d="M8.53 12.75V22h8.33l.17-.01v-9.24z" fill="currentColor" />
          </svg>
        )}
      </>
    );
  },
);

export default IconVideoVertical;
