import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCPUBolt = forwardRef<SVGSVGElement, IconProps>(function IconCPUBolt(
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
            d="M7 10c0-1.41 0-2.12.44-2.56S8.59 7 10 7h4c1.41 0 2.12 0 2.56.44S17 8.59 17 10v4c0 1.41 0 2.12-.44 2.56S15.41 17 14 17h-4c-1.41 0-2.12 0-2.56-.44S7 15.41 7 14z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M12.43 10 11 12h2l-1.43 2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 12c0-3.77 0-5.66 1.17-6.83S8.23 4 12 4s5.66 0 6.83 1.17S20 8.23 20 12s0 5.66-1.17 6.83S15.77 20 12 20s-5.66 0-6.83-1.17S4 15.77 4 12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M4 12H2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22 12h-2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M4 9H2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22 9h-2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M4 15H2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22 15h-2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 20v2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 2v2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9 20v2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9 2v2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15 20v2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15 2v2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
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
            d="M9.18 9.18c.05-.05.15-.12.45-.16.32-.04.76-.04 1.44-.04h1.86c.68 0 1.12 0 1.44.04.3.04.4.1.45.16s.12.15.16.45c.04.32.04.76.04 1.44v1.86c0 .68 0 1.12-.04 1.44-.04.3-.1.4-.16.45s-.15.12-.45.16c-.32.04-.76.04-1.44.04h-1.86c-.68 0-1.12 0-1.44-.04-.3-.04-.4-.1-.45-.16s-.12-.15-.16-.45c-.04-.32-.04-.76-.04-1.44v-1.86c0-.68 0-1.12.04-1.44.04-.3.1-.4.16-.45"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.7 2.7a.7.7 0 0 0-1.4 0v2.79l-1.4.01V2.7a.7.7 0 0 0-1.39 0v2.8l.01.1c-.94.12-1.58.36-2.08.85-.5.5-.73 1.14-.84 2.08H2.69a.7.7 0 0 0 0 1.39H5.5l-.01 1.4h-2.8a.7.7 0 0 0 0 1.39h2.8l.01 1.4H2.7a.7.7 0 0 0 0 1.39h2.8l.1-.01c.12.94.36 1.58.85 2.08.5.5 1.14.73 2.08.84v2.91a.7.7 0 0 0 1.39 0V18.5q.63.02 1.4.02v2.8a.7.7 0 0 0 1.39 0v-2.8q.75 0 1.4-.02v2.82a.7.7 0 0 0 1.39 0v-2.8l-.01-.1c.94-.12 1.58-.36 2.08-.85.5-.5.73-1.14.84-2.08h2.91a.7.7 0 0 0 0-1.39H18.5q.02-.62.02-1.4h2.8a.7.7 0 0 0 0-1.39h-2.8q0-.75-.02-1.4h2.82a.7.7 0 0 0 0-1.39h-2.8l-.1.01c-.12-.94-.36-1.58-.85-2.08-.5-.5-1.14-.73-2.08-.84V2.69a.7.7 0 0 0-1.39 0V5.5l-1.4-.01zM9.45 7.64q.64-.08 1.57-.06h1.96q.93-.02 1.57.06c.46.06.9.2 1.26.55.35.36.49.8.55 1.26q.07.64.06 1.57v1.96q.02.93-.06 1.57c-.06.46-.2.9-.55 1.26-.36.35-.8.49-1.26.55q-.64.07-1.57.06h-1.96q-.93.02-1.57-.06c-.46-.06-.9-.2-1.26-.55-.35-.36-.49-.8-.55-1.26q-.08-.64-.06-1.57v-1.96q-.02-.93.06-1.57c.06-.46.2-.9.55-1.26.36-.35.8-.49 1.26-.55"
            fill="currentColor"
          />
          <path
            d="M12.97 10.54a.7.7 0 0 0-1.14-.8l-1.33 1.85a.7.7 0 0 0 .57 1.1h.5l-.54.76a.7.7 0 1 0 1.14.82l1.33-1.86a.7.7 0 0 0-.57-1.1h-.5z"
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
            d="M9.63 9.02c-.3.04-.4.1-.45.16s-.12.15-.16.45c-.04.32-.04.76-.04 1.44v1.86c0 .68 0 1.12.04 1.44.04.3.1.4.16.45s.15.12.45.16c.32.04.76.04 1.44.04h1.86c.68 0 1.12 0 1.44-.04.3-.04.4-.1.45-.16s.12-.15.16-.45c.04-.32.04-.76.04-1.44v-1.86c0-.68 0-1.12-.04-1.44-.04-.3-.1-.4-.16-.45s-.15-.12-.45-.16c-.32-.04-.76-.04-1.44-.04h-1.86c-.68 0-1.12 0-1.44.04m3.34 1.53a.7.7 0 0 0-1.14-.82L10.5 11.6a.7.7 0 0 0 .57 1.1h.5l-.54.77a.7.7 0 0 0 1.14.8l1.33-1.85a.7.7 0 0 0-.57-1.1h-.5z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.7 2.7a.7.7 0 0 0-1.4 0v2.79l-1.4.01V2.7a.7.7 0 0 0-1.39 0v2.8l.01.1c-.94.12-1.58.36-2.08.85-.5.5-.73 1.14-.84 2.08H2.69a.7.7 0 0 0 0 1.39H5.5l-.01 1.4h-2.8a.7.7 0 0 0 0 1.39h2.8l.01 1.4H2.7a.7.7 0 0 0 0 1.39h2.8l.1-.01c.12.94.36 1.58.85 2.08.5.5 1.14.73 2.08.84v2.91a.7.7 0 0 0 1.39 0V18.5q.63.02 1.4.02v2.8a.7.7 0 0 0 1.39 0v-2.8q.75 0 1.4-.02v2.82a.7.7 0 0 0 1.39 0v-2.8l-.01-.1c.94-.12 1.58-.36 2.08-.85.5-.5.73-1.14.84-2.08h2.91a.7.7 0 0 0 0-1.39H18.5q.02-.62.02-1.4h2.8a.7.7 0 0 0 0-1.39h-2.8q0-.75-.02-1.4h2.82a.7.7 0 0 0 0-1.39h-2.8l-.1.01c-.12-.94-.36-1.58-.85-2.08-.5-.5-1.14-.73-2.08-.84V2.69a.7.7 0 0 0-1.39 0V5.5l-1.4-.01zM9.45 7.64q.64-.08 1.57-.06h1.96q.93-.02 1.57.06c.46.06.9.2 1.26.55.35.36.49.8.55 1.26q.07.64.06 1.57v1.96q.02.93-.06 1.57c-.06.46-.2.9-.55 1.26-.36.35-.8.49-1.26.55q-.64.07-1.57.06h-1.96q-.93.02-1.57-.06c-.46-.06-.9-.2-1.26-.55-.35-.36-.49-.8-.55-1.26q-.08-.64-.06-1.57v-1.96q-.02-.93.06-1.57c.06-.46.2-.9.55-1.26.36-.35.8-.49 1.26-.55"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconCPUBolt;
