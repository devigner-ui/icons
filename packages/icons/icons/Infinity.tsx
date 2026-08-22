import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconInfinity = forwardRef<SVGSVGElement, IconProps>(function IconInfinity(
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
            d="M10 8a5 5 0 1 0-3 9c2.76 0 3.5-2 5-5s2.24-5 5-5a5 5 0 1 1-3 9"
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
            d="M2.75 12a4.25 4.25 0 0 1 6.8-3.4.75.75 0 1 0 .9-1.2A5.75 5.75 0 1 0 7 17.75q1.16 0 2.06-.44.88-.44 1.5-1.2c.65-.81 1.19-1.9 1.77-3.08l.34-.7a.75.75 0 0 0-.34-1 .75.75 0 0 0-1 .34l-.37.74a15 15 0 0 1-1.57 2.74q-.45.55-.98.82c-.37.17-.81.28-1.41.28A4.25 4.25 0 0 1 2.75 12"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.67 12.33a.75.75 0 0 0-.34-1 .75.75 0 0 0-.97.28l.31-.64a16 16 0 0 1 1.78-3.07q.6-.76 1.49-1.21.9-.44 2.06-.44a5.75 5.75 0 1 1-3.45 10.35.75.75 0 0 1 .9-1.2A4.25 4.25 0 1 0 17 7.75c-.6 0-1.04.1-1.4.28q-.54.27-1 .82c-.53.66-.98 1.56-1.56 2.74z"
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
            d="M7 7.75a4.25 4.25 0 0 0 0 8.5c.6 0 1.04-.1 1.4-.28q.54-.27 1-.82c.53-.66.98-1.56 1.56-2.74l.37-.75.34-.69a16 16 0 0 1 1.78-3.07q.6-.76 1.49-1.21.9-.44 2.06-.44a5.75 5.75 0 1 1-3.45 10.35.75.75 0 0 1 .9-1.2A4.25 4.25 0 1 0 17 7.75c-.6 0-1.04.1-1.4.28q-.54.27-1 .82c-.53.66-.98 1.56-1.56 2.74l-.37.75-.34.69a16 16 0 0 1-1.78 3.07q-.6.76-1.49 1.21-.9.45-2.06.44A5.75 5.75 0 1 1 10.45 7.4a.75.75 0 1 1-.9 1.2A4.2 4.2 0 0 0 7 7.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconInfinity;
