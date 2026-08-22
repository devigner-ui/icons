import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMusicCircle = forwardRef<SVGSVGElement, IconProps>(
  function IconMusicCircle(
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
              d="M3.25 8.67a10 10 0 0 1 3.14-4.44"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.67 12q.01 1.76.58 3.33"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.76 21.57a10 10 0 0 0 12.75-11.33"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.39 19.75q-.71-.57-1.32-1.26"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.91 6.34A10 10 0 0 0 9.76 2.43"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M9.26 17.11a1.59 1.59 0 1 0 0-3.18 1.59 1.59 0 0 0 0 3.18"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.67 14.46V8.25c0-1.32-.83-1.51-1.67-1.28l-3.18.87c-.58.16-.98.61-.98 1.28v6.4"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.08 16.05a1.59 1.59 0 1 0 0-3.18 1.59 1.59 0 0 0 0 3.18"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m10.85 10.76 5.82-1.59"
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
              d="M3.25 9.42 3 9.38a.76.76 0 0 1-.46-.96 11 11 0 0 1 3.38-4.78.75.75 0 0 1 1.05.11c.26.32.21.79-.11 1.06a9 9 0 0 0-2.9 4.11c-.11.31-.4.5-.71.5"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M3.25 16.08a.75.75 0 0 1-.71-.5A11 11 0 0 1 1.92 12c0-.41.34-.75.75-.75s.75.34.75.75q0 1.57.54 3.08a.75.75 0 0 1-.71 1"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12.67 22.75q-1.6 0-3.13-.47a.75.75 0 0 1-.5-.94c.12-.4.54-.62.94-.5q1.31.4 2.69.4a9.26 9.26 0 0 0 9.1-10.88.75.75 0 1 1 1.48-.26q.18.98.18 1.9a10.77 10.77 0 0 1-10.76 10.75"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M6.39 20.5a.7.7 0 0 1-.47-.17q-.85-.68-1.42-1.35a.76.76 0 0 1 .08-1.06.76.76 0 0 1 1.06.08q.49.57 1.22 1.16c.32.26.37.73.11 1.05a.7.7 0 0 1-.58.29"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M20.91 7.09a.7.7 0 0 1-.62-.33A9.2 9.2 0 0 0 9.98 3.14a.76.76 0 0 1-.94-.5c-.13-.4.1-.82.5-.94a10.7 10.7 0 0 1 11.99 4.2c.23.34.15.81-.19 1.04a.7.7 0 0 1-.43.15"
              fill="currentColor"
            />
            <path
              d="M16.7 6.5c-.33-.25-.93-.5-1.89-.24l-3.19.86a2.04 2.04 0 0 0-1.52 2v4.22a2.32 2.32 0 0 0-3.18 2.18 2.33 2.33 0 0 0 4.67.04l.01-.04v-4.19l4.32-1.18v2.13a2.32 2.32 0 0 0-3.18 2.18 2.34 2.34 0 0 0 4.68 0V8.25q0-1.2-.72-1.75m-7.44 9.86a.85.85 0 0 1-.84-.84c0-.46.38-.84.84-.84s.84.38.84.84-.38.84-.84.84m5.82-1.06a.85.85 0 0 1-.84-.84c0-.46.38-.84.84-.84s.84.38.84.84-.38.84-.84.84"
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
              d="M3.25 9.42 3 9.38a.76.76 0 0 1-.46-.96 11 11 0 0 1 3.38-4.78.75.75 0 0 1 1.05.11c.26.32.21.79-.11 1.06a9 9 0 0 0-2.9 4.11c-.11.31-.4.5-.71.5"
              fill="currentColor"
            />
            <path
              d="M3.25 16.08a.75.75 0 0 1-.71-.5A11 11 0 0 1 1.92 12c0-.41.34-.75.75-.75s.75.34.75.75q0 1.57.54 3.08a.75.75 0 0 1-.71 1"
              fill="currentColor"
            />
            <path
              d="M12.67 22.75q-1.6 0-3.13-.47a.75.75 0 0 1-.5-.94c.12-.4.54-.62.94-.5q1.31.4 2.69.4a9.26 9.26 0 0 0 9.1-10.88.75.75 0 1 1 1.48-.26q.18.98.18 1.9a10.77 10.77 0 0 1-10.76 10.75"
              fill="currentColor"
            />
            <path
              d="M6.39 20.5a.7.7 0 0 1-.47-.17q-.85-.68-1.42-1.35a.76.76 0 0 1 .08-1.06.76.76 0 0 1 1.06.08q.49.57 1.22 1.16c.32.26.37.73.11 1.05a.7.7 0 0 1-.58.29"
              fill="currentColor"
            />
            <path
              d="M20.91 7.09a.7.7 0 0 1-.62-.33A9.25 9.25 0 0 0 9.98 3.15a.76.76 0 0 1-.94-.5c-.13-.4.1-.82.5-.94q1.53-.46 3.13-.46c3.54 0 6.85 1.75 8.86 4.67.23.34.15.81-.19 1.04a1 1 0 0 1-.43.13"
              fill="currentColor"
            />
            <path
              d="M16.7 6.5c-.33-.25-.93-.5-1.89-.24l-3.19.86a2.04 2.04 0 0 0-1.52 2v4.22a2.32 2.32 0 0 0-3.18 2.18 2.33 2.33 0 0 0 4.67.04l.01-.04v-4.19l4.32-1.18v2.13a2.32 2.32 0 0 0-3.18 2.18 2.34 2.34 0 0 0 4.68 0V8.25q0-1.2-.72-1.75m-7.44 9.86a.85.85 0 0 1-.84-.84c0-.46.38-.84.84-.84s.84.38.84.84-.38.84-.84.84m5.82-1.06a.85.85 0 0 1-.84-.84c0-.46.38-.84.84-.84s.84.38.84.84-.38.84-.84.84"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMusicCircle;
