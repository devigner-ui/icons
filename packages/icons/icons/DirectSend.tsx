import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconDirectSend = forwardRef<SVGSVGElement, IconProps>(
  function IconDirectSend(
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
            d="M12 9V2l-2 2"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m12 2 2 2"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M1.98 13h4.41c.38 0 .72.21.89.55l1.17 2.34a2 2 0 0 0 1.8 1.11h3.52a2 2 0 0 0 1.79-1.11l1.17-2.34a1 1 0 0 1 .89-.55h4.36"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M2.69 19c.96 2.1 2.96 3 6.3 3h6C20 22 22 20 22 15v-3c0-4.27-1.46-6.35-5-6.87"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M7 5.13c-3.54.52-5 2.6-5 6.87v3"
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
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M12 9V2l-2 2"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m12 2 2 2"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M1.98 13h4.41c.38 0 .72.21.89.55l1.17 2.34A2 2 0 0 0 10.24 17h3.53a2 2 0 0 0 1.79-1.11l1.17-2.34a1 1 0 0 1 .89-.55h4.36"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 5.13c-3.54.52-5 2.6-5 6.87v3c0 5 2 7 7 7h6c5 0 7-2 7-7v-3c0-4.27-1.46-6.35-5-6.87"
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
              d="m14.53 3.87-2-2-.02-.02-.22-.15-.02-.01q-.12-.04-.24-.05h-.08l-.18.04-.07.03-.22.15-2 2a.75.75 0 0 0 0 1.06c.29.29.77.29 1.06 0l.72-.72v5.2c0 .41.34.75.75.75s.74-.34.74-.75V4.21l.72.72q.23.22.53.22t.53-.22a.75.75 0 0 0 0-1.06"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16.19 6.4H7.81C4.17 6.4 2 8.57 2 12.21v4.37c0 3.65 2.17 5.82 5.81 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81v-4.37c.01-3.65-2.16-5.82-5.8-5.82"
              fill="currentColor"
            />
            <path
              d="M21.3 12.63h-3.48c-.98 0-1.85.54-2.29 1.42l-.84 1.66c-.2.4-.6.65-1.04.65h-3.28c-.31 0-.75-.07-1.04-.65l-.84-1.65a2.6 2.6 0 0 0-2.29-1.42H2.7a.7.7 0 0 0-.7.7v3.26c0 3.63 2.18 5.8 5.82 5.8h8.38c3.43 0 5.54-1.88 5.8-5.22v-3.85a.7.7 0 0 0-.7-.7"
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
              d="M21.3 12.63h-3.48c-.98 0-1.85.54-2.29 1.42l-.84 1.66c-.2.4-.6.65-1.04.65h-3.28c-.31 0-.75-.07-1.04-.65l-.84-1.65a2.6 2.6 0 0 0-2.29-1.42H2.7a.7.7 0 0 0-.7.7v3.26c0 3.63 2.18 5.8 5.82 5.8h8.38c3.43 0 5.54-1.88 5.8-5.22v-3.85a.7.7 0 0 0-.7-.7"
              fill="currentColor"
            />
            <path
              d="m12.75 4.21.72.72q.23.22.53.22t.53-.22a.75.75 0 0 0 0-1.06l-2-2-.02-.02-.22-.15-.02-.01q-.12-.04-.24-.05h-.08l-.18.04-.07.03-.22.15-2 2a.75.75 0 0 0 0 1.06c.29.29.77.29 1.06 0l.72-.72v1.2h1.5z"
              fill="currentColor"
            />
            <path
              d="M22 11.21v.04a2 2 0 0 0-.7-.12h-3.48c-1.55 0-2.94.86-3.63 2.24l-.75 1.48h-2.86l-.75-1.47a4 4 0 0 0-3.63-2.25H2.7q-.36 0-.7.12v-.04C2 7.57 4.17 5.4 7.81 5.4h3.44v4c0 .41.34.75.75.75s.75-.34.75-.75v-4h3.44c3.64 0 5.81 2.17 5.81 5.81"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconDirectSend;
