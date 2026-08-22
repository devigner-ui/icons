import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconJarOfPills = forwardRef<SVGSVGElement, IconProps>(
  function IconJarOfPills(
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
              d="M6 3.5c0-.47 0-.7.08-.88a1 1 0 0 1 .54-.54C6.8 2 7.03 2 7.5 2h9c.47 0 .7 0 .88.08q.38.17.54.54c.08.18.08.41.08.88s0 .7-.08.88a1 1 0 0 1-.54.54c-.18.08-.41.08-.88.08h-9c-.47 0-.7 0-.88-.08a1 1 0 0 1-.54-.54C6 4.2 6 3.97 6 3.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M4.5 18h15"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M4.5 10h15"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m5.5 7.8 2.4-1.92c.55-.44.82-.65 1.14-.77S9.71 5 10.4 5h3.24c.7 0 1.05 0 1.38.11s.6.34 1.14.78l2.36 1.91A4 4 0 0 1 20 10.9v6.67a4 4 0 0 1-.91 2.54l-.36.43A4 4 0 0 1 15.64 22H8.96c-.57 0-.86 0-1.13-.04a4 4 0 0 1-2.15-1c-.2-.19-.39-.4-.75-.85A4 4 0 0 1 4 17.55v-6.63A4 4 0 0 1 5.5 7.8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M12 12v4m-2-2h4"
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
              opacity={duotone ? "0.4" : "1"}
              d="M6 3.5c0-.47 0-.7.08-.88a1 1 0 0 1 .54-.54C6.8 2 7.03 2 7.5 2h9c.47 0 .7 0 .88.08q.38.17.54.54c.08.18.08.41.08.88s0 .7-.08.88a1 1 0 0 1-.54.54c-.18.08-.41.08-.88.08h-9c-.47 0-.7 0-.88-.08a1 1 0 0 1-.54-.54C6 4.2 6 3.97 6 3.5"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M4 10.92v6.63q0 .23.03.45h15.95l.02-.43V10.9a4 4 0 0 0-.1-.91H4.1a4 4 0 0 0-.1.92"
              fill="currentColor"
            />
            <path
              d="M5.5 7.8 9 5h6.02l1.14.9 2.36 1.9A4 4 0 0 1 19.9 10H4.1a4 4 0 0 1 1.4-2.2"
              fill="currentColor"
            />
            <path
              d="M4.03 18a4 4 0 0 0 .9 2.11c.36.44.55.66.75.85a4 4 0 0 0 2.15 1c.27.04.56.04 1.13.04h6.68a4 4 0 0 0 3.09-1.46l.36-.43a4 4 0 0 0 .89-2.11z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 11.25c.41 0 .75.34.75.75v1.25H14a.75.75 0 0 1 0 1.5h-1.25V16a.75.75 0 1 1-1.5 0v-1.25H10a.75.75 0 1 1 0-1.5h1.25V12c0-.41.34-.75.75-.75"
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
              d="M6.08 2.62C6 2.8 6 3.03 6 3.5s0 .7.08.88q.17.38.54.54c.18.08.41.08.88.08h9c.47 0 .7 0 .88-.08a1 1 0 0 0 .54-.54c.08-.18.08-.41.08-.88s0-.7-.08-.88a1 1 0 0 0-.54-.54C17.2 2 16.97 2 16.5 2h-9c-.47 0-.7 0-.88.08a1 1 0 0 0-.54.54"
              fill="currentColor"
            />
            <path
              d="M7.75 6 5.5 7.8a4 4 0 0 0-1.13 1.45h15.27a4 4 0 0 0-1.12-1.45L16.29 6z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20 10.9v-.15H4v6.5h16zm-7.25 2.35V12a.75.75 0 0 0-1.5 0v1.25H10a.75.75 0 0 0 0 1.5h1.25V16a.75.75 0 0 0 1.5 0v-1.25H14a.75.75 0 0 0 0-1.5z"
              fill="currentColor"
            />
            <path
              d="M4.93 20.11a4 4 0 0 1-.75-1.36h15.64a4 4 0 0 1-.73 1.36l-.36.43A4 4 0 0 1 15.64 22H8.96c-.57 0-.86 0-1.13-.04a4 4 0 0 1-2.15-1c-.2-.19-.39-.4-.75-.85"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconJarOfPills;
