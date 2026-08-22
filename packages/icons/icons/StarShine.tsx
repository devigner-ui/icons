import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconStarShine = forwardRef<SVGSVGElement, IconProps>(
  function IconStarShine(
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
              d="M10.58 8.7C11.2 7.57 11.53 7 12 7s.79.57 1.42 1.7l.17.3c.18.32.27.48.4.59.15.1.32.15.67.22l.32.08c1.23.27 1.84.41 2 .88.14.47-.28.96-1.12 1.95l-.22.25c-.24.28-.35.42-.4.59s-.04.36 0 .73l.03.34c.12 1.3.19 1.96-.2 2.25-.38.3-.96.03-2.1-.5l-.3-.14c-.33-.15-.5-.23-.67-.23s-.34.08-.66.23l-.3.14c-1.15.53-1.73.8-2.11.5-.39-.29-.32-.94-.2-2.25l.04-.34c.03-.37.05-.56 0-.73s-.17-.31-.41-.6l-.22-.24c-.84-.99-1.26-1.48-1.11-1.95s.76-.6 1.99-.88l.32-.08c.35-.07.52-.11.66-.22s.23-.27.41-.6z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
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
              d="M12 20v2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2 12h2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M20 12h2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m6 18 .34-.34"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M17.66 6.34 18 6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m18 18-.34-.34"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M6.34 6.34 6 6"
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
              d="M10.58 8.7C11.2 7.57 11.53 7 12 7s.79.57 1.42 1.7l.17.3c.18.32.27.48.4.59.15.1.32.15.67.22l.32.08c1.23.27 1.84.41 2 .88.14.47-.28.96-1.12 1.95l-.22.25c-.24.28-.35.42-.4.59s-.04.36 0 .73l.03.34c.12 1.3.19 1.96-.2 2.25-.38.3-.96.03-2.1-.5l-.3-.14c-.33-.15-.5-.23-.67-.23s-.34.08-.66.23l-.3.14c-1.15.53-1.73.8-2.11.5-.39-.29-.32-.94-.2-2.25l.04-.34c.03-.37.05-.56 0-.73s-.17-.31-.41-.6l-.22-.24c-.84-.99-1.26-1.48-1.11-1.95s.76-.6 1.99-.88l.32-.08c.35-.07.52-.11.66-.22s.23-.27.41-.6z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 1.25c.41 0 .75.34.75.75v2a.75.75 0 0 1-1.5 0V2c0-.41.34-.75.75-.75M1.25 12c0-.41.34-.75.75-.75h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m18 0c0-.41.34-.75.75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75M12 19.25c.41 0 .75.34.75.75v2a.75.75 0 0 1-1.5 0v-2c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M18.53 5.47c.3.3.3.77 0 1.06l-.34.34a.75.75 0 0 1-1.06-1.06l.34-.34c.3-.3.77-.3 1.06 0"
                fill="currentColor"
              />
              <path
                d="M5.47 5.47c.3-.3.77-.3 1.06 0l.34.34a.75.75 0 0 1-1.06 1.06l-.34-.34a.75.75 0 0 1 0-1.06"
                fill="currentColor"
              />
              <path
                d="M6.87 17.13c.3.29.3.76 0 1.06l-.34.34a.75.75 0 0 1-1.06-1.06l.34-.34c.3-.3.77-.3 1.06 0"
                fill="currentColor"
              />
              <path
                d="M17.13 17.13c.29-.3.76-.3 1.06 0l.34.34a.75.75 0 1 1-1.06 1.06l-.34-.34a.75.75 0 0 1 0-1.06"
                fill="currentColor"
              />
            </g>
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
              d="M10.58 8.7C11.2 7.57 11.53 7 12 7s.79.57 1.42 1.7l.17.3c.18.32.27.48.4.59.15.1.32.15.67.22l.32.08c1.23.27 1.84.41 2 .88.14.47-.28.96-1.12 1.95l-.22.25c-.24.28-.35.42-.4.59s-.04.36 0 .73l.03.34c.12 1.3.19 1.96-.2 2.25-.38.3-.96.03-2.1-.5l-.3-.14c-.33-.15-.5-.23-.67-.23s-.34.08-.66.23l-.3.14c-1.15.53-1.73.8-2.11.5-.39-.29-.32-.94-.2-2.25l.04-.34c.03-.37.05-.56 0-.73s-.17-.31-.41-.6l-.22-.24c-.84-.99-1.26-1.48-1.11-1.95s.76-.6 1.99-.88l.32-.08c.35-.07.52-.11.66-.22s.23-.27.41-.6z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 1.25c.41 0 .75.34.75.75v2a.75.75 0 0 1-1.5 0V2c0-.41.34-.75.75-.75m6.53 4.22c.3.3.3.77 0 1.06l-.34.34a.75.75 0 0 1-1.06-1.06l.34-.34c.3-.3.77-.3 1.06 0m-13.06 0c.3-.3.77-.3 1.06 0l.34.34a.75.75 0 0 1-1.06 1.06l-.34-.34a.75.75 0 0 1 0-1.06M1.25 12c0-.41.34-.75.75-.75h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m18 0c0-.41.34-.75.75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75M6.87 17.13c.3.29.3.76 0 1.06l-.34.34a.75.75 0 1 1-1.06-1.06l.34-.34c.3-.3.77-.3 1.06 0m10.26 0c.29-.3.76-.3 1.06 0l.34.34a.75.75 0 1 1-1.06 1.06l-.34-.34a.75.75 0 0 1 0-1.06M12 19.25c.41 0 .75.34.75.75v2a.75.75 0 0 1-1.5 0v-2c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconStarShine;
