import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconJarOfPills2 = forwardRef<SVGSVGElement, IconProps>(
  function IconJarOfPills2(
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
              d="M4 3.5c0-.47 0-.7.08-.88a1 1 0 0 1 .54-.54C4.8 2 5.03 2 5.5 2h9c.47 0 .7 0 .88.08q.38.17.54.54c.08.18.08.41.08.88s0 .7-.08.88a1 1 0 0 1-.54.54c-.18.08-.41.08-.88.08h-9c-.47 0-.7 0-.88-.08a1 1 0 0 1-.54-.54C4 4.2 4 3.97 4 3.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2.5 18h8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2.5 10h15"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M10.5 22H6.96c-.57 0-.86 0-1.13-.04a4 4 0 0 1-2.15-1c-.2-.19-.39-.4-.75-.85A4 4 0 0 1 2 17.55v-6.63A4 4 0 0 1 3.5 7.8l2.4-1.92c.55-.44.82-.65 1.14-.77S7.71 5 8.4 5h3.24c.7 0 1.05 0 1.38.11s.6.34 1.14.78l2.36 1.91A4 4 0 0 1 18 10.9v1.6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M10 12v4m-2-2h4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M14.77 16.77s1 .21 2.12 1.34a5 5 0 0 1 1.34 2.12m1.03-4.5c.96.96.99 2.48.07 3.4l-2.2 2.2a2.4 2.4 0 0 1-3.4-.07 2.4 2.4 0 0 1-.06-3.38l2.2-2.21a2.4 2.4 0 0 1 3.4.07"
              stroke="currentColor"
              strokeWidth={strokeWidth}
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 11.25c.41 0 .75.34.75.75v1.25H14a.75.75 0 0 1 0 1.5h-1.25V16a.75.75 0 1 1-1.5 0v-1.25H10a.75.75 0 1 1 0-1.5h1.25V12c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m15.88 15.67-2.21 2.2a2.4 2.4 0 0 0 .07 3.4 2.4 2.4 0 0 0 3.38.06l2.21-2.2a2.4 2.4 0 0 0-.07-3.4 2.4 2.4 0 0 0-3.38-.06"
              fill="currentColor"
            />
            <path
              d="M9 5 5.5 7.8A4 4 0 0 0 4.1 10h15.8a4 4 0 0 0-1.38-2.2l-2.36-1.9-1.14-.9z"
              fill="currentColor"
            />
            <path
              d="M4.93 20.11a4 4 0 0 1-.9-2.11h7.77a4 4 0 0 0 .58 4H8.96c-.57 0-.86 0-1.13-.04a4 4 0 0 1-2.15-1c-.2-.19-.39-.4-.75-.85"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M4 17.55v-6.63a4 4 0 0 1 .1-.92h15.8q.1.45.1.9v3.48a3.9 3.9 0 0 0-5.18.23l-2.21 2.2q-.54.54-.8 1.19H4.02z"
              fill="currentColor"
            />
            <path
              d="m18.82 19.63-.17-.37a7 7 0 0 0-1.23-1.68 7 7 0 0 0-2.05-1.4l-1.23 1.23.47.1h.01l.09.02.37.16a5 5 0 0 1 1.28.95 5 5 0 0 1 1.13 1.74v.01l.1.47z"
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
              d="m16.37 16.18.5-.51a2.4 2.4 0 0 1 3.4.07c.95.95.98 2.47.06 3.38l-.5.51-.18-.37a7 7 0 0 0-1.23-1.68 7 7 0 0 0-2.05-1.4"
              fill="currentColor"
            />
            <path
              d="m15.14 17.4-.47.48a2.4 2.4 0 0 0 .07 3.38 2.4 2.4 0 0 0 3.38.07l.47-.47-.1-.47v-.01l-.02-.09-.16-.37a5 5 0 0 0-.95-1.28 5 5 0 0 0-1.74-1.13h-.01z"
              fill="currentColor"
            />
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
              d="M20 10.9v-.15H4v6.5h9.23q.17-.23.38-.43l2.2-2.21A3.8 3.8 0 0 1 20 13.8zm-7.25 2.35V12a.75.75 0 0 0-1.5 0v1.25H10a.75.75 0 0 0 0 1.5h1.25V16a.75.75 0 0 0 1.5 0v-1.25H14a.75.75 0 0 0 0-1.5z"
              fill="currentColor"
            />
            <path
              d="M12.57 18.75a4 4 0 0 0 .81 3.25H8.96c-.57 0-.86 0-1.13-.04a4 4 0 0 1-2.15-1c-.2-.19-.39-.4-.75-.85a4 4 0 0 1-.75-1.36z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconJarOfPills2;
