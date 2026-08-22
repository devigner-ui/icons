import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconWalking = forwardRef<SVGSVGElement, IconProps>(function IconWalking(
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
          <circle
            opacity={duotone ? "0.4" : "1"}
            cx="11.5"
            cy="4.50049"
            r="2.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="m10.34 11.59.75.07zm1.49 6.31-.64.4zm1.94 4.5a.75.75 0 1 0 1.27-.8zM6.3 13.13l.74.17zm-1.03 1.2a.75.75 0 1 0 1.46.33zm12-1.09-.24-.7zm.97.47a.75.75 0 0 0-.48-1.42zm-5.66-3.7-.05.74zm1.84 1.67-.73.18zm-.08-.3-.71.23zm-6.99-.94.47.59zm7.18 1.64.7-.25zm2.35 1.29-.18-.73zM9.75 9.93 9.6 11.5l1.49.15.16-1.58zm1.44 8.37 2.58 4.1 1.27-.8-2.58-4.1zm-.69-9.05h-.3v1.5h.3zm-4.93 3.72-.3 1.37 1.46.32.3-1.36zm4.93-2.22h1.77v-1.5H10.5zm7 3.2.74-.24-.48-1.42-.73.24zm-5.23-3.2h.26l.1-1.5h-.36zm2.88.75-.1-.36-1.42.47.06.25zm-2.62-.75c.5.04.94.38 1.1.86l1.42-.47a2.8 2.8 0 0 0-2.41-1.88zm-2.32-1.5q-1.12-.02-1.9.06c-.52.07-1 .2-1.43.55l.94 1.17c.13-.1.3-.18.68-.23.4-.05.92-.05 1.7-.05zM7.04 13.3c.17-.77.28-1.28.42-1.66.12-.36.24-.51.36-.61l-.94-1.17c-.42.34-.66.78-.84 1.28-.17.48-.3 1.1-.47 1.83zm6.65-1.44.13.46 1.42-.49-.1-.33zm3.34.67c-.22.08-.28.1-.33.1l.35 1.47.46-.14zm-3.21-.2a2.75 2.75 0 0 0 3.23 1.77l-.35-1.46c-.62.14-1.25-.2-1.46-.81zM9.6 11.5c-.17 1.64-.28 2.64-.05 3.6l1.46-.35c-.16-.66-.1-1.36.08-3.1zm2.86 6c-.93-1.49-1.3-2.08-1.45-2.75l-1.46.35c.22.96.76 1.8 1.64 3.2z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9 17.5 6 22"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.53 10.75h-1.36l-.08.91c-.18 1.74-.24 2.44-.08 3.1s.52 1.26 1.45 2.75l2.58 4.1a.75.75 0 0 1-1.27.79l-2.58-4.1-.07-.11c-.84-1.33-1.35-2.15-1.57-3.08s-.12-1.9.03-3.46l.01-.14.08-.76q-.73 0-1.17.05c-.38.05-.55.13-.68.23-.12.1-.24.25-.36.6-.14.39-.25.9-.42 1.67l-.3 1.36a.75.75 0 0 1-1.47-.32l.31-1.41q.23-1.08.46-1.8c.18-.5.42-.93.84-1.27a3 3 0 0 1 1.44-.55q.75-.08 1.84-.06h2.48c1.1.09 2.06.83 2.41 1.9l.1.32v.03l.09.33c.2.6.84.95 1.46.8.05 0 .11-.02.33-.1l.73-.24a.75.75 0 0 1 .48 1.42l-.73.25h-.04l-.42.14a2.75 2.75 0 0 1-3.23-1.78l-.12-.43v-.03l-.07-.25c-.16-.48-.6-.82-1.1-.86"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M14 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
              fill="currentColor"
            />
          </g>
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M9.42 16.88c.34.23.43.7.2 1.04l-3 4.5a.75.75 0 0 1-1.24-.84l3-4.5a.75.75 0 0 1 1.04-.2"
              fill="currentColor"
            />
          </g>
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
            d="M14 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.53 10.75h-1.36l-.08.91c-.18 1.74-.24 2.44-.08 3.1s.52 1.26 1.45 2.75l2.58 4.1a.75.75 0 0 1-1.27.79l-2.58-4.1-.07-.11c-.84-1.33-1.35-2.15-1.57-3.08s-.12-1.9.03-3.46l.01-.14.08-.76q-.73 0-1.17.05c-.38.05-.55.13-.68.23-.12.1-.24.25-.36.6-.14.39-.25.9-.42 1.67l-.3 1.36a.75.75 0 0 1-1.47-.32l.31-1.41q.23-1.08.46-1.8c.18-.5.42-.93.84-1.27a3 3 0 0 1 1.44-.55q.75-.08 1.84-.06h2.48c1.1.09 2.06.83 2.41 1.9l.1.32v.03l.09.33c.2.6.84.95 1.46.8.05 0 .11-.02.33-.1l.73-.24a.75.75 0 0 1 .48 1.42l-.73.25h-.04l-.42.14a2.75 2.75 0 0 1-3.23-1.78l-.12-.43v-.03l-.07-.25c-.16-.48-.6-.82-1.1-.86m-3.11 6.13c.34.23.43.7.2 1.04l-3 4.5a.75.75 0 1 1-1.24-.84l3-4.5a.75.75 0 0 1 1.04-.2"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconWalking;
