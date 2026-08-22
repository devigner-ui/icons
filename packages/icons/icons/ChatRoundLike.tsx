import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconChatRoundLike = forwardRef<SVGSVGElement, IconProps>(
  function IconChatRoundLike(
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
              d="M12 22a10 10 0 1 0-8.96-5.55q.28.56.14 1.15l-.6 2.23a1.3 1.3 0 0 0 1.6 1.59l2.22-.6c.38-.1.8-.04 1.15.14A10 10 0 0 0 12 22"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m10.03 14.94-.49.57zM12 9.5l-.54.52a.75.75 0 0 0 1.08 0zm1.97 5.44-.48-.57zM12 16v-.75zm-1.49-1.62c-.58-.5-1.16-1.07-1.6-1.66a3 3 0 0 1-.66-1.6h-1.5c0 .91.43 1.77.95 2.48.53.73 1.21 1.39 1.84 1.92zm-2.26-3.26c0-1.1.5-1.7 1-1.88.52-.2 1.35-.1 2.21.8l1.08-1.05C11.38 7.8 9.95 7.37 8.73 7.83c-1.24.46-1.98 1.72-1.98 3.29zm6.2 4.4c.64-.53 1.32-1.2 1.85-1.92.52-.7.95-1.57.95-2.48h-1.5q0 .69-.67 1.6a9 9 0 0 1-1.6 1.66zm2.8-4.4c0-1.57-.74-2.83-1.98-3.29-1.22-.46-2.65-.03-3.8 1.16l1.07 1.04c.86-.88 1.69-.99 2.2-.8.52.2 1.01.78 1.01 1.89zm-7.7 4.4c.77.67 1.4 1.23 2.45 1.23v-1.5c-.41 0-.62-.13-1.49-.87zm3.94-1.14c-.87.74-1.08.87-1.49.87v1.5c1.06 0 1.68-.56 2.46-1.23z"
              fill="currentColor"
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
              d="M12 22a10 10 0 1 0-8.96-5.55q.28.56.14 1.15l-.6 2.23a1.3 1.3 0 0 0 1.6 1.59l2.22-.6c.38-.1.8-.04 1.15.14A10 10 0 0 0 12 22"
              fill="currentColor"
            />
            <path
              d="M7.5 11.1c0 1.38 1.32 2.81 2.53 3.84.82.7 1.23 1.05 1.97 1.05s1.15-.35 1.97-1.05c1.21-1.03 2.53-2.46 2.53-3.83 0-2.68-2.48-3.68-4.5-1.61-2.02-2.07-4.5-1.07-4.5 1.6"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22 12a10 10 0 0 1-14.45 8.96 1.6 1.6 0 0 0-1.15-.14l-2.23.6a1.3 1.3 0 0 1-1.59-1.6l.6-2.22c.1-.38.04-.8-.14-1.15A10 10 0 1 1 22 12m-14.5-.9c0 1.38 1.32 2.81 2.53 3.84.82.7 1.23 1.05 1.97 1.05s1.15-.35 1.97-1.05c1.21-1.03 2.53-2.46 2.53-3.83 0-2.68-2.48-3.68-4.5-1.61-2.02-2.07-4.5-1.07-4.5 1.6"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconChatRoundLike;
