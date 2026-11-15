import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSuperIntelligenceShield = forwardRef<SVGSVGElement, IconProps>(function IconSuperIntelligenceShield(
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
            d="M19.5 7.23V5C17 4.8 14.6 4 12 2.5 9.4 4 7 4.8 4.5 5v6c0 5 3.3 8.6 7.5 10.5 4.2-1.9 7.5-5.5 7.5-10.5V9.63"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.55 10.36c-.65-.86-2.94-.86-3.26.39-.26.86 3.26 1.05 3.26 2.3-.32 1.25-2.6 1.25-3.26.39M14.7 9.5v4.8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
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
            opacity={duotone ? "0.4" : "1"}
            d="M12 2.5C9.4 4 7 4.8 4.5 5v6c0 5 3.3 8.6 7.5 10.5 4.2-1.9 7.5-5.5 7.5-10.5V5C17 4.8 14.6 4 12 2.5Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.55 10.36c-.65-.86-2.94-.86-3.26.39-.26.86 3.26 1.05 3.26 2.3-.32 1.25-2.6 1.25-3.26.39M14.7 9.5v4.8"
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
            d="M20.25 5v6a11.5 11.5 0 0 1-2.33 6.87 15 15 0 0 1-5.61 4.31.8.8 0 0 1-.62 0 15 15 0 0 1-5.61-4.31A11.5 11.5 0 0 1 3.75 11V5c0-.4.3-.72.69-.75 2.41-.18 4.65-.93 7.19-2.4a.8.8 0 0 1 .74 0 16.4 16.4 0 0 0 7.19 2.4c.39.03.69.36.69.75z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M11.95 10.82c-.3-.36-1-.36-1.42-.26q-.16.04-.31.13.21.12.44.2c1.02.39 2.36.76 2.61 1.94a1 1 0 0 1-.03.52c-.67 1.77-3.4 1.9-4.55.54a.75.75 0 0 1 1.2-.9c.31.36 1.04.36 1.46.24q.22-.05.38-.2c-.08-.06-.2-.16-.26-.19a6 6 0 0 0-.78-.33c-.69-.26-1.83-.51-2.1-1.3-.27-.82.4-1.61 1.11-1.94 1.11-.5 2.64-.3 3.45.64a.75.75 0 0 1-1.2.9zm2.76-2.07c.42 0 .75.34.75.75v4.8a.75.75 0 0 1-1.5 0V9.5c0-.41.34-.75.75-.75z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
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
            d="M20.25 5v6a11.5 11.5 0 0 1-2.33 6.87 15 15 0 0 1-5.61 4.31.8.8 0 0 1-.62 0 15 15 0 0 1-5.61-4.31A11.5 11.5 0 0 1 3.75 11V5c0-.4.3-.72.69-.75 2.41-.18 4.65-.93 7.19-2.4a.8.8 0 0 1 .74 0 16.4 16.4 0 0 0 7.19 2.4c.39.03.69.36.69.75zM13 10.96c.33-.25.4-.72.15-1.05-.81-.95-2.34-1.15-3.45-.64-.7.32-1.39 1.11-1.1 1.94.26.79 1.4 1.04 2.09 1.3q.4.14.78.33l.26.18q-.17.15-.38.2c-.42.13-1.15.13-1.46-.24a.75.75 0 0 0-1.2.9c1.15 1.36 3.88 1.24 4.55-.53a.7.7 0 0 0 .03-.52c-.25-1.19-1.59-1.55-2.62-1.94q-.23-.09-.44-.2.15-.09.32-.13c.42-.1 1.11-.1 1.42.25.25.33.72.4 1.05.15zm.96-1.46v4.8a.75.75 0 0 0 1.5 0V9.5a.75.75 0 0 0-1.5 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconSuperIntelligenceShield;
