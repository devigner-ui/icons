import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconZIPFile = forwardRef<SVGSVGElement, IconProps>(function IconZIPFile(
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
            d="M9.5 15.5v-.12c0-.49.4-.88.88-.88h3.24c.49 0 .88.4.88.88v.12a2.5 2.5 0 1 1-5 0"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.5 1.25h-.03q-.33 0-.62.03c-.22.02-.5.1-.73.34-.24.23-.32.51-.34.73q-.04.3-.03.62v.56q0 .33.03.62a1.2 1.2 0 0 0 1.07 1.08q.3.02.62.02h.78v1h-.78q-.33 0-.62.03c-.22.02-.5.1-.73.34-.24.23-.32.51-.34.73q-.04.3-.03.62v.56q0 .33.03.62a1.2 1.2 0 0 0 1.07 1.08q.3.02.62.02h.78v.78q0 .33.03.62a1.2 1.2 0 0 0 1.07 1.08q.3.02.62.02h.56q.32 0 .62-.02a1.2 1.2 0 0 0 1.07-1.08q.04-.3.03-.62v-.56q0-.32-.03-.62c-.02-.22-.1-.5-.34-.73a1.2 1.2 0 0 0-.73-.34q-.3-.04-.62-.03h-.78v-1h.78q.32 0 .62-.02a1.2 1.2 0 0 0 1.07-1.08q.04-.3.03-.62v-.56q0-.32-.03-.62c-.02-.22-.1-.5-.34-.73a1.2 1.2 0 0 0-.73-.34q-.3-.04-.62-.03h-.78v-.78q0-.32-.03-.62c-.02-.22-.1-.5-.34-.73a1.2 1.2 0 0 0-.73-.34q-.3-.04-.62-.03zM10.25 3v-.25h1v1h-1zm0 5v-.25h1v1h-1zm2.5-2.75v1h1v-1zm0 5.25v-.25h1v1h-1z"
            fill="currentColor"
          />
          <path
            d="M3 10c0-3.77 0-5.66 1.17-6.83S7.23 2 11 2h2c3.77 0 5.66 0 6.83 1.17S21 6.23 21 10v4c0 3.77 0 5.66-1.17 6.83S16.77 22 13 22h-2c-3.77 0-5.66 0-6.83-1.17S3 17.77 3 14z"
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
            d="M4.17 3.17C3 4.34 3 6.23 3 10v4c0 3.77 0 5.66 1.17 6.83S7.23 22 11 22h2c3.77 0 5.66 0 6.83-1.17S21 17.77 21 14v-4c0-3.77 0-5.66-1.17-6.83S16.77 2 13 2H9.5c-2.8.02-4.32.17-5.33 1.17"
            fill="currentColor"
          />
          <path
            d="M13.5 8H12v1c0 .47 0 .7.15.85s.38.15.85.15h.5c.47 0 .7 0 .85-.15s.15-.38.15-.85 0-.7-.15-.85S13.97 8 13.5 8"
            fill="currentColor"
          />
          <path
            d="M9.65 6.15c-.15.14-.15.38-.15.85s0 .7.15.85.38.15.85.15H12V6h-1.5c-.47 0-.7 0-.85.15"
            fill="currentColor"
          />
          <path
            d="M13.5 4H12v2h1.5c.47 0 .7 0 .85-.15s.15-.38.15-.85 0-.7-.15-.85S13.97 4 13.5 4"
            fill="currentColor"
          />
          <path
            d="M12 4V2H9.5v1c0 .47 0 .7.15.85s.38.15.85.15z"
            fill="currentColor"
          />
          <path
            d="M9.5 13v-.12c0-.49.4-.88.88-.88h3.24c.49 0 .88.4.88.88V13a2.5 2.5 0 1 1-5 0"
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
            d="M4.17 3.17C3 4.34 3 6.23 3 10v4c0 3.77 0 5.66 1.17 6.83S7.23 22 11 22h2c3.77 0 5.66 0 6.83-1.17S21 17.77 21 14v-4c0-3.77 0-5.66-1.17-6.83S16.77 2 13 2h-1v2h1.5c.47 0 .7 0 .85.15s.15.38.15.85 0 .7-.15.85-.38.15-.85.15H12v2h1.5c.47 0 .7 0 .85.15s.15.38.15.85 0 .7-.15.85-.38.15-.85.15H13c-.47 0-.7 0-.85-.15S12 9.47 12 9V8h-1.5c-.47 0-.7 0-.85-.15S9.5 7.47 9.5 7s0-.7.15-.85.38-.15.85-.15H12V4h-1.5c-.47 0-.7 0-.85-.15S9.5 3.47 9.5 3V2c-2.8.02-4.32.17-5.33 1.17m5.33 9.7V13a2.5 2.5 0 1 0 5 0v-.12c0-.49-.4-.88-.87-.88h-3.26c-.48 0-.87.4-.87.88"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconZIPFile;
