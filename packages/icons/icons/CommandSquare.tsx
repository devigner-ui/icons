import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCommandSquare = forwardRef<SVGSVGElement, IconProps>(
  function IconCommandSquare(
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
                d="M15.07 9.6h-4.8v4.8h4.8z"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.47 18c.99 0 1.8-.81 1.8-1.8v-1.8h-1.8c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.47 9.6h1.8V7.8c0-.99-.81-1.8-1.8-1.8s-1.8.81-1.8 1.8.81 1.8 1.8 1.8"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.07 9.6h1.8c.99 0 1.8-.81 1.8-1.8S17.86 6 16.87 6s-1.8.81-1.8 1.8z"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.87 18c.99 0 1.8-.81 1.8-1.8s-.81-1.8-1.8-1.8h-1.8v1.8c0 .99.81 1.8 1.8 1.8"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              d="M9.67 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7"
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
              d="M16.86 2H8.49C4.85 2 2.68 4.17 2.68 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2"
              fill="currentColor"
            />
            <path
              d="M11.42 14.15h2.51c.49 0 .9-.4.9-.9v-2.51a.9.9 0 0 0-.9-.9h-2.51a.9.9 0 0 0-.9.9v2.51c0 .5.4.9.9.9"
              fill="currentColor"
            />
            <path
              d="M8.47 18c.99 0 1.8-.81 1.8-1.8v-.8a1 1 0 0 0-1-1h-.8c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8"
              fill="currentColor"
            />
            <path
              d="M8.47 9.6h.8a1 1 0 0 0 1-1v-.8c0-.99-.81-1.8-1.8-1.8s-1.8.81-1.8 1.8.81 1.8 1.8 1.8"
              fill="currentColor"
            />
            <path
              d="M16.07 9.6h.8c.99 0 1.8-.81 1.8-1.8S17.86 6 16.87 6s-1.8.81-1.8 1.8v.8a1 1 0 0 0 1 1"
              fill="currentColor"
            />
            <path
              d="M16.87 18c.99 0 1.8-.81 1.8-1.8s-.81-1.8-1.8-1.8h-.8a1 1 0 0 0-1 1v.8c0 .99.81 1.8 1.8 1.8"
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
              d="M16.86 2H8.48C4.84 2 2.67 4.17 2.67 7.81v8.37c0 3.65 2.17 5.82 5.81 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2m-6.59 14.2c0 .99-.81 1.8-1.8 1.8a1.8 1.8 0 0 1-1.8-1.8c0-.99.81-1.8 1.8-1.8h.8a1 1 0 0 1 1 1zm0-7.6a1 1 0 0 1-1 1h-.8a1.8 1.8 0 0 1-1.8-1.8c0-.99.81-1.8 1.8-1.8s1.8.81 1.8 1.8zm4.55 4.65c0 .49-.4.9-.9.9h-2.51a.9.9 0 0 1-.9-.9v-2.51c0-.49.4-.9.9-.9h2.51c.49 0 .9.4.9.9zM16.87 18a1.8 1.8 0 0 1-1.8-1.8v-.8a1 1 0 0 1 1-1h.8c.99 0 1.8.81 1.8 1.8s-.81 1.8-1.8 1.8m0-8.4h-.8a1 1 0 0 1-1-1v-.8c0-.99.81-1.8 1.8-1.8s1.8.81 1.8 1.8-.81 1.8-1.8 1.8"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCommandSquare;
