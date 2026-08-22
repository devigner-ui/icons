import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconInboxAlt = forwardRef<SVGSVGElement, IconProps>(function IconInboxAlt(
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
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M12.67 2v7l2-2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m12.67 9-2-2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2.65 13h4.41c.38 0 .72.21.89.55l1.17 2.34A2 2 0 0 0 10.91 17h3.53a2 2 0 0 0 1.79-1.11l1.17-2.34a1 1 0 0 1 .89-.55h4.36"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.67 4.13c-3.54.52-5 2.6-5 6.87v4c0 5 2 7 7 7h6c5 0 7-2 7-7v-4c0-4.27-1.46-6.35-5-6.87"
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
            d="M16.86 4H8.48C4.84 4 2.67 6.17 2.67 9.81v6.37c0 3.65 2.17 5.82 5.81 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81V9.81C22.67 6.17 20.5 4 16.86 4"
            fill="currentColor"
          />
          <path
            d="M21.97 12.23h-3.48c-.98 0-1.85.54-2.29 1.42l-.84 1.66c-.2.4-.6.65-1.04.65h-3.28c-.31 0-.75-.07-1.04-.65l-.84-1.65a2.6 2.6 0 0 0-2.29-1.42h-3.5a.7.7 0 0 0-.7.7v3.26c0 3.63 2.18 5.8 5.82 5.8h8.38c3.43 0 5.54-1.88 5.8-5.22v-3.85a.7.7 0 0 0-.7-.7"
            fill="currentColor"
          />
          <path
            d="M15.2 6.47a.75.75 0 0 0-1.06 0l-.72.72V2a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v5.19l-.72-.72a.75.75 0 0 0-1.06 0 .75.75 0 0 0 0 1.06l2 2 .02.02q.1.09.22.15.14.05.29.05t.28-.06a1 1 0 0 0 .25-.16l2-2a.75.75 0 0 0 0-1.06"
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
            d="M21.97 12.23h-3.48c-.98 0-1.85.54-2.29 1.42l-.84 1.66c-.2.4-.6.65-1.04.65h-3.28c-.31 0-.75-.07-1.04-.65l-.84-1.65a2.6 2.6 0 0 0-2.29-1.42h-3.5a.7.7 0 0 0-.7.7v3.26c0 3.63 2.18 5.8 5.82 5.8h8.38c3.43 0 5.54-1.88 5.8-5.22v-3.85a.7.7 0 0 0-.7-.7"
            fill="currentColor"
          />
          <path
            d="M13.42 2a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v2h1.5z"
            fill="currentColor"
          />
          <path
            d="M22.67 9.81v1.04a2 2 0 0 0-.7-.12h-3.48c-1.55 0-2.94.86-3.63 2.24l-.75 1.48h-2.86l-.75-1.47a4 4 0 0 0-3.63-2.25h-3.5q-.36 0-.7.12V9.81C2.67 6.17 4.84 4 8.48 4h3.44v3.19l-.72-.72a.75.75 0 0 0-1.06 0 .75.75 0 0 0 0 1.06l2 2 .02.02q.1.1.22.14.14.06.29.06t.28-.06a1 1 0 0 0 .25-.16l2-2a.75.75 0 0 0 0-1.06.75.75 0 0 0-1.06 0l-.72.72V4h3.44c3.64 0 5.81 2.17 5.81 5.81"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconInboxAlt;
