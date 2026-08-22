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
              opacity={duotone ? "0.4" : "1"}
              d="M12.67 16v3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.67 23a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18.67 21h-4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10.67 21h-4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.67 8.3v4.2c0 2.8-.7 3.5-3.5 3.5h-7c-2.8 0-3.5-.7-3.5-3.5v-7c0-2.8.7-3.5 3.5-3.5h1.05c1.05 0 1.28.31 1.68.84l1.05 1.4c.27.35.42.56 1.12.56h2.1c2.8 0 3.5.7 3.5 3.5"
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
              d="M19.42 21c0 .41-.34.75-.75.75h-4q-.07 0-.14-.03a2 2 0 0 1-3.72 0l-.14.03h-4a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h4q.07 0 .14.03a2 2 0 0 1 1.14-1.14l-.03-.14v-3h1.5v3q0 .07-.03.14a2 2 0 0 1 1.14 1.14l.14-.03h4c.41 0 .75.34.75.75"
              fill="currentColor"
            />
            <path
              d="M19.67 8.3v4.2c0 2.8-.7 3.5-3.5 3.5h-7c-2.8 0-3.5-.7-3.5-3.5v-7c0-2.8.7-3.5 3.5-3.5h1.05c1.05 0 1.28.31 1.68.84l1.05 1.4c.27.35.42.56 1.12.56h2.1c2.8 0 3.5.7 3.5 3.5"
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
              d="M13.42 16h2.75c2.8 0 3.5-.7 3.5-3.5V8.3c0-2.8-.7-3.5-3.5-3.5h-2.1c-.7 0-.85-.21-1.12-.56l-1.05-1.4c-.4-.53-.63-.84-1.68-.84H9.17c-2.8 0-3.5.7-3.5 3.5v7c0 2.8.7 3.5 3.5 3.5h2.75v3q0 .07.03.14a2 2 0 0 0-1.14 1.14l-.14-.03h-4a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h4q.07 0 .14-.03a2 2 0 0 0 3.72 0l.14.03h4c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75h-4q-.07 0-.14.03a2 2 0 0 0-1.14-1.14l.03-.14z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconFolderConnection;
