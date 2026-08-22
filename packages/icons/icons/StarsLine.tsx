import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconStarsLine = forwardRef<SVGSVGElement, IconProps>(
  function IconStarsLine(
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
              d="M12.55 3.44c-.43-.93-.65-1.4-1.03-1.44-.38-.03-.67.38-1.26 1.2l-.15.22c-.17.23-.25.35-.37.42s-.27.09-.55.12l-.26.03c-1.01.11-1.52.17-1.67.52s.16.76.76 1.59l.16.21c.17.24.26.36.3.5.02.13 0 .27-.06.56l-.05.26c-.19 1-.29 1.5 0 1.75.3.26.77.1 1.73-.21l.25-.08c.28-.1.41-.14.55-.12.14.01.27.08.52.23l.23.13c.9.5 1.34.76 1.67.56s.32-.7.3-1.72V7.9c0-.29 0-.43.05-.56s.16-.23.37-.42l.2-.18c.74-.69 1.1-1.03 1.02-1.4-.08-.38-.57-.54-1.54-.86l-.25-.08a1.4 1.4 0 0 1-.52-.23c-.1-.1-.17-.23-.29-.49z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M11 22c-.33-2.17-.8-7.2 0-10"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M14.5 22c0-3.33 1.5-9 7.5-12.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M5 13.27s.65.75 1.22.9c.58.15 1.51-.17 1.51-.17s-.75.65-.9 1.22c-.15.58.17 1.51.17 1.51s-.65-.75-1.22-.9c-.58-.15-1.51.17-1.51.17s.75-.65.9-1.22c.15-.58-.17-1.51-.17-1.51"
              stroke="currentColor"
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
              d="M12.55 3.44c-.43-.93-.65-1.4-1.03-1.44-.38-.03-.67.38-1.26 1.2l-.15.22c-.17.23-.25.35-.37.42s-.27.09-.55.12l-.26.03c-1.01.11-1.52.17-1.67.52s.16.76.76 1.59l.16.21c.17.24.26.36.3.5.02.13 0 .27-.06.56l-.05.26c-.19 1-.29 1.5 0 1.75.3.26.77.1 1.73-.21l.25-.08c.28-.1.41-.14.55-.12.14.01.27.08.52.23l.23.13c.9.5 1.34.76 1.67.56s.32-.7.3-1.72V7.9c0-.29 0-.43.05-.56s.16-.23.37-.42l.2-.18c.74-.69 1.1-1.03 1.02-1.4-.08-.38-.57-.54-1.54-.86l-.25-.08a1.4 1.4 0 0 1-.52-.23c-.1-.1-.17-.23-.29-.49z"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.2 11.28c.4.11.63.53.52.93a18 18 0 0 0-.4 5c.06 1.85.26 3.62.42 4.68a.75.75 0 1 1-1.48.22 43 43 0 0 1-.43-4.85c-.06-1.9.02-3.95.45-5.47.11-.4.53-.62.93-.51"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22.65 9.12c.2.36.09.82-.27 1.03A13.9 13.9 0 0 0 15.25 22a.75.75 0 0 1-1.5 0c0-3.53 1.58-9.48 7.87-13.15a.75.75 0 0 1 1.03.27"
                fill="currentColor"
              />
            </g>
            <path
              d="M5.13 13.77c-.02-.11.15-.21.23-.14.24.22.56.46.86.54s.7.03 1.01-.04c.11-.02.21.15.14.23-.22.24-.46.56-.54.86s-.03.7.04 1.01c.02.11-.15.21-.23.14a2.4 2.4 0 0 0-.86-.54 2 2 0 0 0-1.01.04c-.11.02-.21-.15-.14-.23.22-.24.46-.56.54-.86s.03-.7-.04-1.01"
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
              d="M12.55 3.44c-.43-.93-.65-1.4-1.03-1.44-.38-.03-.67.38-1.26 1.2l-.15.22c-.17.23-.25.35-.37.42s-.27.09-.55.12l-.26.03c-1.01.11-1.52.17-1.67.52s.16.76.76 1.59l.16.21c.17.24.26.36.3.5.02.13 0 .27-.06.56l-.05.26c-.19 1-.29 1.5 0 1.75.3.26.77.1 1.73-.21l.25-.08c.28-.1.41-.14.55-.12.14.01.27.08.52.23l.23.13c.9.5 1.34.76 1.67.56s.32-.7.3-1.72V7.9c0-.29 0-.43.05-.56s.16-.23.37-.42l.2-.18c.74-.69 1.1-1.03 1.02-1.4-.08-.38-.57-.54-1.54-.86l-.25-.08a1.4 1.4 0 0 1-.52-.23c-.1-.1-.17-.23-.29-.49z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22.65 9.12c.2.36.09.82-.27 1.03A13.9 13.9 0 0 0 15.25 22a.75.75 0 0 1-1.5 0c0-3.53 1.58-9.48 7.87-13.15a.75.75 0 0 1 1.03.27M11.2 11.28c.4.11.62.53.51.93a18 18 0 0 0-.4 5c.06 1.85.26 3.62.42 4.68a.75.75 0 1 1-1.48.22 43 43 0 0 1-.43-4.85c-.06-1.9.02-3.95.45-5.47.11-.4.53-.62.93-.51"
              fill="currentColor"
            />
            <path
              d="M5.13 13.77c-.02-.11.15-.21.23-.14.24.22.56.46.86.54s.7.03 1.01-.04c.11-.02.21.15.14.23-.22.24-.46.56-.54.86s-.03.7.04 1.01c.02.11-.15.21-.23.14a2.4 2.4 0 0 0-.86-.54 2 2 0 0 0-1.01.04c-.11.02-.21-.15-.14-.23.22-.24.46-.56.54-.86s.03-.7-.04-1.01"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconStarsLine;
