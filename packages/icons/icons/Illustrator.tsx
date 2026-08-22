import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconIllustrator = forwardRef<SVGSVGElement, IconProps>(
  function IconIllustrator(
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
              d="M15.67 22h-6c-5 0-7-2-7-7V9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 5-2 7-7 7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="m7.17 16 3.5-8 3.6 8"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.97 13.3h5.4"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
              />
              <path
                d="M16.77 16v-5.3"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.81 8.03"
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
              d="M16.86 2H8.48C4.84 2 2.67 4.17 2.67 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2"
              fill="currentColor"
            />
            <path
              d="M11.56 7.8a.8.8 0 0 0-.68-.51.7.7 0 0 0-.72.44l-3.53 7.93c-.17.38 0 .82.38.99s.82 0 .99-.38l.98-2.2h3.08l.71 2.13a.75.75 0 0 0 1.42-.48zm-1.91 4.77 1.1-2.47.82 2.47z"
              fill="currentColor"
            />
            <path
              d="M17.02 9.93a.76.76 0 0 0-.75.75v5.29c0 .41.34.75.75.75s.75-.34.75-.75v-5.29a.75.75 0 0 0-.75-.75"
              fill="currentColor"
            />
            <path
              d="M17.94 7.65a1 1 0 0 0-1.31-.54 1 1 0 0 0-.32.22q-.13.14-.22.32a1 1 0 0 0-.07.38q0 .2.07.39a1 1 0 0 0 1.31.54q.18-.08.32-.22t.22-.32a1 1 0 0 0 0-.77"
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
              d="M16.86 2H8.48C4.84 2 2.67 4.17 2.67 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2m-3.13 14.68a.75.75 0 0 1-.95-.47l-.71-2.13H8.99l-.98 2.2a.75.75 0 0 1-.99.38.75.75 0 0 1-.38-.99l3.53-7.93c.13-.28.4-.47.72-.44.31.01.58.22.68.51l2.64 7.93a.76.76 0 0 1-.48.94m4.04-.71c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-5.29c0-.41.34-.75.75-.75s.75.34.75.75zm.17-7.55a1 1 0 0 1-.22.32q-.14.14-.32.22a1 1 0 0 1-.38.07 1 1 0 0 1-.93-.61 1 1 0 0 1-.07-.39q0-.2.07-.38.09-.18.22-.32.14-.15.32-.22a1.02 1.02 0 0 1 1.39.92 1 1 0 0 1-.08.39"
              fill="currentColor"
            />
            <path d="M9.65 12.57h1.92l-.82-2.46z" fill="currentColor" />
          </svg>
        )}
      </>
    );
  },
);

export default IconIllustrator;
