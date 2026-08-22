import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconNotificationBing = forwardRef<SVGSVGElement, IconProps>(
  function IconNotificationBing(
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
              d="M12.67 6.44v3.33"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M12.69 2a6.66 6.66 0 0 0-6.66 6.66v2.1c0 .68-.28 1.7-.63 2.28l-1.27 2.12c-.78 1.31-.24 2.77 1.2 3.25a23.3 23.3 0 0 0 14.73 0 2.22 2.22 0 0 0 1.2-3.25l-1.27-2.12a5 5 0 0 1-.63-2.28v-2.1A6.7 6.7 0 0 0 12.69 2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16 18.82c0 1.83-1.5 3.33-3.33 3.33a3.34 3.34 0 0 1-3.33-3.33"
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
              d="M21.07 16.33a2.6 2.6 0 0 1-1.64 1.58 22 22 0 0 1-3.64.87l-.54.07-.68.07a24 24 0 0 1-3.79-.01q-.4-.03-.79-.09l-.44-.06-.33-.05a21 21 0 0 1-3.28-.81 2.7 2.7 0 0 1-1.68-1.57 2.7 2.7 0 0 1 .26-2.28l1.13-1.88c.24-.41.46-1.2.46-1.68V8.63a6.59 6.59 0 0 1 13.15 0v1.86c0 .48.22 1.27.47 1.68l1.13 1.88c.41.7.49 1.52.21 2.28"
              fill="currentColor"
            />
            <path
              d="M12.67 10.76a.76.76 0 0 1-.76-.76V6.9a.76.76 0 1 1 1.52 0V10a.77.77 0 0 1-.76.76"
              fill="currentColor"
            />
            <path
              d="M15.5 20.01A3 3 0 0 1 12.67 22a3 3 0 0 1-2.82-2l.4.05a15 15 0 0 0 2.44.16q.86 0 1.7-.08.32-.02.62-.06z"
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
              d="m20.86 14.06-1.13-1.88a4 4 0 0 1-.47-1.68V8.63a6.58 6.58 0 0 0-13.15 0v1.86a4 4 0 0 1-.46 1.68l-1.13 1.88a2.7 2.7 0 0 0-.26 2.28c.27.73.88 1.31 1.68 1.57q1.62.53 3.28.81l.33.05.44.06q.39.06.79.09a20 20 0 0 0 4.47-.07l.54-.07.33-.05q1.69-.27 3.31-.82a2.6 2.6 0 0 0 1.43-3.84M13.42 10a.76.76 0 1 1-1.52 0V6.9a.76.76 0 1 1 1.52 0z"
              fill="currentColor"
            />
            <path
              d="M15.5 20.01A3 3 0 0 1 12.67 22a3 3 0 0 1-2.82-2l.4.05a15 15 0 0 0 2.44.16q.86 0 1.7-.08.32-.02.62-.06z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconNotificationBing;
