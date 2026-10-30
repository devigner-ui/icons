import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconEditUnderline = forwardRef<SVGSVGElement, IconProps>(function IconEditUnderline(
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
      {variant === "Broken" ? (
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
            d="m17.37 10.17 1.34-1.42c1.42-1.5 2.06-3.21-.15-5.3s-3.88-1.35-5.3.15l-8.21 8.69c-.31.33-.61.98-.67 1.43L4 16.96c-.13 1.17.7 1.97 1.87 1.77l3.22-.55a3 3 0 0 0 1.39-.75l3.95-4.18"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M11.9 5.05a6.1 6.1 0 0 0 5.44 5.15"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M3 22h11"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M18 22h3"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
        </svg>
      ) : !fill ? (
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
            d="m13.26 3.6-8.21 8.69c-.31.33-.61.98-.67 1.43l-.37 3.24c-.13 1.17.71 1.97 1.87 1.77l3.22-.55a3 3 0 0 0 1.39-.75l8.21-8.69c1.42-1.5 2.06-3.21-.15-5.3-2.2-2.07-3.87-1.34-5.29.16"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M11.89 5.05a6.1 6.1 0 0 0 5.45 5.15"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M3 22h18"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
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
            d="M21 22H3a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19.02 3.48c-1.94-1.94-3.84-1.99-5.83 0l-1.21 1.21c-.1.1-.14.26-.1.4a8.1 8.1 0 0 0 5.65 5.55.4.4 0 0 0 .29-.12l1.2-1.21q1.48-1.46 1.47-2.89.02-1.47-1.47-2.94"
            fill="currentColor"
          />
          <path
            d="M15.61 11.53a11 11 0 0 1-1.48-.86 6 6 0 0 1-.73-.58q-.51-.43-1.03-1.04l-.15-.18c-.1-.12-.27-.32-.42-.55a13 13 0 0 1-.83-1.41q-.2-.45-.35-.86l-6.28 6.28a1 1 0 0 0-.28.55l-.54 3.83c-.1.68.09 1.32.51 1.75a2 2 0 0 0 1.76.51l3.84-.54c.18-.03.43-.15.55-.28l6.28-6.28q-.41-.15-.85-.34"
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
            d="M21 22H3a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M19.02 3.48c-1.94-1.94-3.84-1.99-5.83 0l-1.21 1.21c-.1.1-.14.26-.1.4a8.1 8.1 0 0 0 5.65 5.55.4.4 0 0 0 .29-.12l1.2-1.21q1.48-1.46 1.47-2.89.02-1.47-1.47-2.94"
            fill="currentColor"
          />
          <path
            d="M15.61 11.53a11 11 0 0 1-1.48-.86 6 6 0 0 1-.73-.58q-.51-.43-1.03-1.04l-.15-.18c-.1-.12-.27-.32-.42-.55a13 13 0 0 1-.9-1.55.5.5 0 0 0-.83-.17l-5.74 5.73a1 1 0 0 0-.28.55l-.54 3.83c-.1.68.09 1.32.51 1.75a2 2 0 0 0 1.76.51l3.84-.54c.18-.03.43-.15.55-.28l5.72-5.72c.26-.26.16-.7-.17-.85z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconEditUnderline;
