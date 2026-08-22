import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconNoteAdd = forwardRef<SVGSVGElement, IconProps>(function IconNoteAdd(
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
              d="M10.23 18v-5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.67 15.5h-5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M8.67 2v3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.67 2v3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.48 3.42c3.34.12 5.03 1.35 5.13 6.05l.13 6.17c.08 4.12-.87 6.19-5.87 6.3l-6 .12c-5 .1-6.04-1.94-6.12-6.05l-.14-6.18c-.1-4.7 1.55-6 4.87-6.25z"
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
            d="M8.04 22h9.25a4.87 4.87 0 0 0 4.87-4.87V8.37a4.87 4.87 0 0 0-4.87-4.87H8.04a4.87 4.87 0 0 0-4.87 4.87v8.75c0 2.7 2.18 4.88 4.87 4.88"
            fill="currentColor"
          />
          <path
            d="M8.96 6.29a.75.75 0 0 1-.75-.75V2.75a.75.75 0 1 1 1.5 0v2.78c0 .42-.33.76-.75.76"
            fill="currentColor"
          />
          <path
            d="M16.38 6.29a.75.75 0 0 1-.75-.75V2.75a.75.75 0 1 1 1.5 0v2.78c0 .42-.33.76-.75.76"
            fill="currentColor"
          />
          <path
            d="M12.67 14.75h-1.69V13a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v1.75H7.67a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h1.81V18c0 .41.34.75.75.75s.75-.34.75-.75v-1.75h1.69c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75"
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
            d="M8.96 6.29a.75.75 0 0 1-.75-.75V2.75a.75.75 0 1 1 1.5 0v2.78c0 .42-.33.76-.75.76"
            fill="currentColor"
          />
          <path
            d="M16.38 6.29a.75.75 0 0 1-.75-.75V2.75a.75.75 0 1 1 1.5 0v2.78c0 .42-.33.76-.75.76"
            fill="currentColor"
          />
          <path
            d="M20.24 4.5a1.01 1.01 0 0 0-1.61.81v.1c0 1.17-.84 2.25-2.01 2.37a2.25 2.25 0 0 1-2.49-2.24V4.5a1 1 0 0 0-1-1h-.92a1 1 0 0 0-1 1v1.04a2.2 2.2 0 0 1-1.32 2.04q-.13.07-.3.12-.18.06-.39.08-.24.03-.48 0a2 2 0 0 1-.69-.2l-.29-.16a2.5 2.5 0 0 1-1.03-2.01v-.1c0-.77-.82-1.23-1.47-.9l-.03.02-.11.07-.1.08A4 4 0 0 0 3.98 5.7l-.03.04-.27.47q-.1.18-.16.37l-.06.14a4 4 0 0 0-.23.89l-.04.34-.02.42v8.76A4.87 4.87 0 0 0 8.04 22h9.26a4.87 4.87 0 0 0 4.87-4.87V8.37c0-1.59-.76-2.98-1.93-3.87m-7.57 11.75h-1.69V18a.75.75 0 1 1-1.5 0v-1.75H7.67a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h1.81V13a.75.75 0 1 1 1.5 0v1.75h1.69c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconNoteAdd;
