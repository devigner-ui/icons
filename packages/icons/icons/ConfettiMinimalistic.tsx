import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconConfettiMinimalistic = forwardRef<SVGSVGElement, IconProps>(
  function IconConfettiMinimalistic(
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
              d="m4.01 15.76 1.7-5.07c.76-2.3 1.14-3.44 2.05-3.66.9-.21 1.76.64 3.47 2.36l3.38 3.38c1.71 1.71 2.57 2.57 2.36 3.47-.22.9-1.37 1.3-3.66 2.06l-5.07 1.69c-2.77.92-4.15 1.38-4.88.65s-.27-2.11.65-4.88"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12.24 18.35s-.76-2.28-.76-3.8c0-1.5.76-3.79.76-3.79m-4.17 8.72s-.65-2.75-.76-4.55c-.2-2.96.76-7.58.76-7.58"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m14.5 10 .15-.71c.15-.73.67-1.32 1.38-1.56s1.22-.83 1.37-1.55l.14-.72"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m17.57 12.25.21.13c.66.38 1.49.3 2.05-.21a1.8 1.8 0 0 1 1.88-.3L22 12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M10.54 3a1.4 1.4 0 0 0 .2 1.72l.1.1c.4.4.54.97.38 1.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M13.56 4.4c.2-.2.3-.3.42-.34a.5.5 0 0 1 .3 0c.12.03.22.14.42.34s.3.3.34.41q.04.15 0 .3c-.04.12-.14.22-.34.42s-.3.3-.42.34a.5.5 0 0 1-.3 0c-.12-.03-.22-.13-.42-.34-.2-.2-.3-.3-.34-.41a.5.5 0 0 1 0-.3c.04-.12.14-.22.34-.42"
                fill="currentColor"
              />
            </g>
            <path
              d="M19.47 7.47c.24-.25.37-.37.5-.42a.7.7 0 0 1 .5 0c.15.05.27.17.51.42.25.24.37.37.43.5a.7.7 0 0 1 0 .5c-.06.15-.18.27-.43.51-.24.25-.36.37-.5.43a.7.7 0 0 1-.5 0 2 2 0 0 1-.51-.43c-.25-.24-.37-.36-.42-.5a.7.7 0 0 1 0-.5c.05-.14.17-.27.42-.51"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M6.93 3.94a.54.54 0 1 1 .76.76.54.54 0 0 1-.76-.76"
                fill="currentColor"
              />
            </g>
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M19.06 15.31a.54.54 0 1 1 .76.76.54.54 0 0 1-.76-.76"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M17.5 9.74a.54.54 0 1 1 .76.76.54.54 0 0 1-.76-.76"
                fill="currentColor"
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
              d="M10.93 2.36c.35.22.46.68.25 1.03a.65.65 0 0 0 .09.8l.1.1c.59.59.8 1.45.56 2.25a.75.75 0 1 1-1.43-.44.8.8 0 0 0-.2-.75l-.1-.1c-.7-.7-.82-1.8-.3-2.64a.75.75 0 0 1 1.03-.25"
              fill="currentColor"
            />
            <path
              d="M19.97 7.05c-.13.05-.26.17-.5.42-.25.24-.37.37-.42.5a.7.7 0 0 0 0 .5c.05.15.17.27.42.51.24.25.37.37.5.43a.7.7 0 0 0 .5 0c.15-.06.27-.18.51-.43.25-.24.37-.36.43-.5a.7.7 0 0 0 0-.5 2 2 0 0 0-.43-.51 2 2 0 0 0-.5-.42.7.7 0 0 0-.5 0"
              fill="currentColor"
            />
            <path
              d="M21.4 12.56a1 1 0 0 0-1.07.17 2.5 2.5 0 0 1-2.92.3l-.22-.13a.75.75 0 0 1 .75-1.3l.22.13c.37.21.85.17 1.18-.12a2.5 2.5 0 0 1 2.67-.42l.3.12a.75.75 0 1 1-.61 1.38z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M13.56 4.4c.2-.2.3-.3.42-.34a.5.5 0 0 1 .3 0c.12.03.22.14.42.34s.3.3.34.41q.04.15 0 .3c-.04.12-.14.22-.34.42s-.3.3-.42.34a.5.5 0 0 1-.3 0c-.12-.03-.22-.13-.42-.34-.2-.2-.3-.3-.34-.41a.5.5 0 0 1 0-.3c.04-.12.14-.22.34-.42"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M19.06 15.31a.54.54 0 1 1 .76.76.54.54 0 0 1-.76-.76"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M6.93 3.94a.54.54 0 1 1 .76.76.54.54 0 0 1-.76-.76"
                fill="currentColor"
              />
              <path
                d="M17.69 4.72c.4.08.67.48.59.88l-.15.72c-.2 1-.9 1.8-1.87 2.12a1.3 1.3 0 0 0-.87 1l-.15.71a.75.75 0 0 1-1.47-.3l.15-.71c.2-1 .9-1.8 1.87-2.12.45-.15.78-.53.87-.99l.15-.72c.08-.4.47-.67.88-.59"
                fill="currentColor"
              />
            </g>
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M17.5 9.74a.54.54 0 1 1 .76.76.54.54 0 0 1-.76-.76"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m4.01 15.76 1.7-5.07c.76-2.3 1.14-3.44 2.05-3.66.9-.21 1.76.64 3.47 2.36l3.38 3.38c1.71 1.71 2.57 2.57 2.36 3.47-.22.9-1.37 1.3-3.66 2.06l-5.07 1.69c-2.77.92-4.15 1.38-4.88.65s-.27-2.11.65-4.88"
              fill="currentColor"
            />
            <path
              d="m8.8 7.5.05-.24q-.58-.35-1.1-.23-.21.06-.39.18l.7.14-.7-.14-.04.02v.03l-.14.73c-.09.48-.2 1.16-.3 1.94a27 27 0 0 0-.32 5.05 27 27 0 0 0 .67 4.2l.08.35.02.09v.03l.74-.17-.74.17.14.6.77-.26.66-.22-.1-.46-.01-.03-.02-.08a40 40 0 0 1-.71-4.31c-.1-1.4.08-3.24.3-4.76a50 50 0 0 1 .43-2.58v-.03z"
              fill="currentColor"
            />
            <path
              d="m13.04 18.39-1.42.47-.1-.28.72-.23-.72.23v-.03l-.12-.37-.27-.98c-.2-.77-.4-1.8-.4-2.64 0-.86.2-1.88.4-2.65a22 22 0 0 1 .38-1.35l.01-.02v-.01l.72.23-.72-.23.22-.64 1.18 1.19v.01a17 17 0 0 0-.7 3.47c0 .65.18 1.53.36 2.28a21 21 0 0 0 .36 1.25v.02z"
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
              d="m13.04 18.39.27-.1c2.3-.76 3.44-1.14 3.66-2.05.21-.9-.65-1.76-2.36-3.47l-1.69-1.7v.02a17 17 0 0 0-.7 3.47c0 .65.18 1.53.36 2.28a21 21 0 0 0 .36 1.25v.02z"
              fill="currentColor"
            />
            <path
              d="M7.47 20.24c-2.26.75-3.45 1.06-4.11.4-.73-.73-.27-2.11.65-4.88l1.7-5.07c.62-1.9 1-3 1.61-3.46v.03l-.14.73c-.09.48-.2 1.16-.31 1.94a28 28 0 0 0-.31 5.05 27 27 0 0 0 .67 4.2l.08.35.02.09z"
              fill="currentColor"
            />
            <path
              d="m8.85 7.26-.05.24v.02l-.01.03-.13.7c-.09.47-.2 1.13-.3 1.88-.22 1.52-.4 3.35-.3 4.76a26 26 0 0 0 .64 3.98l.07.33.02.08v.03l.11.46 2.72-.9-.1-.32-.12-.37-.27-.98c-.2-.77-.4-1.8-.4-2.64 0-.86.2-1.88.4-2.65a22 22 0 0 1 .38-1.35l.01-.03.22-.64-.5-.5a15 15 0 0 0-2.39-2.13"
              fill="currentColor"
            />
            <path
              d="M10.93 2.36c.35.22.46.68.25 1.03a.65.65 0 0 0 .09.8l.1.1c.59.59.8 1.45.56 2.25a.75.75 0 1 1-1.43-.44.8.8 0 0 0-.2-.75l-.1-.1c-.7-.7-.82-1.8-.3-2.64a.75.75 0 0 1 1.03-.25"
              fill="currentColor"
            />
            <path
              d="M13.56 4.4c.2-.2.3-.3.42-.34a.5.5 0 0 1 .3 0c.12.04.22.14.42.34s.3.3.34.41q.04.15 0 .3c-.04.12-.14.22-.34.42s-.3.3-.42.34a.5.5 0 0 1-.3 0c-.12-.03-.22-.13-.42-.34-.2-.2-.3-.3-.34-.41a.5.5 0 0 1 0-.3c.04-.12.14-.22.34-.42"
              fill="currentColor"
            />
            <path
              d="M6.93 3.94a.54.54 0 1 1 .76.76.54.54 0 0 1-.76-.76"
              fill="currentColor"
            />
            <path
              d="M19.97 7.05c-.13.05-.26.17-.5.42-.25.24-.37.37-.42.5a.7.7 0 0 0 0 .5c.05.15.17.27.42.51.24.25.37.37.5.43a.7.7 0 0 0 .5 0c.15-.06.27-.18.51-.43.25-.24.37-.36.43-.5a.7.7 0 0 0 0-.5 2 2 0 0 0-.43-.51 2 2 0 0 0-.5-.42.7.7 0 0 0-.5 0"
              fill="currentColor"
            />
            <path
              d="M19.06 15.31a.54.54 0 1 1 .76.76.54.54 0 0 1-.76-.76"
              fill="currentColor"
            />
            <path
              d="M17.69 4.72c.4.08.67.48.59.88l-.15.72c-.2 1-.9 1.8-1.87 2.12a1.3 1.3 0 0 0-.87 1l-.15.71a.75.75 0 0 1-1.47-.3l.15-.71c.2-1 .91-1.8 1.87-2.12.45-.15.78-.53.87-.99l.15-.72c.08-.4.47-.67.88-.59"
              fill="currentColor"
            />
            <path
              d="M21.4 12.56a1 1 0 0 0-1.07.17 2.5 2.5 0 0 1-2.92.3l-.22-.13a.75.75 0 0 1 .75-1.3l.22.13c.37.21.85.17 1.18-.12a2.5 2.5 0 0 1 2.67-.42l.3.12a.75.75 0 0 1-.61 1.38z"
              fill="currentColor"
            />
            <path
              d="M17.5 9.74a.54.54 0 1 1 .76.76.54.54 0 0 1-.76-.76"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconConfettiMinimalistic;
