import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconFolderConnection = forwardRef<SVGSVGElement, IconProps>(
  function IconFolderConnection(
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
        {variant === "Broken" ? (
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
            d="M12 15.5v3"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M10 20.5c0-1.1.9-2 2-2a2 2 0 0 1 2 2 2 2 0 0 1-2 2"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M18 20.5h-4"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M10 20.5H6"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M5 5c0-2.8.7-3.5 3.5-3.5h1.05c1.05 0 1.28.31 1.68.84l1.05 1.4c.27.35.42.56 1.12.56h2.1c2.8 0 3.5.7 3.5 3.5V12c0 2.8-.7 3.5-3.5 3.5h-7C5.7 15.5 5 14.8 5 12V8.84"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
        </svg>
      ) : !fill ? (
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
              d="M12 15.5v3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 22.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18 20.5h-4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10 20.5H6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19 7.8V12c0 2.8-.7 3.5-3.5 3.5h-7C5.7 15.5 5 14.8 5 12V5c0-2.8.7-3.5 3.5-3.5h1.05c1.05 0 1.28.31 1.68.84l1.05 1.4c.27.35.42.56 1.12.56h2.1c2.8 0 3.5.7 3.5 3.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
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
              d="M18.75 20.5c0 .41-.34.75-.75.75h-4q-.07 0-.14-.03a2 2 0 0 1-3.72 0l-.14.03H6a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h4q.07 0 .14.03a2 2 0 0 1 1.14-1.14l-.03-.14v-3h1.5v3q0 .07-.03.14a2 2 0 0 1 1.14 1.14l.14-.03h4c.41 0 .75.34.75.75"
              fill="currentColor"
            />
            <path
              d="M19 7.8V12c0 2.8-.7 3.5-3.5 3.5h-7C5.7 15.5 5 14.8 5 12V5c0-2.8.7-3.5 3.5-3.5h1.05c1.05 0 1.28.31 1.68.84l1.05 1.4c.27.35.42.56 1.12.56h2.1c2.8 0 3.5.7 3.5 3.5"
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
              d="M12.75 15.5h2.75c2.8 0 3.5-.7 3.5-3.5V7.8c0-2.8-.7-3.5-3.5-3.5h-2.1c-.7 0-.85-.21-1.12-.56l-1.05-1.4c-.4-.53-.63-.84-1.68-.84H8.5C5.7 1.5 5 2.2 5 5v7c0 2.8.7 3.5 3.5 3.5h2.75v3q0 .07.03.14a2 2 0 0 0-1.14 1.14l-.14-.03H6a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h4q.07 0 .14-.03a2 2 0 0 0 3.72 0l.14.03h4c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75h-4q-.07 0-.14.03a2 2 0 0 0-1.14-1.14l.03-.14z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconFolderConnection;
