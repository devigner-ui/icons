import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBookmarkSquare = forwardRef<SVGSVGElement, IconProps>(
  function IconBookmarkSquare(
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
              d="M2 12c0-4.7 0-7.07 1.46-8.53C4.93 2 7.3 2 12 2s7.07 0 8.54 1.47C22 4.93 22 7.29 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M17 2v9.8c0 .98 0 1.47-.13 1.76a1.5 1.5 0 0 1-1.72.85c-.31-.07-.7-.37-1.47-.97-.44-.33-.66-.5-.88-.6a2 2 0 0 0-1.6 0c-.22.1-.44.27-.88.6-.77.6-1.16.9-1.47.97a1.5 1.5 0 0 1-1.72-.85C7 13.27 7 12.78 7 11.81V2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M17 18H7"
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
              d="M3.46 20.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46C22 19.07 22 16.7 22 12s0-7.07-1.46-8.54C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46C2 4.93 2 7.3 2 12s0 7.07 1.46 8.54"
              fill="currentColor"
            />
            <path
              d="M7 17.25a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5z"
              fill="currentColor"
            />
            <path
              d="m7.76 9.9-.01-1.1V2.08Q9.47 1.98 12 2q2.54-.02 4.25.07V8.8l-.01 1.09c-.02.26-.05.34-.05.36a.75.75 0 0 1-.87.42c-.01 0-.1-.03-.31-.18q-.3-.2-.87-.65l-.07-.05a5 5 0 0 0-.97-.65c-.7-.3-1.5-.3-2.2 0-.31.14-.6.36-.97.65l-.07.05-.87.65c-.22.15-.3.18-.31.18a.75.75 0 0 1-.87-.42c0-.02-.03-.1-.05-.36"
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
              d="M3.46 3.46C2 4.93 2 7.3 2 12s0 7.07 1.46 8.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46C22 19.07 22 16.7 22 12s0-7.07-1.46-8.54a4.8 4.8 0 0 0-2.79-1.24v9.61q0 .7-.02 1.15 0 .46-.17.89a2.25 2.25 0 0 1-2.6 1.27 3 3 0 0 1-.8-.4q-.37-.25-.92-.69l-.02-.01c-.47-.36-.6-.46-.72-.51a1.3 1.3 0 0 0-1 0c-.12.05-.25.15-.72.5l-.02.02-.92.7c-.25.16-.52.32-.8.39a2.25 2.25 0 0 1-2.6-1.27 3 3 0 0 1-.17-.89q-.02-.45-.02-1.15v-9.6c-1.22.19-2.1.55-2.79 1.23M7 17.25a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5z"
              fill="currentColor"
            />
            <path
              d="M7.75 2.07v9.74l.01 1.09c.02.26.05.34.05.36.15.33.51.5.87.42.01 0 .1-.03.31-.18q.3-.2.87-.65l.07-.05c.37-.29.66-.51.97-.65.7-.3 1.5-.3 2.2 0 .31.14.6.36.97.65l.07.05.87.65c.22.15.3.18.31.18.36.09.72-.1.87-.42 0-.02.03-.1.05-.36l.01-1.1V2.08Q14.53 1.98 12 2q-2.54-.02-4.25.07"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBookmarkSquare;
