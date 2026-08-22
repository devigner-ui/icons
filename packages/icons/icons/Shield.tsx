import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconShield = forwardRef<SVGSVGElement, IconProps>(function IconShield(
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
            d="M3 10.42c0-3.2 0-4.8.38-5.34.38-.53 1.88-1.05 4.88-2.08l.58-.2C10.4 2.28 11.19 2 12 2s1.6.27 3.16.8l.58.2c3 1.03 4.5 1.55 4.88 2.08.38.54.38 2.14.38 5.34v1.57c0 5.64-4.24 8.38-6.9 9.54-.72.31-1.08.47-2.1.47s-1.38-.16-2.1-.47C7.24 20.37 3 17.63 3 11.99z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="m3 11 9-3 9 3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M12 2v19.5"
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
            d="M3 12c0 5.63 4.24 8.37 6.9 9.53.72.31 1.08.47 2.1.47V8l-9 3z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14.1 21.53c2.66-1.16 6.9-3.9 6.9-9.54V11l-9-3v14c1.02 0 1.38-.16 2.1-.47"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m8.84 2.8-.58.2c-3 1.03-4.5 1.55-4.88 2.08C3 5.62 3 7.22 3 10.42V11l9-3V2c-.81 0-1.6.27-3.16.8"
            fill="currentColor"
          />
          <path
            d="m15.74 3-.58-.2C13.6 2.28 12.81 2 12 2v6l9 3v-.58c0-3.2 0-4.8-.38-5.34-.37-.53-1.88-1.05-4.88-2.08"
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
            d="M11.25 2.07c-.6.12-1.32.36-2.41.74l-.58.2c-3 1.02-4.5 1.54-4.88 2.07S3 7.15 3 10.21l8.25-2.75z"
            fill="currentColor"
          />
          <path
            d="M11.25 9.04 3 11.8v.2c0 5.64 4.24 8.38 6.9 9.54.5.22.84.37 1.35.43z"
            fill="currentColor"
          />
          <path
            d="M12.75 21.96V9.04L21 11.8v.2c0 5.64-4.24 8.38-6.9 9.54-.5.22-.84.37-1.35.43"
            fill="currentColor"
          />
          <path
            d="M12.75 7.46V2.07c.6.12 1.32.36 2.41.74l.58.2c3 1.02 4.5 1.54 4.88 2.07s.38 2.07.38 5.13z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconShield;
