import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconLogout2 = forwardRef<SVGSVGElement, IconProps>(function IconLogout2(
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
            d="M12 20a8 8 0 1 1 0-16"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M10 12h10m0 0-3-3m3 3-3 3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
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
            d="M12 20a8 8 0 1 1 0-16z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.47 8.47c-.3.3-.3.77 0 1.06l1.72 1.72H10a.75.75 0 0 0 0 1.5h8.19l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3c.3-.3.3-.77 0-1.06l-3-3a.75.75 0 0 0-1.06 0"
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
            fill="currentColor"
            fillRule="evenodd"
            d="M16.5 8.5c-.3.3-.3.8 0 1.1l1.7 1.7H10c-.4 0-.8.3-.8.8s.3.8.8.8h8.2l-1.7 1.7c-.3.3-.3.8 0 1.1s.8.3 1.1 0l3-3c.3-.3.3-.8 0-1.1l-3-3c-.3-.3-.8-.3-1.1 0z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M11.8 3.9v4.5c0 .9-.2 1.2-1.1 1.3s-1.4-.1-2.1.4c-1.4.9-1.4 2.9 0 3.8s1.3.4 2.1.4 1.1.4 1.2 1.3v4.5c-2.6 0-5.2-1.3-6.7-3.5s-1.9-6.7.2-9.5 3.9-3.2 6.4-3.2"
          />
        </svg>
      )}
    </>
  );
});

export default IconLogout2;
