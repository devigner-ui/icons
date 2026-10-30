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
            d="M2 12.98V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M2.52 17.11h18.96"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M2.52 7.11h18.96"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M6.97 17.11v4.35"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M12 17.11v4.86"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M16.97 17.11v4.41"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M6.97 2.11v4.35"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M12 2.11v4.86"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M12 7.03v11"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M16.97 2.11v4.41"
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
              d="M22 15V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M2.52 17.11h18.96"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.52 7.11h18.96"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.97 17.11v4.35"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 17.11v4.86"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.97 17.11v4.41"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.97 2.11v4.35"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 2.11v4.86"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 7.03v11"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.97 2.11v4.41"
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
              d="M22 7.81v8.38l-.01.17q0 .81-.17 1.5a4.9 4.9 0 0 1-4.1 3.99q-.7.15-1.5.15h-8.5a8 8 0 0 1-1.5-.16 4.9 4.9 0 0 1-4.04-3.98 6 6 0 0 1-.17-1.5L2 16.19V7.81q0-.77.13-1.45a5 5 0 0 1 4.09-4.2Q6.92 2 7.72 2h8.51q.8 0 1.49.15a5 5 0 0 1 4.15 4.21q.13.68.13 1.45"
              fill="currentColor"
            />
            <path
              d="M12.75 7.86v8.5h9.24q0 .81-.17 1.5h-4.1v3.99q-.7.15-1.5.15v-4.14h-3.47V22h-1.5v-4.14H7.72V22a8 8 0 0 1-1.5-.16v-3.98H2.18a6 6 0 0 1-.17-1.5h9.24v-8.5H2v-.05q0-.77.13-1.45h4.11l-.02-.12V2.16Q6.92 2 7.72 2v4.24l-.03.12h3.56V2h1.5v4.36h3.47V2h.01q.8 0 1.49.15v4.18l-.01.03h4.16q.13.68.13 1.45v.05z"
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
            <path d="M11.25 7.86H2v8.33l.01.17h9.24z" fill="currentColor" />
            <path d="M7.69 6.36h3.56V2H7.72v4.24z" fill="currentColor" />
            <path
              d="M6.22 6.24V2.16a5 5 0 0 0-4.09 4.2h4.11z"
              fill="currentColor"
            />
            <path d="M16.22 2h-3.47v4.36h3.47z" fill="currentColor" />
            <path
              d="M17.71 6.36h4.16a5 5 0 0 0-4.15-4.21v4.18z"
              fill="currentColor"
            />
            <path
              d="M17.72 21.85a4.9 4.9 0 0 0 4.1-3.99h-4.1z"
              fill="currentColor"
            />
            <path d="M16.22 17.86h-3.47V22h3.47z" fill="currentColor" />
            <path
              d="M12.75 16.36h9.24l.01-.17V7.86h-9.25z"
              fill="currentColor"
            />
            <path d="M11.25 17.86H7.72V22h3.53z" fill="currentColor" />
            <path
              d="M2.18 17.86a4.9 4.9 0 0 0 4.04 3.98v-3.98z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconVideoHorizontal;
