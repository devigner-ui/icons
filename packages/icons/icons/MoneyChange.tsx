import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMoneyChange = forwardRef<SVGSVGElement, IconProps>(
  function IconMoneyChange(
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
              d="M2.67 11V9c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v6c0 3.5-2 5-5 5h-5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12.67 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M19.17 9.5v5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.67 15.5h5.34c.64 0 1.16.52 1.16 1.16v1.28"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.89 14.28 2.67 15.5l1.22 1.22"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.17 20.78H3.83c-.64 0-1.16-.52-1.16-1.16v-1.28"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m7.95 22 1.22-1.22-1.22-1.22"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
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
              d="M22.67 9v6c0 3.5-2 5-5 5h-7.26q.26-.7.26-1.5a4.5 4.5 0 0 0-8-2.82V9c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5"
              fill="currentColor"
            />
            <path
              d="M12.67 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
              fill="currentColor"
            />
            <path
              d="M19.17 14.75a.76.76 0 0 1-.75-.75v-4c0-.41.34-.75.75-.75s.75.34.75.75v4c0 .41-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M6.17 14a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9m2.66 6.46-.12.18-.81.8a.5.5 0 0 1-.38.16.5.5 0 0 1-.39-.16.5.5 0 0 1-.09-.64H4.78c-.72 0-1.31-.59-1.31-1.32v-.11c0-.31.25-.55.55-.55s.55.24.55.55v.11q.01.2.21.22h2.26a.55.55 0 0 1 .09-.65.55.55 0 0 1 .77 0l.81.81q.08.08.12.18a.6.6 0 0 1 0 .42m.04-2.83c0 .31-.25.55-.55.55a.55.55 0 0 1-.55-.55v-.11a.2.2 0 0 0-.21-.22H5.3a.55.55 0 0 1-.48.81.6.6 0 0 1-.38-.16l-.81-.81-.12-.18a.6.6 0 0 1 0-.42l.12-.18.81-.8a.53.53 0 0 1 .77 0c.18.17.2.44.09.64h2.26c.72 0 1.31.59 1.31 1.32z"
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
              d="M17.67 4h-10c-3 0-5 1.5-5 5v3.56c0 .37.38.6.71.45a5.5 5.5 0 0 1 3.3-.41A5.56 5.56 0 0 1 11 19.41c-.08.31.17.6.5.6h6.18c3 0 5-1.5 5-5V9c0-3.5-2-5-5-5m-5 10.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m7.25-.5c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-4c0-.41.34-.75.75-.75s.75.34.75.75z"
              fill="currentColor"
            />
            <path
              d="M5.67 14a4 4 0 0 0-4 4 4 4 0 1 0 4-4m2.36 5.74a.4.4 0 0 1-.1.16l-.72.71a.4.4 0 0 1-.34.14.5.5 0 0 1-.35-.14.5.5 0 0 1-.08-.57h-2c-.65 0-1.17-.52-1.17-1.17v-.1c0-.28.22-.49.5-.49.26 0 .48.21.48.49v.1q.01.18.2.2h2a.5.5 0 0 1 .08-.58c.2-.19.5-.19.68 0l.72.72q.06.06.11.16.06.18 0 .37m.04-2.51c0 .28-.22.49-.49.49a.5.5 0 0 1-.49-.49v-.1q-.01-.18-.19-.2h-2a.48.48 0 0 1-.43.72.5.5 0 0 1-.34-.14l-.72-.72-.1-.16a.6.6 0 0 1 0-.37q.03-.09.1-.16l.72-.71c.2-.2.5-.2.68 0 .16.15.18.39.08.57h2c.64 0 1.16.52 1.16 1.17z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMoneyChange;
