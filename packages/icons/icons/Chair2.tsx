import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconChair2 = forwardRef<SVGSVGElement, IconProps>(function IconChair2(
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
            d="M6 15.5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1 2 2 0 0 1-2 2H8a2 2 0 0 1-2-2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M6.63 6.77c.24-2.02.36-3.02.94-3.7a3 3 0 0 1 .64-.57C8.96 2 9.97 2 12 2s3.04 0 3.79.5a3 3 0 0 1 .64.56c.58.69.7 1.7.94 3.7l.1.76c.24 2.1.37 3.13-.23 3.8-.6.68-1.65.68-3.75.68h-2.98c-2.1 0-3.16 0-3.75-.67-.6-.68-.47-1.72-.22-3.8z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 12v2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 22v-2m0 0v-2.5m0 2.5.47.12c.95.24 1.72.95 2.03 1.88M12 20l-.47.12c-.95.24-1.72.95-2.03 1.88M6 16l-.87-2.6a4 4 0 0 0-.33-.77c-.46-.75-1.07-1.13-2.8-1.13M18 16l.87-2.6c.07-.21.1-.32.18-.48l.15-.3c.46-.74 1.07-1.12 2.8-1.12"
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
            d="M5.25 15.5c0-.97.78-1.75 1.75-1.75h10c.97 0 1.75.78 1.75 1.75A2.75 2.75 0 0 1 16 18.25H8a2.75 2.75 0 0 1-2.75-2.75"
            fill="currentColor"
          />
          <path
            d="M6.63 6.77c.24-2.02.36-3.02.94-3.7a3 3 0 0 1 .64-.57C8.96 2 9.97 2 12 2s3.04 0 3.79.5a3 3 0 0 1 .64.56c.58.69.7 1.7.94 3.7l.1.76c.24 2.1.37 3.13-.23 3.8-.6.68-1.65.68-3.75.68h-2.98c-2.1 0-3.16 0-3.75-.67-.6-.68-.47-1.72-.22-3.8z"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M2 10.75a.75.75 0 0 0 0 1.5c.83 0 1.29.1 1.57.22.25.1.41.26.58.55a2 2 0 0 1 .27.62l.87 2.6q.05.15.14.25-.17-.46-.18-.99c0-.65.35-1.2.87-1.51l-.28-.84a5 5 0 0 0-.4-.91 2.7 2.7 0 0 0-1.26-1.14A5 5 0 0 0 2 10.75"
              fill="currentColor"
            />
            <path d="M12.75 13.75h-1.5V12h1.5z" fill="currentColor" />
            <path
              d="M18.57 16.5q.17-.47.18-1c0-.65-.35-1.2-.87-1.51l.28-.84.2-.54.2-.37a2.7 2.7 0 0 1 1.26-1.14 5 5 0 0 1 2.18-.35.75.75 0 0 1 0 1.5c-.83 0-1.29.1-1.57.22-.25.1-.41.26-.59.55a2 2 0 0 0-.26.62l-.87 2.6a1 1 0 0 1-.14.25"
              fill="currentColor"
            />
            <path
              d="M11.25 18.25h1.5v1.17a3.6 3.6 0 0 1 2.46 2.34.75.75 0 0 1-1.42.48 2 2 0 0 0-1.04-1.22V22a.75.75 0 0 1-1.5 0v-.98c-.49.25-.86.69-1.04 1.22a.75.75 0 0 1-1.42-.48 3.6 3.6 0 0 1 2.46-2.34z"
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
            d="M7.57 3.06c-.58.69-.7 1.7-.94 3.7l-.1.76c-.24 2.1-.37 3.13.23 3.8.6.68 1.65.68 3.75.68h.74v1.75H7q-.49 0-.88.24l-.28-.84a5 5 0 0 0-.4-.91 2.7 2.7 0 0 0-1.26-1.14A5 5 0 0 0 2 10.75a.75.75 0 0 0 0 1.5c.83 0 1.29.1 1.57.22.25.1.41.26.58.55a2 2 0 0 1 .27.62l.87 2.6q.05.15.14.25A2.75 2.75 0 0 0 8 18.25h3.25v1.17a3.6 3.6 0 0 0-2.46 2.34.75.75 0 1 0 1.42.48c.18-.53.55-.97 1.04-1.22V22a.75.75 0 0 0 1.5 0v-.98c.49.25.86.69 1.04 1.22a.75.75 0 1 0 1.42-.48 3.6 3.6 0 0 0-2.46-2.34v-1.17H16c1.17 0 2.17-.73 2.57-1.76a1 1 0 0 0 .14-.25l.87-2.6a3 3 0 0 1 .27-.62c.17-.29.33-.44.58-.55.28-.13.74-.22 1.57-.22a.75.75 0 0 0 0-1.5q-1.34-.01-2.18.35c-.6.26-.97.67-1.26 1.14-.07.1-.1.18-.2.37l-.2.54-.28.84a2 2 0 0 0-.88-.24h-4.25V12h.74c2.1 0 3.16 0 3.75-.67.6-.68.47-1.72.22-3.8l-.09-.76c-.24-2.02-.36-3.02-.94-3.7a3 3 0 0 0-.64-.57C15.04 2 14.03 2 12 2s-3.04 0-3.79.5a3 3 0 0 0-.64.56"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconChair2;
