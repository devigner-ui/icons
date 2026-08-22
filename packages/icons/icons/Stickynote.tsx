import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconStickynote = forwardRef<SVGSVGElement, IconProps>(
  function IconStickynote(
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
              opacity={duotone ? "0.4" : "1"}
              d="M7.67 11h8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7.67 15h5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.67 22h-6c-5 0-6-2.06-6-6.18V9.65c0-4.7 1.67-5.96 5-6.15h8c3.33.18 5 1.45 5 6.15V16"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m21.67 16-6 6v-3q0-3 3-3z"
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
              d="M22.17 8.37v7.45q0 .23-.18.43l-5.51 5.55q-.2.2-.47.2H8.04a4.87 4.87 0 0 1-4.87-4.87V8.37A4.87 4.87 0 0 1 8.04 3.5h9.26a4.87 4.87 0 0 1 4.87 4.87"
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
              d="M15.45 12.71H8.03a.75.75 0 1 1 0-1.5h7.42a.75.75 0 1 1 0 1.5"
              fill="currentColor"
            />
            <path
              d="M12.67 16.42H8.03a.75.75 0 1 1 0-1.5h4.64a.75.75 0 1 1 0 1.5"
              fill="currentColor"
            />
            <path
              d="M22.17 15.82q0 .23-.18.43l-5.51 5.55q-.2.2-.47.2a.65.65 0 0 1-.65-.64v-3.5a2.73 2.73 0 0 1 2.76-2.67l3.4-.01c.39 0 .65.31.65.64"
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
              d="M22.17 15.82q0 .23-.18.43l-5.51 5.55q-.2.2-.47.2a.65.65 0 0 1-.65-.64v-3.5a2.73 2.73 0 0 1 2.76-2.67l3.4-.01c.39 0 .65.31.65.64"
              fill="currentColor"
            />
            <path
              d="M22.17 15.82q0 .23-.18.43l-5.51 5.55q-.2.2-.47.2a.65.65 0 0 1-.65-.64v-3.5a2.73 2.73 0 0 1 2.76-2.67l3.4-.01c.39 0 .65.31.65.64"
              fill="currentColor"
            />
            <path
              d="M20.24 4.5a1.01 1.01 0 0 0-1.61.81v.1c0 1.17-.84 2.25-2.01 2.37a2.25 2.25 0 0 1-2.49-2.24V4.5a1 1 0 0 0-1-1h-.92a1 1 0 0 0-1 1v.91c0 .88-.47 1.7-1.2 2.1l-.12.07-.02.01-.22.09-.06.02q-.18.06-.39.08h-.01q-.23.03-.46 0h-.01a2 2 0 0 1-.69-.2 2.2 2.2 0 0 1-1.32-2.04v-.23c0-.77-.82-1.23-1.47-.9l-.03.02H5.2l-.2.15-.32.28a4 4 0 0 0-.42.46l-.15.19-.13.19-.03.04-.27.47q-.1.18-.16.37l-.06.14-.05.13-.18.76-.04.34-.02.42v8.76A4.87 4.87 0 0 0 8.04 22h4.82a1 1 0 0 0 1-1v-3.14c0-2.3 1.91-4.17 4.26-4.17l3.05-.01a1 1 0 0 0 1-1V8.37c0-1.59-.76-2.98-1.93-3.87M11.8 15.91a.7.7 0 0 1-.7.51H7.46q-.07 0-.13-.02a.73.73 0 0 1-.62-.73c0-.42.33-.76.75-.76h3.64c.41 0 .75.34.75.76zm2.78-3.71a.7.7 0 0 1-.7.51H7.46q-.07 0-.13-.02a.73.73 0 0 1-.62-.73c0-.42.33-.76.75-.76h6.42c.42 0 .75.34.75.76z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconStickynote;
