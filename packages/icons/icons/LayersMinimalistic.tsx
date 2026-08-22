import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconLayersMinimalistic = forwardRef<SVGSVGElement, IconProps>(
  function IconLayersMinimalistic(
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
              d="M4.98 9.69C2.99 8.89 2 8.49 2 8c0-.5 1-.9 2.98-1.69l2.8-1.12C9.79 4.4 10.78 4 12 4s2.23.4 4.21 1.2l2.81 1.11C21.01 7.11 22 7.51 22 8c0 .5-1 .9-2.98 1.69l-2.8 1.12c-2 .8-2.99 1.19-4.22 1.19s-2.23-.4-4.21-1.2z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22 12s-1 .9-2.98 1.69l-2.8 1.12c-2 .8-2.99 1.19-4.22 1.19s-2.23-.4-4.21-1.2l-2.81-1.1C2.99 12.89 2 12 2 12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22 16s-1 .9-2.98 1.69l-2.8 1.12c-2 .8-2.99 1.19-4.22 1.19s-2.23-.4-4.21-1.2l-2.81-1.1C2.99 16.89 2 16 2 16"
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
              d="M7.62 4.45c1.88-.75 3-1.2 4.38-1.2s2.5.45 4.38 1.2l2.97 1.19q1.44.56 2.25.97.42.2.73.49c.2.2.42.5.42.9s-.21.7-.42.9q-.31.29-.73.5-.81.4-2.25.96l-2.97 1.2c-1.88.74-3 1.19-4.38 1.19s-2.5-.45-4.38-1.2l-2.97-1.19A28 28 0 0 1 2.4 9.4a3 3 0 0 1-.73-.49c-.2-.2-.42-.5-.42-.9s.21-.7.42-.9q.31-.29.73-.5.81-.4 2.25-.96z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.6" : "1"}
              d="M2.5 11.44a.75.75 0 0 0-1 1.12L2 12l-.5.56.02.02.2.16q.22.17.62.43c.53.35 1.32.8 2.36 1.21l2.8 1.12.12.05c1.88.75 3 1.2 4.38 1.2s2.5-.45 4.38-1.2l.11-.05 2.81-1.12a14 14 0 0 0 3.13-1.76l.05-.04.01-.01v-.01h.01a.75.75 0 0 0-1-1.12l-.14.12-.51.36c-.46.3-1.16.7-2.1 1.07l-2.82 1.12c-2.02.81-2.87 1.14-3.93 1.14s-1.9-.33-3.93-1.14L5.26 13a12 12 0 0 1-2.76-1.55"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2.5 15.5a.75.75 0 0 0-1 1.12l.02.02.2.16q.22.17.62.43c.53.35 1.32.8 2.36 1.21l2.8 1.12.12.05c1.88.75 3 1.2 4.38 1.2s2.5-.45 4.38-1.2l.11-.05 2.81-1.12a14 14 0 0 0 3.13-1.77l.05-.03.01-.02h.01a.75.75 0 0 0-1-1.12l-.14.12-.51.35c-.46.3-1.16.7-2.1 1.08l-2.82 1.12c-2.02.81-2.87 1.14-3.93 1.14s-1.9-.33-3.93-1.14l-2.81-1.12a12 12 0 0 1-2.73-1.53z"
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
              d="M7.62 4.45c1.88-.75 3-1.2 4.38-1.2s2.5.45 4.38 1.2l2.97 1.19q1.44.56 2.25.97.42.2.73.49c.2.2.42.5.42.9s-.21.7-.42.9q-.31.29-.73.5-.81.4-2.25.96l-2.97 1.2c-1.88.74-3 1.19-4.38 1.19s-2.5-.45-4.38-1.2l-2.97-1.19A28 28 0 0 1 2.4 9.4a3 3 0 0 1-.73-.49c-.2-.2-.42-.5-.42-.9s.21-.7.42-.9q.31-.29.73-.5.81-.4 2.25-.96z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="m2.5 11.44.03.02.11.1.51.36c.46.3 1.16.7 2.1 1.07l2.82 1.12c2.02.81 2.87 1.14 3.93 1.14s1.9-.33 3.93-1.14L18.74 13a12 12 0 0 0 2.76-1.55.75.75 0 0 1 1 1.12L22 12l.5.56-.02.02-.2.16q-.22.17-.62.43c-.53.35-1.32.8-2.36 1.21l-2.8 1.12-.12.05c-1.88.75-3 1.2-4.38 1.2s-2.5-.45-4.38-1.2l-.11-.05-2.81-1.12a14 14 0 0 1-3.13-1.76l-.05-.04-.01-.01v-.01H1.5L2 12l-.5.56a.75.75 0 0 1 1-1.12m0 4a.75.75 0 0 0-1.06.06zm0 0 .03.02.11.1.51.36c.46.3 1.16.7 2.1 1.07l2.82 1.12c2.02.81 2.87 1.14 3.93 1.14s1.9-.33 3.93-1.14L18.74 17a12 12 0 0 0 2.76-1.55.75.75 0 0 1 1 1.12l-.48-.54.48.54-.02.02-.2.17-.62.42c-.53.35-1.32.8-2.36 1.21l-2.8 1.12-.12.05c-1.88.75-3 1.2-4.38 1.2s-2.5-.45-4.38-1.2l-.11-.05-2.81-1.12a14 14 0 0 1-3.13-1.76l-.05-.04-.01-.01v-.01H1.5L2 16l-.5.56a.75.75 0 0 1-.06-1.06"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconLayersMinimalistic;
