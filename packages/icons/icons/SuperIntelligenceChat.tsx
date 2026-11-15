import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSuperIntelligenceChat = forwardRef<SVGSVGElement, IconProps>(function IconSuperIntelligenceChat(
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
            d="M20.88 9.98C20.19 6.25 16.5 3.5 12 3.5c-5 0-9 3.4-9 7.75 0 2.2 1 4.2 2.7 5.6L5 20.5l4.1-1.9c.9.25 1.9.4 2.9.4 4.5 0 8.19-2.75 8.88-6.48"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.58 9.7c-.69-.9-3.06-.9-3.4.4-.28.9 3.4 1.1 3.4 2.4-.35 1.3-2.72 1.3-3.4.4m5.65-4.1v5"
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
            d="M12 3.5c-5 0-9 3.4-9 7.75 0 2.2 1 4.2 2.7 5.6L5 20.5l4.1-1.9c.9.25 1.9.4 2.9.4 5 0 9-3.4 9-7.75S17 3.5 12 3.5Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.58 9.7c-.69-.9-3.06-.9-3.4.4-.28.9 3.4 1.1 3.4 2.4-.35 1.3-2.72 1.3-3.4.4m5.65-4.1v5"
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
            d="M21.75 11.25a8.2 8.2 0 0 1-2.89 6.08A10.7 10.7 0 0 1 12 19.75a11 11 0 0 1-2.83-.36l-3.86 1.8a.75.75 0 0 1-1.05-.83l.62-3.23a8 8 0 0 1-2.63-5.88 8.2 8.2 0 0 1 2.89-6.08A10.7 10.7 0 0 1 12 2.75c2.63 0 5.14.95 6.86 2.42a8.2 8.2 0 0 1 2.89 6.08z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M11.98 10.15c-.33-.38-1.08-.39-1.53-.27q-.21.06-.4.19l.23.1.87.32c.92.34 1.94.77 2.15 1.8a1 1 0 0 1-.04.5c-.68 1.83-3.5 1.96-4.68.56a.75.75 0 0 1 1.2-.9c.34.4 1.12.4 1.58.25q.24-.06.4-.24c-.07-.05-.2-.16-.26-.19q-.36-.2-.77-.33c-.56-.22-1.16-.38-1.67-.71-.3-.2-.57-.48-.63-.85-.13-.79.53-1.5 1.19-1.8 1.14-.51 2.72-.31 3.55.67a.75.75 0 0 1-1.2.9zm2.84-2.1c.42 0 .75.34.75.75v5a.75.75 0 0 1-1.5 0v-5c0-.41.34-.75.75-.75z"
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
            d="M21.75 11.25a8.2 8.2 0 0 1-2.89 6.08A10.7 10.7 0 0 1 12 19.75a11 11 0 0 1-2.83-.36l-3.86 1.8a.75.75 0 0 1-1.05-.83l.62-3.23a8 8 0 0 1-2.63-5.88 8.2 8.2 0 0 1 2.89-6.08A10.7 10.7 0 0 1 12 2.75c2.63 0 5.14.95 6.86 2.42a8.2 8.2 0 0 1 2.89 6.08zm-8.72-.95c.33-.25.4-.72.14-1.05-.83-.98-2.4-1.18-3.55-.66-.66.3-1.32 1-1.2 1.79.07.37.34.65.64.85.5.33 1.11.5 1.67.7q.4.14.77.34l.27.2q-.17.17-.41.23c-.46.15-1.25.15-1.59-.25a.75.75 0 0 0-1.2.9c1.19 1.4 4.01 1.27 4.7-.55a.7.7 0 0 0 .02-.51c-.2-1.03-1.22-1.46-2.14-1.8q-.45-.14-.87-.33l-.23-.1q.18-.13.4-.18c.45-.12 1.2-.11 1.52.27.25.33.72.4 1.05.15zm1.05-1.5v5a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-1.5 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconSuperIntelligenceChat;
