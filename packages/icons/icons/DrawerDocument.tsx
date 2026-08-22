import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconDrawerDocument = forwardRef<SVGSVGElement, IconProps>(
  function IconDrawerDocument(
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
              d="M7.67 12c-4 0-4 1.79-4 4v1c0 2.76 0 5 5 5h8c4 0 5-2.24 5-5v-1c0-2.21 0-4-4-4-1 0-1.28.21-1.8.6l-1.02 1.08a3 3 0 0 1-4.37 0L9.47 12.6c-.52-.39-.8-.6-1.8-.6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.67 12V6c0-2.21 0-4-4-4h-6c-4 0-4 1.79-4 4v6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M11.22 9.23h3.33"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10.39 6.23h5"
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
              d="M19.36 11.53a8 8 0 0 0-2.04-.23c-1.11 0-1.52.27-2.09.7l-.09.08-.95 1.01c-.79.85-2.24.85-3.04 0l-.95-1-.09-.09a3 3 0 0 0-2.09-.7q-1.2 0-2.04.23c-2.38.64-2.38 2.53-2.38 4.19v.93c0 2.51 0 5.35 5.35 5.35h7.44q5.34-.01 5.35-5.35v-.93c0-1.66 0-3.55-2.38-4.19"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M15.46 2H9.88C5.46 2 5.46 4.35 5.46 6.42v5.79q0 .34.27.55.28.2.61.12a7 7 0 0 1 1.68-.18c.67 0 .81.08 1.21.38l.91.96a3.5 3.5 0 0 0 5.08 0l.91-.96c.4-.3.54-.38 1.21-.38q1 0 1.68.18a.7.7 0 0 0 .61-.12.7.7 0 0 0 .27-.55V6.42C19.88 4.35 19.88 2 15.46 2"
              fill="currentColor"
            />
            <path
              d="M14.22 9.91h-3.1a.7.7 0 0 1-.7-.7c0-.39.31-.7.7-.7h3.1c.39 0 .7.31.7.7a.7.7 0 0 1-.7.7"
              fill="currentColor"
            />
            <path
              d="M15 7.12h-4.66a.7.7 0 0 1-.7-.7c0-.39.31-.7.7-.7h4.65a.7.7 0 0 1 .01 1.4"
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
              d="M19.36 11.53a8 8 0 0 0-2.04-.23c-1.11 0-1.52.27-2.09.7l-.09.08-.95 1.01c-.79.85-2.24.85-3.04 0l-.95-1-.09-.09a3 3 0 0 0-2.09-.7q-1.2 0-2.04.23c-2.38.64-2.38 2.53-2.38 4.19v.93c0 2.51 0 5.35 5.35 5.35h7.44q5.34-.01 5.35-5.35v-.93c0-1.66 0-3.55-2.38-4.19"
              fill="currentColor"
            />
            <path
              d="M15.46 2H9.88C5.46 2 5.46 4.35 5.46 6.42v3.7l.13-.04q1.04-.28 2.43-.28a4.3 4.3 0 0 1 3.28 1.26l.94.99q.16.17.43.17t.42-.16l.96-1.01q.12-.13.27-.24a4.3 4.3 0 0 1 3-1.01q1.4 0 2.43.28l.13.04v-3.7c0-2.07 0-4.42-4.42-4.42m-1.24 6.5h-3.1a.7.7 0 0 1-.7-.7c0-.39.32-.7.7-.7h3.1c.38 0 .7.31.7.7a.7.7 0 0 1-.7.7M15 5.71h-4.66a.7.7 0 0 1 0-1.4H15a.7.7 0 0 1 0 1.4"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconDrawerDocument;
