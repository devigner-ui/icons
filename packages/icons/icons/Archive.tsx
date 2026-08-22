import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconArchive = forwardRef<SVGSVGElement, IconProps>(function IconArchive(
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
            d="M9 12c0-.47 0-.7.08-.88a1 1 0 0 1 .54-.54c.18-.08.41-.08.88-.08h3c.47 0 .7 0 .88.08q.38.17.54.54c.08.18.08.41.08.88s0 .7-.08.88a1 1 0 0 1-.54.54c-.18.08-.41.08-.88.08h-3c-.47 0-.7 0-.88-.08a1 1 0 0 1-.54-.54C9 12.7 9 12.47 9 12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20.5 7v6c0 3.77 0 5.66-1.17 6.83S16.27 21 12.5 21h-1c-3.77 0-5.66 0-6.83-1.17S3.5 16.77 3.5 13V7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M2 5c0-.94 0-1.41.3-1.7C2.58 3 3.05 3 4 3h16c.94 0 1.41 0 1.7.3.3.29.3.76.3 1.7s0 1.41-.3 1.7c-.29.3-.76.3-1.7.3H4c-.94 0-1.41 0-1.7-.3C2 6.42 2 5.95 2 5"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.5 21h1c3.77 0 5.66 0 6.83-1.17S20.5 16.77 20.5 13V7h-17v6c0 3.77 0 5.66 1.17 6.83S7.73 21 11.5 21m-2.42-9.88C9 11.3 9 11.53 9 12s0 .7.08.88q.17.38.54.54c.18.08.41.08.88.08h3c.47 0 .7 0 .88-.08a1 1 0 0 0 .54-.54c.08-.18.08-.41.08-.88s0-.7-.08-.88a1 1 0 0 0-.54-.54c-.18-.08-.41-.08-.88-.08h-3c-.47 0-.7 0-.88.08a1 1 0 0 0-.54.54"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M2 5c0-.94 0-1.41.3-1.7C2.58 3 3.05 3 4 3h16c.94 0 1.41 0 1.7.3.3.29.3.76.3 1.7s0 1.41-.3 1.7c-.29.3-.76.3-1.7.3H4c-.94 0-1.41 0-1.7-.3C2 6.42 2 5.95 2 5"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.5 21h1c3.77 0 5.66 0 6.83-1.17S20.5 16.77 20.5 13V8h-17v5c0 3.77 0 5.66 1.17 6.83S7.73 21 11.5 21m-2.42-9.88C9 11.3 9 11.53 9 12s0 .7.08.88q.17.38.54.54c.18.08.41.08.88.08h3c.47 0 .7 0 .88-.08a1 1 0 0 0 .54-.54c.08-.18.08-.41.08-.88s0-.7-.08-.88a1 1 0 0 0-.54-.54c-.18-.08-.41-.08-.88-.08h-3c-.47 0-.7 0-.88.08a1 1 0 0 0-.54.54"
            fill="currentColor"
          />
          <path
            d="M2 5c0-.94 0-1.41.3-1.7C2.58 3 3.05 3 4 3h16c.94 0 1.41 0 1.7.3.3.29.3.76.3 1.7s0 1.41-.3 1.7c-.29.3-.76.3-1.7.3H4c-.94 0-1.41 0-1.7-.3C2 6.42 2 5.95 2 5"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconArchive;
