import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconScooter = forwardRef<SVGSVGElement, IconProps>(function IconScooter(
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
          <rect
            x="16"
            y="13.0005"
            width="6"
            height="6"
            rx="3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M11 16v-1.5c0-1.89 0-2.83-.59-3.41-.58-.59-1.52-.59-3.41-.59h-.6l-.71.01A4 4 0 0 0 2 14.2v.88a1 1 0 0 0 1.1.92zm0 0h5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.5 16a3 3 0 0 1-6 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M12 5h.53c1.2 0 1.8 0 2.29.3.48.3.75.84 1.29 1.91l2.89 5.8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m18.14 11 .68-.5c.27-.2.4-.3.49-.42a1 1 0 0 0 .14-.28c.05-.15.05-.31.05-.64 0-.62 0-.92-.13-1.16a1 1 0 0 0-.37-.37c-.23-.13-.54-.13-1.16-.13H16.5"
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
            d="M6.5 19a3 3 0 0 0 3-3h-6a3 3 0 0 0 3 3"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18.82 10.5 18 11l-1.64-3.5h1.48c.62 0 .93 0 1.16.13a1 1 0 0 1 .37.37c.13.24.13.54.13 1.16 0 .33 0 .5-.05.64a1 1 0 0 1-.14.28c-.1.13-.22.22-.49.42"
            fill="currentColor"
          />
          <path
            d="M13.86 5.78q-.43-.04-1.33-.03H12a.75.75 0 0 1 0-1.5h.56q.86-.01 1.46.04c.42.05.82.14 1.19.37q.53.35.86.9.31.51.69 1.28l3.15 6.3a3 3 0 1 1-3.82 3.61H2.86a1.75 1.75 0 0 1-1.61-1.83v-.06l.01-.73a4.75 4.75 0 0 1 4.98-4.38h.81q1.35-.02 2.24.08c.63.08 1.2.27 1.65.73.46.45.65 1.02.73 1.65q.1.9.08 2.24v.8h4.34a3 3 0 0 1 2.12-2.15l-2.78-5.55a15 15 0 0 0-.62-1.18 1 1 0 0 0-.39-.43 1 1 0 0 0-.56-.16"
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
            d="M13.86 5.78q-.43-.04-1.33-.03H12a.75.75 0 0 1 0-1.5h.56q.86-.01 1.46.04c.42.05.82.14 1.19.37q.53.35.86.9.29.48.64 1.19h1.16q.43 0 .76.02.36.02.74.21.41.24.65.65.2.38.21.74.02.34.02.76v.1q.02.4-.08.8-.09.26-.25.5-.27.32-.6.53l-.05.04-.28.2.49.98a3.75 3.75 0 1 1-4.16 4.47h-5.14a3.75 3.75 0 0 1-7.36 0 1.75 1.75 0 0 1-1.57-1.83v-.06l.01-.73a4.75 4.75 0 0 1 5.1-4.38h.69q1.35-.02 2.24.08c.63.08 1.2.27 1.65.73.46.45.65 1.02.73 1.65.08.6.08 1.34.08 2.24v.8h3.57a3.8 3.8 0 0 1 2.55-2.83l-2.44-4.87a15 15 0 0 0-.62-1.18 1 1 0 0 0-.39-.43 1 1 0 0 0-.56-.16"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconScooter;
