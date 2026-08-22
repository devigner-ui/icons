import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconLibrary = forwardRef<SVGSVGElement, IconProps>(function IconLibrary(
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
            d="M2.9 13.8c-.42-3.17-.63-4.75.27-5.78C4.07 7 5.67 7 8.85 7h6.3c3.19 0 4.78 0 5.68 1.02.9 1.03.69 2.6.26 5.77l-.4 3c-.33 2.48-.5 3.72-1.34 4.47s-2.1.74-4.6.74h-5.5c-2.5 0-3.75 0-4.6-.74-.85-.75-1.01-1.99-1.34-4.47z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19.56 7c.23-1.3-.77-2.5-2.1-2.5H6.54A2.13 2.13 0 0 0 4.44 7M17.5 4.5l.04-.5a2 2 0 0 0-1.78-1.99l-.5-.01H8.74l-.5.01a2 2 0 0 0-1.78 2l.04.49"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M15 18H9"
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
            d="M9 7.54h6c3.03 0 4.55 0 5.4.99s.66 2.51.25 5.56l-.38 2.9c-.31 2.38-.47 3.58-1.28 4.3-.8.71-2 .71-4.38.71H9.4C7 22 5.8 22 5 21.28c-.81-.71-.97-1.9-1.28-4.3l-.38-2.9c-.4-3.04-.6-4.56.25-5.55s2.37-.99 5.4-.99M8.26 18c0-.41.34-.75.75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.6" : "1"}>
            <path
              d="M6.88 4.72a2.75 2.75 0 0 0-2.64 2.03q.54-.18 1.1-.26c.98-.13 2.2-.13 3.64-.13h6.2c1.43 0 2.66 0 3.63.13q.57.08 1.1.26a2.8 2.8 0 0 0-2.63-2.03z"
              fill="currentColor"
            />
          </g>
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M8.86 2h6.28q.3 0 .51.02c1 .1 1.81.77 2.16 1.67H6.19A2.6 2.6 0 0 1 8.86 2"
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
            d="M8.86 2h6.28q.3 0 .51.02c1 .1 1.81.77 2.16 1.67H6.19A2.6 2.6 0 0 1 8.86 2"
            fill="currentColor"
          />
          <path
            d="M6.88 4.72a2.75 2.75 0 0 0-2.64 2.03q.54-.17 1.1-.26c.98-.13 2.2-.13 3.64-.13h6.2a28 28 0 0 1 3.63.13q.57.08 1.1.26a2.8 2.8 0 0 0-2.63-2.03z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 7.54h6c3.03 0 4.55 0 5.4.99s.66 2.51.25 5.56l-.38 2.9c-.31 2.38-.47 3.58-1.28 4.3-.8.71-2 .71-4.38.71H9.4C7 22 5.8 22 5 21.28c-.81-.71-.97-1.9-1.28-4.3l-.38-2.9c-.4-3.04-.6-4.56.25-5.55s2.37-.99 5.4-.99M8.26 18c0-.41.34-.75.75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconLibrary;
