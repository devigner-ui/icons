import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconJavascript = forwardRef<SVGSVGElement, IconProps>(
  function IconJavascript(
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
              d="M4.79 2h15.77a1 1 0 0 1 .99 1.11l-1.8 16.22a1 1 0 0 1-.72.85l-6.08 1.74q-.27.08-.55 0l-6.08-1.74a1 1 0 0 1-.72-.85L3.8 3.11A1 1 0 0 1 4.79 2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M11.29 7.01v8.98l-3.12-.9"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m17.17 7-3.15.45v4.95l3.15-.45v3.15l-3.6.9"
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
              d="M4.79 2h15.77a1 1 0 0 1 .99 1.11l-1.8 16.22a1 1 0 0 1-.72.85l-6.08 1.74q-.27.08-.55 0l-6.08-1.74a1 1 0 0 1-.72-.85L3.8 3.11A1 1 0 0 1 4.79 2"
              fill="currentColor"
            />
            <path
              d="m11.29 16.74-.21-.03-3.12-.9a.75.75 0 1 1 .42-1.44l2.16.62V7.01c0-.41.34-.75.75-.75s.75.34.75.75v8.97q0 .38-.3.6a1 1 0 0 1-.45.16"
              fill="currentColor"
            />
            <path
              d="M13.57 16.75a.8.8 0 0 1-.73-.57c-.1-.4.14-.81.55-.91l3.03-.76v-1.7l-2.29.33a.7.7 0 0 1-.6-.18.8.8 0 0 1-.26-.57V7.45c0-.37.27-.69.64-.74l3.15-.45a.75.75 0 0 1 .21 1.49l-2.5.35v3.43l2.29-.33q.34-.04.6.18t.26.57v3.15c0 .34-.23.64-.57.73l-3.6.9z"
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
              d="M20.55 2H4.78a1 1 0 0 0-.99 1.11l1.8 16.22a1 1 0 0 0 .72.85l6.08 1.74q.28.08.55 0l6.08-1.74a1 1 0 0 0 .72-.85l1.8-16.22A1 1 0 0 0 20.55 2m-8.51 13.99q0 .37-.3.6a.7.7 0 0 1-.66.12l-3.12-.9a.75.75 0 1 1 .42-1.44l2.16.62V7.01c0-.41.34-.75.75-.75s.75.34.75.75zm5.88-.89c0 .34-.23.64-.57.73l-3.6.9-.18.02a.8.8 0 0 1-.73-.57c-.1-.4.14-.81.55-.91l3.03-.76v-1.7l-2.29.33a.7.7 0 0 1-.6-.18.8.8 0 0 1-.26-.57V7.44c0-.37.27-.69.64-.74l3.15-.45a.75.75 0 0 1 .21 1.49l-2.51.36v3.43l2.29-.33q.34-.04.6.18t.26.57z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconJavascript;
