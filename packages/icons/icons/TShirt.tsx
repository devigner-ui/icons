import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTShirt = forwardRef<SVGSVGElement, IconProps>(function IconTShirt(
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
            d="M5.78 10.3v7.97c0 1.32 0 1.98.45 2.54.44.56.98.66 2.05.86a21 21 0 0 0 7.44 0c1.07-.2 1.6-.3 2.05-.86s.45-1.22.45-2.54V10.3c0-.69 0-1.03.13-1.33.14-.3.38-.52.88-.97l.18-.17C20.47 6.88 21 6.41 21 5.72c0-.7-.46-1.13-1.4-2l-.42-.35c-.47-.38-1.14-.8-1.65-1.1a2 2 0 0 0-1.56-.2l-.5.13q-.59.16-.94.7a2.96 2.96 0 0 1-5.06 0q-.35-.54-.95-.7l-.49-.13a2 2 0 0 0-1.56.2A15 15 0 0 0 4.4 3.74C3.46 4.59 3 5.03 3 5.72s.53 1.16 1.59 2.11l.18.17c.5.45.74.67.88.97.13.3.13.64.13 1.33"
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
            d="M5.78 18.27V10.3c0-.69 0-1.03-.13-1.33-.14-.3-.38-.52-.88-.97l-.18-.17C3.53 6.88 3 6.41 3 5.72c0-.7.46-1.13 1.4-2q.21-.19.42-.35c.47-.38 1.14-.8 1.65-1.1a2 2 0 0 1 1.56-.2l.5.13q.59.16.94.7c.6.95 1.57 1.43 2.53 1.43V22c-1.47 0-2.72-.15-3.72-.33-1.07-.2-1.6-.3-2.05-.86s-.45-1.22-.45-2.54"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18.22 18.27V10.3c0-.69 0-1.03.13-1.33.14-.3.38-.52.88-.97l.18-.17C20.47 6.88 21 6.41 21 5.72c0-.7-.46-1.13-1.4-2l-.42-.35c-.47-.38-1.14-.8-1.65-1.1a2 2 0 0 0-1.56-.2l-.5.13q-.59.16-.94.7A3 3 0 0 1 12 4.33V22c1.47 0 2.72-.15 3.72-.33 1.07-.2 1.6-.3 2.05-.86s.45-1.22.45-2.54"
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
            d="M5.78 10.3v7.97c0 1.32 0 1.98.45 2.54.44.56.98.66 2.05.86a21 21 0 0 0 7.44 0c1.07-.2 1.6-.3 2.05-.86s.45-1.22.45-2.54V10.3c0-.69 0-1.03.13-1.33.14-.3.38-.52.88-.97l.18-.17C20.47 6.88 21 6.41 21 5.72c0-.7-.46-1.13-1.4-2l-.42-.35c-.47-.38-1.14-.8-1.65-1.1a2 2 0 0 0-1.56-.2l-.5.13q-.59.16-.94.7a2.96 2.96 0 0 1-5.06 0q-.35-.54-.95-.7l-.49-.13a2 2 0 0 0-1.56.2A15 15 0 0 0 4.4 3.74C3.46 4.59 3 5.03 3 5.72s.53 1.16 1.59 2.11l.18.17c.5.45.74.67.88.97.13.3.13.64.13 1.33"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconTShirt;
