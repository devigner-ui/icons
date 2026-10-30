import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCertificateCheck = forwardRef<SVGSVGElement, IconProps>(
  function IconCertificateCheck(
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
            d="M7 17.8c-2.18-.01-3.35-.11-4.12-.88C2 16.04 2 14.62 2 11.8v-4c0-2.83 0-4.24.88-5.12S5.18 1.8 8 1.8h8c2.83 0 4.24 0 5.12.88S22 4.98 22 7.8v4c0 2.83 0 4.24-.88 5.12-.73.73-1.83.86-3.8.88h-.82"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 5.8h6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 9.3h10"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m10.81 13.81.08-.06a1.7 1.7 0 0 1 2.21 0q.43.35.98.4c.84.07 1.5.73 1.57 1.57q.05.55.4.97a1.7 1.7 0 0 1 0 2.22q-.35.42-.4.97c-.07.84-.73 1.5-1.57 1.57q-.55.05-.97.4a1.7 1.7 0 0 1-2.22 0 1.7 1.7 0 0 0-.97-.4 1.7 1.7 0 0 1-1.57-1.57 1.7 1.7 0 0 0-.4-.97 1.7 1.7 0 0 1 0-2.22q.32-.37.39-.85"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m10.5 18 .86.8 2.14-2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
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
              d="M7 17.8c-2.18-.01-3.35-.11-4.12-.88C2 16.04 2 14.62 2 11.8v-4c0-2.83 0-4.24.88-5.12S5.18 1.8 8 1.8h8c2.83 0 4.24 0 5.12.88S22 4.98 22 7.8v4c0 2.83 0 4.24-.88 5.12-.73.73-1.83.86-3.8.88h-.82"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9 5.8h6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7 9.3h10"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M10.9 13.75a1.7 1.7 0 0 1 2.2 0q.43.35.98.4c.84.07 1.5.73 1.57 1.57q.05.55.4.97a1.7 1.7 0 0 1 0 2.22q-.35.42-.4.97c-.07.84-.73 1.5-1.57 1.57q-.55.05-.97.4a1.7 1.7 0 0 1-2.22 0 1.7 1.7 0 0 0-.97-.4 1.7 1.7 0 0 1-1.57-1.57q-.05-.55-.4-.97a1.7 1.7 0 0 1 0-2.22q.35-.42.4-.97c.07-.84.73-1.5 1.57-1.57q.55-.05.97-.4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="m10.5 18 .86.8 2.14-2"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.1 13.5a1.7 1.7 0 0 0-2.21 0q-.42.35-.97.4c-.84.07-1.5.74-1.57 1.57q-.05.55-.4.98a1.7 1.7 0 0 0 0 2.21q.35.43.4.98c.07.83.73 1.5 1.57 1.57q.55.05.97.4c.64.54 1.58.54 2.22 0q.42-.35.97-.4c.84-.07 1.5-.74 1.57-1.57q.05-.55.4-.98c.55-.63.55-1.58 0-2.21a1.7 1.7 0 0 1-.4-.98 1.7 1.7 0 0 0-1.57-1.57q-.55-.05-.97-.4m.91 3.6A.75.75 0 1 0 13 16l-1.63 1.53-.35-.32A.75.75 0 1 0 10 18.3l.86.8c.28.26.73.26 1.02 0z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2 12V8c0-2.83 0-4.24.88-5.12S5.18 2 8 2h8c2.83 0 4.24 0 5.12.88S22 5.18 22 8v4c0 2.83 0 4.24-.88 5.12-.83.84-2.15.88-4.72.88.15-.53.03-1.11-.35-1.55a1.7 1.7 0 0 1-.4-.98 1.7 1.7 0 0 0-1.57-1.57q-.55-.05-.97-.4a1.7 1.7 0 0 0-2.22 0q-.42.36-.97.4c-.84.07-1.5.74-1.57 1.57q-.05.55-.4.98c-.38.44-.5 1.02-.35 1.55-2.57 0-3.89-.04-4.72-.88C2 16.24 2 14.82 2 12"
              fill="currentColor"
            />
            <path
              d="M8.25 6c0-.41.34-.75.75-.75h6a.75.75 0 0 1 0 1.5H9A.75.75 0 0 1 8.25 6"
              fill="currentColor"
            />
            <path
              d="M7 8.75a.75.75 0 1 0 0 1.5h10a.75.75 0 0 0 0-1.5z"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 11.75v-4c0-2.83 0-4.24.88-5.12s2.3-.88 5.12-.88h8c2.83 0 4.24 0 5.12.88s.88 2.3.88 5.12v4c0 2.83 0 4.24-.88 5.12-.65.65-1.58.82-3.16.86a3.2 3.2 0 0 0-.76-2.06.2.2 0 0 1-.05-.12 3.2 3.2 0 0 0-2.95-2.95.2.2 0 0 1-.12-.05 3.2 3.2 0 0 0-4.16 0 .2.2 0 0 1-.12.05 3.2 3.2 0 0 0-2.95 2.95q0 .06-.05.12a3.2 3.2 0 0 0-.76 2.06c-1.58-.04-2.51-.21-3.16-.86C2 15.99 2 14.57 2 11.75m6.25-6c0-.41.34-.75.75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75M7 8.5A.75.75 0 1 0 7 10h10a.75.75 0 0 0 0-1.5z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.1 13.7a1.7 1.7 0 0 0-2.21 0q-.42.35-.97.4c-.84.07-1.5.73-1.57 1.57q-.05.55-.4.97a1.7 1.7 0 0 0 0 2.22q.35.42.4.97c.07.84.73 1.5 1.57 1.57q.55.05.97.4a1.7 1.7 0 0 0 2.22 0q.42-.35.97-.4a1.7 1.7 0 0 0 1.57-1.57q.05-.55.4-.97a1.7 1.7 0 0 0 0-2.22 1.7 1.7 0 0 1-.4-.97 1.7 1.7 0 0 0-1.57-1.57q-.55-.05-.97-.4m.91 3.6A.75.75 0 1 0 13 16.2l-1.63 1.52-.35-.32A.75.75 0 1 0 10 18.5l.86.8c.28.27.73.27 1.02 0z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCertificateCheck;
